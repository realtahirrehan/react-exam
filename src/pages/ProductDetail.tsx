import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom";
import { addToCart } from "../state/product/productSlice";
import { useDispatch } from "react-redux";


const URL = "https://fakestoreapi.com/products";

export interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
  descripition: string
}

const ProductDetail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const [productDetail, setproductDetail] = useState<Product>();

  const fetchProductDetail = async () => {

      const response = await fetch(`${URL}/${params.productId}`)

      const data = await response.json()

      console.log('Api response ---> ', data)

      setproductDetail(data)
      
    }
    
    
    console.log('set product ---> ', productDetail)
  useEffect(() => {
    fetchProductDetail()
  }, [])

  const handleAddToCart = () => {
    if (productDetail) {
      dispatch(addToCart(productDetail));
    }
  };

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Navbar */}
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
      {/* Product Details */}
      <div className="container mx-auto max-w-6xl p-6">
        <div className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <img
              className="h-96 w-full object-cover"
              src={productDetail.image}
              alt="Product Image"
            />
          </div>
          {/* Product Info */}
          <div className="p-6 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">{productDetail.title}</h2>
            <p className="mb-2 text-sm text-gray-500">{productDetail.category}</p>
            <p className="mb-6 text-gray-700">
              {productDetail.descripition}
            </p>
            <p className="mb-6 text-2xl font-semibold text-gray-800">{productDetail.price}</p>
            {/* Buy Now Button */}
            <button onClick={handleAddToCart} className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
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

export default ProductDetail