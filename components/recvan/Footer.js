import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-base-200 pb-[var(--bottom-offset)] text-base-content">
      <div className="container divide-y divide-base-content divide-opacity-50 px-container-offset ">
        <div className="py-6">
          <div className="flex gap-4">
            <div className="flex max-w-[307px] text-sm leading-tight">
              <ul class="flex flex-1 flex-col">
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanSearch?inventoryType=new"
                  >
                    New Inventory
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanSearch?inventoryType=used"
                  >
                    Used Inventory
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanSearch?showOnlySpecials=true"
                  >
                    Show Specials
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanHome/Service"
                  >
                    Service Your Adventure Van
                  </a>
                </li>
              </ul>
              <ul class="flex flex-1 flex-col">
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanHome/About"
                  >
                    About Rec Van
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanHome/Location"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanHome/Careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 underline uppercase hover:opacity-70"
                    href="/RecVanHome/Sell"
                  >
                    Sell Your Adventure Van
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-[307px]">
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
            <div className="flex-1 space-y-3 text-xs text-base-content text-opacity-80">
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
        <div className="py-6"></div>
        <div className="py-6"></div>
      </div>
    </footer>
  )
}
