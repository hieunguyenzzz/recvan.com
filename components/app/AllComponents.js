import componentRoutes, { templateRoutes } from '@utils/componentRoutes'
import React, { useEffect, useRef, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
const componentList = componentRoutes
export default function AllComponents() {
  const [size, setSize] = useState()
  let constraintsRef = useRef()
  useEffect(() => {
    let observer = new ResizeObserver(() => {
      let width = constraintsRef.current.offsetWidth
      let height = constraintsRef.current.offsetHeight
      setSize({
        width,
        height,
      })
    })
    observer.observe(constraintsRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <input
        hidden
        defaultChecked
        id="data-theme-recvan"
        data-theme="recvan"
        name="theme"
        type="radio"
        defaultValue="recvan"
      />
      <input
        hidden
        id="data-theme-light"
        data-theme="light"
        name="theme"
        type="radio"
        defaultValue="light"
      />
      <input
        hidden
        id="data-theme-dark"
        data-theme="dark"
        name="theme"
        type="radio"
        defaultValue="dark"
      />
      <input
        hidden
        id="data-theme-cupcake"
        data-theme="cupcake"
        name="theme"
        type="radio"
        defaultValue="cupcake"
      />
      <input
        hidden
        id="data-theme-retro"
        data-theme="retro"
        name="theme"
        type="radio"
        defaultValue="retro"
      />
      <div className="drawer-mobile drawer ">
        <input id="main-menu" type="checkbox" className="drawer-toggle" />
        <main className="btext-base-content drawer-content block h-screen flex-grow !overflow-hidden ">
          <div
            id="nav"
            className="sticky inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b border-base-200 bg-base-100 text-base-content"
          >
            <div className="mx-auto space-x-1 navbar max-w-none">
              <div className="flex-none">
                <label
                  htmlFor="main-menu"
                  className="btn btn-ghost drawer-button btn-square lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="flex items-center flex-none lg:hidden">
                <a
                  href="#/"
                  aria-label="Homepage"
                  className="px-2 flex-0 nuxt-link-active btn btn-ghost md:px-4"
                >
                  <div className="inline-block text-3xl font-title text-primary">
                    <span className="lowercase">Recvan</span>
                    <span className="uppercase text-base-content">.com</span>
                  </div>
                </a>
              </div>

              <div className="flex-1" />

              <div title="Change Theme" className="dropdown-end dropdown">
                <div tabIndex={0} className="m-1 normal-case btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current md:mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  <span className="hidden md:inline">Change Theme</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    className="inline-block w-4 h-4 ml-1 fill-current"
                  >
                    <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                  </svg>
                </div>
                <div className="mt-16 overflow-y-auto shadow-2xl dropdown-content rounded-b-box top-px max-h-96 w-52 bg-neutral text-neutral-content text-base-content">
                  <ul className="p-4 compact menu">
                    <li>
                      <a href="#">
                        <label
                          className="block w-full"
                          htmlFor="data-theme-recvan"
                          tabIndex={0}
                          data-set-theme="recvan"
                          data-act-class="active"
                        >
                          🌝 recvan
                        </label>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <label
                          className="block w-full"
                          htmlFor="data-theme-light"
                          tabIndex={0}
                          data-set-theme="light"
                          data-act-class="active"
                        >
                          🌝  light
                        </label>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <label
                          className="block w-full"
                          htmlFor="data-theme-dark"
                          tabIndex={0}
                          data-set-theme="dark"
                          data-act-class="active"
                        >
                          🌚  dark
                        </label>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <label
                          className="block w-full"
                          htmlFor="data-theme-cupcake"
                          tabIndex={0}
                          data-set-theme="cupcake"
                          data-act-class="active"
                        >
                          🧁  cupcake
                        </label>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <label
                          className="block w-full"
                          htmlFor="data-theme-retro"
                          tabIndex={0}
                          data-set-theme="retro"
                          data-act-class="active"
                        >
                          🐝  bumblebee
                        </label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative h-[calc(100vh-65px)] overflow-auto bg-base-100">
            <div
              style={
                size && {
                  width: size.width + 'px',
                  height: size.height + 'px',
                }
              }
              className="absolute w-full h-full "
            >
              <div className="absolute inset-0 bottom-0 right-0 top-8 left-8 ">
                <div className="relative z-10 w-full h-full ">
                  <div className="relative w-full h-full ">
                    {componentList.map(([id], i) => {
                      return (
                        <VisibilitySensor key={i}>
                          {({ isVisible }) => (
                            <div
                              id={id}
                              className="absolute top-0 left-0 flex-col hidden w-full h-full target:flex"
                            >
                              <div className="top-0 left-0 flex items-center gap-1 h-11">
                                <a
                                  target={'_blank'}
                                  href={`/components/${id}`}
                                  className="gap-2 btn btn-ghost btn-xs"
                                >
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
                                      <path d="M16 7H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM4 19v-8h12V9l.002 10H4z" />
                                      <path d="M22 5c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2h13.001c1.101 0 1.996.895 1.999 1.994L20.002 15H20v2c1.103 0 2-.897 2-2V8.007L22.001 8V6L22 5.99V5z" />
                                    </svg>
                                  </div>
                                  New Window
                                </a>
                              </div>
                              {isVisible ? (
                                <iframe
                                  key={i}
                                  src={'/components/' + id}
                                  loading="lazy"
                                  className="left-0 flex-1 w-full border border-opacity-50 border-base-content"
                                ></iframe>
                              ) : (
                                ''
                              )}
                            </div>
                          )}
                        </VisibilitySensor>
                      )
                    })}
                    {templateRoutes.map(([id], i) => {
                      return (
                        <VisibilitySensor key={'Templates-' + i}>
                          {({ isVisible }) => (
                            <div
                              id={'Templates-' + id}
                              className="absolute top-0 left-0 flex-col hidden w-full h-full target:flex"
                            >
                              <div className="top-0 left-0 flex items-center gap-1 h-11">
                                <a
                                  target={'_blank'}
                                  href={`/templates/${id}`}
                                  className="gap-2 btn btn-ghost btn-xs"
                                >
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
                                      <path d="M16 7H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM4 19v-8h12V9l.002 10H4z" />
                                      <path d="M22 5c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2h13.001c1.101 0 1.996.895 1.999 1.994L20.002 15H20v2c1.103 0 2-.897 2-2V8.007L22.001 8V6L22 5.99V5z" />
                                    </svg>
                                  </div>
                                  New Window
                                </a>
                              </div>
                              {isVisible ? (
                                <iframe
                                  key={i}
                                  src={'/templates/' + id}
                                  loading="lazy"
                                  className="left-0 flex-1 w-full border border-opacity-50 border-base-content"
                                ></iframe>
                              ) : (
                                ''
                              )}
                            </div>
                          )}
                        </VisibilitySensor>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="absolute z-20 text-xl pointer-events-none icon h2 -bottom-4 -right-4 text-neutral-content">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12zM5.904 5.197 10 9.293V6.525a.5.5 0 0 1 1 0V10.5a.5.5 0 0 1-.5.5H6.525a.5.5 0 0 1 0-1h2.768L5.197 5.904a.5.5 0 0 1 .707-.707z" />
                </svg>
              </div>
            </div>
            <textarea
              ref={constraintsRef}
              className="absolute resize top-4 left-4 bottom-4 right-4 "
            />
          </div>
        </main>
        <div className="drawer-side">
          <label htmlFor="main-menu" className="drawer-overlay" />
          <aside className="flex flex-col justify-start border-r w-80 border-base-200 bg-base-100 text-base-content">
            <div className="sticky inset-x-0 top-0 z-50 hidden w-full transition duration-200 ease-in-out border-b border-base-200 bg-base-100 lg:block">
              <div className="mx-auto space-x-1 navbar max-w-none">
                <div className="flex items-center flex-none">
                  <a
                    href="#/"
                    aria-label="Homepage"
                    className="px-2 flex-0 nuxt-link-active btn btn-ghost md:px-4"
                  >
                    <div className="inline-block text-3xl font-title text-primary">
                      <span className="lowercase">recvan</span>
                      <span className="uppercase text-base-content">.com</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ul className="flex flex-col p-4 pt-2 compact menu">
                <li className="mt-4 menu-title">
                  <span>Components</span>
                </li>
                {componentList.map(([id], i) => {
                  return (
                    <li key={'Components-' + i}>
                      <a href={'#' + id} className="capitalize">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-6 h-6 mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        {id}
                      </a>
                    </li>
                  )
                })}
                <li className="mt-4 menu-title">
                  <span>Templates</span>
                </li>
                {templateRoutes.map(([id], i) => {
                  return (
                    <li key={'Templates-' + i}>
                      <a href={'#Templates-' + id} className="capitalize">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-6 h-6 mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        {id}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
