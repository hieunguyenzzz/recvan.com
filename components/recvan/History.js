import Button from '@components/UI/Button'
import Image from '@components/UI/Image'
import React from 'react'

export default function History({ items }) {
  return (
    <div className=" bg-base-300">
      <div className="container flex flex-col lg:flex-row lg:gap-0">
        <div className="relative aspect-square overflow-hidden sm:aspect-[3/2] md:aspect-[4/2]  lg:flex-1  lg:overflow-visible">
          <div className="flex items-center overflow-hidden lg:h-[calc(100vh-var(--header-height))]">
            <div className="absolute inset-0 grid items-center w-full grid-cols-2 gap-2 sm:grid-cols-3 md:relative md:grid-cols-4 lg:w-full lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {new Array(24)
                .fill((index) => (
                  <Image
                    key={index}
                    ratio={1}
                    src={`https://recvan.com/content/images/connection/thumb${
                      index + 1
                    }.jpg`}
                  ></Image>
                ))
                .map((render, index) => render(index))}
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center py-12 px-container-offset lg:sticky lg:top-0 lg:h-[calc(100vh-var(--header-height))] lg:flex-1">
          <div className="flex flex-col w-full max-w-xs mx-auto text-black md:max-w-md ">
            <div className="flex justify-center gap-3 my-7">
              <Image
                ratio={62 / 56}
                src="https://recvan.com/Content/images/icon-camping-chair.png"
                className="self-center w-14"
              />
              <Image
                ratio={62 / 56}
                src="https://recvan.com/Content/images/icon-camping-chair.png"
                className="my-7 w-14 scale-x-[-1] self-center"
              />
            </div>

            <h2 className="whitespace-nowrap text-center text-2xl leading-[1.2] tracking-[0.25rem] text-opacity-70 md:text-[min(4vw,2.175rem)]">
              A history of
            </h2>
            <h2 className="whitespace-nowrap text-center text-3xl leading-[1.2] tracking-[0.5rem] text-opacity-70 md:text-[min(5vw,2.75rem)]">
              Connection
            </h2>
            <p className="mt-2 text-black text-opacity-50">
              Rec Van is family owned and operated. We know vans with over 50
              years helping people discover their adventure.
            </p>
            <p className="mt-4">
              <Button className="w-full md:w-auto" color="secondary">
                {(props) => (
                  <a {...props} href="RecVanSearch">
                    Learn more
                  </a>
                )}
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
