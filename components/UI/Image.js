// import NextImage from 'next/image'
import React from 'react'
// const myLoader = ({ src, width, quality }) => {
//   return src
// }
// export default function Image(props) {
//   return <NextImage loader={myLoader} layout="fill" {...props} />
// }
export default function Image(props) {
  return <img {...props} />
}
