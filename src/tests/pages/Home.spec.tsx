import { render, screen } from '@testing-library/react'

import { Home } from '../../pages/Home'

describe('Home', () => {
  it('renders a hello world', () => {
    render(<Home />)
    screen.getByRole('heading', { name: /encontre o café perfeito para qualquer hora do dia/i })
    screen.getByText(/com o coffee delivery você recebe seu café onde estiver, a qualquer hora/i)
    screen.getByText(/compra simples e segura/i)
    screen.getByText(/embalagem mantém o café intacto/i)
    screen.getByText(/embalagem mantém o café intacto/i)
    screen.getByText(/o café chega fresquinho até você/i)
  })
})
