import pyautogui
import time
import logging
import threading

# Configuração do logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    handlers=[logging.FileHandler("click.log"),
                              logging.StreamHandler()])

logger = logging.getLogger(__name__)

stop_click_event = threading.Event()

def run_click(max_time=10):
    start_time = time.time()
    time.sleep(2)

    while not stop_click_event.is_set() and time.time() - start_time < max_time:
        pyautogui.press('enter')
        logger.info("Clicou Enter")
        time.sleep(1)

if __name__ == "__main__":
    # Mover o mouse para a posição especificada e clicar
    pyautogui.moveTo(x=1425, y=807)
    time.sleep(1)
    pyautogui.click(x=1425, y=807, clicks=5, interval=0.25)
    logger.info("Moveu o mouse para (1425, 807) e clicou cinco vezes")

    # Iniciar a função run_click
    run_click()
