
import styles from "../styles/styles.module.css";

import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";




export const ProductContext = createContext({} as  ProductContextProps )
const { Provider } = ProductContext;


interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number
}



export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value } );

    return (

        <Provider value={{
            counter,
            increaseBy,
            product

        }}>

            <div className={`${styles.productCard} ${ className}`}
            
                style={style}
            >

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