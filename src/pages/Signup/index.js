import { useState, useEffect } from "react";
import {
  PageContainer,
  PageTitle,
  ErrorMensage,
} from "../../components/MainComponentes";
import { PageArea } from "./styled";
import Api from "../../helpers/Api";
import { doLogin } from "../../helpers/authHandler";

const SignUp = () => {
  const api = Api;

  const [name, setName] = useState("");
  const [stateLoc, setStateLoc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setconfirmPassword] = useState("");
  const [disabled, setDisable] = useState(false);
  const [error, setError] = useState("");
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const getState = async () => {
      const sList = await api.getState();
      setStateList(sList);
    };
    getState();
  }, [api]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    setError("");

    if (password !== confirmPassowrd) {
      setError("As senhas são diferentes");
      setDisable(false);
      return;
    }

    const json = await api.register(name, email, password, stateLoc);

    if (json.error) {
      setError(json.error);

      return;
    } else {
      doLogin(json.token);
      window.location.href = "/";
    }
    setDisable(false);
  };
  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMensage>{error}</ErrorMensage>}

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select
                value={stateLoc}
                onChange={(e) => setStateLoc(e.target.value)}
                disabled={disabled}
                required
              >
                <option></option>
                {stateList.map((i, index) => (
                  <option key={index} value={i.id}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input
                type="email"
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Confirmar Senha</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={confirmPassowrd}
                onChange={(e) => setconfirmPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input" disabled={disabled}>
              <button disabled={disabled}>Fazer Cadastro</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default SignUp;
