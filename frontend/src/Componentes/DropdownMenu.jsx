import React, { useState, useRef, useEffect } from "react";
import "./DropdownMenu.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const DropdownMenu = ({ onDelete, onModify }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (      
    <DropdownButton drop={'up'} key={'up'} variant="success" id="dropdown-button-drop-up" title="Recetas o algo">
      
      <Dropdown.Item eventKey="1"  onClick={() => {
            onDelete();
            setIsOpen(false);
      }}>Eliminar</Dropdown.Item>
      <Dropdown.Item eventKey="2"  onClick={() => {
            onModify();
            setIsOpen(false);
      }}>Modificar</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Renombrar</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownMenu;