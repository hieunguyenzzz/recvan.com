import componentRoutes from '../../utils/componentRoutes'

export default function Pages({ slug, ...props }) {
  const Component = componentRoutes.find(([key]) => slug === key)[1]
  return <Component {...props}></Component>
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  return {
    props: {
      slug: slug,
      ...componentRoutes.find(([key]) => slug === key)[2],
    },
  }
}

export async function getStaticPaths() {
  let paths = []
  componentRoutes.forEach(([slug]) => {
    paths.push('/components/' + slug)
  })
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}
