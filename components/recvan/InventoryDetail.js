import Carousel from '@components/UI/Carousel'
import Image from '@components/UI/Image'
import classNames from 'classnames'
import React from 'react'
const imgs = [
  'https://lmrvimages.azureedge.net/wp158255/01-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/02-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/03-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/04-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/05-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/06-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/07-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/08-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/09-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/10-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/11-main.jpg',
  'https://lmrvimages.azureedge.net/wp158255/12-main.jpg',
]
export default function InventoryDetail() {
  return (
    <div className="flex flex-col-reverse items-start w-full md:flex-row">
      <aside className=" top-header z-20 w-full  flex-1  flex-col border-t border-base-content  border-opacity-40 bg-base-200 md:sticky md:block md:h-[calc(100vh-var(--header-height))] md:min-h-[calc(100vh-var(--header-height))]  md:flex-1 md:overflow-auto  md:border-r">
        <div className="grid grid-cols-3 gap-4 p-4">
          {imgs.map((src, i) => {
            let className = 'relative col-span-1 aspect-square'
            if (i % 6 === 0) {
              className = 'relative aspect-square col-span-full'
            }
            if (i % 6 === 2) {
              className = 'relative col-span-2 '
            }
            return (
              <div key={i} className={classNames(className)}>
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src={src}
                />
              </div>
            )
          })}
        </div>
      </aside>
      <div className="flex-1 w-full py-3 space-y-4 2xl px-container-offset md:max-w-lg 2xl:w-1/2 2xl:max-w-none">
        <div>
          <button className="flex gap-2 py-2 text-sm font-semibold uppercase text-primary">
            <div className="text-lg icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
              </svg>
            </div>
            <span className="underline">Back to results</span>
          </button>
        </div>
        <div className="">
          <h3 className="text-3xl text-black uppercase">
            2020 Winnebago BOLDT 70KL
          </h3>
          <div className="flex flex-row items-center w-full gap-4 mt-4">
            <span className="px-1 text-xs text-white uppercase badge badge-lg">
              Used
            </span>
            <a className="flex gap-1 text-xs text-primary">
              <div className="icon h2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              Phoenix, AZ
            </a>
            <div className="flex-1" />
            <button
              type="button"
              className="z-10 w-8 h-8 min-h-0 btn-outline btn btn-sm btn-circle"
            >
              <div tabIndex={'-1'} className="icon h2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex gap-2 mt-5">
            <div className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <label className="text-sm text-opacity-50 uppercase text-base-content">
                List Price
              </label>
              <h4 className="text-2xl line-through font-number text-base-content text-opacity-70">
                $172,998
              </h4>
            </div>
            <div className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <label className="text-sm text-opacity-50 uppercase text-base-content">
                Sale Price
              </label>
              <h4 className="text-2xl font-number text-base-content ">
                $144,998
              </h4>
            </div>
          </div>
          <div className="flex w-full mt-7">
            <div className="flex flex-col items-center flex-1 gap-2 text-center">
              <div className="relative aspect-square w-[4.75rem] rounded-full  bg-base-300 bg-opacity-80 sm:w-[5.625rem] md:w-[4.75rem] xl:w-[5.625rem]">
                <Image
                  className="absolute inset-0 w-full h-full"
                  src="https://www.recvan.com/Content/images/vehicle-icon--sprinter.png"
                />
              </div>
              <div className="text-xs md:text-sm">Class B</div>
            </div>
            <div className="flex flex-col items-center flex-1 gap-2 text-center">
              <div className="relative aspect-square w-[4.75rem] rounded-full  bg-base-300 bg-opacity-80 sm:w-[5.625rem] md:w-[4.75rem] xl:w-[5.625rem]">
                <Image
                  className="absolute inset-0 w-full h-full"
                  src="https://www.recvan.com/Content/images/vehicle-icon--length.png"
                />
              </div>
              <div className="text-xs md:text-sm">23 Ft Length</div>
            </div>
            <div className="flex flex-col items-center flex-1 gap-2 text-center">
              <div className="relative aspect-square w-[4.75rem] rounded-full  bg-base-300 bg-opacity-80 sm:w-[5.625rem] md:w-[4.75rem] xl:w-[5.625rem]">
                <Image
                  className="absolute inset-0 w-full h-full"
                  src="https://www.recvan.com/Content/images/vehicle-icon--gas.png"
                />
              </div>
              <div className="text-xs md:text-sm">Diesel</div>
            </div>
          </div>
          <div className="flex gap-2 mt-7">
            <div className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <label className="block text-sm text-opacity-50 uppercase text-base-content">
                Stock
              </label>
              $172,998
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2 mt-7 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
            <li className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <div className="block text-sm text-opacity-50 uppercase text-base-content">
                <label>Stock #</label>
              </div>
              WP158255
            </li>
            <li className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <div className="block text-sm text-opacity-50 uppercase text-base-content">
                <label>Make</label>
              </div>
              Winnebago
            </li>
            <li className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <div className="block text-sm text-opacity-50 uppercase text-base-content">
                <label>Last 6 VIN</label>
              </div>
              009010
            </li>
            <li className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <div className="block text-sm text-opacity-50 uppercase text-base-content">
                <label>Engine</label>
              </div>
              D/ 188HP MERCEDES
            </li>
            <li className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <div className="block text-sm text-opacity-50 uppercase text-base-content">
                <label>Exterior</label>
              </div>
              - - -
            </li>
            <li className="flex-1 px-4 py-2 bg-base-300 bg-opacity-20">
              <div className="block text-sm text-opacity-50 uppercase text-base-content">
                <label>Interior</label>
              </div>
              - - -{' '}
            </li>
          </ul>
          <div className="flex gap-2 mt-7">
            <button className="flex items-center flex-1 underline btn btn-primary btn-link">
              <div className="flex items-baseline">
                <div className="inline-block mr-2 icon">
                  <svg
                    className="inline"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                  </svg>
                </div>
                View MSRP
              </div>
            </button>
            <button className="flex items-center flex-1 underline btn btn-primary btn-link">
              <div className="flex items-baseline">
                <div className="inline-block mr-2 icon">
                  <svg
                    className="inline"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                  </svg>
                </div>
                View brochure
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button className="btn-outline btn btn-block">Email me info</button>
            <button className="btn btn-secondary btn-block">
              Check availability now
            </button>
          </div>
          <div className="border-t border-b divide-y mt-7 divide-base-content divide-opacity-40 border-base-content border-opacity-40">
            <div tabIndex={0} className="collapse collapse-arrow bg-base-200 ">
              <input type="checkbox" />
              <div className="text-sm font-medium leading-7 collapse-title">
                FLOORPAN
              </div>
              <div className="collapse-content ">
                <div className="px-3 pt-2">
                  <Image src="https://lmrvimages.azureedge.net/wp163572/14-main.jpg" />
                </div>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow bg-base-200 ">
              <input type="checkbox" />
              <div className="text-sm font-medium leading-7 collapse-title">
                FLOORPAN
              </div>
              <div className="collapse-content">
                <div
                  style={{
                    '--tw-prose-bullets': 'hsla(var(--tw-base-content))',
                  }}
                  className="px-3 pt-2 prose"
                >
                  <p>
                    The Winnebago Boldt is an energy and fuel-efficient Class B
                    mini-motorhome equipped with a perfect blend of comfort and
                    innovation. Built on the Mercedes-Benz Sprinter chassis with
                    a 3.0L 6-cylinder, 188HP turbo-diesel engine, the Boldt is
                    an all-season-ready camper van that makes all-weather
                    camping a comfortable possibility. Equipped with the
                    lithium-based Pure 3 Advanced Energy System, you can now
                    enjoy 12,800 watt-hours of clean and quiet power.{' '}
                  </p>
                  <p>
                    <strong>Features May Include:</strong>
                  </p>
                  <ul>
                    <li>Active lane-keeping, brake, and blind-spot assist</li>
                    <li>Extensive 4-season insulation</li>
                    <li>
                      MBUX touchscreen infotainment multimedia system with AI
                      voice interface
                    </li>
                    <li>Keyless entry w/remote</li>
                    <li>Rain sensor with integrated wet wiper system</li>
                    <li>LED ceiling lights</li>
                    <li>RAM Tough-Track mounts</li>
                    <li>JBL Soundbar</li>
                    <li>FLEX deluxe sleep system</li>
                    <li>Microwave/convection oven w/touch control</li>
                  </ul>
                  <p />
                  <p>
                    <strong>Optional Features May Include</strong>
                  </p>
                  <p />
                  <ul>
                    <li>Optional 4WD chassis</li>
                    <li>Dual-pane, Euro acrylic windows w/cassette shades</li>
                    <li>Stylized aluminum wheels</li>
                    <li>Luggage rack</li>
                    <li>Movable ladder</li>
                  </ul>
                  <p />
                </div>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow bg-base-200 ">
              <input type="checkbox" />
              <div className="text-sm font-medium leading-7 uppercase collapse-title">
                Included Features
              </div>
              <div className="collapse-content">
                <div className="px-3 pt-2">
                  <p class="mb-0">Twin Beds</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-7">
            <div className="bg-[#9DACBC] px-5 py-3 text-xl text-white">
              SIMILAR LISTINGS
            </div>
            <div className="mt-4 -mx-4">
              <Carousel
                itemClassName="relative w-full  sm:w-[calc((100%-1em)/2)] md:w-full lg:w-[calc((100%-1em)/2)]  2xl:w-[calc((100%-2em)/3)]"
                items={new Array(6).fill(
                  <a
                    href="#"
                    className="flex h-full w-full flex-col border border-black border-opacity-[0.12] bg-white"
                  >
                    <div className="flex w-full md:flex-col">
                      <div className="relative aspect-square  w-1/3 min-w-[146px] md:w-full md:max-w-full">
                        <Image
                          className="absolute inset-0 object-cover w-full h-full"
                          src="https://lmrvimages.azureedge.net/lt164447/01-main.jpg"
                        />
                        <span className="absolute px-1 text-xs text-white uppercase badge badge-lg top-2 left-2">
                          Used
                        </span>
                      </div>
                      <div className="p-3 md:text-center">
                        <div className="leading-snug text-primary hover:underline">
                          <h6>2019 Winnebago OUTLOOK 27D</h6>
                        </div>
                        <div className="min-h-[4.25rem] ">
                          <p className="mt-3 text-sm opacity-70">
                            <span className="">List Price </span>
                            <span
                              className="line-through"
                              style={{ textDecoration: 'line-through' }}
                            >
                              $79,998
                            </span>
                          </p>
                          <p className="">
                            <span>Sale Price </span> $69,998
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                )}
                buttonPrev={
                  <button
                    className="absolute flex items-center justify-center h-10 text-xl leading-10 text-white -translate-y-1/2 rounded left-2 top-1/2 w-7 bg-neutral bg-opacity-80 disabled:opacity-0"
                    aria-label="Next"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                }
                buttonNext={
                  <button
                    className="absolute flex items-center justify-center h-10 text-xl leading-10 text-white -translate-y-1/2 rounded right-2 top-1/2 w-7 bg-neutral bg-opacity-80 disabled:opacity-0"
                    aria-label="Next"
                    type="button"
                  >
                    <svg
                      className="rotate-180"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                }
              ></Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
