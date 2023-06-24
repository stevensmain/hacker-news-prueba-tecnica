import { Suspense, lazy } from 'react'
import { Route } from 'wouter'

import Header from './componets/header/Header'
const TopStoriesPage = lazy(() => import('./pages/TopStoriesPage'))
const Details = lazy(() => import('./pages/Details'))

function App() {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={null}>
          <Route path="/" component={TopStoriesPage} />
          <Route path="/article/:id" component={Details} />
        </Suspense>
      </main>
    </>
  )
}

export default App
