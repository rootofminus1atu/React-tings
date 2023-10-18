import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavButton({ children,  to, ...props }) {
  const navigate = useNavigate()

  return (
    <button 
      onClick={() => navigate(to)} 
      className="btn btn-primary"
      {...props}
    >
      {children}
    </button>
  );
  }
