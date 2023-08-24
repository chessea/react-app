import { ProductCard } from '../components/ProductCard';
import '../styles/custom.styles.css';
import { Product } from '../interfaces/interfaces'
import { useState } from 'react';




const product1 = {
    id: "1",
    title: "Coffe Mug - Card",
    img: './coffee-mug.png'
}

const product2 = {
    id: "2",
    title: "Coffe Mug - Meme",
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({})


    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        /*  console.log("onProductCountChange",count ) */

        setshoppingCart(oldShoppingCart => {

            if (count === 0) {
                delete oldShoppingCart[product.id];

                return { ...oldShoppingCart };
            }

            return {

                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={ shoppingCart[product.id]?.count || 0 }
                          
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Title title={product.title} className="text-bold" />
                            <ProductCard.Bottons className="custom-buttons" />
                        </ProductCard>


                    ))
                }
            </div>

            <div className='shopping-card'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: "100px" }}
                            onChange={onProductCountChange}
                            value={product.count}
                            >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Bottons className="custom-buttons"
                                style={{ display: 'flex', justifyContent: 'center' }} />
                        </ProductCard>
                    ))

                }
            </div>


            <div>
                <code>{JSON.stringify(shoppingCart, null, 5)}</code>
            </div>
        </div >
    )
}
