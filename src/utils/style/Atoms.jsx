import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid;
  ${({ theme }) => (theme === 'light' ? `${colors.fontLight};` : `${colors.fontDark};`)}
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  margin: 5px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 30px;
  ${({ theme }) =>
    theme === 'light'
      ? `color: ${colors.fontDark};  background-color: ${colors.backgroundDark};`
      : `color: ${colors.fontLight};  background-color: ${colors.fontDark};`}
`

export const ErrorStyle = styled.span`
  display: flex;
  margin: 240px;
`
