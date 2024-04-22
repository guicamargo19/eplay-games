import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${Colors.grayColor};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${Colors.whiteColor};
  display: block;
  height: 100%;

  img {
    display: block;
    height: 250px;
    width: 100%;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
  margin-top: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Overlay = styled.div`
  opacity: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all ease-in-out 0.3s;

  &:hover {
    opacity: 1;
    transition: all ease-in-out 0.3s;
  }
`
