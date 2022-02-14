import React from 'react'

export default function HeroNav() {
  return (
    <header className="flex flex-wrap items-center justify-between w-full bg-base-200 text-base-content">
      <div className="container flex items-center justify-between mx-auto">
        <div className="h-[var(--header-height)] min-w-[110px]">21312</div>
        <button className="text-2xl btn-outline btn btn-ghost btn-square lg:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
