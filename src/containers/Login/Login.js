import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, Redirect } from 'react-router-dom'
import i18n from "i18next";
import Grid from '@material-ui/core/Grid';
import { useTranslation, withTranslation } from 'react-i18next';
import { Store } from '../../Store';
import './Login.scss';
import { masterActions } from '../../_actions';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()
	let history = useHistory()
	const [convertedText, setConvertedText] = useState('en')
	const loggedIn = useSelector((state) => state.authentication)
	const user = useSelector((state) => state.authentication.user)
	const loginMessage = useSelector(state => state.loginPage);
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [role, setRole] = React.useState('');
	const location = useLocation()
	useEffect(() => {
		////localStorage.clear();
	}, [])



	function handleSubmit(e) {
		e.preventDefault()
		console.log(username)
		console.log(password)
		console.log(role)
		const { from } = location.state || { from: { pathname: '/Dashboard' } }
		dispatch(masterActions.login(username, role, password, from))
		dispatch(masterActions.isLoggedIn(true))
	}

	console.log('loggedIn', loggedIn)



	return (
		<Grid className="LoginContainer">
			{localStorage.getItem('userData') ? <Redirect to='/Dashboard' /> : null}
			<div class="container">
				<div class="screen">
					<div class="screen__content">
						{/* <div className="title-heading mt-3">
							{loginMessage && loginMessage.error !== undefined || null ? <span>{loginMessage.error}</span> : ''}

						</div> */}
						<form class="login" onSubmit={handleSubmit} autocomplete="off">
							<div class="login__field">
								<i class="login__icon fa fa-user"></i>
								<input type="text" class="login__input" placeholder="User name / Email" onChange={event => setUsername(event.target.value)} />
							</div>
							<div class="login__field">
								<i class="login__icon fa fa-lock"></i>
								<input type="password" class="login__input" placeholder="Password" onChange={event => setPassword(event.target.value)} />
							</div>
							{/* <div className="group">
								<select onChange={event => setRole(event.target.value)}>
									<option value="">Select Role</option>
									<option value="admin">Admin</option>
									<option value="storeowner">Storeowner</option>
								</select>
							</div> */}
							<button class="button login__submit">
								<span class="button__text" >Log In Now</span>
								<i class="button__icon fa fa-chevron-right"></i>
							</button>
						</form>
						{/* <div class="social-login">
							<h3>log in via</h3>
							<div class="social-icons">
								<a href="#" class="social-login__icon fa fa-instagram"></a>
								<a href="#" class="social-login__icon fa fa-facebook"></a>
								<a href="#" class="social-login__icon fa fa-twitter"></a>
							</div>
						</div> */}
					</div>
					<div class="screen__background">
						<span class="screen__background__shape screen__background__shape4"></span>
						<span class="screen__background__shape screen__background__shape3"></span>
						<span class="screen__background__shape screen__background__shape2"></span>
						<span class="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>
		</Grid>

	);
}

export default withTranslation()(Login);
