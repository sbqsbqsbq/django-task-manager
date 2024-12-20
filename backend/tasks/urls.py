from django.urls import path
from .views import get_tasks, create_task, update_task, delete_task

urlpatterns = [
    # 모든 태스크를 가져오는 뷰
    path('', get_tasks, name='get_tasks'),
    # 새로운 태스크를 추가하는 뷰
    path('', create_task, name='create_task'),
    # 태스크를 수정하는 뷰
    path('', update_task, name='update_task'),
    # 태스크를 삭제하는 뷰
    path('', delete_task, name='delete_task'),
]
