import Button from '@components/UI/Button'
import Image from '@components/UI/Image'
import React from 'react'

export default function Excellence({ items }) {
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
      className="py-12 "
    >
      <div className="flex flex-col px-container-offset lg:flex-row lg:gap-0">
        <div className="flex flex-wrap gap-7 lg:flex-1 ">
          <Image
            ratio={438 / 646}
            className="object-cover w-full"
            src="https://recvan.com/content/images/excellence_a.jpg"
          />
          <Image
            ratio={438 / 646}
            className="max-h-[15rem] w-full object-cover md:w-0 md:flex-1"
            src="https://recvan.com/content/images/excellence_b.jpg"
          />
          <Image
            ratio={438 / 646}
            className="max-h-[15rem] w-full object-cover md:w-0 md:flex-1"
            src="https://recvan.com/Content/images/excellence_c.jpg"
          />
        </div>

        <div className="flex items-center lg:sticky lg:top-0 lg:h-[calc(100vh-var(--header-height))] lg:flex-1">
          <div className="flex flex-col w-full max-w-xs mx-auto text-black md:max-w-md ">
            <div className="relative my-7  w-[4.6875rem] self-center">
              <Image src="https://recvan.com/Content/images/icon-compass.png" />
            </div>

            <h2 className="whitespace-nowrap text-center text-2xl leading-[1.2] tracking-[0.25rem] text-opacity-70 md:text-[min(4vw,2.175rem)]">
              Dedicated To
            </h2>
            <h2 className="whitespace-nowrap text-center text-3xl leading-[1.2] tracking-[0.5rem] text-opacity-70 md:text-[min(5vw,2.75rem)]">
              Excellence
            </h2>
            <p className="mt-2 text-black text-opacity-60">
              Quality products, competitive pricing, huge selection. Adventure
              vans are our specialty. Let us help you find the perfect Rec Van!
            </p>
            <p className="mt-4">
              <Button className="w-full md:w-auto" color="primary">
                {(props) => (
                  <a href="RecVanSearch" {...props}>
                    View Inventory
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
