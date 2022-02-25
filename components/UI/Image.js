import classNames from 'classnames'
import NextImage from 'next/image'
import React from 'react'
const myLoader = ({ src, width, quality }) => {
  return src
}
export default function Image({
  className,
  size,
  ratio = 'auto',
  shape,
  ...props
}) {
  if (ratio === 'auto') {
    return (
      <NextImage
        className="absolute inset-0 object-cover w-full h-full"
        loader={myLoader}
        layout="fill"
        {...props}
      />
    )
  }
  const rootClassName =
    'relative w-full before:contents before:w-full before:pb-[var(--ratio)] before:!block content'
  return (
    <div
      style={{
        '--ratio': `${ratio * 100}%`,
      }}
      className={classNames(rootClassName, className)}
    >
      <NextImage
        className="absolute inset-0 object-cover w-full h-full"
        loader={myLoader}
        layout="fill"
        {...props}
      />
    </div>
  )
}
// export default function Image(props) {
//   return <img {...props} />
// }
