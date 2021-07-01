import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../redux/login/loginActions";
import auth from "../utils/auth";
import "../styles/Login.css";

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const signupReducer = useSelector(state => state.signup);
    const { signupLoading, signupResponse, signupError } = signupReducer;

    const loginReducer = useSelector(state => state.login);
    const { loginLoading, loginResponse, loginError } = loginReducer;

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        password1: "",
    });

    const handleLoginEmail = e => {
        setLoginData({
            ...loginData,
            email: e.target.value,
        });
    };

    const handleLoginPassword = e => {
        setLoginData({
            ...loginData,
            password: e.target.value,
        });
    };

    const handleLoginSubmit = e => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (loginData.email === "" || loginData.password === "") {
            alert("Please fill all the fields!");
            e.preventDefault();
        } else if (!emailRegex.test(loginData.email)) {
            e.preventDefault();
            alert("Please enter a valid email!");
        } else {
            e.preventDefault();
            dispatch(login(loginData));
        }
    };

    const handleSignupName = e => {
        setSignupData({
            ...signupData,
            fullName: e.target.value,
        });
    };

    const handleSignupEmail = e => {
        setSignupData({
            ...signupData,
            email: e.target.value,
        });
    };

    const handleSignupPassword = e => {
        setSignupData({
            ...signupData,
            password: e.target.value,
        });
    };

    const handleSignupPassword1 = e => {
        setSignupData({
            ...signupData,
            password1: e.target.value,
        });
    };

    const handleSignupSubmit = e => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (
            signupData.email === "" ||
            signupData.password === "" ||
            signupData.password1 === "" ||
            signupData.fullName === ""
        ) {
            e.preventDefault();
            alert("Please fill all the fields!");
        } else if (!emailRegex.test(signupData.email)) {
            e.preventDefault();
            alert("Please enter a valid email!");
        } else if (signupData.password !== signupData.password1) {
            e.preventDefault();
            alert("Passwords do not match!");
        } else {
            e.preventDefault();
            dispatch(signup(signupData));
        }
    };

    useEffect(() => {
        const loginForm = document.querySelector("form.loginForm");
        const showLoginBtn = document.querySelector("label.login");
        const showSignupBtn = document.querySelector("label.signup");
        const loginText = document.querySelector(".loginTitleWrapper .login");

        showSignupBtn.addEventListener("click", () => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        });
        showLoginBtn.addEventListener("click", () => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        });
    });

    useEffect(() => {
        const showLogin = () => {
            const loginForm = document.querySelector("form.loginForm");
            const loginText = document.querySelector(".loginTitleWrapper .login");
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        };

        if (signupError.length > 0) {
            alert("Something went wrong please try again");
        } else if (Object.keys(signupResponse).length) {
            alert(signupResponse.message);
            if (signupResponse.message === "You are now registered successfully") {
                setSignupData({
                    fullName: "",
                    email: "",
                    password: "",
                    password1: "",
                });

                showLogin();
            }
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signupReducer]);

    useEffect(() => {
        if (loginError) {
            alert("Something went wrong please try again");
        } else if (loginResponse.user !== undefined) {
            auth.login(() => {
                localStorage.removeItem("User");
                localStorage.setItem("User", JSON.stringify(loginResponse));
                history.push("/");
                window.location.reload();
            });
        } else {
            console.log("Loading: ", loginLoading);
            console.log("Response: ", loginResponse);
            console.log("Error: ", loginError);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginReducer]);

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginTitleWrapper">
                    <div className="loginTitle login">Login Form</div>
                    <div className="loginTitle signup">Signup Form</div>
                </div>

                <div className="loginFormContainer">
                    <div className="slideControles">
                        <input type="radio" name="slider" id="login" defaultChecked />
                        <input type="radio" name="slider" id="signup" />
                        <label htmlFor="login" className="loginSlid login">
                            Login
                        </label>
                        <label htmlFor="signup" className="loginSlid signup">
                            Signup
                        </label>
                        <div className="slideTab"></div>
                    </div>
                    <div className="loginFormInner">
                        <form className="loginForm">
                            <div className="loginField">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    required
                                    value={loginData.email}
                                    onChange={handleLoginEmail}
                                />
                            </div>
                            <div className="loginField">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={loginData.password}
                                    onChange={handleLoginPassword}
                                />
                            </div>
                            <div className="loginPassLink">
                                <a href="/">Forgot password?</a>
                            </div>
                            <div className="loginField">
                                <button onClick={handleLoginSubmit}>
                                    {loginLoading ? <i className="fas fa-spinner spin"></i> : "Login"}
                                </button>
                            </div>
                        </form>

                        <form className="signupForm">
                            <div className="loginField">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    value={signupData.fullName}
                                    onChange={handleSignupName}
                                />
                            </div>
                            <div className="loginField">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    required
                                    value={signupData.email}
                                    onChange={handleSignupEmail}
                                />
                            </div>
                            <div className="loginField">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={signupData.password}
                                    onChange={handleSignupPassword}
                                />
                            </div>
                            <div className="loginField">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                    value={signupData.password1}
                                    onChange={handleSignupPassword1}
                                />
                            </div>
                            <div className="loginField">
                                <button type="submit" onClick={handleSignupSubmit}>
                                    {signupLoading ? <i className="fas fa-spinner spin"></i> : "Signup"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
