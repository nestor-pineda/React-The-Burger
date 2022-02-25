// Este archivo contiene el reducer que utilizaremos para gestionar el estado de autenticación.
let user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).user : "";
let token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).auth_token : "";

// Estado inicial
export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
};

// Función reducer que acepta un initialState y un objeto de acción como argumentos y luego devuelve un nuevo estado basado en el tipo de acción especificado.
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
