from django.shortcuts import render
from .models import Task
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializer import TaskSerializer


# 현재 모든 태스크를 가져오는 뷰
@api_view(['GET'])
def get_tasks(request):
    tasks = Task.objects.all()
    return Response(tasks, status=status.HTTP_200_OK)


# 새로운 태스크를 추가하는 뷰
@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 태스크를 수정하는 뷰
@api_view(['PUT'])
def update_task(request, pk):
    task = Task.objects.get(pk=pk)
    serializer = TaskSerializer(task, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 태스크를 삭제하는 뷰
@api_view(['DELETE'])
def delete_task(request, pk):
    task = Task.objects.get(pk=pk)
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
