import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 90px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 40px;

  a {
    text-decoration: none;
  }

  h1 {
    font-family: 'Rubik Mono One', monospace;
    display: flex;
    font-size: 30px;
    text-transform: uppercase;
    color: ${Colors.whiteColor};

    p {
      font-family: 'Rubik Mono One', monospace;
      color: ${Colors.greenColor};
    }
  }

  nav a,
  span {
    color: ${Colors.whiteColor};
    font-weight: bold;
    text-decoration: none;
    transition: all ease-in-out 0.2s;

    &:hover {
      color: ${Colors.greenColor};
      transition: all ease-in-out 0.2s;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 20px;
  }
`

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    &.is-open {
      display: none;
    }

  @media (max-width: ${breakpoints.tablet}) {
    &.is-open {
      display: block;
    }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;
  font-family: 'Calibri', sans-serif;

  span {
    padding-left: 6px;
  }

  img {
    margin-left: 16px;
    margin-top: -4px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    display: block;
    width: 100%;
    background-color: ${Colors.whiteColor};
    height: 2px;
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Links} {
      display: none;
    }

    h1 {
      padding-right: 50px;
      font-size: 28px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 26px;
  }
`
