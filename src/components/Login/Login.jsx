import React, { useState } from 'react';
import "./Login.css";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// class FluidInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             focused: false,
//             value: ""
//         };
//     }
//     focusField() {
//         const { focused } = this.state;
//         this.setState({
//             focused: !focused
//         });
//     }
//     handleChange(event) {
//         const { target } = event;
//         const { value } = target;
//         this.setState({
//             value: value
//         });
//     }
//     render() {
//         const { type, label, style, id } = this.props;
//         const { focused, value } = this.state;

//         let inputClass = "fluid-input";
//         if (focused) {
//             inputClass += " fluid-input--focus";
//         } else if (value !== "") {
//             inputClass += " fluid-input--open";
//         }

//         return (
//             <div className={inputClass} style={style}>
//                 <div className="fluid-input-holder">

//                     <input
//                         className="fluid-input-input"
//                         type={type}
//                         id={id}
//                         onFocus={this.focusField.bind(this)}
//                         onBlur={this.focusField.bind(this)}
//                         onChange={this.handleChange.bind(this)}
//                         autocomplete="off"
//                     />
//                     <label className="fluid-input-label" forHtml={id}>{label}</label>

//                 </div>
//             </div>
//         );
//     }
// }

// class Button extends React.Component {
//     render() {
//         return (
//             <div className={`button ${this.props.buttonClass}`} onClick={this.props.onClick}>
//                 {this.props.buttonText}
//             </div>
//         );
//     }
// }

// class Login extends React.Component {
//     render() {

//         const style = {
//             margin: "15px 0"
//         };
//         return (
//             <div className="login-container">
//                 <div className="title">
//                     Login
//                 </div>
//                 <FluidInput type="text" label="name" id="name" style={style} />
//                 <FluidInput type="phone" label="number" id="number" style={style} />
//                 <Button buttonText="submit" buttonClass="submit-button" />
//             </div>
//         );
//     }
// }

// function Login(){
//     const auth = getAuth();
//     auth.languageCode = 'it';

//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
//     window.recaptchaVerifier.render();

//     const [phoneNumber, setPhoneNumber] = useState(0);
//     const appVerifier = window.recaptchaVerifier;
//     const [code, setCode] = useState(0);

//     const generateOTP = () => {
//         // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         // .then((confirmationResult) => {
//         //     // SMS sent. Prompt user to type the code from the message, then sign the
//         //     // user in with confirmationResult.confirm(code).
//         //     window.confirmationResult = confirmationResult;
//         // }).catch((error) => {
//         //     // Error; SMS not sent
//         // });
//     }
    
//     const login = () => {
//         // window.confirmationResult.confirm(code).then((result) => {
//         //     // User signed in successfully.
//         //     const user = result.user;
//         //     console.log(user);
//         //   }).catch((error) => {
//         //     // User couldn't sign in (bad verification code?)
//         //   });
//     }

//     return (
//         <div>
//             <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
//             <div id='recaptcha-container'></div>
//             <button onClick={generateOTP}>Generate OTP</button>
//             <input type="number" value={code} onChange={(e) => setCode(e.target.value)}/>
//             <button onClick={login}>LogIn</button>
//         </div>
//     )
// }
function Login(){
render();
function render(){
	window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container');
	window.recaptchaVerifier.render();
}
	// function for send message
function generateOTP(){
	var number = document.getElementById('number').value;
        firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
		window.confirmationResult = confirmationResult;
		// coderesult = confirmationResult;
		// document.getElementById('sender').style.display = 'none';
		// document.getElementById('verifier').style.display = 'block';
	}).catch(function(error){
		alert(error.message);
	});
}
	// function for code verify
function login(){
	var code = document.getElementById('verificationcode').value;
	    window.confirmationResult.confirm(code).then(function(){
		// document.getElementsByClassName('p-conf')[0].style.display = 'block';
		// document.getElementsByClassName('n-conf')[0].style.display = 'none';
    // window.location='home.html';
	}).catch(function(){
		// document.getElementsByClassName('p-conf')[0].style.display = 'none';
		// document.getElementsByClassName('n-conf')[0].style.display = 'block';
	})
}
}
export default Login;