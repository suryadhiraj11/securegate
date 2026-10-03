import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("securegate_current_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const getUsers = () => {
    const users = localStorage.getItem("securegate_users");
    return users ? JSON.parse(users) : [];
  };

  const signup = (name, email, password, role) => {
    const users = getUsers();

    const existingUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role,
      department: "Technology",
    };

    users.push(newUser);

    localStorage.setItem(
      "securegate_users",
      JSON.stringify(users)
    );

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  const login = (email, password) => {
    const users = getUsers();

    const user = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    setCurrentUser(user);

    localStorage.setItem(
      "securegate_current_user",
      JSON.stringify(user)
    );

    return {
      success: true,
      user,
    };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("securegate_current_user");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;