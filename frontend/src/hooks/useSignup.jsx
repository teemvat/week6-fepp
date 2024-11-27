import { useState } from "react";

const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSignup = async ( {email, password}, {setIsAuthenticated} ) => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch("/api/users/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            const user = await response.json();
            sessionStorage.setItem("user", JSON.stringify(user));
            console.log("User signed up successfully!");
            setIsAuthenticated(true);
          } else {
            console.error("Signup failed", response);
          }
          setSuccess(true);
        } catch (error) {
            setError(error);
            console.error("Error during signup:", error);
        } finally {
            setLoading(false);
        }
      };
    return { error, loading, success, handleSignup };
};

export default useSignup;