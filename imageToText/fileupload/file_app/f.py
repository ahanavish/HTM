from PIL import Image
from pytesseract import pytesseract
from datetime import date
import datetime


def process_image(image_name, lang_code):
    path_to_tesseract = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    pytesseract.tesseract_cmd = path_to_tesseract
    return pytesseract.image_to_string(Image.open(image_name), lang=lang_code)


def name_to_num(name):
    datetime_object = datetime.datetime.strptime(name, "%b")
    month_number = datetime_object.month
    return month_number


def print_data(data):
    x = date.today()
    text = data.split("DATE")[-1]
    text1 = text.strip()
    all_words = text1.split()
    first_word = all_words[0]
    if text.isnumeric():
        x = datetime.date(int(all_words[1]), int(all_words[0]), 30)
    else:
        month = name_to_num(first_word)
        x = datetime.date(int(all_words[1]), int(month), 30)
    if x > date.today():
        return True
    return False


def output_file(filename, data):
    file = open(filename, "w+")
    file.write(data)
    file.close()


def mainn(filename):
    # data_eng = process_image("images/medicine1-modified.png", "eng")
    data_eng = process_image(filename, "eng")
    output_file("eng.txt", data_eng)
    return print_data(data_eng)
