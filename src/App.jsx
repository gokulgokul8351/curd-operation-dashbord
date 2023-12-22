import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// redux

import { Provider } from 'react-redux'
import { Store } from './store/Store'
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component
import Home from './component/Home'
import Create from './component/Create'
import Update from './component/Update'

function App() {
  return (
    <Provider store={Store}>
      <div className=" w-full h-screen bg-gray-900  ">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
            <Route
              path="/edit/:id"
              element={<Update />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
