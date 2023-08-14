
import styles from "../styles/styles.module.css";

import { useProduct } from '../hooks/useProduct';
import { createContext } from "react";
import { ProductContextProps, ProductsCardProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";




export const ProductContext = createContext({} as  ProductContextProps )
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductsCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (

        <Provider value={{
            counter,
            increaseBy,
            product

        }}>

            <div className={styles.productCard}>

                {children}
            </div>


        </Provider>


        /*         <div className={styles.productCard}>
                    <ProductImage img= {product.img}/>
                    <ProductTitle title={product.title}/>
                    <ProductButtons counter={counter} increaseBy={increaseBy} />          
                </div> */
    )
}


ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Bottons = ProductButtons;