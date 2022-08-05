import { useNavigate } from "react-router-dom";
import { Page, Form } from "./style.js";
import api from "../../api/api.js";
import { useState } from "react";

//icons
import { VscGithub } from "react-icons/vsc";
import userEvent from "@testing-library/user-event";

function LoginPage() {
  const [token, setToken] = useState([]);

  const navigate = useNavigate();

  function entra(e) {
    e.preventDefault();

    let usuario = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    api
      .post("/auth/login", { name: usuario, password: pass })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.name);
        setToken(response.data.token);
        navigate("/home");
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log("errado");
      });


  }

  return (
    <Page>
      <Form>
        <div className="titleLogin">
          <h1>Bem vindo!</h1>
          <span>
            Olá, estamos muito felizes por te receber aqui, logue junte-se a
            nós.
          </span>
        </div>
        <form className="inputs" onSubmit={(e) => entra(e)}>
          <input
            type="text"
            id="user"
            placeholder="Usuário"
            name="user"
            required
          />
          <input
            type="password"
            id="pass"
            placeholder="Senha"
            name="password"
            required
          />
          <span>Esqueceu sua senha?</span>
          <input id="submit" type="submit" value="Logar-se" />
        </form>
        <div className="continueWith">
          <hr className="hrLeft" />
          <span className="textHr">Ou continuar com</span>
          <hr className="hrRight" />
        </div>
        <div className="iconWith">
          <VscGithub className="icon" />
        </div>
        <div className="registerNow">
          <span>
            Ainda não é membro?{" "}
            <span className="registerText">Registre-se agora!</span>
          </span>
        </div>
      </Form>
    </Page>
  );
}

export default LoginPage;
