import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignCredentials {
  email: string,
  password: string,
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

  const signIn = useCallback(async ({email, password}) => {
    
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);

  }, []);

  return (
    <AuthContext.Provider value={{name: 'Gabriel', signIn}}>
      {children}
    </AuthContext.Provider>
  );
};
