import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { auth } from "../app/firebase/firebase";

interface AuthProviderType {
  currentUser: User | null;
}

const AuthContext = createContext<AuthProviderType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setCurrentUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("Context 'Auth' was used outside an AuthProvider");
  }
  
  return context;
}

export { AuthProvider, useAuth };
