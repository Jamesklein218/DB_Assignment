import Page from "../layout/Page";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

export default function Login() {
  const [token, setToken] = useLocalStorage<string | null>('token', null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${API_URL}login`, {
      username,
      password
    })
      .then((res) => {
        setToken(res.data);
      })
      .catch(() => {
        setErrorMsg("Wrong username or password");
      })
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <Page>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User name</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  className="input input-bordered"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
}
