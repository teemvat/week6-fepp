import { useState } from "react";

const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = async ( {email, password}, {setIsAuthenticated} ) => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            const user = await response.json();
            localStorage.setItem("user", JSON.stringify(user));
            console.log("User logged in successfully!");
            setIsAuthenticated(true);
          } else {
            console.error("Login failed", response);
          }
          setSuccess(true);
        } catch (error) {
            setError(error);
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
      };
    return { error, loading, success, handleLogin };
};

export default useLogin;