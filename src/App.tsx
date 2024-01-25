import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyle } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
