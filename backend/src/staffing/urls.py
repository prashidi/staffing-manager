from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('stam.urls'))
]