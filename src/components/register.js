import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../services/authService";

function Register({ toggleLogin, loading, setLoading }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // On Register Button Click
  const registerClick = () => {
    setLoading(true);

    // Called Register Function with name , phone ,email , password
    register(name, phone, email, password).then((resp) => {
      if (resp.status === "SUCCESS") {
        toast("Registered Success", {
          type: "success",
        });
        setLoading(false);
        onToggleLogin();
      } else {
        toast(resp.message, {
          type: "error",
        });
        setLoading(false);
      }
    });
  };

  const onToggleLogin = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    toggleLogin();
  };

  return (
    <>
      <div className="flex flex-col justify-center w-1/2 h-full gap-4 px-4 lg:px-16 md:px-16 ">
        <input
          type="name"
          className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={
            email.length === 0 ||
            password.length === 0 ||
            name.length === 0 ||
            phone.length < 10 ||
            loading
          }
          onClick={registerClick}
          className="inline-flex items-center px-4 py-4 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 rounded-md shadow disabled:cursor-not-allowed hover:bg-indigo-400 disabled:bg-gray-500"
        >
          {loading ? (
            <svg
              className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth={4}
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            ""
          )}
          Register
        </button>
        <p
          onClick={toggleLogin}
          className="my-4 text-sm text-center text-indigo-500 cursor-pointer"
        >
          Already have an account? Login
        </p>
      </div>
    </>
  );
}

export default Register;
