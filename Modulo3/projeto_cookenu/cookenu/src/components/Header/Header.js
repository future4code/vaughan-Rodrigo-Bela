import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FAAF7A;
    box-shadow: 1px 1.5px 6px 1px;
    border: none;
    border-radius: 1px;
    height: 5vh;
    width: 100%;
`

const Header = () => {
    return(
        <div>
            <Modelo>
            <h2> CookEnu </h2> 
            <button> Login </button>
            </Modelo> 
        </div>
    )
}


export default Header;

