import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const notify = () => toast.success('logged in!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://manga-picker.onrender.com/auth/login', { username:username, password:password });
      console.log("response",response);
      if (response.status === 200) {
        console.log(response.data);
        // Save the token in a cookie
        Cookies.set('Username',username);
        // Cookies.set('token',response.data.token)
        document.cookie = "token=" + response.data.token
       
        notify()
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred while logging in', error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold m-7">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} autoComplete="off" className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" placeholder="Username" className="input input-bordered" required onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn mt-11 btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>

    </div>
  );
}

export default Login;
