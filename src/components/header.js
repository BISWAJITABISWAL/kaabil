import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Header() {
  let navigate = useNavigate();
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  });

  const logoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="sticky top-0 flex justify-between p-4 mb-4 rounded-md bg-gray-50">
        <h4 className="text-3xl font-extrabold">KAABIL</h4>
        {isToken ? (
          <button
            onClick={logoutClick}
            className="px-4 py-2 font-bold text-white bg-indigo-500 rounded-md"
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Header;
