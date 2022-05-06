import Footer from './'
import { screen, fireEvent } from '@testing-library/react'
import { render } from '../../utils/test'

describe('Footer', () => {
  it('Should render without crashing', async () => {
    render(<Footer />)
  })
  it('Change theme', async () => {
    render(<Footer />)
    const nightModeButton = screen.getByRole('button')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Switch mode ☀️')
  })
})
