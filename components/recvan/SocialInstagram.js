import Image from '@components/UI/Image'
import React from 'react'

export default function SocialInstagram({ items }) {
  return (
    <div className="py-6 ">
      <div className="flex flex-col px-container-offset md:flex-row md:gap-0 xl:container">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 md:order-1 md:flex-1 md:gap-6">
          <div className="relative col-start-1 col-end-2 row-start-1 row-end-2">
            <Image src="https://recvan.com/content/images/instagram-a.jpg" />
          </div>
          <div className="relative col-start-1 col-end-2 row-start-2 row-end-3">
            <Image src="https://recvan.com/content/images/instagram-b.jpg" />
          </div>
          <div className="relative col-start-2 col-end-5 row-start-1 row-end-3">
            <Image
              ratio={1}
              className={'min-h-full'}
              src="https://recvan.com/content/images/instagram-c.jpg"
            />
          </div>
        </div>
        <div className="flex items-center self-center w-full md:flex-1">
          <div className="flex flex-col items-center w-full max-w-sm gap-4 mx-auto text-black md:max-w-md ">
            <Image
              ratio={62 / 78}
              src="https://recvan.com/Content/images/icon-binoculars.png"
              className="my-7 w-[4.875rem] self-center"
            />
            <h4 className="whitespace-nowrap text-center text-[1.875rem] uppercase text-opacity-70 md:text-[min(3vw,1.875rem)]">
              Find Us on Instagram
            </h4>
            <p className="text-center text-primary">
              <a
                className="lowercase btn btn-ghost"
                href="https://www.instagram.com/myrecvan/"
                role="button"
                target="_blank"
              >
                #myrecvan
              </a>
            </p>
            <p className="">
              <a
                className="w-full btn btn-primary md:w-auto"
                href="RecVanSearch"
                role="button"
              >
                Follow us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
