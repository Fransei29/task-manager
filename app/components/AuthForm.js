import React from 'react';
import styles from '../home/home.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

// AuthForm component for user authentication (register or sign in)
const AuthForm = ({ email, password, setEmail, setPassword, handleAuth, isRegistering, toggleAuthMode }) => {
  return (
    <div className={styles.authContainer}>
      <h1 className={styles.titleA}>Welcome back!</h1>             {/* Title and introductory text */}
      <form onSubmit={handleAuth} className={styles.formA}>                  {/* Authentication form */}
        <div className={styles.inputGroup}>
              <p>Email Adress</p>
              <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seilerfranco317@gmail.com"
                  required
                  className={styles.input}
                />
            </div>
        </div>
        <div className={styles.inputGroup}>
              <p>Password</p>
              <div className={styles.inputContainer}>
              <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className={styles.input}
              />
        </div>
        </div>
        <button type="submit">                   {/* Submit button for registration or sign-in */}
          {isRegistering ? 'Register' : 'Sign In'}
        </button>
        <button type="button" onClick={toggleAuthMode}> {/* Toggle button to switch between registration and sign-in modes */}
          {isRegistering ? 'Go to Sign In' : 'Create an Account'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
