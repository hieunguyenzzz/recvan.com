import Button from '@components/UI/Button'
import React, { useEffect, useRef, useState } from 'react'
import Icon from './common/Icons'
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
      className="fixed z-50 flex min-h-[var(--header-height)] w-full flex-wrap items-center justify-between bg-neutral  text-neutral-content transition-colors focus-within:bg-opacity-100 md:flex-row md:flex-nowrap md:bg-opacity-[var(--header-bg-opacity)]"
    >
      <div className="z-[-1] mx-auto flex w-full flex-shrink-0 items-center justify-between gap-3 px-container-offset md:w-auto">
        <div className="h-header w-[81px] lg:w-[100px]">
          <Logo />
        </div>
        <Button
          className=" !h-[40px] w-[56px] rounded border-neutral-content border-opacity-60 text-3xl text-neutral-content text-opacity-70 md:hidden"
          variant={'outline'}
          size="sm"
        >
          {(props) => (
            <label htmlFor="header-menu" {...props}>
              <Icon className={'text-3xl'} id="menu" />
            </label>
          )}
        </Button>
      </div>
      <nav className="w-full md:flex-1 md:pl-container-offset">
        <input className="peer" hidden id="header-menu" type="checkbox"></input>
        <div className="flex max-h-0 flex-col overflow-hidden transition-all duration-500 ease-in-out peer-checked:h-auto   peer-checked:max-h-[calc(100vh-var(--header-height))] md:h-auto md:max-h-header md:flex-row md:items-center xl:justify-end">
          <form
            name="quickSearch"
            action="/RecVanSearch"
            data-id="keyword"
            className="my-2 rounded-full form-inline my-md-0 px-container-offset md:order-2 md:px-0"
            cr-attached="true"
          >
            <div className="relative flex w-full ">
              <input
                type="text"
                placeholder="Quick Search..."
                className="input-bordered input h-10 w-0 min-w-[160px] flex-1 !rounded-full border-neutral-content !border-opacity-50 bg-transparent transition-all  placeholder:text-neutral-content placeholder:text-opacity-50 focus:min-w-[200px]"
              />
              <Button
                className="absolute top-0 right-0 w-10 h-10 min-h-0 "
                variant={'ghost'}
                shape="circle"
              >
                <Icon className="text-xl" id="search"></Icon>
              </Button>
            </div>
          </form>
          <ul className="flex flex-col order-1 w-full text-sm uppercase truncate divide-y divide-neutral-content divide-opacity-30 border-y border-neutral-content border-opacity-30 md:flex-row md:items-center md:divide-none md:border-y-0 xl:absolute xl:left-1/2 xl:w-auto xl:-translate-x-1/2">
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
            <Button
              variant={'outline'}
              className="flex-1 min-h-0 gap-2 flex-nowrap border-neutral-content text-neutral-content hover:bg-neutral md:btn-ghost md:h-10 md:w-10 md:flex-auto md:rounded-full lg:w-auto"
            >
              {(props) => (
                <a href="tel:833-475-1658" {...props}>
                  <Icon className="text-xl" id="phone"></Icon>
                  <span className="md:hidden lg:block">833-475-1658</span>
                </a>
              )}
            </Button>
            <Button
              variant={'outline'}
              className="relative flex-1 min-h-0 gap-2 group flex-nowrap border-neutral-content text-neutral-content hover:bg-neutral md:btn-ghost md:h-10 md:w-10 md:flex-auto md:rounded-full "
              type="button"
            >
              <Icon className="text-xl" id="heart"></Icon>
              <span className="md:hidden">Favorites</span>
              <span
                className="badge badge-sm badge-outline absolute -top-2 -right-2  rounded-full !border-neutral-content !border-opacity-50 !bg-neutral bg-opacity-100 text-neutral-content group-hover:!bg-opacity-100 group-hover:text-neutral-content md:top-0 md:!bg-opacity-[var(--header-bg-opacity)]"
                id="numFavorited"
              >
                0
              </span>
            </Button>
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
      <div className=" mx-auto flex max-w-[20rem] flex-col items-start  py-12 md:max-w-[44.25rem] md:flex-row  lg:max-w-[60rem] ">
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
            <Button
              color={'primary'}
              shape="block"
              className="col-span-2 gap-2 uppercase "
            >
              Shop Now
              <Icon className="text-lg " id="arrow-right"></Icon>
            </Button>
            <p className="col-span-2 text-xs hint-text font-body text-neutral-content text-opacity-70">
              We will never share your contact information and you can
              unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 hidden w-full md:block">
        <div class="mx-auto flex max-w-[20rem] flex-col items-start border-t border-t-neutral-content border-opacity-50 md:max-w-[44.25rem] md:flex-row  lg:max-w-[60rem]">
          <ul className="flex h-[120px] w-full items-start text-sm lg:text-base ">
            <li className="group flex h-full flex-1 justify-center border-current bg-opacity-0 text-center  transition-all duration-300 ease-out hover:border-t-[4px] hover:bg-[rgba(39,39,39,0.38)] hover:text-base-100">
              <a
                href="#dedicatedToExcellence"
                className=" relative flex h-[80px] w-full items-center justify-center transition-all duration-300 ease-out group-hover:h-full "
              >
                <div className="absolute top-0 left-0 flex w-full origin-top scale-0 justify-center opacity-0 transition-all duration-300 ease-out group-hover:top-[15px] group-hover:scale-100 group-hover:opacity-100">
                  <Icon id="arrow-down"></Icon>
                </div>
                Dedicated to Excellence
              </a>
            </li>
            <li className="group flex h-full flex-1 justify-center border-current bg-opacity-0 text-center  transition-all duration-300 ease-out hover:border-t-[4px] hover:bg-[rgba(39,39,39,0.38)] hover:text-base-100">
              <a
                href="#dedicatedToExcellence"
                className=" relative flex h-[80px] w-full items-center justify-center transition-all duration-300 ease-out group-hover:h-full "
              >
                <div className="absolute top-0 left-0 flex w-full origin-top scale-0 justify-center opacity-0 transition-all duration-300 ease-out group-hover:top-[15px] group-hover:scale-100 group-hover:opacity-100">
                  <Icon id="arrow-down"></Icon>
                </div>
                Adventurers Wanted
              </a>
            </li>
            <li className="group flex h-full flex-1 justify-center border-current bg-opacity-0 text-center  transition-all duration-300 ease-out hover:border-t-[4px] hover:bg-[rgba(39,39,39,0.38)] hover:text-base-100">
              <a
                href="#dedicatedToExcellence"
                className=" relative flex h-[80px] w-full items-center justify-center transition-all duration-300 ease-out group-hover:h-full "
              >
                <div className="absolute top-0 left-0 flex w-full origin-top scale-0 justify-center opacity-0 transition-all duration-300 ease-out group-hover:top-[15px] group-hover:scale-100 group-hover:opacity-100">
                  <Icon id="arrow-down"></Icon>
                </div>
                Brands You Trust
              </a>
            </li>
            <li className="group flex h-full flex-1 justify-center border-current bg-opacity-0 text-center  transition-all duration-300 ease-out hover:border-t-[4px] hover:bg-[rgba(39,39,39,0.38)] hover:text-base-100">
              <a
                href="#dedicatedToExcellence"
                className=" relative flex h-[80px] w-full items-center justify-center transition-all duration-300 ease-out group-hover:h-full "
              >
                <div className="absolute top-0 left-0 flex w-full origin-top scale-0 justify-center opacity-0 transition-all duration-300 ease-out group-hover:top-[15px] group-hover:scale-100 group-hover:opacity-100">
                  <Icon id="arrow-down"></Icon>
                </div>
                A History of Connection
              </a>
            </li>
          </ul>
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
