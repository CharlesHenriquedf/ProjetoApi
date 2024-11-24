#ultima modificação 13/11 16:49 ultima do dia

from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from chave import chave_api

# Caminho do plugin ZIP já configurado
plugin_zip_path = './plugin.zip'

# Configurar o ChromeOptions para adicionar a extensão ao navegador
options = webdriver.ChromeOptions()
options.add_extension(plugin_zip_path)  # Usa o plugin no formato ZIP

# Iniciar o navegador com o serviço do ChromeDriver e as opções configuradas
navegador = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Acessar o link da página que contém o reCAPTCHA
link = "http://nfe.sefaz.pe.gov.br/nfe-web/entradaConsNfe?tp=C&_nmJanelaAuxiliar=janelaAuxiliar"
navegador.get(link)

# Aguardar até que a extensão resolva o CAPTCHA automaticamente
try:
    WebDriverWait(navegador, 120).until(
        lambda d: d.execute_script("return document.getElementById('g-recaptcha-response') && document.getElementById('g-recaptcha-response').value !== '';")
    )
    print("CAPTCHA resolvido com sucesso.")
    
    # Envia o formulário ou interage com o botão após o CAPTCHA ser resolvido
    navegador.find_element(By.ID, 'recaptcha-demo-submit').click()
except Exception as e:
    print("Erro ao resolver CAPTCHA:", e)

# Aguarda processamento adicional, se necessário
WebDriverWait(navegador, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')

# Fechar o navegador após o processamento
time.sleep(2000)
navegador.quit()



#ultima modificação excluir cpompactação

from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import urllib.request
import zipfile
import os
import time
from pathlib import Path
from chave import chave_api

# Caminho do plugin
plugin_zip_path = './plugin.zip'
plugin_folder_path = './plugin'

# 3. Configurar a chave da API no arquivo de configuração da extensão
api_key = chave_api
config_path = Path('./plugin/js/config_ac_api_key.js')
config_path.write_text(config_path.read_text().replace("antiCapthaPredefinedApiKey = ''", f"antiCapthaPredefinedApiKey = '{api_key}'"))

# 4. Recompactar a pasta `plugin` para `plugin.zip`, caso seja necessário
with zipfile.ZipFile(plugin_zip_path, 'w', zipfile.ZIP_DEFLATED) as plugin_zip:
    for root, dirs, files in os.walk(plugin_folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            plugin_zip.write(file_path, arcname=os.path.relpath(file_path, plugin_folder_path))

# 5. Configurar o ChromeOptions para adicionar a extensão ao navegador
options = webdriver.ChromeOptions()
options.add_extension(plugin_zip_path)

# 6. Iniciar o navegador com o serviço do ChromeDriver e as opções configuradas
navegador = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# 7. Acessar o link da página que contém o reCAPTCHA
link = "http://nfe.sefaz.pe.gov.br/nfe-web/entradaConsNfe?tp=C&_nmJanelaAuxiliar=janelaAuxiliar"
navegador.get(link)

# 8. Aguardar até que a extensão resolva o CAPTCHA automaticamente
try:
    WebDriverWait(navegador, 120).until(
        lambda d: d.execute_script("return document.getElementById('g-recaptcha-response') && document.getElementById('g-recaptcha-response').value !== '';")
    )
    print("CAPTCHA resolvido com sucesso.")
    
    # Envia o formulário ou interage com o botão após o CAPTCHA ser resolvido
    navegador.find_element(By.ID, 'recaptcha-demo-submit').click()
except Exception as e:
    print("Erro ao resolver CAPTCHA:", e)

# 9. Aguarda processamento adicional, se necessário
WebDriverWait(navegador, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')

# Fechar o navegador após o processamento
time.sleep(2000)
navegador.quit()





from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
options = webdriver.ChromeOptions()
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from anticaptchaofficial.recaptchav2proxyless import *
import time
import urllib.request
import zipfile
from pathlib import Path
from chave import chave_api


# Baixe o plugin
url = 'https://antcpt.com/anticaptcha-plugin.zip'
filehandle, _ = urllib.request.urlretrieve(url)
with zipfile.ZipFile(filehandle, "r") as f:
    f.extractall("plugin")

# Configurar chave API
api_key = chave_api
file = Path('./plugin/js/config_ac_api_key.js')
file.write_text(file.read_text().replace("antiCapthaPredefinedApiKey = ''", f"antiCapthaPredefinedApiKey = '{api_key}'"))


options.add_extension('./plugin.zip')
browser = webdriver.Chrome('./chromedriver', options=options)

navegador = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
#link = "https://google.com/recaptcha/api2/demo"
link = "http://nfe.sefaz.pe.gov.br/nfe-web/entradaConsNfe?tp=C&_nmJanelaAuxiliar=janelaAuxiliar"
navegador.get(link)





time.sleep(10000)
# Localiza o iframe pelo atributo 'title'
iframe = navegador.find_element(By.CSS_SELECTOR, 'iframe[title="reCAPTCHA"]')

# Muda para o contexto do iframe
navegador.switch_to.frame(iframe)


# Interage com o checkbox dentro do iframe usando a classe
try:
    checkbox = navegador.find_element(By.CLASS_NAME, 'rc-anchor-content')
    checkbox.click()
    print('Checkbox clicado com sucesso.')
    time.sleep(1)
except Exception as e:
    print('Erro ao clicar no checkbox:', e)

# Volta para o contexto principal
navegador.switch_to.default_content()
time.sleep(10000)

chave_captcha = navegador.find_element(By.CLASS_NAME, 'g-recaptcha').get_attribute('data-sitekey')
#variavel = navegador.find_element(By.CLASS_NAME, 'classe_variavel').get_attribute('inf')


solver = recaptchaV2Proxyless()
solver.set_verbose(1)
solver.set_key(chave_api)
solver.set_website_url(link)
solver.set_website_key(chave_captcha)

resposta = solver.solve_and_return_solution()

if resposta != 0:
    print(resposta)

    # preencher o campo do token do captcha
    # g-recaptcha-response
    navegador.execute_script(f"document.getElementById('g-recaptcha-response').innerHTML = '{resposta}'")
    time.sleep(3)
    #iframe = navegador.find_element(By.CSS_SELECTOR, 'iframe[title="reCAPTCHA"]')

    # Muda para o contexto do iframe
    #navegador.switch_to.frame(iframe)

    #navegador.find_element(By.ID, 'recaptcha-verify-button').click()
    navegador.execute_script("document.getElementById('recaptcha-verify-button').click();")


    #navegador.execute_script("document.getElementsByClassName('recaptcha-checkbox-border')[0].click();")
    #navegador.find_element(By.CLASS_NAME, 'recaptcha-checkbox-border').click()
    #navegador.execute_script("document.querySelector('.recaptcha-checkbox-border').click();")



    

    time.sleep(100)
    #navegador.find_element(By.CLASS_NAME, 'recaptcha-demo-submit').click()
    

    
else:
    print(solver.err_string)

time.sleep(100)



# 11/11 as 14:25

from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
options = webdriver.ChromeOptions()
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from anticaptchaofficial.recaptchav2proxyless import *
import time
import urllib.request
import zipfile
from pathlib import Path
from chave import chave_api

# Baixe o plugin
url = 'https://antcpt.com/anticaptcha-plugin.zip'
filehandle, _ = urllib.request.urlretrieve(url)
with zipfile.ZipFile(filehandle, "r") as f:
    f.extractall("plugin")

# Configurar chave API
api_key = chave_api
file = Path('./plugin/js/config_ac_api_key.js')
file.write_text(file.read_text().replace("antiCapthaPredefinedApiKey = ''", f"antiCapthaPredefinedApiKey = '{api_key}'"))


options.add_extension('./plugin.zip')
navegador = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

link = "http://nfe.sefaz.pe.gov.br/nfe-web/entradaConsNfe?tp=C&_nmJanelaAuxiliar=janelaAuxiliar"
navegador.get(link)

chave_captcha = WebDriverWait(navegador, 5).until(
    EC.presence_of_element_located((By.CLASS_NAME, 'g-recaptcha'))
).get_attribute('data-sitekey')

solver = recaptchaV2Proxyless()
solver.set_verbose(1)
solver.set_key(chave_api)
solver.set_website_url(link)
solver.set_website_key(chave_captcha)

resposta = solver.solve_and_return_solution()

if resposta != 0:
    print(resposta)

    navegador.execute_script(f"document.getElementById('g-recaptcha-response').innerHTML = '{resposta}'")
    time.sleep(2)
     # Aguardar botão de verificação estar clicável e clicar
    WebDriverWait(navegador, 10).until(
        EC.element_to_be_clickable((By.ID, 'recaptcha-verify-button'))
    ).click()
    
else:
    print(solver.err_string)

time.sleep(2)






from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from anticaptchaofficial.recaptchav2proxyless import *
import urllib.request
import zipfile
from pathlib import Path
from chave import chave_api

# Baixe o plugin
url = 'https://antcpt.com/anticaptcha-plugin.zip'
filehandle, _ = urllib.request.urlretrieve(url)
with zipfile.ZipFile(filehandle, "r") as f:
    f.extractall("plugin")

# Configurar chave API
api_key = chave_api
file = Path('./plugin/js/config_ac_api_key.js')
file.write_text(file.read_text().replace("antiCapthaPredefinedApiKey = ''", f"antiCapthaPredefinedApiKey = '{api_key}'"))

# Configuração do WebDriver com extensão
options = webdriver.ChromeOptions()
options.add_extension('./plugin.zip')
navegador = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Acessa o site
link = "http://nfe.sefaz.pe.gov.br/nfe-web/entradaConsNfe?tp=C&_nmJanelaAuxiliar=janelaAuxiliar"
navegador.get(link)

# Obtém o sitekey do reCAPTCHA
chave_captcha = WebDriverWait(navegador, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, 'g-recaptcha'))
).get_attribute('data-sitekey')

# Configuração do AntiCaptcha e resolução do reCAPTCHA
solver = recaptchaV2Proxyless()
solver.set_verbose(1)
solver.set_key(chave_api)
solver.set_website_url(link)
solver.set_website_key(chave_captcha)

resposta = solver.solve_and_return_solution()

if resposta != 0:
    print("Token de resposta do CAPTCHA:", resposta)
    
    # Insere a resposta no campo do reCAPTCHA
    navegador.execute_script(f"document.getElementById('g-recaptcha-response').innerHTML = '{resposta}'")
    
    # Clica no botão de verificação do reCAPTCHA
    WebDriverWait(navegador, 10).until(
        EC.element_to_be_clickable((By.ID, 'recaptcha-verify-button'))
    ).click()
else:
    print("Erro na resolução do CAPTCHA:", solver.err_string)

# Aguarda finalização do processo
time.sleep(2)



#novo como o plugin antcaptch

from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import urllib.request
import zipfile
import os
from pathlib import Path
import time
from chave import chave_api

# 1. Baixar e extrair o plugin do AntiCaptcha
url = 'https://antcpt.com/anticaptcha-plugin.zip'
filehandle, _ = urllib.request.urlretrieve(url)
with zipfile.ZipFile(filehandle, "r") as f:
    f.extractall("plugin")

# 2. Configurar a chave da API no arquivo de configuração da extensão
api_key = chave_api
config_path = Path('./plugin/js/config_ac_api_key.js')
config_path.write_text(config_path.read_text().replace("antiCapthaPredefinedApiKey = ''", f"antiCapthaPredefinedApiKey = '{api_key}'"))

# 3. Compactar a pasta `plugin` em um novo arquivo `plugin.zip`
plugin_zip_path = './plugin.zip'
with zipfile.ZipFile(plugin_zip_path, 'w', zipfile.ZIP_DEFLATED) as plugin_zip:
    for root, dirs, files in os.walk("plugin"):
        for file in files:
            file_path = os.path.join(root, file)
            plugin_zip.write(file_path, arcname=os.path.relpath(file_path, "plugin"))

# 4. Configurar o ChromeOptions para adicionar a extensão ao navegador
options = webdriver.ChromeOptions()
options.add_extension(plugin_zip_path)

# 5. Iniciar o navegador com o serviço do ChromeDriver e as opções configuradas
navegador = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# 6. Acessar o link da página que contém o reCAPTCHA
link = "http://nfe.sefaz.pe.gov.br/nfe-web/entradaConsNfe?tp=C&_nmJanelaAuxiliar=janelaAuxiliar"
navegador.get(link)

# 7. Aguardar até que a extensão resolva o CAPTCHA automaticamente
try:
    WebDriverWait(navegador, 120).until(
        lambda d: d.execute_script("return document.getElementById('g-recaptcha-response') && document.getElementById('g-recaptcha-response').value !== '';")
    )
    print("CAPTCHA resolvido com sucesso.")
    
    # Envia o formulário ou interage com o botão após o CAPTCHA ser resolvido
    navegador.find_element(By.ID, 'recaptcha-demo-submit').click()
except Exception as e:
    print("Erro ao resolver CAPTCHA:", e)

# 8. Aguarda processamento adicional, se necessário
WebDriverWait(navegador, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')

# Fechar o navegador após o processamento
time.sleep(10)
navegador.quit()
