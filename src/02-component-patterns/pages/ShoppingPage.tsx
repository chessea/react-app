import { ProductCard } from '../components/ProductCard';
import '../styles/custom.styles.css';

const product = {
    id: "1",
    title: "Coffe Mug - Card",
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard
                    product={product}
                    className="bg-dark text-white">

                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Bottons className="custom-buttons" />
                </ProductCard>


                {/*<ProductCard.Title title={'cafe'}/> 
                 <ProductImage/>
                <ProductTitle title={""}/>
                <ProductButtons counter={0} increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.")
                    } } />
                */}


                <ProductCard
                    product={product}
                    className="bg-dark text-white">

                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title="Hola Mundo" className="text-bold" />
                    <ProductCard.Bottons className="custom-buttons" />
                </ProductCard>


                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                    style={{ background: '#70D1F8'}}
                    >


                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title="Hola Mundo2" className="text-bold" />
                    <ProductCard.Bottons className="custom-buttons" 
                     style={{ display: 'flex',
                              justifyContent: 'end' }}
                    />
                </ProductCard>



            </div>
        </div >
    )
}
