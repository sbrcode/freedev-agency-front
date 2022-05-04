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
  border: 6px solid ${colors.red};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  margin: 5px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 30px;
  ${({ theme }) =>
    theme === 'light'
      ? `color: ${colors.primary};  background-color: ${colors.light};`
      : `color: ${colors.light};  background-color: ${colors.primary};`}
`
