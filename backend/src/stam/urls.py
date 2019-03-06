from .views import ShiftViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'shifts', ShiftViewSet, basename='shifts')
urlpatterns = router.urls