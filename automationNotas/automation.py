import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import os
from pathlib import Path
import time
from chave import chave_api

# Configuração de logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    handlers=[logging.FileHandler("automation.log"), logging.StreamHandler()])

logger = logging.getLogger(__name__)


class AntCaptchaAutomation:
    def __init__(self, callback):
        self.callback = callback
        try:
            # Configuração do Chrome e opções
            chrome_options = Options()
            chrome_options.add_experimental_option("detach", True)
            chrome_options.add_argument("--no-sandbox")
            chrome_options.add_argument("--disable-dev-shm-usage")
            chrome_options.add_argument("--disable-gpu")

            # Verifica se o arquivo compactado já existe
            if not os.path.exists('./api.zip'):
                logger.info("API compactada não encontrada. Compactando a API...")
                self.configure_antcaptcha_plugin()
            else:
                logger.info("API compactada encontrada. Usando a API existente.")

            # Adiciona a API ao Chrome
            chrome_options.add_extension('./api.zip')

            # Inicialização do WebDriver
            self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
            self.wait = WebDriverWait(self.driver, 20)
            logger.info("Inicialização do WebDriver concluída com sucesso.")
        except Exception as e:
            logger.error(f"Erro na inicialização do WebDriver: {e}")
            raise

    def configure_antcaptcha_plugin(self):
        """Configura a API AntCaptcha com a chave da API e a compacta."""
        try:
            api_key = chave_api
            config_path = Path('./api/js/config_ac_api_key.js')
            config_path.write_text(
                config_path.read_text().replace("antiCapthaPredefinedApiKey = ''", f"antiCapthaPredefinedApiKey = '{api_key}'")
            )

            # Compactar a extensão
            import zipfile
            with zipfile.ZipFile('./api.zip', 'w', zipfile.ZIP_DEFLATED) as api_zip:
                for root, dirs, files in os.walk('./api'):
                    for file in files:
                        file_path = os.path.join(root, file)
                        api_zip.write(file_path, arcname=os.path.relpath(file_path, './api'))
            logger.info("Configuração e compactação da API AntCaptcha concluídas.")
        except Exception as e:
            logger.error(f"Erro ao configurar e compactar a API AntCaptcha: {e}")
            raise

    def access_site(self, url):
        """Acessa o site inicial."""
        try:
            self.driver.get(url)
            self.driver.maximize_window()
            logger.info(f"Acessou o site: {url}")
        except Exception as e:
            logger.error(f"Erro ao acessar o site {url}: {e}")
            raise

    def login_with_certificate(self):
        """Realiza o login utilizando certificado digital."""
        try:
            # Clique no botão de certificado
            self.wait.until(EC.element_to_be_clickable((By.NAME, 'btt_certificado'))).click()
            logger.info("Clicou no botão de certificado digital.")
            self.callback('start_click')  # Inicia os cliques no `click.py`
        except Exception as e:
            logger.error(f"Erro ao realizar login com certificado digital: {e}")
            raise

    def click_button_and_resolve_captcha(self):
        """Clica no botão e resolve o CAPTCHA."""
        try:
            # Clique no botão pela classe especificada
            self.wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'notas fiscais')]"))).click()
            logger.info("Clicou no botão para navegar até a página do CAPTCHA.")

            # Aguardar até que o CAPTCHA seja resolvido pela API
            WebDriverWait(self.driver, 120).until(
                lambda d: d.execute_script("return document.getElementById('g-recaptcha-response') && document.getElementById('g-recaptcha-response').value !== '';")
            )
            logger.info("CAPTCHA resolvido com sucesso.")
        except Exception as e:
            logger.error(f"Erro ao clicar no botão ou resolver o CAPTCHA: {e}")
            raise

    def run(self):
        """Executa o fluxo completo da automação."""
        try:
            # Etapa 1: Login no site inicial
            logger.info("Iniciando processo de login...")
            self.access_site("https://efisco.sefaz.pe.gov.br/sfi_com_sca/PRMontarMenuAcesso")
            self.login_with_certificate()

            # Etapa 2: Clicar no botão e resolver CAPTCHA
            logger.info("Clicando no botão e resolvendo CAPTCHA...")
            self.click_button_and_resolve_captcha()

            # Conclusão
            logger.info("Automação concluída com sucesso.")
        finally:
            self.close_browser()

    def close_browser(self):
        """Fecha o navegador."""
        try:
            self.driver.quit()
            logger.info("Navegador fechado com sucesso.")
        except Exception as e:
            logger.error(f"Erro ao fechar o navegador: {e}")
            raise
