
import { Suspense, useState } from "react";
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import LastSection from './components/LastSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import Products from './components/Products'
import StepsSection from './components/StepsSection'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productPromise = fetchData();
  const [cartValue, setCartValue] = useState(0);
  
  return (
    <div className='manrope'>
      <ToastContainer></ToastContainer>
      <Navbar
        cartValue={cartValue}>

      </Navbar>
      <Banner></Banner>
      <Suspense
          fallback={
            <div className="flex h-64 w-full items-center justify-center">
              <span className="loading loading-infinity w-24 text-indigo-600"></span>
            </div>
          }
        >
      <Products
            productPromise={productPromise}
            setCartValue={setCartValue}
            cartValue={cartValue}
          ></Products>

        </Suspense>
      {/* <Cart></Cart> */}
      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <LastSection></LastSection>
      <Footer></Footer>
    </div>
  )
}

export default App;
