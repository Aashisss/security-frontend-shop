
import React, { useState } from 'react';
import { loginApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    loginApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.userData));
          if (res.data.userData.isAdmin) {
            navigate('/admin/dashboard');
          } else {
            navigate('/home');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Server Error!');
      });
  };

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
          backgroundImage: "url('https://img.freepik.com/free-photo/delicious-cake-with-fruits_23-2150727744.jpg?t=st=1721058675~exp=1721062275~hmac=f696dcddceb9fc02b8dc5d3e9945963cf1b01b9bb0028de0b633c4e75ebfbe3d&w=900')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="login-container" style={{ border: '10px solid #f5c6a5', borderRadius: '20px', borderBlockColor:'#d39e6a', padding: '80px' }}>
          <h1 style={{textAlign: 'left', color: '#d39e6a', marginTop: '0', marginBottom: '20px', fontSize: '4em'}}>Login Here!</h1>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group fw-bold m-2 ">
              <label style={{ color: 'black',textAlign:'center', }}>Email Address</label>
              <input
                id="email"
                onChange={changeEmail}
                className="form-control"
                type="email"
                placeholder="Enter your email"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'#d39e6a' }}
              />
            </div>
            <div className="form-group fw-bold m-2">
              <label style={{ color: 'black', textAlign:'center' }}>Password</label>
              <input
                id="password"
                onChange={changePassword}
                className="form-control"
                type="password"
                placeholder="Enter your password"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'#d39e6a' }}
              />
            </div>
            <button className="btn btn-warning m-2" type="submit" style={{ width: '30%', borderRadius: '10px', textAlign: 'center'}}>
              Login
            </button>
            <br></br>
            <a href="/register" className="text-dark text-decoration-dark fw-bold" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#333' }}>
              Don't have an account? SignUp
            </a>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;


// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { loginApi } from "../apis/Api";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const changeEmail = (e) => setEmail(e.target.value);
//   const changePassword = (e) => setPassword(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       email,
//       password,
//     };

//     loginApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("user", JSON.stringify(res.data.userData));
//           if (res.data.userData.isAdmin) {
//             navigate("/admin/dashboard");
//           } else {
//             navigate("/home");
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Server Error!");
//       });
//   };

//   return (
//     <div className="container-fluid vh-100">
//       <div className="row h-100">
//         <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024954.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
//           {/* Background image div */}
//         </div>
//         <div className="col-md-6 d-flex justify-content-center align-items-center">
//           <div className="col-md-8 col-lg-6">
//             <div className="card p-4" style={{ backgroundColor: '#FFF', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', border: '1px solid black' }}>
//               <div className="card-header" style={{ backgroundColor: '#FFF', borderRadius: '10px 10px 0 0', padding: '10px' }}>
//                 <h3 className="text-center" style={{ color: '#008000', margin: '10px 0', fontWeight: 'bold' }}>Plant Shop</h3>
//               </div>
//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#6D6875', fontWeight: 'bold' }}>Email Address</label>
//                     <input 
//                       id="email" 
//                       onChange={changeEmail} 
//                       className="form-control" 
//                       type="email" 
//                       placeholder="Enter your email" 
//                       required 
//                       value={email} // Controlled input
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#6D6875', fontWeight: 'bold' }}>Password</label>
//                     <div className="input-group">
//                       <input 
//                         id="password" 
//                         onChange={changePassword} 
//                         className="form-control" 
//                         type={showPassword ? "text" : "password"} 
//                         placeholder="Enter your password" 
//                         required 
//                         value={password} // Controlled input
//                       />
//                       <button
//                         className="btn btn-outline-secondary"
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="d-grid">
//                     <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#6D6875', border: 'none' }}>Login</button>
//                   </div>
//                   <a href="/register" className="text-dark text-decoration-dark fw-bold" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#333' }}>
//                     Don't have an account? SignUp
//                   </a>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;