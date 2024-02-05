import styled from 'styled-components'
import { Colors } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const Group = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    border: 1px solid ${Colors.whiteColor};
    background-color: ${Colors.whiteColor};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
