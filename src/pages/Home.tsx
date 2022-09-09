import LogoCoffe from '../assets/LogoCoffe.png'
import { Benefits } from '../components/Benefits'

export function Home() {
  return (
    <main className='w-full p-4 md:max-w-6xl md:mx-auto lg:py-8 flexBetweenCenter'>
      <div className='intro max-w-xl mx-auto lg:mx-0'>
        <h1 className='text-2xl fontExtraBoldBaloo2 md:text-5xl'>
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className='text-base text-base-subtitle mt-3 md:text-xl'>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </p>

        <Benefits />
      </div>

      <div>
        <img src={LogoCoffe} alt='' className='hidden lg:block' />
      </div>
    </main>
  )
}
