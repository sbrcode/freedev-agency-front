import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import EmailInput from '../EmailInput'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.darkGrey};
`

const Footer = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <FooterContainer>
      <EmailInput />
      <NightModeButton onClick={() => toggleTheme()}>Switch mode{theme === 'light' ? '🌙' : ' ☀️'}</NightModeButton>
    </FooterContainer>
  )
}

export default Footer
