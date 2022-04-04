import { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";
const Auth = () => {
  // Variable Defined
  const [isLogin, setIsLogin] = useState(true);

  const [loading, setLoading] = useState(false);

  // Function to toggle login and register form
  const toggleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setIsLogin(!isLogin);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})`,
        }}
        className="hidden w-1/3 h-full bg-transparent bg-cover lg:block md:block bg-gray-50"
      ></div>
      <div className="flex items-center justify-center w-full h-full bg-gray-50">
        {isLogin ? (
          <Login
            toggleLogin={toggleLogin}
            loading={loading}
            setLoading={setLoading}
          />
        ) : (
          <Register
            toggleLogin={toggleLogin}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </div>
    </>
  );
};

export default Auth;
