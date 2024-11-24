import threading
import sys
import subprocess
from ui import AutomationUI
from automation import SefazAutomation
import click

stop_click_event = threading.Event()

def run_automation(state_inclusions, period, folder_path, ui):
    automation = SefazAutomation(click_callback, folder_path, ui)
    automation.run_automation(state_inclusions, period)

def click_callback(message=None):
    if message == 'start_click':
        click_thread = threading.Thread(target=run_click)
        click_thread.start()
    elif message == 'stop_click':
        stop_click_event.set()

def run_click():
    subprocess.run([sys.executable, 'click.py'])

if __name__ == "__main__":
    ui = AutomationUI(lambda state_inclusions, period, folder_path: run_automation(state_inclusions, period, folder_path, ui))
    ui.run()
