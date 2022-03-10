import Button from '@components/UI/Button'
import Carousel from '@components/UI/Carousel'
import Image from '@components/UI/Image'
import classNames from 'classnames'
import React from 'react'
import Icon from './common/Icons'
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
const carouselImgs = [
  'https://lmrvimages.azureedge.net/wp163572/01-main.jpg',
  'https://lmrvimages.azureedge.net/wp166238/01-main.jpg',
  'https://lmrvimages.azureedge.net/pp167404/01-main.jpg',
  'https://lmrvimages.azureedge.net/wp163572/01-main.jpg',
  'https://lmrvimages.azureedge.net/wp166238/01-main.jpg',
  'https://lmrvimages.azureedge.net/pp167404/01-main.jpg',
]
const InfoItem = ({ title, content }) => {
  return (
    <li className="flex-1 bg-base-300 bg-opacity-20 px-4 py-2">
      <div className="block text-sm uppercase text-primary text-opacity-50">
        <label>{title}</label>
      </div>
      {content}
    </li>
  )
}
const Collapse = ({ title, children }) => {
  return (
    <div className="collapse collapse-arrow bg-base-200 ">
      <input type="checkbox" />
      <div className="peer-checked: collapse-title text-sm font-medium leading-7">
        {title}
      </div>
      <div className="collapse-content ">
        <div className="px-3 pt-2">{children}</div>
      </div>
    </div>
  )
}
export default function InventoryDetail() {
  return (
    <div className="flex w-full flex-col-reverse items-start md:flex-row">
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
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={src}
                />
              </div>
            )
          })}
        </div>
      </aside>
      <div className="2xl w-full flex-1 space-y-4 py-3 px-container-offset md:max-w-lg 2xl:w-1/2 2xl:max-w-none">
        <div>
          <button className="flex gap-2 py-2 text-sm font-semibold uppercase text-primary">
            <Icon className="text-lg" id="arrow-left" />

            <span className="underline">Back to results</span>
          </button>
        </div>
        <div className="">
          <h3 className="text-3xl uppercase text-black">
            2020 Winnebago BOLDT 70KL
          </h3>
          <div className="mt-4 flex w-full flex-row items-center gap-4">
            <span className="badge badge-lg px-1 text-xs uppercase text-white">
              Used
            </span>
            <a className="flex gap-1 text-xs text-primary">
              <Icon className="" id="location"></Icon>
              Phoenix, AZ
            </a>
            <div className="flex-1" />
            <Button
              type="button"
              variant={'outline'}
              shape="circle"
              size={'sm'}
              className="z-10 h-8 min-h-0 w-8 "
            >
              <Icon tabIndex={'-1'} id="heart"></Icon>
            </Button>
          </div>
          <ul className="mt-5 flex gap-2">
            <InfoItem
              title={'List Price'}
              content={
                <h4 className="font-number text-2xl text-base-content text-opacity-70 line-through">
                  $172,998
                </h4>
              }
            >
              <label className="text-sm uppercase text-primary text-opacity-50">
                List Price
              </label>
              <h4 className="font-number text-2xl text-base-content text-opacity-70 line-through">
                $172,998
              </h4>
            </InfoItem>
            <InfoItem
              title={'Sale Price'}
              content={
                <h4 className="font-number text-2xl text-base-content ">
                  $144,998
                </h4>
              }
            ></InfoItem>
          </ul>
          <div className="mt-7 flex w-full">
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              <div className="relative aspect-square w-[4.75rem] rounded-full  bg-base-300 bg-opacity-80 sm:w-[5.625rem] md:w-[4.75rem] xl:w-[5.625rem]">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src="https://www.recvan.com/Content/images/vehicle-icon--sprinter.png"
                />
              </div>
              <div className="text-xs md:text-sm">Class B</div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              <div className="relative aspect-square w-[4.75rem] rounded-full  bg-base-300 bg-opacity-80 sm:w-[5.625rem] md:w-[4.75rem] xl:w-[5.625rem]">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src="https://www.recvan.com/Content/images/vehicle-icon--length.png"
                />
              </div>
              <div className="text-xs md:text-sm">23 Ft Length</div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              <div className="relative aspect-square w-[4.75rem] rounded-full  bg-base-300 bg-opacity-80 sm:w-[5.625rem] md:w-[4.75rem] xl:w-[5.625rem]">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src="https://www.recvan.com/Content/images/vehicle-icon--gas.png"
                />
              </div>
              <div className="text-xs md:text-sm">Diesel</div>
            </div>
          </div>

          <ul className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
            <InfoItem title={'Stock #'} content={'WP158255'}></InfoItem>
            <InfoItem title={'Make'} content={'Winnebago'}></InfoItem>
            <InfoItem title={'Last 6 VIN'} content={'009010'}></InfoItem>
            <InfoItem title={'Engine'} content={'D/ 188HP MERCEDES'}></InfoItem>
            <InfoItem title={'Exterior'} content={'- - -'}></InfoItem>
            <InfoItem title={'Interior'} content={'- - -'}></InfoItem>
          </ul>

          <div className="mt-7 flex gap-2">
            <button className="btn btn-primary btn-link flex flex-1 items-center underline">
              <Icon id="file" className="mr-2 "></Icon>
              View MSRP
            </button>
            <button className="btn btn-primary btn-link flex flex-1 items-center underline">
              <Icon id="file" className="mr-2 "></Icon>
              View brochure
            </button>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <button className="btn-outline btn btn-block">Email me info</button>
            <button className="btn btn-secondary btn-block">
              Check availability now
            </button>
          </div>
          <div className="mt-7 divide-y divide-base-content divide-opacity-40 border-t border-b border-base-content border-opacity-40">
            <Collapse title={'FLOORPAN'}>
              <div className="prose px-3 pt-2">
                <img src="https://lmrvimages.azureedge.net/wp163572/14-main.jpg" />
              </div>
            </Collapse>
            <Collapse title="DESCRIPTION">
              <div
                style={{
                  '--tw-prose-bullets': 'hsla(var(--tw-base-content))',
                }}
                className="prose px-3 pt-2"
              >
                <p>
                  The Winnebago Boldt is an energy and fuel-efficient Class B
                  mini-motorhome equipped with a perfect blend of comfort and
                  innovation. Built on the Mercedes-Benz Sprinter chassis with a
                  3.0L 6-cylinder, 188HP turbo-diesel engine, the Boldt is an
                  all-season-ready camper van that makes all-weather camping a
                  comfortable possibility. Equipped with the lithium-based Pure
                  3 Advanced Energy System, you can now enjoy 12,800 watt-hours
                  of clean and quiet power.{' '}
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
            </Collapse>
            <Collapse title={'Included Features'}>
              <div className="px-3 pt-2">
                <p class="mb-0">Twin Beds</p>
              </div>
            </Collapse>
          </div>
          <div className="mt-7 w-full">
            <div className="bg-[#9DACBC] px-5 py-3 text-xl text-white">
              SIMILAR LISTINGS
            </div>
            <div className="-mx-4 mt-4">
              <Carousel
                itemClassName="relative w-full  sm:w-[calc((100%-1em)/2)] md:w-full lg:w-[calc((100%-1em)/2)]  2xl:w-[calc((100%-2em)/3)]"
                items={new Array(carouselImgs.length)
                  .fill((index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex h-full w-full flex-col border border-black border-opacity-[0.12] bg-white"
                    >
                      <div className="flex w-full md:flex-col">
                        <div className="relative aspect-square  w-1/3 min-w-[146px] md:w-full md:max-w-full">
                          <Image
                            className="absolute inset-0 h-full w-full object-cover"
                            src={carouselImgs[index]}
                          />
                          <span className="badge badge-lg absolute top-2 left-2 px-1 text-xs uppercase text-white">
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
                  ))
                  .map((render, index) => render(index))}
                buttonPrev={
                  <button
                    className="absolute left-2 top-1/2 flex h-10 w-7 -translate-y-1/2 items-center justify-center rounded bg-neutral bg-opacity-80 leading-10 text-white disabled:opacity-0"
                    aria-label="Next"
                    type="button"
                  >
                    <Icon className={'text-xl'} id="left" />
                  </button>
                }
                buttonNext={
                  <button
                    className="absolute right-2 top-1/2 flex h-10 w-7 -translate-y-1/2 items-center justify-center rounded bg-neutral bg-opacity-80 leading-10 text-white disabled:opacity-0"
                    aria-label="Next"
                    type="button"
                  >
                    <Icon className="rotate-180 text-xl" id="left" />
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
