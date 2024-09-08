
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import NowPlaying from './Components/NowPlaying/NowPlaying'
import Popular from './Components/Popular/Popular'
import TopRated from './Components/TopRated/TopRated'
import Trending from './Components/Trending/Trending'
import Upcoming from './Components/Upcoming/Upcoming'

import ShowContextProvider from './Context/ShowContext'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



let router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <NowPlaying /> },
      { path: '/popular', element: <Popular /> },
      { path: '/toprated', element: <TopRated /> },
      { path: '/trending', element: <Trending /> },
      { path: '/upcoming', element: <Upcoming /> },


    ]
  }
])

function App() {


  let query = new QueryClient()



  return (
    <>


      <QueryClientProvider client={query}>
        <ShowContextProvider>
          <RouterProvider router={router}>

            <ReactQueryDevtools />
          </RouterProvider>

        </ShowContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
