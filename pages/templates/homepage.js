import componentRoutes from '../../utils/componentRoutes'

export default function Homepage({ slug, ...props }) {
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
      <div>
        {componentRoutes.map(([key, Component, props]) => {
          return <Component key={key} {...props} />
        })}
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}
