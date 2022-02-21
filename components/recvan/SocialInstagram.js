import Image from '@components/UI/Image'
import React from 'react'

export default function SocialInstagram({ items }) {
  return (
    <div className="py-6 ">
      <div className="flex flex-col px-container-offset md:flex-row md:gap-0 xl:container">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 md:order-1 md:flex-1 md:gap-6">
          <Image
            className="col-start-1 col-end-2 row-start-1 row-end-2 h-full w-full object-cover"
            src="https://recvan.com/content/images/instagram-a.jpg"
          />
          <Image
            className="col-start-1 col-end-2 row-start-2 row-end-3 h-full w-full object-cover"
            src="https://recvan.com/content/images/instagram-b.jpg"
          />
          <Image
            className="col-start-2 col-end-5 row-start-1 row-end-3 h-full w-full object-cover"
            src="https://recvan.com/content/images/instagram-c.jpg"
          />
        </div>
        <div className="flex w-full items-center self-center md:flex-1">
          <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-4 text-black md:max-w-md ">
            <Image
              src="https://recvan.com/Content/images/icon-binoculars.png"
              className="my-7 w-[4.875rem] self-center"
            />
            <h4 className="whitespace-nowrap text-center text-[1.875rem] uppercase text-opacity-70 md:text-[min(3vw,1.875rem)]">
              Find Us on Instagram
            </h4>
            <p className="text-center text-primary">
              <a
                className="btn btn-ghost lowercase"
                href="https://www.instagram.com/myrecvan/"
                role="button"
                target="_blank"
              >
                #myrecvan
              </a>
            </p>
            <p className="">
              <a
                className="btn btn-primary w-full md:w-auto"
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
