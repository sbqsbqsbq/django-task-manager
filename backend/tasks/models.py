from django.db import models

# 태스크 모델 정의
class Task(models.Model):
    title = models.CharField(max_length=200)  # 할 일 이름
    completed = models.BooleanField(default=False)  # 완료 여부

    # 프린트 시에 할 일 이름을 반환하는 메서드
    def __str__(self):
        return self.title
