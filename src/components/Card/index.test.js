import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  test('Should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card title="Maxime Lebrun" label="Intégrateur SEO" picture="/12.jpg" />
      </ThemeProvider>
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Maxime Lebrun/i)
    expect(cardPicture.src).toBe('http://localhost/12.jpg')
    expect(cardTitle.textContent).toBe(' Maxime Lebrun ')
  })
  test('Should add ⭐️ around title', async () => {
    render(
      <ThemeProvider>
        <Card title="Maxime Lebrun" label="Intégrateur SEO" picture="/12.jpg" />
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Maxime Lebrun/i)
    // eslint-disable-next-line testing-library/no-node-access
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Maxime Lebrun ⭐️')
  })
})
