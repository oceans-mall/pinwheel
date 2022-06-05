import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

export const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <form
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="Email"
        autoComplete="current-email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        autoComplete="current-password"
        placeholder="**********"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
    </form>
  );
};

export default Login;
