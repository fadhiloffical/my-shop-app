import { useState } from "react";
import { Link } from "react-router-dom";
import showPass from '../img/show.png'
import hidePass from '../img/hide.png'

interface LoginRequestBody {
    username: string;
    password: string;
}

const Signup = ({ onLogin }: { onLogin: () => void }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors: any = {};
        if (formData.username.trim() === "") {
            validationErrors.username = "Username is required";
        }
        if (formData.password.trim() === "") {
            validationErrors.password = "Password is required";
        }
        if (formData.confirmPassword.trim() === "") {
            validationErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match";
        }
        if (formData.email.trim() === "") {
            validationErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            const requestBody: LoginRequestBody = {
                username: 'mor_2314',
                password: '83r5^_',
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
                onLogin()
            } catch (error) {
                alert("Failed to login. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setErrors(validationErrors);
        }
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
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && <span className="error">{errors.username}</span>}
                        </div>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <img src={hidePass} alt="Show password" /> : <img src={showPass} alt="Show password" />}
                            </span>
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <div className="password-input">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />

                            <span className="password-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <img src={hidePass} alt="Show password" /> : <img src={showPass} alt="Show password" />}
                            </span>
                            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                        </div>
                        <div className="password-input">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <button className="login-button" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Logging in..." : "Sign Up"}
                        </button>
                    </form>
                    <p className="login-sign-link">Don't have an account?{" "}<Link to="/">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
