from django.shortcuts import render
from rest_framework.views import APIView
from .models import Todo
from .serializer import TodoSerializer
from rest_framework.response import Response

class TodoView(APIView):
    def get(self, request):
        output = [
            {
                "title": output.title,
                "description": output.description
            } for output in Todo.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
