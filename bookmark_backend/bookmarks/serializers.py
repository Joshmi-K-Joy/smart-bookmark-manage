from rest_framework import serializers
from .models import Bookmark

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['id', 'title', 'url', 'genre']

    def validate_url(self, value):
        if not value.startswith(("http://", "https://")):
            raise serializers.ValidationError(
                "URL must start with http:// or https://"
            )
        return value
