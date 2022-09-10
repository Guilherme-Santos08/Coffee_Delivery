import { render, screen } from '@testing-library/react'

import { Home } from '../../pages/Home'

describe('Home', () => {
  it('renders a hello world', () => {
    render(<Home />)
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.logTestingPlaygroundURL()

    // screen.getByRole('heading', { name: /Hello World/i })
  })
})
