import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  display: block;
  height: 620px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  a {
    transition: all ease-in-out 0.2s;

    &:hover {
      color: ${Colors.greenColor};
      border-color: ${Colors.greenColor};
      transition: all ease-in-out 0.2s;
    }
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
