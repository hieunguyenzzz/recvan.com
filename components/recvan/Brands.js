import React from 'react'

export default function Brands() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="sticky top-[calc(100vh-var(--header-height))] flex flex-col items-center bg-base-100 text-center leading-none">
          <h2 className="text-2xl font-bold uppercase">Brands You</h2>
          <h2 className="text-6xl font-bold uppercase">Trust</h2>
        </div>
      </div>
    </div>
  )
}
