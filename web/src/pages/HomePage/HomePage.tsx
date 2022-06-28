import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>Home mehome moheme!</p>
      <ArticlesCell />
    </>
  )
}

export default HomePage
