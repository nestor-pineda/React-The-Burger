import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const INITIAL_STATE = {  //EL ESTADO INICIAL DE NUESTRO FORMULARIO, PARA LUEGO CON EL USESTATE IR SETTEANDO TODO AHI
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    repassword: ""
  }

const Register = () => {


    const [formData, setformData] = useState(INITIAL_STATE); //USESTATE DONDE METEREMOS NUESTRA INFO DEL FORMULARIO
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(false); ///USESTATE PARA MANEJAR ERRORES DE REGISTRO



    const handleChange = (ev) => { ///SACAMOS LA INFO DE LOS INPUTS Y LA SETTEAMOS EN EL FORMDATA
        const {name, value} = ev.target;
        setformData({...formData, [name]: value})
      }


    
      const postUser = (formData) => { ///EL POST DEL USUARIO A NUESTRA BASE DE DATOS
        axios.post("https://the-burger-server.herokuapp.com/api/register", {
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          password: formData.password,
          phone: formData.phone
        })
      }


      const registerUser = (formData) => { ///REGISTER COMPLETO, PRIMERO UN GET PARA COMPROBAR SI YA HAY UN USUARIO CON ESAS CREDENCIALES
        axios.get("https://the-burger-server.herokuapp.com/api/users")
        .then((res) => {
          const users = res.data
          const userExist = users.find((user) => formData.email === user.email || formData.phone === user.phone);
          if (userExist) {
            setRegisterError(true)
          } else {
            postUser(formData)
            setRegisterError(false)
            console.log("Usuario registrado")
            navigate("/login")
          }
        })
      }
    
      const submitForm = (ev) => {
        ev.preventDefault();
        registerUser(formData)
      }



  return (
  <div className="container">
    <div className="formContainer">
      <h1>Register Page</h1>

      <form onSubmit={submitForm}>
        <div className="registerForm">

          {/* NOMBRE */}
          <div className="registerFormItem">
            <label htmlFor="name">name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}  />
          </div> 
          {(formData.name.length <= 3 || formData.name.length >= 30) && formData.name !== "" ? <p>Invalid name</p> : null}

          {/* APELLIDOS */}
          <div className="registerFormItem">
            <label htmlFor="name">surname</label>
            <input type="text" name="surname" value={formData.surname} onChange={handleChange}  />
          </div>
          {(formData.surname.length <= 3 || formData.surname.length >= 60) && formData.surname !== "" ? <p>Invalid surname</p> : null}

          {/* EMAIL */}
          <div className="registerFormItem">
            <label htmlFor="name">email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
          </div>
          {(formData.email.length <= 9 || formData.email.length >= 50) && formData.email !== "" ? <p>Invalid email</p> : null}

          {/* TELEFONO */}
          <div className="registerFormItem">
            <label htmlFor="name">Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          {(formData.phone.length <= 8 || formData.phone.length >= 15) && formData.phone !== "" ? <p>Invalid phone number</p> : null}

          {/* CONTRASEÑA */}
          <div className="registerFormItem">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} d/>
          </div>
          {(formData.password.length <= 4 || formData.password.length >= 50) && formData.password !== "" ? <p>Invalid password</p> : null}

          {/* REPETIR CONTRASEÑA */}
          <div className="registerFormItem">
            <label htmlFor="repassword">re-Password</label>
            <input type="password" name="repassword" value={formData.repassword} onChange={handleChange}  />
          </div>
        </div>
        {(formData.repassword !== formData.password) && formData.repassword !== "" ? <p>Passwords dows not match</p> : null}

          {/* BOTON DESACTIVADO MIENTRAS ALGUN CAMPO ESTÉ VACIO */}
        {(formData.name === "" || formData.surname === "" || formData.email === "" || formData.phone === "" || formData.password === "" || formData.repassword === "") ?
        <button disabled>Register</button> 
        : 
        <button>Register</button>}
      </form>

      {/* ERROR DE REGISTRO SI EL POST NOS DEVUELVE ERROR */}
      {registerError ? <p>User with that email or phone number already exist</p> : null}
    </div>
  </div>
  )
}

export default Register