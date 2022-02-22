import React, { useEffect, useRef, useState } from 'react'
import Logo from './common/Logo'
const Header = ({ navItems, transparent }) => {
  const trackerRef = useRef()
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!transparent) {
      setShow(true)
      return
    }
    let lastKnownScrollPosition = 0
    let ticking = false
    function calc() {
      setShow(
        Boolean(lastKnownScrollPosition > trackerRef.current.clientHeight)
      )
    }
    function windowScrollHandler() {
      lastKnownScrollPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          calc()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', windowScrollHandler)
    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  }, [transparent])
  return (
    <header
      ref={trackerRef}
      style={
        (show && {
          '--header-bg-opacity': '1',
        }) || {
          '--header-bg-opacity': '0',
        }
      }
      className="fixed z-50 flex min-h-[var(--header-height)] w-full flex-wrap items-center  justify-between bg-neutral text-neutral-content transition-colors focus-within:bg-opacity-100 md:flex-row md:flex-nowrap md:bg-opacity-[var(--header-bg-opacity)]"
    >
      <div className="z-[-1] mx-auto flex w-full flex-shrink-0 items-center justify-between gap-3 px-container-offset md:w-auto">
        <div className="h-header w-[81px] lg:w-[100px]">
          <Logo />
        </div>
        <label
          htmlFor="header-menu"
          className="btn-outline btn btn-ghost btn-square btn-sm !h-[40px] w-[56px] rounded text-3xl md:hidden"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
          </svg>
        </label>
      </div>
      <nav className="w-full md:flex-1 md:pl-container-offset">
        <input className="peer" hidden id="header-menu" type="checkbox"></input>
        <div className="flex max-h-0 flex-col overflow-hidden transition-all duration-500 ease-in-out peer-checked:h-auto   peer-checked:max-h-[calc(100vh-var(--header-height))] md:h-auto md:max-h-header md:flex-row md:items-center 2xl:justify-end">
          <form
            name="quickSearch"
            action="/RecVanSearch"
            data-id="keyword"
            className="my-2 rounded-full quick-search-rvs form-inline my-md-0 px-container-offset md:order-2 md:px-0"
            cr-attached="true"
          >
            <div className="relative flex w-full ">
              <input
                type="text"
                placeholder="Quick Search..."
                className="input-bordered input h-10 w-0 min-w-[160px] flex-1 !rounded-full border-neutral-content !border-opacity-50 bg-transparent transition-all transition placeholder:text-neutral-content placeholder:text-opacity-50 focus:min-w-[200px]"
              />
              <button className="absolute top-0 right-0 w-10 h-10 btn btn-ghost btn-circle">
                <div className="text-xl icon h2">
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
              </button>
            </div>
          </form>
          <ul className="flex flex-col order-1 w-full text-sm uppercase truncate divide-y divide-neutral-content divide-opacity-30 border-y border-neutral-content border-opacity-30 md:flex-row md:items-center md:divide-none md:border-y-0 2xl:absolute 2xl:left-1/2 2xl:w-auto 2xl:-translate-x-1/2">
            {navItems.map(({ title, href, active }, i) => {
              if (active) {
                return (
                  <li
                    key={i}
                    className="order-1 bordered md:flex md:items-center md:text-center"
                  >
                    <a
                      href={href}
                      className="relative flex items-center bg-neutral-content bg-opacity-10  px-8  py-3 text-white after:absolute after:top-0  after:left-0 after:h-full after:w-1 after:bg-white after:content-[''] md:h-header md:bg-transparent md:bg-none md:px-3 md:text-center md:after:left-0 md:after:h-1 md:after:w-full md:hover:bg-neutral-content md:hover:bg-opacity-10"
                    >
                      {title}
                    </a>
                  </li>
                )
              }
              return (
                <li
                  key={i}
                  className="order-1 md:flex md:items-center md:text-center"
                >
                  <a
                    href={href}
                    className="flex items-center px-8 py-3 borde bg-opacity-10 md:h-header md:bg-opacity-0 md:bg-none md:px-3 md:text-center md:hover:bg-neutral-content md:hover:bg-opacity-10"
                  >
                    {title}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="flex order-1 gap-2 py-3 px-container-offset md:order-3 md:w-auto">
            <a
              className="flex-1 gap-2 truncate btn-outline btn flex-nowrap md:btn-ghost md:h-10 md:w-10 md:flex-auto md:rounded-full lg:w-auto"
              href="tel:833-475-1658"
            >
              <div className="text-xl icon h2">
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
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>

              <span className="md:hidden lg:block">833-475-1658</span>
            </a>
            <button
              className="relative flex-1 gap-2 group btn-outline btn md:btn-ghost md:h-10 md:w-10 md:flex-auto md:rounded-full"
              type="button"
            >
              <div className="text-xl icon h2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="md:hidden">Favorites</span>
              <span
                className="badge badge-sm badge-outline absolute -top-2  -right-2 !border-neutral-content !border-opacity-50 !bg-neutral !bg-opacity-[var(--header-bg-opacity)] text-neutral-content group-hover:!bg-opacity-100 group-hover:text-neutral-content md:top-0"
                id="numFavorited"
              >
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
const Hero = () => {
  return (
    <div className="relative isolate flex w-full items-center bg-cover pt-header text-neutral-content bg-blend-soft-light md:h-[600px] md:min-h-screen md:pb-[120px]">
      <div
        style={{
          backgroundImage:
            'url("https://recvan.com/Content/images/home/hero-1.jpg")',
        }}
        className="absolute inset-0 z-[-1] h-full w-full bg-cover "
      ></div>
      <div className="absolute inset-0 z-[-1] h-full w-full bg-[#272727] opacity-[0.58] bg-blend-hard-light"></div>
      <div className="absolute inset-0 z-[-1] h-full w-full bg-[#C0B9A8] opacity-[0.16] bg-blend-screen"></div>
      <div className=" mx-auto flex max-w-[20rem] flex-col items-start  py-12 md:max-w-[44.25rem] md:flex-row  xl:max-w-[60rem] ">
        <div className="max-w-lg space-y-2  text-white md:flex-1 md:pr-7 md:text-right md:text-[1.125rem] xl:text-[1.125rem] 2xl:text-lg">
          <h1
            className="truncate  text-[2.0625em] leading-none xl:text-[2.5em]"
            id="headline1"
          >
            Join The
          </h1>
          <h1
            className="truncate  text-[3.25em] leading-none xl:text-[4em]"
            id="headline2"
          >
            Rec Van
          </h1>
          <h1
            className="truncate  text-[2.0625em] leading-none xl:text-[2.5em]"
            id="headline3"
          >
            Revolution
          </h1>
          <p id="content1" className="md:ml-14 md:mr-1">
            For Adventurers Looking for A Vehicle That Can Take You to New
            Places.
          </p>
        </div>
        <div
          id="leadForm"
          className="pt-4 md:border-l  md:border-l-neutral-content md:border-opacity-50 md:pt-[0.3125rem] md:pl-7 xl:max-w-sm"
        >
          <form
            action="/RecVanHome/HomeEmail"
            method="post"
            cr-attached="true"
            className="grid grid-cols-2 gap-3 text-primary"
          >
            <div className="block col-span-2 md:col-span-1">
              <input
                className="text-neutral-conten input-bordered input block w-full !border-opacity-50 bg-white"
                data-val="true"
                data-val-required="First Name is required"
                id="FirstName"
                name="Email.FirstName"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="block col-span-2 md:col-span-1">
              <input
                className="block w-full bg-white input-bordered input text-neutral-content "
                data-val="true"
                data-val-required="Last Name is required"
                id="LastName"
                name="Email.LastName"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="block col-span-2">
              <input
                className="block w-full bg-white input-bordered input text-neutral-content "
                id="Telephone"
                name="Email.Telephone"
                placeholder="Phone Number (optional)"
                type="text"
              />
            </div>
            <div className="block col-span-2">
              <input
                className="block w-full bg-white input-bordered input text-neutral-content "
                data-val="true"
                data-val-email="Please enter a valid email address"
                data-val-required="Email is required"
                id="Email"
                name="Email.Email"
                placeholder="Email Address"
                type="text"
              />
            </div>
            <button className="col-span-2 gap-2 uppercase btn btn-primary btn-block">
              Shop Now
              <div className="text-lg icon h2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            <p className="col-span-2 text-xs hint-text font-body text-neutral-content text-opacity-70">
              We will never share your contact information and you can
              unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default function HeroNav({ navItems, children, transparent }) {
  return (
    <>
      <Header navItems={navItems} transparent={transparent} />
      {transparent ? <Hero /> : <div className="h-header" />}
    </>
  )
}
