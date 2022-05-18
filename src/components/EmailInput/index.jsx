import { useState } from 'react'
import { useTheme } from '../../utils/hooks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
  margin-top: 5px;
  margin-bottom: 15px;
`

const EmailInput = () => {
  const { theme } = useTheme()
  const [inputValue, setInputValue] = useState('')

  console.log(inputValue)

  return (
    <InputWrapper>
      <label>Adresse email</label>
      <StyledInput theme={theme} onChange={(e) => setInputValue(e.target.value)} />
    </InputWrapper>
  )
}

export default EmailInput
