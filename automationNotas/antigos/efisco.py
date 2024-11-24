import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import os
import time
import pandas as pd
from openpyxl import load_workbook

# Configure logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    handlers=[logging.FileHandler("automation.log"),
                              logging.StreamHandler()])

logger = logging.getLogger(__name__)

class SefazAutomation:
    def __init__(self, callback, download_folder, ui):
        self.callback = callback
        self.download_folder = os.path.normpath(download_folder)  # Normalize the download directory path
        self.failures = []
        self.errorNull = []
        self.ui = ui
        try:
            chrome_options = Options()
            chrome_options.add_experimental_option("detach", True)
            chrome_options.add_argument("--no-sandbox")
            chrome_options.add_argument("--disable-dev-shm-usage")
            chrome_options.add_argument("--disable-gpu")
            # chrome_options.add_argument("--headless")
            # chrome_options.add_argument("--window-size=1920x1080")
            
            chrome_prefs = {
                "download.default_directory": self.download_folder,
                "download.prompt_for_download": False,
                "download.directory_upgrade": True,
                "safebrowsing.enabled": True
            }
            chrome_options.add_experimental_option("prefs", chrome_prefs)

            # Utiliza o WebDriverManager para instalar a versão mais recente do ChromeDriver
            service = ChromeService(ChromeDriverManager().install())
            self.driver = webdriver.Chrome(service=service, options=chrome_options)
            self.wait = WebDriverWait(self.driver, 10)  # Set an explicit wait of 10 seconds
            logger.info("WebDriver initialization successful.")
        except Exception as e:
            logger.error(f"Error initializing WebDriver: {e}")
            raise

    def access_site(self, url):
        try:
            self.driver.get(url)
            self.driver.maximize_window()
            logger.info(f"Acessou o site: {url}")
            self.callback('start_click')
        except Exception as e:
            logger.error(f"Erro ao acessar o site {url}: {e}")
            raise

    def login_with_certificate(self):
        try:
            self.wait.until(EC.element_to_be_clickable((By.NAME, 'btt_certificado'))).click()
            logger.info("Clicou no botão de certificado digital.")
            self.ui.minimize()  # Minimize the UI after clicking the certificate button
        except Exception as e:
            logger.error(f"Erro no login com certificado digital: {e}")
            raise

    def wait_for_user_span(self):
        try:
            self.wait.until(EC.presence_of_element_located((By.XPATH, "//span[contains(@id, 'a_usuario_span_texto')]")))
            logger.info("Login com certificado digital realizado com sucesso.")
        except Exception as e:
            logger.error(f"Erro ao esperar o span de usuário: {e}")
            raise

    def process_state_inclusion(self, period, state_inclusion):
        try:
            # Create a subdirectory for the current state_inclusion
            download_path = os.path.join(self.download_folder, str(state_inclusion))
            os.makedirs(download_path, exist_ok=True)
            
            # Update Chrome preferences to use the new download directory
            self.driver.execute_cdp_cmd('Page.setDownloadBehavior', {
                'behavior': 'allow',
                'downloadPath': download_path
            })
            
            self.step_1(period, state_inclusion)
        except Exception as e:
            logger.error(f"Erro ao processar inscrição estadual {state_inclusion}: {e}")

    def step_1(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "primeiro_campo")))
        self.driver.find_element(By.ID, "primeiro_campo").clear()
        self.driver.find_element(By.ID, "primeiro_campo").send_keys(period)
        logger.info(f"Preencheu o campo 'primeiro_campo' com '{period}'")
        time.sleep(1)
        self.step_1_2(period, state_inclusion)

    def step_1_2(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "nuDocumentoIdentificacao")))
        self.driver.find_element(By.ID, "nuDocumentoIdentificacao").clear()
        self.driver.find_element(By.ID, "nuDocumentoIdentificacao").send_keys(state_inclusion)
        logger.info(f"Preencheu o campo 'nuDocumentoIdentificacao' com '{state_inclusion}'")
        time.sleep(1)
        self.step_1_3(period, state_inclusion)

    def step_1_3(self, period, state_inclusion):
        try:
            self.wait.until(EC.element_to_be_clickable((By.ID, "bttemitirRelatorioNaoCalculadas"))).click()
            logger.info("Clicou no botão 'bttemitirRelatorioNaoCalculadas'")
            time.sleep(3)  # Tempo para download

            # Verifica se o alerta de data inválida está presente
            try:
                alert = self.driver.switch_to.alert
                if "Data inválida!" in alert.text:
                    alert.accept()
                    logger.info("Data inválida, confira o valor e tente novamente!")
                    self.callback('Data inválida, confira o valor e tente novamente!')
                    self.driver.quit()
                    return
            except:
                pass

            if self.is_element_present(By.ID, "bttemitirRelatorioNaoCalculadas"):
                raise Exception("Falha ao processar relatório não calculadas")
            self.step_1_4(period, state_inclusion)
        except Exception as e:
            logger.info(f"Falha ao processar {state_inclusion}: {e}")
            self.errorNull.append(state_inclusion)

    def step_1_4(self, period, state_inclusion):
        try:
            self.wait.until(EC.element_to_be_clickable((By.NAME, "btt_pmu_acao_4")), 2).click()
            logger.info("Clicou no botão 'btt_pmu_acao_4' novamente")
            time.sleep(1)
            self.step_1_5(period, state_inclusion)
        except:
            self.wait.until(EC.element_to_be_clickable((By.ID, "btt_prosseguir"))).click()
            logger.info("Nenhum registro encontrado para Não Calculadas referente aos parâmetros informados!")
            logger.info("Clicou no botão 'btt_prosseguir' para continuar")
            time.sleep(1)
            self.failures.append(state_inclusion)
            self.step_1_6(period, state_inclusion)

    def step_1_5(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "btt_prosseguir"))).click()
        logger.info("Clicou no botão 'btt_prosseguir'")
        time.sleep(1)
        self.step_1_6(period, state_inclusion)

    def step_1_6(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "primeiro_campo")))
        self.driver.find_element(By.ID, "primeiro_campo").clear()
        self.driver.find_element(By.ID, "primeiro_campo").send_keys(period)
        logger.info(f"Preencheu o campo 'primeiro_campo' com '{period}'")
        time.sleep(1)
        self.step_1_7(period, state_inclusion)

    def step_1_7(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "nuDocumentoIdentificacao")))
        self.driver.find_element(By.ID, "nuDocumentoIdentificacao").clear()
        self.driver.find_element(By.ID, "nuDocumentoIdentificacao").send_keys(state_inclusion)
        logger.info(f"Preencheu o campo 'nuDocumentoIdentificacao' com '{state_inclusion}'")
        time.sleep(1)
        self.step_1_8(period, state_inclusion)

    def step_1_8(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "bttemitirRelatorioCalculadas"))).click()
        logger.info("Clicou no botão 'bttemitirRelatorioCalculadas'")
        time.sleep(3)  # Tempo para download
        self.step_1_9(period, state_inclusion)

    def step_1_9(self, period, state_inclusion):
        try:
            self.wait.until(EC.element_to_be_clickable((By.NAME, "btt_pmu_acao_4")), 2).click()
            logger.info("Clicou no botão 'btt_pmu_acao_4' novamente")
            time.sleep(1)
            self.step_1_10(period, state_inclusion)
        except:
            self.wait.until(EC.element_to_be_clickable((By.ID, "btt_prosseguir"))).click()
            logger.info("Nenhum registro encontrado para Calculadas referente aos parâmetros informados!")
            logger.info("Clicou no botão 'btt_prosseguir' para continuar")
            time.sleep(1)
            self.step_1_9_2(period, state_inclusion)

    def step_1_9_2(self, period, state_inclusion):
        if state_inclusion in self.failures:
            return
        self.step_1_10(period, state_inclusion)

    def step_1_10(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "btt_prosseguir"))).click()
        logger.info("Clicou no botão 'btt_prosseguir'")
        time.sleep(1)
        self.step_1_11(period, state_inclusion)

    def step_1_11(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "primeiro_campo")))
        self.driver.find_element(By.ID, "primeiro_campo").clear()
        self.driver.find_element(By.ID, "primeiro_campo").send_keys(period)
        logger.info(f"Preencheu o campo 'primeiro_campo' com '{period}'")
        time.sleep(1)
        self.step_1_12(period, state_inclusion)

    def step_1_12(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "nuDocumentoIdentificacao")))
        self.driver.find_element(By.ID, "nuDocumentoIdentificacao").clear()
        self.driver.find_element(By.ID, "nuDocumentoIdentificacao").send_keys(state_inclusion)
        logger.info(f"Preencheu o campo 'nuDocumentoIdentificacao' com '{state_inclusion}'")
        time.sleep(1)
        self.step_1_13(period, state_inclusion)

    def step_1_13(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "bttemitirRelatorioDebitos"))).click()
        logger.info("Clicou no botão 'bttemitirRelatorioDebitos'")
        time.sleep(3)  # Tempo para download
        self.step_1_14(period, state_inclusion)

    def step_1_14(self, period, state_inclusion):
        try:
            self.wait.until(EC.element_to_be_clickable((By.ID, "bttemitirExtrato")), 5).click()
            logger.info("Clicou no botão 'bttemitirExtrato'")
            time.sleep(3)  # Tempo para download
            self.wait.until(EC.element_to_be_clickable((By.ID, "bttemitirExtrato"))).click()
            logger.info("Clicou no botão 'bttemitirExtrato' novamente")
            time.sleep(3)  # Tempo para download
            self.step_1_15(period, state_inclusion)
        except:
            self.wait.until(EC.element_to_be_clickable((By.ID, "btt_prosseguir"))).click()
            logger.info("Nenhum registro encontrado para Débitos referente aos parâmetros informados!")
            logger.info("Clicou no botão 'btt_prosseguir' para continuar")
            time.sleep(1)
            self.failures.append(state_inclusion)
            self.step_1_16(period, state_inclusion)

    def step_1_15(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.NAME, "btt_pmu_acao_4"))).click()
        logger.info("Clicou no botão 'btt_pmu_acao_4' novamente")
        time.sleep(1)
        self.step_1_16(period, state_inclusion)

    def step_1_16(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "btt_prosseguir"))).click()
        logger.info("Clicou no botão 'btt_prosseguir'")
        time.sleep(1)
        self.step_1_17(period, state_inclusion)

    def step_1_17(self, period, state_inclusion):
        self.wait.until(EC.element_to_be_clickable((By.ID, "btt_desistir"))).click()
        logger.info("Clicou no botão 'btt_desistir'")
        time.sleep(1)

    def is_element_present(self, how, what):
        try:
            self.driver.find_element(by=how, value=what)
        except:
            return False
        return True

    def download_notes(self, state_inclusions, period):
        try:
            try:
                self.wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "Extrato Contribuinte - CONTESTAÇÃO"))).click()
                logger.info("Clicou no link 'Extrato Contribuinte - CONTESTAÇÃO'")
            except:
                # Se o link não estiver disponível, realizar a busca
                self.wait.until(EC.element_to_be_clickable((By.ID, "input_busca_geral"))).click()
                time.sleep(1)
                self.wait.until(EC.presence_of_element_located((By.ID, "input_busca_geral_interno"))).send_keys("Extrato Contribuinte - CONTESTAÇÃO")
                time.sleep(1)
                self.wait.until(EC.element_to_be_clickable((By.ID, "botao_busca"))).click()
                time.sleep(1)
                self.wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "Extrato Contribuinte - CONTESTAÇÃO"))).click()
                time.sleep(1)
                logger.info("Clicou no link 'Extrato Contribuinte - CONTESTAÇÃO' após a busca")
                time.sleep(1)

            time.sleep(1)

            for state_inclusion in state_inclusions:
                self.process_state_inclusion(period, state_inclusion)

            self.wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "span > .fa-user"))).click()
            logger.info("Clicou no ícone de usuário")
            time.sleep(1)

            self.wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#link_encerrar_sessao > span"))).click()
            logger.info("Clicou no link para encerrar sessão")
            time.sleep(1)

            alert = self.driver.switch_to.alert
            assert alert.text == "Ao encerrar a sessão solicitaremos o fechamento\n" \
                                 "do browser para evitar o uso indevido do certificado digital.\n\n" \
                                 "Confirma o encerramento da sessão?"
            alert.accept()
            logger.info("Aceitou o alerta de confirmação")

            # Save the failures to Excel files
            failures_df = pd.DataFrame(self.failures, columns=["Insc. com Downloads Parciais"])
            failures_path = os.path.join(self.download_folder, "failures.xlsx")
            failures_df.to_excel(failures_path, index=False)

            error_null_df = pd.DataFrame(self.errorNull, columns=["Insc. Estaduais Inesistentes"])
            error_null_path = os.path.join(self.download_folder, "error_null.xlsx")
            error_null_df.to_excel(error_null_path, index=False)

            # Adjust the column width
            self.adjust_column_width(failures_path, "A", 50)
            self.adjust_column_width(error_null_path, "A", 50)

            logger.info("Arquivos Excel gerados com sucesso.")

            # Print the failures array after processing all state_inclusions
            print("Array de falhas, Downloads Parciais:", self.failures)
            print("Array de falhas, Inscrições Estaduais Não Existentes:", self.errorNull)
        except Exception as e:
            logger.error(f"Erro ao baixar as notas: {e}")
            raise

    def adjust_column_width(self, file_path, column_letter, width):
        workbook = load_workbook(file_path)
        sheet = workbook.active
        sheet.column_dimensions[column_letter].width = width
        workbook.save(file_path)

    def run_automation(self, state_inclusions, period):
        try:
            self.access_site("https://efisco.sefaz.pe.gov.br/sfi_com_sca/PRMontarMenuAcesso")
            self.login_with_certificate()
            self.wait_for_user_span()
            self.download_notes(state_inclusions, period)
            logger.info("Automação executada com sucesso.")
        except Exception as e:
            logger.error(f"Erro na execução da automação: {e}")
            raise

if __name__ == "__main__":
    def dummy_callback(message=None):
        if message == 'stop_click':
            print("Execução finalizada")

    automation = SefazAutomation(dummy_callback, "C:\\Users\\Prestador\\Downloads\\DownloadTest2")
    automation.run_automation(None, None)
