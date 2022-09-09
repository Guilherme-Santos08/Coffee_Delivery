interface NavProps {
  itemCar: number
}

export function Nav({ itemCar }: NavProps) {
  return (
    <nav className='flexBetweenCenter'>
      <p className='flexBetweenCenter bg-purple-light p-2 rounded-md'>
        <svg
          width='22'
          height='22'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-6'
        >
          <path
            d='M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.525 15.425 29.825C15.5953 29.9384 15.7954 29.9989 16 29.9989C16.2046 29.9989 16.4047 29.9384 16.575 29.825C17 29.525 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z'
            fill='#8047F8'
          />
        </svg>

        <span className='text-purple-dark text-sm ml-1'>São Paulo, SP</span>
      </p>

      <a href='#' className='bg-yellow-light p-2 rounded-md ml-3 relative'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M27.9875 8.175L26.4625 16.5375C26.3367 17.2283 25.9726 17.8531 25.4335 18.3031C24.8945 18.753 24.2147 18.9997 23.5125 19H9.0125L9.5625 22H23C23.5933 22 24.1734 22.1759 24.6667 22.5056C25.1601 22.8352 25.5446 23.3038 25.7716 23.8519C25.9987 24.4001 26.0581 25.0033 25.9424 25.5853C25.8266 26.1672 25.5409 26.7018 25.1213 27.1213C24.7018 27.5409 24.1672 27.8266 23.5853 27.9424C23.0033 28.0581 22.4001 27.9987 21.852 27.7716C21.3038 27.5446 20.8352 27.1601 20.5056 26.6667C20.1759 26.1734 20 25.5933 20 25C20.0001 24.6591 20.0593 24.3207 20.175 24H12.825C12.9407 24.3207 12.9999 24.6591 13 25C13.0009 25.484 12.8847 25.9611 12.6612 26.3905C12.4378 26.8198 12.1138 27.1888 11.7169 27.4658C11.3199 27.7428 10.8619 27.9196 10.3818 27.9812C9.90167 28.0428 9.4138 27.9873 8.9598 27.8195C8.5058 27.6517 8.09915 27.3765 7.77456 27.0174C7.44996 26.6583 7.21707 26.2261 7.09576 25.7575C6.97445 25.2889 6.96831 24.7979 7.07789 24.3265C7.18746 23.855 7.40948 23.4171 7.725 23.05L4.2625 4H2C1.73478 4 1.48043 3.89464 1.29289 3.70711C1.10536 3.51957 1 3.26522 1 3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H4.2625C4.7293 2.00102 5.18104 2.16529 5.53946 2.46435C5.89787 2.76342 6.14039 3.17843 6.225 3.6375L6.8375 7H27C27.146 7.0003 27.2901 7.03297 27.4219 7.09565C27.5538 7.15834 27.6701 7.24947 27.7625 7.3625C27.8592 7.47198 27.9297 7.60203 27.9687 7.7428C28.0077 7.88358 28.0141 8.03137 27.9875 8.175Z'
            fill='#C47F17'
          />
        </svg>

        {itemCar > 0 && (
          <span
            className='
            flexCenterCenter 
            absolute -top-2 -right-3 
            rounded-full 
            bg-yellow-dark w-6 h-6 
            text-white text-xs font-bold
          '
          >
            {itemCar}
          </span>
        )}
      </a>
    </nav>
  )
}
