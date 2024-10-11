import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import WrapperForRoutes from './components/WrapperForRoutes.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import './index.css'
import CartPage from './pages/CartPage.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import ProductDetail from './pages/ProductDetail.tsx'
import Signup from './pages/Signup.tsx'
import PublicRoute from './components/PublicRoute.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WrapperForRoutes />}>
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path=":productId" element={
        <ProtectedRoute>
          <ProductDetail />
        </ProtectedRoute>
      } />
      <Route path="cart" element={
        <ProtectedRoute>
          <CartPage />
        </ProtectedRoute>
      } />
      < Route path="login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      < Route path="signup" element={
        <PublicRoute>
          <Signup />
        </PublicRoute>

      } />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
