import Button from '@components/UI/Button'
import Image from '@components/UI/Image'
import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'
import ImageLabel from './common/ImageLabel'

const FilterCollapse = ({ active, title, children, defaultOpen }) => {
  return (
    <div tabindex="0" className="collapse collapse-arrow">
      <input type="checkbox" defaultChecked={defaultOpen} />
      <div
        className={classNames(
          'collapse-title flex items-center text-sm font-semibold uppercase leading-none ',
          {
            'text-primary': active,
          }
        )}
      >
        <div className="icon block ">
          {active && (
            <svg
              className="mr-2 inline"
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
    <div className="flex w-full items-start ">
      <aside className="sticky top-header h-[calc(100vh-var(--header-height))] w-full max-w-[265px] overflow-auto border-r border-base-content border-opacity-50 bg-base-200 pb-[var(--bottom-offset)]">
        <form
          ref={formRef}
          className="divide-y divide-base-content divide-opacity-50 will-change-scroll"
        >
          <div className="shadow-sm">
            <div className="collapse-title flex items-center font-semibold uppercase text-black">
              Filter (0)
            </div>
          </div>
          <FilterCollapse active defaultOpen title={'Inventory type'}>
            <div className="flex flex-col gap-2 pt-2">
              <label className="flex items-start gap-2 leading-5">
                <input
                  name="inventory-type"
                  value="new"
                  type="checkbox"
                  className="peer checkbox checkbox-xs rounded border-opacity-50 checked:checkbox-primary"
                />
                <span className="peer-checked:text-primary">New</span>
              </label>
              <label className="flex items-start gap-2 leading-5">
                <input
                  type="checkbox"
                  className="peer checkbox checkbox-xs rounded border-opacity-50 checked:checkbox-primary"
                />
                <span className="peer-checked:text-primary">Used</span>
              </label>
            </div>
          </FilterCollapse>
          <FilterCollapse title={'Make & Model'}>
            <label className="relative w-full ">
              <div className="icon h2 absolute top-0 left-0 flex h-10 w-10 items-center justify-center text-xl text-base-content text-opacity-50">
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
                className="input-bordered input input-md inline-block w-full rounded bg-white pl-10"
              />
            </label>
          </FilterCollapse>
          <FilterCollapse title={'Fuel type'}>
            <label className="flex items-start gap-2 leading-5">
              <input
                type="checkbox"
                className="peer checkbox checkbox-xs rounded border-opacity-50 checked:checkbox-primary"
              />
              <span className="peer-checked:text-primary">Gas</span>
            </label>
            <label className="flex items-start gap-2 leading-5">
              <input
                type="checkbox"
                className="peer checkbox checkbox-xs rounded border-opacity-50 checked:checkbox-primary"
              />
              <span className="peer-checked:text-primary">Diesel</span>
            </label>
          </FilterCollapse>
          <FilterCollapse title={'Price'}>
            <div className="w-full">
              <div className="relative min-w-full py-1">
                <div className="h-1 rounded-full bg-base-content bg-opacity-20">
                  <div
                    className="absolute h-1 w-0 rounded-full bg-primary"
                    style={{ width: '24.1935%', left: '11.2903%' }}
                  />
                  <div
                    tabIndex={'-1'}
                    className="focusable absolute top-1/2 -ml-2 flex h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow"
                    unselectable="on"
                    style={{ left: '11.2903%' }}
                  >
                    <div className="relative -mt-2 w-1"></div>
                  </div>
                  <div
                    tabIndex={'-1'}
                    className="focusable absolute top-1/2 -ml-2 flex h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow"
                    unselectable="on"
                    style={{ left: '35.4839%' }}
                  >
                    <div className="relative -mt-2 w-1"></div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs">
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
                    className="peer checkbox checkbox-xs rounded border-opacity-50 checked:checkbox-primary"
                  />
                  <span className="peer-checked:text-primary">{label}</span>
                </label>
              )
            })}
          </FilterCollapse>
        </form>
      </aside>
      <div className="flex-1 space-y-4 py-6 px-container-offset">
        <label className="relative block w-full">
          <div className="icon h2 absolute top-0 left-0 flex h-10 w-10 items-center justify-center text-xl text-base-content text-opacity-50">
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
            className="input-bordered input input-md inline-block w-full rounded bg-white pl-10"
          />
        </label>
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm">177 results found</div>
          <div>
            <span className="text-xs uppercase text-base-content text-opacity-60">
              SORT BY:{' '}
            </span>
            <select className="select select-sm border-none text-base">
              <option>Choose...</option>
              <option>Most recent</option>
              <option>Price hight to low</option>
              <option>Price low to hight</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {new Array(24).fill(
            <div className="bg-[hsl(0deg 0% 99%)] flex h-full w-full flex-col border border-black border-opacity-[0.12]">
              <div className="w-full">
                <div className="relative aspect-square">
                  <ImageLabel>Used</ImageLabel>
                  <button
                    type="button"
                    className="search-results__favorite-button btn"
                  >
                    <i className="material-icons">favorite_border</i>
                  </button>
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://lmrvimages.azureedge.net/lt164447/01-main.jpg"
                  />
                </div>
                <div className="p-3 text-center">
                  <div className="text-xl uppercase leading-snug text-primary hover:underline">
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
              <div className="flex flex-1 flex-col justify-end gap-2 border-t p-2">
                <a
                  className="btn btn-link btn-sm capitalize underline"
                  role="button"
                >
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
          )}
        </div>
      </div>
    </div>
  )
}
