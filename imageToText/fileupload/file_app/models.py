from django.db import models


def path_and_rename(instance, filename):
    upload_to = ""
    ext = filename.split(".")[-1]
    filename = "specimen." + ext
    return os.path.join(upload_to, filename)


class File(models.Model):
    file = models.FileField(blank=False, null=False)
    remark = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)
