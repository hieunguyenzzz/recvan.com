import classNames from 'classnames'
import NextImage from 'next/image'
import React from 'react'
const myLoader = ({ src, width, quality }) => {
  return 'https://image-proxy.ngohoanglongptit8635.workers.dev/' + src
}
export default function Image({
  className,
  size,
  ratio = 'auto',
  shape,
  src,
  ...props
}) {
  if (ratio === 'auto') {
    return (
      <NextImage
        className="absolute inset-0 object-cover w-full h-full"
        // loader={myLoader}
        src={'https://image-proxy.ngohoanglongptit8635.workers.dev/' + src}
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
        layout="fill"
        src={'https://image-proxy.ngohoanglongptit8635.workers.dev/' + src}
        {...props}
      />
    </div>
  )
}
// export default function Image(props) {
//   return <img {...props} />
// }
