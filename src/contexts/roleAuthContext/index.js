import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router";

const roleAuthContext = createContext();

function useRoleAuth() {
  const [authed, setAuthed] = useState(() => {
    let token = JSON.parse(localStorage.getItem("cattleCare"))?.user?.token;
    if (token) {
      return true;
    } else {
      return false;
    }
  });
  const [role, setRole] = useState(() => {
    let role = JSON.parse(localStorage.getItem("cattleCare"))?.role;
    if (typeof role === "undefined") return "all";
    else if (role === "admin") {
      return "admin";
    } else {
      return "farmer";
    }
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("cattleCare"))?.user;
  });

  const logout = () => {
    return new Promise((res) => {
      localStorage.removeItem("cattleCare");
      setAuthed(false);
      setRole("");
      setUser(undefined);
      res();
    });
  };

  const login = (user, role) => {
    return new Promise((res) => {
      localStorage.setItem("cattleCare", JSON.stringify({ user, role }));
      setAuthed(true);
      setUser(user);
      setRole(role);
      res();
    });
  };

  return {
    authed,
    login,
    logout,
    user,
    setUser,
    role,
  };
}

export function RoleAuthProvider({ children }) {
  const authRole = useRoleAuth();

  return (
    <roleAuthContext.Provider value={authRole}>
      {children}
    </roleAuthContext.Provider>
  );
}

export default function RoleAuthConsumer() {
  return useContext(roleAuthContext);
}
