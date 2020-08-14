import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-primary: #3A2313;
  --color-secondary: #FA9852;
  --color-secondary-hover: #C77942;
  /* --color-: #FBC59E;
  --color-: #7A604D; */
}

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
