import styled from "styled-components";

export const Button = styled.button`
  border: none ;
  outline: none ;
  cursor: pointer ;
  border-radius: 10px ;
  color: white ;
  background-color: transparent ;
  padding: ${(props) => props.pd || "0px" };
`