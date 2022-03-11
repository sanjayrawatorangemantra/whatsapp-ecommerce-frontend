import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, Redirect } from 'react-router-dom'
import i18n from "i18next";

import { useTranslation, withTranslation } from 'react-i18next';
import { Store } from '../../Store';
import './Login.scss';
import { masterActions } from '../../_actions';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()
	let history = useHistory()
	const [convertedText, setConvertedText] = useState('en')
	const loggedIn = useSelector((state) => state.authentication)
	const user = useSelector((state) => state.authentication.user)
	const loginPage = useSelector(state => state.loginPage);
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [fullName, setFullName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [mobile, setMobile] = React.useState('');
	const [role, setRole] = React.useState('');
	const [loginfailMessage, setLoginfailMessage] = useState('')
	const SignUp = useSelector((state) => state.signuplogin);
	const location = useLocation()
	useEffect(() => {
		////localStorage.clear();
	}, [])

	console.log("loginPage", loginPage);



	const handleSubmitSignUp = (e) => {
		e.preventDefault()

		let data = {
            "name" : fullName,
			"email" : email,
			"role" : role,
			"mobile" : mobile,
			"password": password
		}

		console.log("data++",data);

		dispatch(eventActions.SignUpLogin(data))
	}


	useEffect(() => {
        if (!!SignUp && !!SignUp.signuplogin && SignUp.signuplogin !== undefined) {
			dispatch(masterActions.login(username, role, password))
            toast.success('User Created successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
        }
        else if (!!SignUp && SignUp.error) {
            toast.success(SignUp.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [SignUp])

	useEffect(() => {
        return () => {
            dispatch(eventActions.SignUpLogin())
        }
    }, [])



	return (
	
				<div class="login-html">
					<div className="login-form">	
						<div className="sign-up-htm">
							<form onSubmit={handleSubmitSignUp}>
								<div className="group">
									<label for="user" className="label">Name</label>
									<input id="user" type="text" className="input" onChange={(event) => setFullName(event.target.value)} />
								</div>
								<div className="group">
									<label for="pass" className="label">Email Address</label>
									<input id="pass" type="email" class="input" onChange={(event) => setEmail(event.target.value)} />
								</div>
								<div className="group">
									<label for="pass" className="label">Mobile</label>
									<input id="pass" type="number" className="input" data-type="number" onChange={(event) => setMobile(event.target.value)} />
								</div>
								<div className="group">
									<label for="pass" className="label">Password</label>
									<input id="pass" type="password" class="input" data-type="password" onChange={(event) => setPassword(event.target.value)} />
								</div>
								<div className="group">
									<label for="pass" className="label">Role</label>
									<select onChange={event => setRole(event.target.value)}>
										<option value="">Select Role</option>
										<option value="admin">Admin</option>
										<option value="storeowner">Storeowner</option>
									</select>
								</div>
								
								<div className="group">
									<input type="submit" className="button" value="Sign Up" />
								</div>
							</form>

						</div>
					</div>
				</div>
	);
}

export default withTranslation()(SignUp);
