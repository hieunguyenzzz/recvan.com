import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from '../UI/Image'
const useSlider = ({ sliderWrapRef }) => {
  const [nextAble, setNextAble] = useState(true)
  const [prevAble, setPrevAble] = useState(false)
  useEffect(() => {
    sliderWrapRef.current.addEventListener('scroll', (e) => {
      if (e.target.scrollLeft + e.target.clientWidth === e.target.scrollWidth) {
        setNextAble(false)
      } else {
        setNextAble(true)
      }
      if (e.target.scrollLeft === 0) {
        setPrevAble(false)
      } else {
        setPrevAble(true)
      }
    })
  }, [])
  return useMemo(() => ({
    nextAble,
    prevAble,
    handleNext: () => {
      sliderWrapRef.current.scrollLeft =
        sliderWrapRef.current.scrollLeft + sliderWrapRef.current.clientWidth
    },
    handlePrev: () => {
      sliderWrapRef.current.scrollLeft =
        sliderWrapRef.current.scrollLeft - sliderWrapRef.current.clientWidth
    },
  }))
}
function Carousel({ items }) {
  const sliderWrapRef = useRef()
  const { handleNext, handlePrev, prevAble, nextAble } = useSlider({
    sliderWrapRef,
  })
  return (
    <div className="w-full py-4 text-white bg-neutral">
      <div className="container relative px-4 max-w-none ">
        <div ref={sliderWrapRef} className="gap-4 carousel">
          {items.map(({ caption, src, href, title }, i) => {
            return (
              <a
                key={i}
                href={href}
                className=" carousel-item relative w-full  sm:w-[calc((100%-1em)/2)] md:w-[calc((100%-2em)/3)] lg:w-[calc((100%-3em)/4)] xl:w-[calc((100%-4em)/5)] 2xl:w-[calc((100%-5em)/6)]"
              >
                <div className="aspect-[207/134] w-full" />
                <Image
                  className="absolute top-0 left-0 object-cover w-full h-full"
                  src={src}
                  alt={caption}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-colors duration-700 ease-in-out group text-neutral-content hover:bg-neutral hover:bg-opacity-70">
                  <h5 className="p-2 py-1 uppercase transition-colors duration-700 ease-in-out border border-transparent cursor-pointer bg-neutral bg-opacity-80 text-neutral-content group-hover:border-white group-hover:bg-transparent">
                    {title}
                  </h5>
                </div>
              </a>
            )
          })}
        </div>
        <button
          disabled={!prevAble}
          onClick={handlePrev}
          className="absolute left-0 flex items-center justify-center w-10 h-10 text-xl text-white -translate-y-1/2 rounded-full top-1/2 bg-neutral disabled:opacity-50"
          aria-label="Next"
          type="button"
          aria-disabled={!prevAble}
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <button
          disabled={!nextAble}
          onClick={handleNext}
          className="absolute right-0 flex items-center justify-center w-10 h-10 text-xl text-white rotate-180 -translate-y-1/2 rounded-full top-1/2 bg-neutral disabled:opacity-50"
          aria-label="Next"
          type="button"
          aria-disabled={!nextAble}
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
