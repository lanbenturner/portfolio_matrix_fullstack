export default {
  meEndpoint: '/users/me/', // Assuming you have a view that handles '/users/me/' for fetching user details
  loginEndpoint: '/token/', // Matches 'TokenObtainPairView.as_view()'
  registerEndpoint: '/register/', // Matches 'RegisterUserAPIView.as_view()'
  refreshTokenEndpoint: '/token/refresh/', // Matches 'TokenRefreshView.as_view()'
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // 'logout' or 'refreshToken', depending on your implementation
};
