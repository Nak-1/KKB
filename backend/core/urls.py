from django.contrib import admin
from django.urls import path, include
from posts.views import home 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.api.urls')),
    path('api/', include('emails.urls')),
    path('', home),
]
