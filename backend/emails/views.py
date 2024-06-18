from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.mixins import CreateModelMixin
from rest_framework import status
from .serializers import EmailSerializer

class SendEmailView(APIView, CreateModelMixin):
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            data = serializer.data
            print(data)
            subject = f"Message from {data['companyname']}"
            message = (
                f"Company: {data['companyname']}\n"
                f"Department: {data['companybusyo']}\n"
                f"Name: {data['name1']} {data['name2']} ({data['furi1']} {data['furi2']})\n"
                f"Email: {data['email']}\n"
                f"Telephone: {data['tell']}\n"
                f"Address: {data['zip1']}-{data['zip2']} {data['add']} {data['add2']}\n"
                f"Etc: {data.get('etc', '')}\n"
            )
            recipient = data['email']
            tt = send_mail(subject, message, 'natsagdorj.tu@gmail.com', [recipient])
            print(tt)
            return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        else:
            print('Validation errors:', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)