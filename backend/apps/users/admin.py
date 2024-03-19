from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, UserProfile

class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'UserProfile'

# Update CustomUserAdmin to include first_name and last_name in list_display
class CustomUserAdmin(UserAdmin):
    inlines = (UserProfileInline, )
    model = CustomUser
    list_display = ['email', 'first_name', 'last_name', 'is_staff', 'is_active']  # Added is_active

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (('Personal info'), {'fields': ('first_name', 'last_name')}),
        (('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'is_staff', 'is_active'),  # Added first_name, last_name, and is_active
        }),
    )

    search_fields = ('email', 'first_name', 'last_name')  # Added search by first_name and last_name
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)
