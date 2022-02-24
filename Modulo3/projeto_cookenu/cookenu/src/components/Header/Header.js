import React from "react";
// import { useNavigate } from "react-router-dom";
// import Router from "../../routes/Router";
import styled from "styled-components";
import logo1 from "../../assets/Logo1.png";

const Modelo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #faaf7a;
  box-shadow: 1px 1px 15px;
  border: none;
  height: 5vh;
  width: 100%;
`;

const Logo_Style = styled.img`
  width: 110px;
`;

const Header = () => {
  // const navigate = useNavigate();
  // const volta_Login = () => {
  //     navigate("/login");
  // };

  return (
    <div>
      <Modelo>
        <Logo_Style src={logo1} />
        <button> Login </button>
      </Modelo>
    </div>
  );
};

export default Header;
