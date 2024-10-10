import { FC } from "react"
import { Link } from "react-router-dom"

interface ProductCardProps {
    id: number
    title: string
    price: number
    image: string
}

const ProductCard: FC<ProductCardProps> = ({
    id,
    title,
    image,
    price
}) => {
    return (
        <div className="boder-green-200 overflow-hidden rounded-lg border bg-white" >
            <img
                className="h-48 w-full object-cover"
                src={image}
                alt={title}
            />
            <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    {title}
                </h3>
                <p className="mb-4 text-gray-600">{price}</p>
                <Link to={`/${id}`} className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Buy Now
                </Link>
            </div>
        </div>
    )
}

export default ProductCard