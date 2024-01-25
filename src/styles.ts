import { createGlobalStyle } from 'styled-components'

export const Colors = {
  blackColor: '#111111',
  greenColor: '#10ac84',
  grayColor: '#333333',
  whiteColor: '#eeeeee'
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style: none;
}

body {
  background-color: ${Colors.blackColor};
  color: ${Colors.whiteColor};
  padding-top: 40px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
