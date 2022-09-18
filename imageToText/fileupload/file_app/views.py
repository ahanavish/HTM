from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.http import FileResponse
from .serializers import FileSerializer
from .bnum import main
from .f import mainn

import os

import json
from .forms import FileForm
from .models import File
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


# wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
# from PIL import Image
# from pytesseract import pytesseract
# from datetime import date
# import datetime


# def process_image(image_name, lang_code):
#     path_to_tesseract = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
#     pytesseract.tesseract_cmd = path_to_tesseract
#     return pytesseract.image_to_string(Image.open(image_name), lang=lang_code)


# def name_to_num(name):
#     datetime_object = datetime.datetime.strptime(name, "%b")
#     month_number = datetime_object.month
#     return month_number


# def print_data(data):
#     x = date.today()
#     text = data.split("DATE")[-1]
#     text1 = text.strip()
#     all_words = text1.split()
#     first_word = all_words[0]
#     if text.isnumeric():
#         x = datetime.date(int(all_words[1]), int(all_words[0]), 30)
#     else:
#         month = name_to_num(first_word)
#         x = datetime.date(int(all_words[1]), int(month), 30)
#     if x > date.today():
#         return True
#     return False


# def output_file(filename, data):
#     file = open(filename, "w+")
#     file.write(data)
#     file.close()


# def main(filename):
#     # data_eng = process_image("images/medicine1-modified.png", "eng")
#     data_eng = process_image(filename, "eng")

#     print_data(data_eng)
#     output_file("eng.txt", data_eng)


# wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


class FileView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            isBatch = main(r"C:\Users\jahna\imageToText\images\cropp.png")
            isExp = mainn(r"C:\Users\jahna\imageToText\images\cropp.png")
            # response = FileResponse(open(os.path.join(os.getcwd(), 'annotated.jpg'), 'rb'))
            # return response
            # response = FileResponse(open("media/cropp.png", "rb"))
            # print(file_serializer)
            # print(type(file_serializer))
            # bnum.test()
            # return {}isBatch && isExp
            # return Response(file_serializer.data, status=status.HTTP_201_CREATED)
            dump = json.dumps({"remark": isBatch and isExp})
            return HttpResponse(dump, content_type="application/json")
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @csrf_exempt
# def view1(request):
#     if request.method == "POST":
#         # received_json_data = json.loads(request.POST["form-data"])
#         # print(request.FILES)
#         form = FileForm(request.POST or None, request.FILES)
#         if form.is_valid():
#             form.save()
#             key = form.pk
#             img = File.objects.get(pk=key)
#             print(img.file)
#             return HttpResponse(
#                 "{'text':'done'}", content_type="text/json-comment-filtered"
#             )

#         # fil = os.open("test.png", "w")
#         # fil.write(str(request.FILES))
#         # fil.close()
#         return HttpResponse(request.FILES)

#     return HttpResponse("{'text':'bu'}", content_type="text/json-comment-filtered")
