import links from '../links.json'

export async function getServerSideProps(context) {
  const { slug } = context.params
  const destination = links[slug]

  if (destination) {
    return {
      redirect: {
        destination,
        permanent: false,
      },
    }
  }

  return {
    notFound: true,
  }
}

export default function RedirectPage() {
  return null
}
