import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import registroImagen from "./img/registroImagen.png";

const CrearCuenta = () => {
  const navigate = useNavigate();
  // Estados para inputs
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Validación de campos vacíos
    if (!nombre || !email || !password) {
      Swal.fire({
        title: 'Advertencia',
        text: 'Por favor, completa todos los campos.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Validación de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        title: 'Advertencia',
        text: 'Por favor, ingresa un correo electrónico válido.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Validación de contraseña
    if (password.length < 6) {
      Swal.fire({
        title: 'Advertencia',
        text: 'La contraseña debe tener al menos 6 caracteres.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    try {
      const response = await fetch('http://localhost:3002/usuarios/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          email: email,
          password: password,
          apellidos: "",
          fechaDeNacimiento: "2025-04-04T16:30:00.000Z",
        }),
      });
      
      if (!response.ok) {
        throw new Error('Error al crear la cuenta');
      }
      
      const data = await response.json();
      if (data.success) {
        Swal.fire({
          title: '¡Registro Exitoso!',
          text: 'Tu cuenta ha sido creada correctamente.',
          icon: 'success',
          confirmButtonText: 'Ir a Feed Principal'
        }).then(() => {
          navigate("/feed-principal");
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: data.message || 'Hubo un problema al crear la cuenta',
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
    <div className="sweetboard-container">
      <div className="sweetboard-content">
        <div className="sweetboard-form">
          <h1 className="sweetboard-title">SweetBoard</h1>
          <p className="sweetboard-subtitle">Bienvenido, ¿No tienes una cuenta? regístrate.</p>
          <div className="form-inputs">
            <input
              type="email"
              className="sweetboard-input"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="sweetboard-input"
              placeholder="Nombre de usuario"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="password"
              className="sweetboard-input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="login-text">Inicia sesión</p>
            <button className="sweetboard-button" onClick={handleRegister}>
              Aceptar
            </button>
          </div>
        </div>
        <div className="sweetboard-imagen">
          <img src={registroImagen} alt="Postres SweetBoard" />
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;