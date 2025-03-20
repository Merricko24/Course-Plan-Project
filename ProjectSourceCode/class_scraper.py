from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from dotenv import load_dotenv
import os

load_dotenv()
driver = webdriver.Chrome()

driver.get("http://classes.colorado.edu")

search = driver.find_element(By.ID, "crit-keyword")
search.send_keys("CSCI")
search.send_keys(Keys.RETURN)
driver.implicitly_wait(5)
classes = driver.find_element(By.CLASS_NAME, "result__link")
classes.send_keys(Keys.RETURN)
panel = driver.find_element(By.CLASS_NAME, "panel--kind-details")
print(panel)
print('done')
input("Press any key to exit...")
driver.quit()