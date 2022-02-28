import Button from '@components/UI/Button'
import Image from '@components/UI/Image'
import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'
import Icon from './common/Icons'
import ImageLabel from './common/ImageLabel'
const Filter = () => {
  const formRef = useRef()
  useEffect(() => {
    formRef.current.querySelectorAll('input').forEach((element) => {
      element.addEventListener('change', (e) => {
        console.log({
          name: e.target.name,
          type: e.target.type,
          value: e.target.value,
        })
      })
    })
  }, [])
  return (
    <form
      ref={formRef}
      className="divide-y divide-base-content divide-opacity-50 will-change-scroll"
    >
      <div className="sticky top-0 z-10 shadow-sm bg-base-100">
        <div className="flex items-center justify-between p-4 font-semibold text-black uppercase ">
          Filter (0){' '}
          <label
            htmlFor="openFilter"
            className="w-10 h-10 min-h-0 btn-outline btn btn-circle md:hidden"
          >
            <Icon id="close"></Icon>
          </label>
        </div>
      </div>
      <FilterCollapse active defaultOpen title={'Inventory type'}>
        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-start gap-2 leading-5">
            <input
              name="inventory-type"
              value="new"
              type="checkbox"
              className="border-opacity-50 rounded peer checkbox checkbox-xs checked:checkbox-primary"
            />
            <span className="peer-checked:text-primary">New</span>
          </label>
          <label className="flex items-start gap-2 leading-5">
            <input
              type="checkbox"
              className="border-opacity-50 rounded peer checkbox checkbox-xs checked:checkbox-primary"
            />
            <span className="peer-checked:text-primary">Used</span>
          </label>
        </div>
      </FilterCollapse>
      <FilterCollapse title={'Make & Model'}>
        <label className="relative w-full ">
          <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 text-xl text-opacity-50 icon h2 text-base-content">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search Makes or Models"
            className="inline-block w-full pl-10 bg-white rounded input-bordered input input-md"
          />
        </label>
      </FilterCollapse>
      <FilterCollapse title={'Fuel type'}>
        <label className="flex items-start gap-2 leading-5">
          <input
            type="checkbox"
            className="border-opacity-50 rounded peer checkbox checkbox-xs checked:checkbox-primary"
          />
          <span className="peer-checked:text-primary">Gas</span>
        </label>
        <label className="flex items-start gap-2 leading-5">
          <input
            type="checkbox"
            className="border-opacity-50 rounded peer checkbox checkbox-xs checked:checkbox-primary"
          />
          <span className="peer-checked:text-primary">Diesel</span>
        </label>
      </FilterCollapse>
      <FilterCollapse title={'Price'}>
        <div className="w-full">
          <div className="relative min-w-full py-1">
            <div className="h-1 rounded-full bg-base-content bg-opacity-20">
              <div
                className="absolute w-0 h-1 rounded-full bg-primary"
                style={{ width: '24.1935%', left: '11.2903%' }}
              />
              <div
                tabIndex={'-1'}
                className="absolute flex items-center justify-center w-5 h-5 -ml-2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow cursor-pointer focusable top-1/2"
                unselectable="on"
                style={{ left: '11.2903%' }}
              >
                <div className="relative w-1 -mt-2"></div>
              </div>
              <div
                tabIndex={'-1'}
                className="absolute flex items-center justify-center w-5 h-5 -ml-2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow cursor-pointer focusable top-1/2"
                unselectable="on"
                style={{ left: '35.4839%' }}
              >
                <div className="relative w-1 -mt-2"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <div className="flex-1">$60000</div>
            <div>to</div>
            <div className="flex-1 text-right">$38000</div>
          </div>
        </div>
      </FilterCollapse>
      <FilterCollapse title={'Equidment'}>
        {[
          '4 Wheel Drive',
          'Exterior camp kitchen',
          'Murphy bed',
          'Overhead entertainment center',
          'Pop-Top Sleeping Area',
          'Rear lounge',
          'Rear power lift bed',
          'Twin Beds',
          'Wheelchair Lift',
        ].map((label, i) => {
          return (
            <label key={i} className="flex items-start gap-2 leading-5">
              <input
                type="checkbox"
                className="border-opacity-50 rounded peer checkbox checkbox-xs checked:checkbox-primary"
              />
              <span className="peer-checked:text-primary">{label}</span>
            </label>
          )
        })}
      </FilterCollapse>
    </form>
  )
}
const ProductCard = () => {
  return (
    <div className="flex h-full w-full flex-col border border-black border-opacity-[0.12] bg-white">
      <div className="flex w-full md:flex-col">
        <div className="relative aspect-square  w-1/3 min-w-[146px] md:w-full md:max-w-full">
          <ImageLabel>Used</ImageLabel>
          <Button
            variant={'ghost'}
            size="sm"
            shape={'circle'}
            type="button"
            className="absolute z-10 top-1 right-1 bg-base-200 bg-opacity-30 hover:bg-base-100"
          >
            <Icon id="heart"></Icon>
          </Button>
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="https://lmrvimages.azureedge.net/lt164447/01-main.jpg"
          />
        </div>
        <div className="p-3 md:text-center">
          <div className="leading-snug uppercase text-primary hover:underline md:text-xl">
            <h6>2019 Winnebago</h6>
            <h6>OUTLOOK 27D</h6>
          </div>
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
      <div className="flex flex-col justify-end flex-1 gap-2 p-2 border-t">
        <Button
          className="underline capitalize "
          variant={'link'}
          size="sm"
          shape="block"
        >
          {(props) => (
            <a href="#" {...props}>
              Check Availability Now
            </a>
          )}
        </Button>

        <div className="">
          <Button variant={'outline'} size="sm" shape="block">
            {(btnProps) => (
              <a href="#" {...btnProps}>
                Email Me Info
              </a>
            )}
          </Button>
        </div>
        <Button color={'primary'} variant={'outline'} size="sm" shape="block">
          {(btnProps) => (
            <a href="#" {...btnProps} role="button">
              View Vehicle Details
            </a>
          )}
        </Button>
      </div>
    </div>
  )
}
const FilterCollapse = ({ active, title, children, defaultOpen }) => {
  return (
    <div tabindex="0" className="collapse collapse-arrow">
      <input className="peer" type="checkbox" defaultChecked={defaultOpen} />
      <div
        className={classNames(
          'peer-checked:focusable collapse-title flex items-start text-sm font-semibold uppercase leading-7',
          {
            'text-primary': active,
          }
        )}
      >
        {active && (
          <div className="flex items-center h-6">
            <Icon id="circle-checked" className="inline mr-2 text-xl"></Icon>
          </div>
        )}
        <div>{title}</div>
      </div>
      <div className="collapse-content">
        <div className="flex flex-col gap-2 pt-2">{children}</div>
      </div>
    </div>
  )
}
export default function InventoryListing() {
  return (
    <div className="flex items-start w-full ">
      <input id="openFilter" className="peer" hidden type="checkbox" />
      <aside className="fixed top-header z-20  hidden h-[calc(100vh-var(--header-height))] min-h-[calc(100vh-var(--header-height))] w-full flex-col overflow-auto border-r border-base-content border-opacity-50 bg-base-200 peer-checked:flex md:sticky md:block md:max-w-[265px]">
        <Filter />
        <div className="flex-1 border-b border-opacity-50 border-base-content" />
        <div className="sticky bottom-0 bg-base-100  p-3 pb-[var(--bottom-offset)] shadow md:hidden">
          <label
            htmlFor="openFilter"
            className="btn btn-primary btn-block btn-sm"
          >
            show results
          </label>
        </div>
      </aside>
      <div className="flex-1 py-6 space-y-4 px-container-offset">
        <div className="flex w-full gap-3 ">
          <label className="relative block w-full">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 text-opacity-50 icon h2 text-base-content">
              <Icon id="search" className={'text-xl'} />
            </div>
            <input
              type="text"
              placeholder="Quick search vans..."
              className="inline-block w-full pl-10 bg-white rounded input-bordered input input-md"
            />
          </label>
          <label
            className="relative w-10 h-10 min-h-0 group-a btn-outline btn btn-circle md:hidden"
            htmlFor="openFilter"
          >
            <Icon id="filter" className="icon h2"></Icon>
            <span className="group-a-hover:border-base-content badge absolute -top-[20%] -right-[20%] rounded-full text-base-content empty:hidden">
              1
            </span>
          </label>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="text-sm">177 results found</div>
          <div>
            <span className="text-xs uppercase text-base-content text-opacity-60">
              SORT BY:{' '}
            </span>
            <select className="text-base border-none select select-sm">
              <option>Choose...</option>
              <option>Most recent</option>
              <option>Price hight to low</option>
              <option>Price low to hight</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {new Array(24).fill(<ProductCard />)}
          <div className="flex justify-center col-span-full">
            <button className="btn-outline btn">show more results</button>
          </div>
        </div>
      </div>
    </div>
  )
}
