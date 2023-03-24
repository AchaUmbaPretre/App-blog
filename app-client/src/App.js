import './App.css';
import './Font-Awesome-6.x/css/all.min.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

const Layout =()=>{
  return (
    <>
    
      <Topbar/>
      <div className="layout">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/post/:id',
        element: <Single/>,
      },
      {
        path:'/write',
        element: <Write/>,
      }
    ]
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/login',
    element: <Login/>
  }
])


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
