// Define a type for error callback function used in authentication context
export type ErrCallbackType = (err: { [key: string]: any }) => void;

// Define the parameters for the login function
export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

// Define the type for user data to match the CustomUser model from the backend
export type UserDataType = {
  id: number;
  email: string;
  first_name?: string; // Optional to match the Django model
  last_name?: string; // Optional to match the Django model
  preferred_name?: string; // Optional to match the Django model
  is_active: boolean;
  is_staff: boolean;
  date_joined: string; // Assuming date is handled as a string in the frontend

  // Nested UserProfile information, marked as optional
  profile?: {
    phone_number?: string; // Optional to match the Django model
    city?: string;         // Optional to match the Django model
    state?: string;        // Optional to match the Django model
    address?: string;      // Optional to match the Django model
  };
};

// Define the structure of the authentication context values
export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  user: UserDataType | null;
  setLoading: (value: boolean) => void;
  setUser: (value: UserDataType | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
};
