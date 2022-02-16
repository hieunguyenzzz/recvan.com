import React, { useEffect, useRef, useState } from 'react'

export default function AdventurersWantedVideo() {
  const trackerRef = useRef()
  const [percent, setPercent] = useState(0)
  useEffect(() => {
    let lastKnownScrollPosition = 0
    let ticking = false
    function calcPercent() {
      if (trackerRef.current.getBoundingClientRect().top > 0) {
        return setPercent(0)
      }
      const top = Math.abs(trackerRef.current.getBoundingClientRect().top)
      const max = Math.abs(
        trackerRef.current.getBoundingClientRect().height - window.innerHeight
      )
      setPercent(Math.min(100, Math.max(0, Math.ceil((top / max) * 100))))
    }
    function windowScrollHandler() {
      lastKnownScrollPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          calcPercent()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', windowScrollHandler)
    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  }, [])
  return (
    <div ref={trackerRef} className="w-full ">
      <div className="sticky top-0 isolate flex h-screen w-full items-center bg-[#585731]">
        <div className="absolute left-0 top-1/2 z-[-1] flex w-full -translate-y-1/2 justify-center text-center">
          <div className="p-4 mx-auto bg-base-200">
            <h2 class="text-[4vw] font-bold leading-[4.2vw] tracking-widest">
              Adventurers
            </h2>
            <h2 class="text-[9vw] font-bold leading-[9.6vw] tracking-widest">
              Wanted
            </h2>
          </div>
        </div>
        <div
          style={{
            paddingBottom: '56.25%',
            opacity: percent / 100,
            clipPath: `inset(${145 - (145 * percent) / 100}px)`,
          }}
          className="relative top-0 right-0 w-full "
        >
          <iframe
            className="absolute w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/6JESEQk7Pzw?&autoplay=1&mute=1&modestbranding=1&rel=0&loop=1&playlist=6JESEQk7Pzw"
            frameBorder={0}
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>
      <div style={{ paddingBottom: '56.25%' }}></div>
    </div>
  )
}
