import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList";

const URL = "https://fakestoreapi.com/products";

export interface Product {
  id: number
  title: string
  price: number
  image: string
}

const Home = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      console.log('Api response ---> ', data)
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
          <h1 className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]">
            All-in-One E-commerce App
          </h1>
          <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
            Discover premium products and enjoy shopping with us. Risk Free
            Shopping!
          </h2>
        </div>
      </div>
      {/* Products Section */}
      <div className="container mx-auto bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Featured Products</h1>
        <ProductList products={products} />
      </div>
      {/* Footer Section */}
      <footer className="relative z-50 bg-[#191F33]">
        <div className="flex flex-col items-center px-4 py-12">
          <div>
            <a
              className="mb-8 flex items-center justify-center gap-5 text-white"
              href="/"
            >
              <img
                alt="Logo"
                style={{ color: "transparent" }}
                width={50}
                src="https://baitussalam.org/images/logo-2.svg"
              />
              <span className="text-3xl font-semibold tracking-wider">
                Bait-us-Salam
              </span>
            </a>
            <p className="max-w-xl text-center text-lg font-medium text-white">
              Shop Today!
            </p>
          </div>
        </div>
        <div className="bg-[#2E3447]">
          <div className="px-3 py-3 text-center">
            <span className="text-[#767E94]">
              Coded with 💙 by{/* */}
              <a
                href="https://www.linkedin.com/in/abdulbasitprofile/"
                target="_blank"
                className="text-white"
              >
                Abdul Basit{" "}
              </a>
              in Karachi
            </span>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Home