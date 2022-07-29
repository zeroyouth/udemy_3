import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false
}); //컨텍스트 객체 생성

export default AuthContext;