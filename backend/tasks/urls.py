from django.urls import path
from .views import task_view, mark_as_done, delete_task

urlpatterns = [
    # 모든 태스크를 가져오는 뷰
    path('', task_view, name='task_view'),
    # 할 일 완료 뷰
    path('done/<int:pk>', mark_as_done, name='mark_as_done'),
    # 할 일 삭제 뷰
    path('delete/<int:pk>', delete_task, name='delete_task'),
]