import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

type GroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 16px;
  }
`

export const Group = styled.div<GroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    border: 1px solid ${Colors.whiteColor};
    background-color: ${Colors.whiteColor};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    outline-color: ${Colors.blackColor};

    &.error {
      border: 1px solid darkred;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.whiteColor};
  background-color: ${(props) =>
    props.isActive ? Colors.greenColor : Colors.blackColor};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    opacity: 80%;
    transition: all ease-in-out 0.2s;
  }

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
