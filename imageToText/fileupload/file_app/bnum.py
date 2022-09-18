from PIL import Image
from pytesseract import pytesseract
import pandas as pd


def process_image(image_name, lang_code):
    path_to_tesseract = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    pytesseract.tesseract_cmd = path_to_tesseract
    return pytesseract.image_to_string(Image.open(image_name), lang=lang_code)


def isPrefixOfWord(sentence: str, searchWord: str) -> int:
    return (
        [i + 1 for i, s in enumerate(sentence.split()) if s.startswith(searchWord)]
        + [-1]
    )[0]


def print_data(data):
    c = isPrefixOfWord(data, "B.No.")
    text1 = data.strip()
    all_words = text1.split()
    text2 = all_words[c - 1]
    batch_num = text2[5:]
    data = pd.read_csv(
        r"C:\Users\jahna\imageToText\data\Book.csv", encoding="ISO-8859-1"
    )
    key = batch_num
    df = data[data.eq(key).any(axis=1)]
    if df.empty:
        return False
    else:
        return True


def output_file(filename, data):
    file = open(filename, "w+")
    file.write(data)
    file.close()


def main(filename):
    # data_eng = process_image("images/cropp.png", "eng")
    data_eng = process_image(filename, "eng")
    output_file("eng.txt", data_eng)
    return print_data(data_eng)


# def bnum():
