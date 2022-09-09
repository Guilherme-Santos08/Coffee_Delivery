import Logo from '../../assets/Logo.png'
import { Nav } from './Nav'

export function Header() {
  return (
    <header className='w-full p-4 flexBetweenCenter md:max-w-6xl md:mx-auto lg:py-8'>
      <div>
        <img src={Logo} alt='' />
      </div>

      <Nav itemCar={2} />
    </header>
  )
}
