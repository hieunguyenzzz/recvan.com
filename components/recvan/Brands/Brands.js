import Image from '@components/UI/Image'
import React from 'react'

export default function Brands({ items }) {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://recvan.com/content/images/topographic-texture.png)',
        backgroundAttachment: 'fixed',
        boxSizing: 'border-box',
        width: '100%',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen "
    >
      <div className="flex flex-col gap-24 lg:flex-row lg:gap-0 ">
        <div className="pointer-events-none sticky top-0 isolate z-10 flex max-h-screen min-h-screen w-full items-start pt-[var(--header-height)] lg:flex-1 lg:items-center lg:pt-0">
          <div className="flex w-full flex-col gap-3 bg-neutral px-3 py-3 text-center text-neutral-content lg:text-right">
            <h2 className="text-2xl font-bold uppercase leading-[0.8]">
              Brands You
            </h2>
            <h2 className="text-6xl font-bold uppercase leading-[0.8]">
              Trust
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-1 lg:pt-[50vh]">
          {items.map(({ href, title, src }, i) => {
            return (
              <a
                key={i}
                href={href}
                className="group relative mb-4 border-2 border-transparent hover:border-primary"
              >
                <Image
                  className="h-[185px] w-[294px] object-cover opacity-50 saturate-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:saturate-100"
                  src={src}
                  alt={title}
                />
                <button className="no-animation absolute -bottom-4 left-1/2 flex h-12 w-[240px] -translate-x-1/2 items-center justify-center bg-primary uppercase text-white opacity-0 focus:bg-primary-focus group-hover:opacity-100">
                  shop brand
                </button>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
