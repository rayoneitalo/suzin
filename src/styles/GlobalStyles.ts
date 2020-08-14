import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-primary: #2E1D15;       /** h1 */
  --color-secondary: #A85D37;     /** h2, border */
  --color-text: #695044;          /** p, span */
  --color-background: #F2EEEB;
  /* --color-background: #D6BA9D; */
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
