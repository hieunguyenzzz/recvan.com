import CarouselUI from '@components/UI/Carousel'
import React from 'react'
import Image from '../UI/Image'

function Carousel({ items }) {
  return (
    <div className="w-full py-4 text-white bg-neutral">
      <CarouselUI
        items={items.map(({ caption, src, href, title }, i) => {
          return (
            <a key={i} href={href} className="relative w-full ">
              <div className="aspect-[207/134] w-full" />
              <Image
                className="absolute top-0 left-0 object-cover w-full h-full"
                src={src}
                alt={caption}
              />
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-colors duration-700 ease-in-out group text-neutral-content hover:bg-neutral hover:bg-opacity-70">
                <h5 className="p-2 py-1 uppercase transition-colors duration-700 ease-in-out border border-transparent cursor-pointer bg-neutral bg-opacity-80 text-neutral-content group-hover:border-white group-hover:bg-transparent">
                  {title}
                </h5>
              </div>
            </a>
          )
        })}
      />
    </div>
  )
}

export default Carousel
