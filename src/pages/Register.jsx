
import React, { useState } from 'react';
import { registerApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import zxcvbn from 'zxcvbn';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ strength: "None", color: "black", percent: 0 });
  const navigate = useNavigate();

  const changeFirstName = (e) => setFirstName(e.target.value);
  const changeLastName = (e) => setLastName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check password strength using zxcvbn
    const result = zxcvbn(value);
    const score = result.score;

    const strengthData = {
      0: { strength: "Weak", color: "red", percent: 25 },
      1: { strength: "Weak", color: "red", percent: 50 },
      2: { strength: "Medium", color: "yellow", percent: 75 },
      3: { strength: "Strong", color: "blue", percent: 100 },
      4: { strength: "Very Strong", color: "green", percent: 100 }
    };

    setPasswordStrength(strengthData[score] || { strength: "None", color: "black", percent: 0 });
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 12;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength || password.length > maxLength) {
      return `Password must be between ${minLength} and ${maxLength} characters long.`;
    }

    if (!hasUppercase) {
      return 'Password must contain at least one uppercase letter.';
    }

    if (!hasLowercase) {
      return 'Password must contain at least one lowercase letter.';
    }

    if (!hasNumber) {
      return 'Password must contain at least one number.';
    }

    if (!hasSpecialChar) {
      return 'Password must contain at least one special character.';
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validatePassword(password);
    if (error) {
      toast.error(error);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password and confirmation password don't match");
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    registerApi(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          navigate('/login'); // Redirect to login after successful registration
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Internal Server Error!');
      });
  };

  const { strength, color, percent } = passwordStrength;

  return (
    <div className="box">
      <body
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: "url('https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649462.jpg?t=st=1721059061~exp=1721062661~hmac=51ac7fc832c38a1db6d18b0486aa0dcf75fd3dcad9228003a5b193746c0f2a11&w=900')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="register-container" style={{ border: '10px solid #d39e6a', borderRadius: '20px', padding: '20px', borderBlockColor:'#8B4513'}}>
          <h1 style={{textAlign: 'left', color: '#8B4513', marginTop: '0', marginBottom: '20px', fontSize: '3em'}}>Create Your Account!</h1>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'orange', textAlign:'center', }}>Firstname</label>
              <input 
                onChange={changeFirstName} 
                className="form-control" 
                type="text" 
                placeholder="Enter your Firstname" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'#8B4513' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'orange', textAlign:'center' }}>Lastname</label>
              <input 
                onChange={changeLastName} 
                className="form-control" 
                type="text" 
                placeholder="Enter your Lastname" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'#8B4513' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'orange', textAlign:'center' }}>Email</label>
              <input 
                onChange={changeEmail} 
                className="form-control" 
                type="email" 
                placeholder="Enter your email" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'#8B4513' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'orange', textAlign:'center' }}>Password</label>
              <input 
                onChange={changePassword} 
                className="form-control" 
                type="password" 
                placeholder="Enter your password" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'#8B4513' }}
              />
              <div style={{ color, marginBottom: "10px", fontWeight: "bold" }}>
                Password Strength: {strength}
              </div>
              <div style={{
                height: "10px",  // Thinner bar height
                width: "100%",
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px"
              }}>
                <div
                  style={{
                    height: "100%",
                    width: `${percent}%`,
                    backgroundColor: color,
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'orange', textAlign:'center' }}>Confirm Password</label>
              <input 
                onChange={changeConfirmPassword} 
                className="form-control" 
                type="password" 
                placeholder="Confirm your password" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'#8B4513' }}
              />
            </div>
            <button className="btn btn-warning m-2 w-25" type="submit" style={{ width: '20%', borderRadius: '10px', textAlign: 'center'}}>
              Submit
            </button>
            <p className="mt-3" style={{ textAlign: 'center', color: '#333' }}>
              Already have an account? <a href="/login" className="text-dark text-decoration-dark fw-bold">Login here</a>
            </p>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Register;
