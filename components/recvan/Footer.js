import React from 'react'
import Logo from './common/Logo'

export default function Footer() {
  return (
    <footer className="bg-base-200 pb-[var(--bottom-offset)] text-base-content text-opacity-70">
      <div className="mx-auto divide-y max-w-screen-2xl divide-base-content divide-opacity-30 ">
        <div className="py-6 px-container-offset ">
          <div className="flex flex-wrap justify-between gap-4 lg:gap-8">
            <div className="flex w-full flex-col  text-sm leading-tight sm:flex-row sm:gap-4 md:max-w-[50%] lg:max-w-[307px]">
              <ul className="flex flex-col flex-1 divide-y divide-base-content divide-opacity-30 sm:divide-y-0">
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanSearch?inventoryType=new"
                  >
                    New Inventory
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanSearch?inventoryType=used"
                  >
                    Used Inventory
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanSearch?showOnlySpecials=true"
                  >
                    Show Specials
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanHome/Service"
                  >
                    Service Your Adventure Van
                  </a>
                </li>
                <div />
              </ul>
              <ul className="flex flex-col flex-1 divide-y divide-base-content divide-opacity-30 sm:divide-y-0">
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanHome/About"
                  >
                    About Rec Van
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanHome/Location"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanHome/Careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 leading-relaxed uppercase hover:opacity-70 sm:underline "
                    href="#/RecVanHome/Sell"
                  >
                    Sell Your Adventure Van
                  </a>
                </li>
                <div />
              </ul>
            </div>
            <div className=" w-full md:max-w-[307px]">
              <form
                action="/RecVanSearch/EmailOffers"
                method="post"
                style={{ width: '100%' }}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="uppercase label-text text-opacity-70">
                      <h6>GET EMAIL OFFERS</h6>
                    </span>
                  </label>
                  <label className="group input-group">
                    <input
                      type="text"
                      placeholder="Your email"
                      className="bg-transparent input-bordered input placeholder:text-base-content placeholder:text-opacity-40"
                    />
                    <span className="text-sm text-black cursor-pointer bg-base-content hover:bg-opacity-70">
                      SUBSCRIBE
                    </span>
                  </label>
                </div>
              </form>
            </div>
            <div className="w-full min-w-[300px] flex-1 space-y-3 py-2 text-justify text-xs ">
              <p className="">
                Rec Van means adventure vans built on top platforms – Sprinter,
                ProMaster, Transit. From luxury to budget-friendly, Rec Van has
                unparalleled selection. Top brands like Winnebago, Storyteller
                Overland, Midwest Automotive Designs, Phoenix USA RV, Thor Motor
                Coach, Roadtrek, Renegade RV, and Entegra Coach. Looking for
                something new in an adventure van? You'll find it first at Rec
                Van!
              </p>
              <p className="">
                Prices subject to change without notice. All advertised prices
                exclude government fees and taxes, any finance charges, and
                dealer document processing charge, any electronic filing charge,
                and any emission testing charge. Lengths are not an exact
                measurement of the unit.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 px-container-offset ">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="h-[55px] w-[100px]">
              <Logo />
            </div>
            <div className="w-full md:flex-1" />
            <div className="flex items-center gap-3 ">
              <h6 className="text-sm uppercase truncate">Get Connected</h6>
              <div className="text-2xl icon h2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
              <div className="text-2xl icon h2">
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
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="text-2xl icon h2">
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
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </div>
              <div className="text-2xl icon h2">
                <svg
                  className="text-[1.2em]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-container-offset ">
          <p className="mb-0 text-xs text-center text-sm-right md:text-right">
            <a className="underline" href="#/RecVanHome/PrivacyPolicy">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a className="underline" href="#/RecVanHome/CSCA">
              California Supply Chain Act
            </a>{' '}
            |{' '}
            <a className="underline" href="tel:8338667864">
              833-866-7864
            </a>{' '}
            |{' '}
            <a className="underline" href="mailto:sales@recvan.com">
              sales@recvan.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
