import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import "./App.scss"
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});


const Layout = () => {
  return(
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
 


const route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/product/:id', element: <Product /> },
        { path: '/products/:id', element: <Products /> }
      ]
    }
  ]);


function App() {
  return (
    <RouterProvider router={route} data-scroll/>
  );
}

export default App;
