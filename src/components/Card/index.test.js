import Card from './'
import { screen, fireEvent } from '@testing-library/react'
import { render } from '../../utils/test'

describe('Card', () => {
  test('Should render title and image', async () => {
    render(<Card title="Maxime Lebrun" label="Intégrateur SEO" picture="/12.jpg" />)
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Maxime Lebrun/i)
    expect(cardPicture.src).toBe('http://localhost/12.jpg')
    expect(cardTitle.textContent).toBe(' Maxime Lebrun ')
  })
  test('Should add ⭐️ around title', async () => {
    render(<Card title="Maxime Lebrun" label="Intégrateur SEO" picture="/12.jpg" />)
    const cardTitle = screen.getByText(/Maxime Lebrun/i)
    // eslint-disable-next-line testing-library/no-node-access
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Maxime Lebrun ⭐️')
  })
})
