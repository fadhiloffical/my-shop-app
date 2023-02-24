import { useState } from "react";
import { Link } from "react-router-dom";
import showPass from '../img/show.png'
import hidePass from '../img/hide.png'

interface LoginRequestBody {
    username: string;
    password: string;
}

const Login = ({ onLogin }: { onLogin: () => void }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate input fields
        let isValid = true;
        if (!username.trim()) {
            setUsernameError("Please enter a username");
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError("Please enter a password");
            isValid = false;
        }
        if (!isValid) {
            return;
        }

        setIsSubmitting(true);

        const requestBody: LoginRequestBody = {
            username: username,
            password: password,
        };

        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }
            onLogin();
        } catch (error) {
            console.error(error);
            // Show error notification
            alert("Failed to login. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
        setUsernameError("");
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setPasswordError("");
    };

    return (
        <div className="container">
            <div className="left"></div>
            <div className="right">
                <div className="right-wrapper">
                    <div className="logo"></div>
                    <h4>APP NAME</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="password-input">
                            <input
                                type="text"
                                id="username"
                                value={username}
                                placeholder="Username"
                                onChange={handleUsernameChange}
                            />
                            {usernameError && <div className="error">{usernameError}</div>}
                        </div>

                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <img src={hidePass} alt="Show password" /> : <img src={showPass} alt="Show password" />}
                            </span>
                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <button className="login-button" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Logging in..." : "Login"}
                        </button>
                    </form>
                    <p className="login-sign-link">Don't have an account?{" "}<Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
