from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, UserProfile

class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'UserProfile'

class CustomUserAdmin(UserAdmin):
    inlines = (UserProfileInline, )
    model = CustomUser
    # Include 'id' and 'preferred_name' in list_display
    list_display = ['id', 'email', 'first_name', 'last_name', 'preferred_name', 'is_staff', 'is_active']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (('Personal info'), {'fields': ('first_name', 'last_name', 'preferred_name')}),  # Include 'preferred_name' here
        (('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'preferred_name', 'is_staff', 'is_active'),  # Include 'preferred_name' here
        }),
    )

    # Include 'preferred_name' in search_fields
    search_fields = ('email', 'first_name', 'last_name', 'preferred_name')
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)
