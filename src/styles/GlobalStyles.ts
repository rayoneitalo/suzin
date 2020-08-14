import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  width: 100%;
}

*, input, button {
  border: 0;
  background: none;
  
}
`;
