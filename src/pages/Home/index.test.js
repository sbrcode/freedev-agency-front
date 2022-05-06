import Home from './'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

it('should render Home', () => {
  render(
    <MemoryRouter>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </MemoryRouter>
  )
})
