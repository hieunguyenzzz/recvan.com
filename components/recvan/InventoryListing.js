import Button from '@components/UI/Button'
import Image from '@components/UI/Image'
import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'
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
            <div className="icon h2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
              </svg>
            </div>
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
          <button
            type="button"
            className="absolute z-10 btn-outline btn btn-sm btn-circle top-1 right-1 bg-base-100 bg-opacity-60 hover:bg-base-100 hover:bg-opacity-90"
          >
            <div tabIndex={'-1'} className="icon h2 focus:">
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
          <p className="mt-2 text-sm opacity-70">
            <span className="">List Price </span>
            <span
              className="line-through"
              style={{ textDecoration: 'line-through' }}
            >
              $79,998
            </span>
          </p>
          <p className="mt-1">
            <span>Sale Price </span> $69,998
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end flex-1 gap-2 p-2 border-t">
        <a className="underline capitalize btn btn-link btn-sm" role="button">
          Check Availability Now
        </a>
        <div className="">
          <Button variant={'outline'} size="sm" shape="block">
            {(btnProps) => <a {...btnProps}>Email Me Info</a>}
          </Button>
        </div>
        <a className="btn btn-primary btn-block btn-sm" role="button">
          View Vehicle Details
        </a>
      </div>
    </div>
  )
}
const FilterCollapse = ({ active, title, children, defaultOpen }) => {
  return (
    <div tabindex="0" className="collapse collapse-arrow">
      <input type="checkbox" defaultChecked={defaultOpen} />
      <div
        className={classNames(
          'collapse-title flex items-baseline text-sm font-semibold uppercase leading-7 leading-none ',
          {
            'text-primary': active,
          }
        )}
      >
        <div className="block icon ">
          {active && (
            <svg
              className="inline mr-2"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          )}
        </div>
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
              placeholder="Quick search vans..."
              className="inline-block w-full pl-10 bg-white rounded input-bordered input input-md"
            />
          </label>
          <label
            className="relative w-10 h-10 min-h-0 group-a btn-outline btn btn-circle md:hidden"
            htmlFor="openFilter"
          >
            <div className="icon h2">
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
                <line x1={4} y1={21} x2={4} y2={14} />
                <line x1={4} y1={10} x2={4} y2={3} />
                <line x1={12} y1={21} x2={12} y2={12} />
                <line x1={12} y1={8} x2={12} y2={3} />
                <line x1={20} y1={21} x2={20} y2={16} />
                <line x1={20} y1={12} x2={20} y2={3} />
                <line x1={1} y1={14} x2={7} y2={14} />
                <line x1={9} y1={8} x2={15} y2={8} />
                <line x1={17} y1={16} x2={23} y2={16} />
              </svg>
            </div>
            <span className="group-a-hover:border-base-content badge absolute -top-[20%] -right-[20%] text-base-content empty:hidden">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {new Array(24).fill(<ProductCard />)}
          <div className="flex justify-center col-span-full">
            <button className="btn-outline btn">show more results</button>
          </div>
        </div>
      </div>
    </div>
  )
}
