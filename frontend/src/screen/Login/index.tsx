import styled from "styled-components";

const FullContent = styled.section`
  height: 100vh;
  width: 100vw;
  background: #7b2cbf;
  display: flex;


  .left-content {
    width: 50vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
      font-size: 4em;
      color: #FFF;
    }

    @media only screen and (max-width:600px){
      h1{
        display:none;
      }
    }

    @media only screen and (max-width:600px){
      width:100%;
      height: auto;

      img{
        width: 30vw;
      }
    }

    img{
      width: 40vw;
    }

  }

  .right-content {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width:600px){
    flex-direction:column;
    .left-content{
      width: 100vw;
      height: 25vh;
      
    }
    .right-content{
      align-items: flex-start;
      width: 100vw;
      height: 75vh;
    }
  }
`;

const CardLogin = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background: #a16ad9;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;

  @media only screen and (max-width:950px) {
    width: 85%;
  }

  @media only screen and (max-width:600px){
    width: 90%;
  }


  h1{
    color:#FFF;
  }

  .sing-up-click {
    width: 100%;
    font-size: 15px;
  }

  .sing-up-click span {
    color: #F2F2F2;
  }

  .sing-up {
    text-decoration: none;
    color: #F2F2F2;
    font-weight: 400;
    align-self: flex-end;
  }
`;

const TextField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;

  input{
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #fff;
    color: rgb(121, 111, 111);
  }

  label{
    color: #F2F2F2;
    margin-bottom: 10px;
  }

  input::placeholder {
  color: #A1A1A1;
  }
`;

const ButtonLogin = styled.button`
  width: 100%;
  padding: 16px 0;
  margin: 25px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  background: #7B2CBF;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 15px 40px -12px #00000056;
`

import logo from "../../assets/logo.png";

export function Login() {
  return (
    <>
      <FullContent>
        <div className="left-content">
          <h1>TCCHEST</h1>
          <img src={logo} alt="logo-tcchest" />
        </div>
        <div className="right-content">
          <CardLogin>
            <h1>Login</h1>
            <TextField>
              <label htmlFor="email">Email</label>
              <input
              type="email"
              id="email" 
              placeholder="Digite seu email" 
              />
            </TextField>
            <TextField>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
              />
            </TextField>
            <ButtonLogin type="submit">Entrar</ButtonLogin>
            <div className="sing-up-click">
              <span>Ainda não tem login? </span>
              <a className="sing-up" href="/user/register">Cadastrar</a>
            </div>
          </CardLogin>
        </div>
      </FullContent>
    </>
  );
}
