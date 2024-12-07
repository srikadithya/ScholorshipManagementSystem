import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import './AuthPage.css'; // Ensure you have the styles
import AdminNav from './AdminNav.js'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('student'); // Default role as 'student'

  const toggleForms = () => {
    setIsLogin((prev) => !prev);
  };

  const switchRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <div>
      <AdminNav/>
      <div className="auth-container">
      {/* Role Switcher */}
      <div className="role-switch">
        <button 
          onClick={() => switchRole('student')} 
          className={role === 'student' ? 'active' : ''}>
          Student
        </button>
        <button 
          onClick={() => switchRole('admin')} 
          className={role === 'admin' ? 'active' : ''}>
          Admin
        </button>
      </div>

      {/* Form Toggle */}
      <div className={`form-container ${isLogin ? 'flip-to-login' : 'flip-to-signup'}`}>
        {isLogin ? <Login role={role} /> : <SignUp role={role} />}
      </div>

      {/* Form Type Toggle */}
      <div className="auth-toggle">
        <button onClick={toggleForms} className={isLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={toggleForms} className={!isLogin ? 'active' : ''}>
          Sign Up
        </button>
      </div>
    </div>
    </div>
  );
}

export default AuthPage;
