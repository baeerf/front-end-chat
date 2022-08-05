import styled from "styled-components";

export const Page = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;
export const Form = styled.div`
  width: 350px;
  padding: 40px 10px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-content: center;
  box-shadow: 0.4px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    1px 6.7px 5.3px rgba(0, 0, 0, 0.028), 1.9px 12.5px 10px rgba(0, 0, 0, 0.035),
    3.4px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    6.3px 41.8px 33.4px rgba(0, 0, 0, 0.05), 15px 100px 80px rgba(0, 0, 0, 0.07);

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  }

  .inputs input {
    width: 90%;
    height: 50px;
    border-radius: 7px;
    margin: 5px 0;
    border: none;
    text-indent: 15px;
    background-color: #f3f6f9;
    font-family: "Poppins", sans-serif;

    &:focus {
      outline: none;
    }
  }
  #submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #0099ff;
    color: #fff;
    cursor: pointer;
    transition: 0.5s ease;
    opacity: 1;
    font-family: "Poppins", sans-serif;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    box-shadow: 0px 8px 13px -3px rgba(0, 0, 0, 0.1),
      0px 5px 23px -3px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #0079d1;
    }
    &:active {
      transform: scale(0.98);
    }
  }
  .titleLogin {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .titleLogin h1 {
    margin-bottom: 20px;
    font-weight: 400;
  }

  .titleLogin span {
    font-size: 17px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .inputs span {
    width: 100%;
    display: flex;
    justify-content: right;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 40px;
    font-size: 13px;
    color: #555;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .inputs span:hover {
    color: #000;
  }
  .hrLeft {
    display: flex;
    margin-top: 40px;
    width: 50px;
    background-image: linear-gradient(to left, #0099ff, transparent);
    border: 0;
    height: 1px;
  }
  .hrRight {
    display: flex;
    margin-top: 40px;
    width: 50px;
    background-image: linear-gradient(to right, #0099ff, transparent);
    border: 0;
    height: 1px;
  }

  .continueWith {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .continueWith span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 3px;
    text-align: center;
    margin-top: 40px;
    font-size: 12px;
  }

  .iconWith {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 0;
    cursor: pointer;
  }

  .icon {
    margin: 0 30px;
    height: 30px;
    font-size: 50px;
    transition: 0.2s ease;
  }

  .icon:hover {
    transform: translateY(-3px);
  }

  .registerNow {
    bottom: 0;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    color: #555;
    transition: 0.3s ease;
  }

  .registerText {
    color: #0099ff;
  }

  .registerNow:hover {
    color: #000;
  }
`;
