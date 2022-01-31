import styled from "styled-components";

export const Button = styled.button`
  border: none ;
  outline: none ;
  cursor: pointer ;
  border-radius: 50px ;
  color: white ;
  background-color: transparent ;
  margin-right: 15px ;
  margin-bottom: -12px ;
  transition: .3s ease-out ;
  font-size: 18px ;
  padding: ${(props) => props.pd.join(" ") || "12px 10px" };

  &:hover {
    background-color: black
  }
`