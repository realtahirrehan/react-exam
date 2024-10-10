import { FC } from 'react'
import ProductCard from './ProductCard'
import { Product } from '../pages/Home'

interface ProductListProps {
    products: Product[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" >
                {products.map((product) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))
                }



            </div>
        </>
    )
}

export default ProductList
