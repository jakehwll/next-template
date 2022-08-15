import Meta from 'components/Meta'
import type { NextPage } from 'next'

const PageNotFound: NextPage = () => {
  return (
    <>
      <Meta title={'Page Not Found'} />
      <h1>Page Not Found!</h1>
    </>
  )
}

export default PageNotFound
