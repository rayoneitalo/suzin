import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-primary: #2E1D15;       /** h1 */
  --color-secondary: #CEA683;     /** h2, border */
  --color-text: #695044;          /** p, span */
  --color-background: #F6F3EF;
  --color-input: #808080;

  --font-headings: Lato;
  --font-text: Lato;

  font-size: 60%;

  @media (min-width: 700px) {
    font-size: 62.5%;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-text), sans-serif;
}

html, body, #root {
  min-width: 100vw;
  min-height: 100vh;

  background-color: var(--color-background);
}

*, input, button {
  border: 0;
  background: none;
  outline: none;
}

a { text-decoration: none }

input { color: var(--color-input) }

span, p, label {
  color: var(--color-text)
}

::placeholder, ::-ms-input-placeholder, input {
  color: var(--color-input)
}

.container {
  width: 100%;
  height: 100%;
  margin-top: 4rem;

  @media (min-width: 700px) {
    margin-top: 5rem;
  }
}
`;
