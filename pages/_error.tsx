import Meta from 'components/Meta'
import type { NextPage } from 'next'

const Error: NextPage = () => {
  return (
    <>
      <Meta title={'Error'} />
      <h1>Something went wrong!</h1>
    </>
  )
}

export default Error
