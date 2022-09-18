from django.urls import include, re_path, path
from django.views.decorators.csrf import csrf_exempt

from .views import FileView

urlpatterns = [
    path("upload/", FileView.as_view(), name="file-upload"),
    # path("test/", view1),
]
