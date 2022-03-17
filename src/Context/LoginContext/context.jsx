// // Este archivo es donde inicializamos los diferentes objetos de contexto que necesitaremos y algunos hooks personalizados que componen la lógica de nuestra aplicación.
// import React, { useReducer } from "react";
// import { initialState, AuthReducer } from "./reducer";

// const AuthStateContext = React.createContext();
// const AuthDispatchContext = React.createContext();

// // Custom Hooks:
// export const useAuthState = () => {
//   const context = React.useContext(AuthStateContext);
//   if (context === undefined) {
//     throw new Error("useAuthState debe utilizarse dentro de un AuthProvider");
//   }
//   return context;
// };

// export const useAuthDispatch = () => {
//   const context = React.useContext(AuthDispatchContext);
//   if (context === undefined) {
//     throw new Error("useAuthDispatch debe utilizarse dentro de un AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, dispatch] = useReducer(AuthReducer, initialState);

//   return (
//     <AuthStateContext.Provider value={user}>
//       <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
//     </AuthStateContext.Provider>
//   );
// };
