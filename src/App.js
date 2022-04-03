
import "./App.css";
import { useState } from "react";
import { login } from "./services/authService";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClick = () => {
    login(email , password).then(resp => {
      if(resp) {

      }else {

      }
    })
  }
  return (
    <>
      <div className="fixed h-full w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
        <div style={{'backgroundImage': `url(${'https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'})`}} className="hidden lg:block md:block h-full bg-transparent bg-cover "></div>
        <div className="h-full flex flex-col justify-center lg:px-16 md:px-16 px-4 gap-4">
          <input
            type="email"
            className="w-full  border-gray-100 p-4 focus:border-indigo-500 border-2 outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full border-2 border-gray-100 p-4 focus:border-indigo-500 outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={email.length == 0 || password.length == 0}
            onClick={() => login(email, password)}
            className="w-full bg-black text-white p-4 disabled:bg-gray-500"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
