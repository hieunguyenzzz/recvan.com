import React from 'react'

export default function Logo() {
  return (
    <a
      style={{
        background:
          'transparent url(https://recvan.com/Content/images/rv-logo--white.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="block h-full w-full indent-[-99999px] "
      href="#/"
    >
      RecVan
    </a>
  )
}
