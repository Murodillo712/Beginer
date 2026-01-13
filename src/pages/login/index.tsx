import { useState } from "react";
import { useLogin } from "./api/useLogin";
import { useEffect } from "react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();

  useEffect(() => {
    if (loginMutation.isSuccess) {
      setLogin("");
      setPassword("");
    }
  }, [loginMutation.isSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login && password) {
      loginMutation.mutate({
        username: login,
        password: password,
      });
    }
  };

  return (
    <div className="login-container w-full h-screen flex flex-col justify-center items-center">
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit} className="login-form flex flex-col gap-4">
        <div className="login-input flex flex-col ">
          <label>Login:</label>
          <input className="text-black w-[300px] h-[35px] rounded-lg  "
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className="password-input flex flex-col ">
          <label>Password:</label>
          <input className="text-black w-[300px] h-[35px] rounded-lg  "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          className="bg-blue-700 text-white rounded-lg w-[300px] h-[35px] disabled:opacity-50" 
          type="submit"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Loading..." : "Submit"}
        </button>
        
        {loginMutation.isError && (
          <p className="text-red-500 text-center">Xato: Login yoki parol noto'g'ri</p>
        )}
        
        {loginMutation.isSuccess && (
          <p className="text-green-500 text-center">Muvaffaqiyatli!</p>
        )}
      </form>
    </div>
  );
}
