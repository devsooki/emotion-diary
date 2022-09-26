import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Nanum Gothic', sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #fce4ea;
  }
  ul,li {
    list-style: none;
  }
  input {
    outline: none;
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;