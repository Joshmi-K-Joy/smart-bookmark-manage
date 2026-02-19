from django.db import models

class Bookmark(models.Model):

    GENRE_CHOICES = [
        ('learning', 'Learning'),
        ('personal', 'Personal'),
        ('movies', 'Movies'),
    ]

    title = models.CharField(max_length=200)
    url = models.URLField(max_length=500)
    genre = models.CharField(max_length=50)  # allow any text


    def __str__(self):
        return self.title
