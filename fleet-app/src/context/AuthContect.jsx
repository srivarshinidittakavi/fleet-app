import React, {createContext, useContext,useState}from'react';
const AuthContect=createContext(null);
export function AuthProvider({children}){
    const[isAuthenticated,setIsAuthenticated]=useState(false);
    const login=()=> setIsAuthenticated(true);
    const logout=()=>setIsAuthenticated(false);
    const value={isAuthenticated,login,logout};
    return <AuthContect.Provider value={value}>{children}</AuthContect.Provider>;

}
export function useAuth(){
    return useContext(AuthContect);
}