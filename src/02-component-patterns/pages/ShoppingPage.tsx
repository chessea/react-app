import {  ProductCard } from '../components/ProductCard';


const product ={
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
            <ProductCard  product={  product }>
                <ProductCard.Image/>
                <ProductCard.Title title="hola Mundo"/>
                <ProductCard.Bottons />
                </ProductCard>



                {/*<ProductCard.Title title={'cafe'}/> 
                 <ProductImage/>
                <ProductTitle title={""}/>
                <ProductButtons counter={0} increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.")
                    } } />
                */}

                
                <ProductCard  product={  product }>
                <ProductCard.Image/>
                <ProductCard.Title />
                <ProductCard.Bottons />
                </ProductCard>
                
        
             
          
        </div>
    </div >
  )
}
