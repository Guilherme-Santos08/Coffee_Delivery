import LogoCoffe from '../assets/LogoCoffe.png'
import { Benefits } from '../components/Benefits'

export function Home() {
  return (
    <main
      className='
      bg-[url("../assets/hero-pattern.png")]
      bg-cover
      bg-no-repeat
      '
    >
      <div
        className=' 
        flex justify-between 
        w-full p-4 mt-2 
        md:max-w-6xl md:mx-auto md:mt-20 
        lg:py-8
        '
      >
        <div className='intro max-w-xl mx-auto lg:mx-0'>
          <h1 className='fontExtraBoldBaloo2 text-2xl md:text-5xl'>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className='text-base text-base-subtitle mt-4 md:text-xl'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>

          <Benefits />
        </div>

        <div>
          <img src={LogoCoffe} alt='' className='hidden lg:block' />
        </div>
      </div>
    </main>
  )
}
