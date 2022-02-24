import classNames from 'classnames'
import React, { useEffect, useMemo, useRef, useState } from 'react'
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
function Carousel({
  items,
  buttonPrev = (
    <button
      className="absolute left-0 flex items-center justify-center w-10 h-10 text-xl text-white -translate-y-1/2 rounded-full top-1/2 bg-neutral disabled:opacity-50"
      aria-label="Next"
      type="button"
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
  ),
  buttonNext = (
    <button
      className="absolute right-0 flex items-center justify-center w-10 h-10 text-xl text-white rotate-180 -translate-y-1/2 rounded-full top-1/2 bg-neutral disabled:opacity-50"
      aria-label="Next"
      type="button"
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
  ),
  itemClassName = 'relative w-full  sm:w-[calc((100%-1em)/2)] md:w-[calc((100%-2em)/3)] lg:w-[calc((100%-3em)/4)] xl:w-[calc((100%-4em)/5)] 2xl:w-[calc((100%-5em)/6)]',
}) {
  const sliderWrapRef = useRef()
  const { handleNext, handlePrev, prevAble, nextAble } = useSlider({
    sliderWrapRef,
  })
  return (
    <div className="relative px-4 max-w-none">
      <div ref={sliderWrapRef} className="gap-4 carousel">
        {items.map((item, i) => {
          return (
            <div key={i} className={classNames('carousel-item', itemClassName)}>
              {item}
            </div>
          )
        })}
      </div>
      {React.cloneElement(buttonPrev, {
        ...buttonPrev.props,
        disabled: !prevAble,
        onClick: handlePrev,
        'aria-disabled': !prevAble,
      })}
      {React.cloneElement(buttonNext, {
        ...buttonNext.props,
        disabled: !nextAble,
        onClick: handleNext,
        'aria-disabled': !nextAble,
      })}
    </div>
  )
}

export default Carousel
