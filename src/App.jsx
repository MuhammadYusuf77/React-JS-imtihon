import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
import Top from './components/TopRated/TopRated'
import Upcoming from './components/Upcoming/Upcoming'
import Header from './components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([{
    path: "/popular",
    element: <Popular />
  }, {
    path: "/toprated",
    element: <Top />
  }, {
    path: "/upcoming",
    element: <Upcoming />
  }])

  return (
    <>
      <Header />
      <Home />
      <RouterProvider router={router} />
    </>
  )
}

export default App
