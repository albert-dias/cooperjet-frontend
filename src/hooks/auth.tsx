import React, { createContext, useCallback, useState, useContext} from 'react';
import api from '../services/api';

interface AuthState{
  token: string;
  user: UserData;
  signed: boolean;
}

interface SignInCredentials {
  email: string;
  pass: string;
}

interface UserData{
  id: string;
  name: string;
  email: string;
  cel: string;
  permission: string;
  balance: number;
}

interface AuthContextData{
  token: string
  user: UserData;
  signed: boolean;
  signIn(credetionals: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState >(() => {
    const token = localStorage.getItem('@Cooper:token');
    const user = localStorage.getItem('@Cooper:user');

    if(token && user){
      return {token, user: JSON.parse(user), signed: true};
    }

    return{signed: false} as AuthState;
  });

  const signIn = useCallback(async ({ email, pass }) => {
    const response = await api.post('sessions', {
      email,
      pass,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Cooper:token', token);
    localStorage.setItem('@Cooper:user', JSON.stringify(user));

    setData({token, user, signed: true});
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Cooper:token');
    localStorage.removeItem('@Cooper:user');

    setData({signed: false}  as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{token: data.token ,user: data.user, signed: data.signed, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData{
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export {AuthProvider, useAuth};
