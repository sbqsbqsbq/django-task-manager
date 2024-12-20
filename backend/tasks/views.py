from django.shortcuts import render
from .models import Task
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializer import TaskSerializer


# 태스크 관리 뷰
@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def task_view(request, pk=None):
    # GET 요청 처리 - 모든 태스크 조회
    if request.method == 'GET':
        tasks = Task.objects.filter(completed=False)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    # POST 요청 처리 - 새로운 태스크 생성 
    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# 할 일 삭제 함수
@api_view(['DELETE'])
def delete_task(request, pk):
    task = Task.objects.get(pk=pk)
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# 할 일 완료 함수
@api_view(['PUT'])
def mark_as_done(request, pk):
    task = Task.objects.get(pk=pk)
    task.completed = True
    task.save()
    return Response(status=status.HTTP_200_OK)
