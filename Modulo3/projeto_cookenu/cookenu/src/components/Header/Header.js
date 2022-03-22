import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/Logo1.png";
import RedesS from "../../assets/redesS.png"

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
  max-width: 6rem;
`;

const Header = () => {
  return (
    <div>
      <Modelo>
        <Logo_Style src={logo1} />
        <Logo_Style src={RedesS} />
      </Modelo>
    </div>
  );
};

export default Header;
