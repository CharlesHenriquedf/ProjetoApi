import threading
import sys
import subprocess
from automation import AntCaptchaAutomation
import logging

# Configuração de logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    handlers=[logging.FileHandler("main.log"), logging.StreamHandler()])

logger = logging.getLogger(__name__)

stop_click_event = threading.Event()


def run_automation():
    try:
        logger.info("Iniciando a automação...")
        automation = AntCaptchaAutomation(click_callback)
        automation.run()
    except Exception as e:
        logger.error(f"Erro durante a execução da automação: {e}")


def click_callback(message=None):
    """Callback para iniciar ou parar os cliques no `click.py`."""
    if message == 'start_click':
        click_thread = threading.Thread(target=run_click)
        click_thread.start()
    elif message == 'stop_click':
        stop_click_event.set()


def run_click():
    """Executa o script de cliques (`click.py`)."""
    subprocess.run([sys.executable, 'click.py'])


if __name__ == "__main__":
    run_automation()
