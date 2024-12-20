from rest_framework import serializers
from .models import Task

# 태스크 시리얼라이저
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # 모델의 필드를 시리얼라이저에 포함
        fields = ['id', 'title', 'completed']
