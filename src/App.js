import React, { Suspense } from 'react'

// import FeatureOnePreious from './Components/FeatureOnePreious'
// import FeatureOneNew from './Components/FeatureOneNew'
// import FeatureTwo from './Components/FeatureTwo' //using lazy loading here
const Lazy = React.lazy(() => import('./Components/FeatureTwo'))

function App() {
  return (
    <>
      {/* <FeatureOnePreious /> */}
      {/* <FeatureOneNew /> */}
      {/* <FeatureTwo />   */}
      <Suspense fallback={<h1>Please wait.....</h1>}>
        <Lazy />
      </Suspense>

    </>
  )
}

export default App