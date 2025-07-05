// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const navigate = useNavigate();
  const {
    loginWithEmail,
    loginWithGoogle,
    loginWithFacebook,
    loginWithPhone,
    setUpRecaptcha,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSendOTP = async () => {
    try {
      const verifier = setUpRecaptcha('recaptcha-container');
      const result = await loginWithPhone(phone, verifier);
      setConfirmationResult(result);
      setOtpSent(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      await confirmationResult.confirm(otpCode);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Connexion</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Connexion par Email */}
      <form onSubmit={handleEmailLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Adresse email"
          className="w-full border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Connexion par email
        </button>
      </form>

      <div className="my-4 text-center text-gray-500">ou</div>

      {/* Connexion Google & Facebook */}
      <div className="space-y-2">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Connexion avec Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
        >
          Connexion avec Facebook
        </button>
      </div>

      <div className="my-4 text-center text-gray-500">ou</div>

      {/* Connexion par téléphone */}
      {!otpSent ? (
        <>
          <input
            type="tel"
            placeholder="Téléphone (ex : +243...)"
            className="w-full border px-4 py-2 rounded mb-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div id="recaptcha-container" className="mb-2"></div>
          <button
            onClick={handleSendOTP}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Envoyer le code OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Code OTP"
            className="w-full border px-4 py-2 rounded mb-2"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
          />
          <button
            onClick={handleVerifyOTP}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Vérifier le code
          </button>
        </>
      )}

      <div className="mt-6 text-center text-sm">
        Pas encore de compte ?{' '}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Créer un compte
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
