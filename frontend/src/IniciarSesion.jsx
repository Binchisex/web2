import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const IniciarSesion = () => {
  const navigate = useNavigate(); 
  
  // Estados para manejar los inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    if (!email || !password) {
      Swal.fire({
        title: 'Advertencia',
        text: 'Por favor, ingresa tu correo y contraseña.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      // Enviamos los datos al backend
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
      const response = await fetch(`${API_URL}/usuarios/login`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("email", email);
        Swal.fire({
          title: '¡Bienvenido!',
          text: 'Inicio de sesión exitoso.',
          icon: 'success',
          confirmButtonText: 'Ir a Feed Principal'
        }).then(() => {
          navigate("/feed-principal");
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: data.message || 'Hubo un problema al iniciar sesión',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>¡Es bueno tenerte de vuelta!</h1>
      
      <div className="mt-3">
        <input 
          type="email" 
          className="form-control input-custom mb-3" 
          placeholder="Correo electrónico" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input 
          type="password" 
          className="form-control input-custom mb-3" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-success mt-3" onClick={handleLogin}>
        Iniciar Sesión
      </button>

      <button className="btn Btn-Registrarse mt-3" onClick={() => navigate("/crear-cuenta")}>
        Registrarse
      </button>
    </div>
  );
};

export default IniciarSesion;
