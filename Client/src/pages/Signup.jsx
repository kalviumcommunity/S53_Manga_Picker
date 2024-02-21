import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Signup() {
    const [FullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const notify = () => toast.success('User created!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://manga-picker.onrender.com/auth/signup', { fullname: FullName, username: username, password: Password, confirmPassword:confirmpassword });
            if (response.status === 201) {
                Cookies.set('Username', username);
                document.cookie = "token=" + response.data.token
                setConfirmPassword('success');
                setError(null);
                console.log("created user")
                notify()
            } else {
                setError('Signup failed');
            }
        } catch (error) {
            setError(error.message);
        }
    }



    return (
        <div>
            <div className="hero min-h-screen">
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold m-7 text-center">Sign up now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} autoComplete="off" className="card-body bg-base-900">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder=" Full Name" className="input input-bordered" required onChange={handleFullNameChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="Username" className="input input-bordered" required onChange={handleUsernameChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required onChange={handlePasswordChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" className="input input-bordered" required onChange={handleConfirmPasswordChange} />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
        </div>
    )
}

export default Signup;
