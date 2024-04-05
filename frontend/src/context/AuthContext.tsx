// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName);
      if (storedToken) {
        setLoading(true);
        try {
          const response = await axios.get(authConfig.meEndpoint, {
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          });
          setUser(response.data); // Set the user state with the fetched user details
          setLoading(false);
        } catch (error) {
          console.error("Authentication initialization error:", error);
          setLoading(false);
          setUser(null);
          localStorage.removeItem('userData');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem(authConfig.storageTokenKeyName);
          router.replace('/login');
        }
      } else {
        setLoading(false);
      }
    };

    initAuth();
  }, [router]);


  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    axios.post(authConfig.loginEndpoint, {
      email: params.email,
      password: params.password
    })
    .then(response => {
      const { access, refresh } = response.data; // Assuming your backend responds with 'access' and 'refresh' tokens
      window.localStorage.setItem(authConfig.storageTokenKeyName, access);
      window.localStorage.setItem('refreshToken', refresh); // Store refresh token if you plan to implement token refresh

      // Optionally, immediately fetch user details after successful login
      axios.get(authConfig.meEndpoint, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      }).then(res => {
        setUser(res.data); // Assuming 'res.data' contains the user details
        router.replace('/dashboard'); // Redirect user to dashboard or desired route
      }).catch(error => {
        console.error("Error fetching user details:", error);
        if (errorCallback) errorCallback(error);
      });
    })
    .catch(err => {
      console.error("Login error:", err);
      if (errorCallback) errorCallback(err);
    });
  };


  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
