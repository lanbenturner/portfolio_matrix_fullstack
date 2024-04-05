export default {
  meEndpoint: '/me/', // Matches 'CurrentUserAPIView.as_view()' in Django 'users' app urls.py
  loginEndpoint: '/token/', // Matches 'TokenObtainPairView.as_view()'
  registerEndpoint: '/register/', // Matches 'RegisterUserAPIView.as_view()'
  refreshTokenEndpoint: '/token/refresh/', // Matches 'TokenRefreshView.as_view()'
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // 'logout' or 'refreshToken', depending on your implementation
};
