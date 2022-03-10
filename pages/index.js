import { templateRoutes } from '../utils/componentRoutes'

export default function Pages({ }) {
  const componentRoutes = templateRoutes.find(([key]) => key === 'homepage' )[1]
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
      <div className="flex flex-col justify-between min-h-screen ">
        {componentRoutes.map(([key, Component, props]) => {
          return <Component key={key} {...props} />
        })}
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
     
    },
  }
}

