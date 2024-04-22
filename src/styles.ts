import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1023px',
  tablet: '767px'
}

export const Colors = {
  blackColor: '#111111',
  greenColor: '#155956',
  grayColor: '#333333',
  whiteColor: '#eeeeee',
  lightGrayColor: '#a3a3a3'
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  list-style: none;
  scroll-behavior: smooth;
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

  button {
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: ${Colors.whiteColor};
      transition: all ease-in-out 0.2s;
      color: ${Colors.greenColor};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
}
`
