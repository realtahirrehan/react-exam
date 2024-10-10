import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import { removeFromCart } from "../state/product/productSlice"
import { RootState } from "../state/store"

type CartItem = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const CartPage = () => {

  const dispatch = useDispatch()
  const items : CartItem[]= useSelector((state: RootState) => state.cart.items)

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

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
      {/* Cart Page */}
      <div className="container mx-auto mb-10 max-w-6xl bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>
        {/* Cart Items Section */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Cart Items List */}
          <div className="w-full lg:w-3/4">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              {/* Single Cart Item */}
              {items.map(item => (
                <div className="mb-4 flex items-center justify-between border-b pb-4">

                  <div className="flex items-center space-x-4">
                    <img
                      className="h-20 w-20 object-cover"
                      src={item.image}
                      alt="Product Image"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500">Price: {item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-600" >Remove</button>
                </div>
              ))}

            </div>
          </div>
          {/* Cart Summary Section */}
          <div className="w-full lg:w-1/4">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Summary</h2>
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-800">{totalPrice.toFixed(2)}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-gray-800">$0.00</span>
              </div>
              <div className="mt-4 flex justify-between border-t pt-4">
                <span className="font-semibold text-gray-800">Total</span>
                <span className="font-bold text-gray-900">{totalPrice.toFixed(2)}</span>
              </div>
              <button className="mt-6 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
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

export default CartPage