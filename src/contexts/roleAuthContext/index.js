import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router";

const roleAuthContext = createContext();

function useRoleAuth() {
  const [authed, setAuthed] = useState(() => {
    let token = JSON.parse(localStorage.getItem("farmObj"));
    if (token) {
      return true;
    } else {
      return false;
    }
  });
  const [role, setRole] = useState(() => {
    let token = JSON.parse(localStorage.getItem("farmObj"));
    if (token) {
      return token.role;
    } else {
      return "all";
    }
  });
  const [user, setUser] = useState(undefined);

  const logout = () => {
    return new Promise((res) => {
      localStorage.removeItem("farmObj");
      setAuthed(false);
      setRole("");
      setUser(undefined);
      res();
    });
  };

  const login = (user, role) => {
    return new Promise((res) => {
      localStorage.setItem("farmObj", JSON.stringify({ user, role }));
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
