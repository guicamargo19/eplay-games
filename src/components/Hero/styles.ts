import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  background-color: ${Colors.blackColor};
  padding: 16px;
  max-width: 290px;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
