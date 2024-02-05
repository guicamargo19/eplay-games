import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  padding: 24px;
  background-color: ${Colors.grayColor};
  border-radius: 8px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.whiteColor};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
