import Image from '@components/UI/Image'
import React from 'react'

export default function RecvanBlog() {
  return (
    <div className="bg-[#9DACBC] px-container-offset pt-10 pb-24 text-black">
      <h2 className="mb-[1em] mt-[1.2em] text-center text-4xl leading-relaxed md:text-[min(4vw,44px)]">
        Rec Van Blog
      </h2>
      <div className="grid grid-cols-1 gap-7 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="">
          <div className="h-full bg-white rounded-lg card">
            <figure className="h-[220px] w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/L4EE50wv7Zs?rel=0"
              />
            </figure>
            <div className="flex flex-col justify-between flex-1 pb-3 px-container-offset">
              <h4 className="p-3 font-bold text-center">
                Get Cookin’ RV Style: Fill Your Van with the Scent of Baked
                Apples and Berries this Fall
              </h4>
              <p className="py-3 text-sm text-black text-opacity-50">
                &nbsp; You’ve probably had apple crisp at some point in your
                life. It may be a favorite of yours. This simple dessert is a
                tasty modern American ...
              </p>
              <a
                href="https://myrecvan.com/2021/10/get-cookin-rv-style-fill-your-van-with-the-scent-of-baked-apples-and-berries-this-fall/"
                className="btn btn-primary link btn-block btn-sm !h-[28px] !min-h-[28px] bg-opacity-70"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-full bg-white rounded-lg card">
            <figure className="h-[220px] w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0KF6c-ZSy6w>keto?rel=0"
              />
            </figure>
            <div className="flex flex-col justify-between flex-1 pb-3 px-container-offset">
              <h4 className="p-3 font-bold text-center">
                The Best Van Life Breakfast: Pancakes 8 Ways
              </h4>
              <p className="py-3 text-sm text-black text-opacity-50">
                &nbsp; Is chilly weather bringing on cravings for warm, spiced
                treats? If so, you’ll probably want to work pancakes into your
                breakfast rotation....
              </p>
              <a
                href="https://myrecvan.com/2021/09/the-best-van-life-breakfast-pancakes-8-ways/"
                className="btn btn-primary link btn-block btn-sm !h-[28px] !min-h-[28px] bg-opacity-70"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-full bg-white rounded-lg card">
            <figure className="h-[220px] w-full overflow-hidden ">
              <a href="https://myrecvan.com/2021/09/10-ways-for-van-lifers-to-welcome-fall/">
                <Image
                  src="https://secureservercdn.net/166.62.112.107/hkc.b8a.myftpupload.com/wp-content/uploads/2021/09/@storytelleroverland_1-1.jpg?time=1644965638"
                  className="object-cover w-full h-full"
                />
              </a>
            </figure>
            <div className="flex flex-col justify-between flex-1 pb-3 px-container-offset">
              <h4 className="p-3 font-bold text-center">
                10 Ways For Van Lifers to Welcome Fall
              </h4>
              <p className="py-3 text-sm text-black text-opacity-50">
                &nbsp; Ready to get in the fall spirit? Camper vans offer
                intimate access to the American wilderness in all of its
                seasonal splendor. Take your n...
              </p>
              <a
                href="https://myrecvan.com/2021/09/10-ways-for-van-lifers-to-welcome-fall/"
                className="btn btn-primary link btn-block btn-sm !h-[28px] !min-h-[28px] bg-opacity-70"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-full bg-white rounded-lg card">
            <a
              className="h-[220px] w-full overflow-hidden "
              href="https://myrecvan.com/2021/09/why-your-van-needs-a-fall-cleaning/"
            >
              <Image
                src="https://secureservercdn.net/166.62.112.107/hkc.b8a.myftpupload.com/wp-content/uploads/2021/09/@van.there_.jpg?time=1644965638"
                className="object-cover w-full h-full"
              />
            </a>
            <div className="flex flex-col justify-between flex-1 pb-3 px-container-offset">
              <h4 className="p-3 font-bold text-center">
                Why Your Van Needs a Fall Cleaning
              </h4>
              <p className="py-3 text-sm text-black text-opacity-50">
                &nbsp; We all know about spring cleaning. It’s a time dedicated
                to getting rid of things we don’t need anymore, swapping out
                seasonal clothes in ...
              </p>
              <a
                href="https://myrecvan.com/2021/09/why-your-van-needs-a-fall-cleaning/"
                className="btn btn-primary link btn-block btn-sm !h-[28px] !min-h-[28px] bg-opacity-70"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
