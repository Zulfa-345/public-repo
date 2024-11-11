
import { product } from "../components/Constants/product"
import { useState } from "react"
import ProductList from "../components/ProductList"
import { Container ,Row,Col} from "react-bootstrap"
const CartPage=()=>{
const [cartList,setCartList]=useState([])
return <div>
    <Container fluid>
        <Row>
    {product.map((product)=>{
        const discountPrice=(product.price-(product.price*product.discountPercentage/100)).toFixed(2)
        return   <Col xs={12} sm={6} md={4} lg={3}>
         <ProductList key={product.id}  product={product} discPrice={discountPrice} setCartList={setCartList}/></Col>
    })}    
    </Row>
    </Container> 
    <Container fluid>
        <Row>
    <h3 className="my-5 text-center">Cart</h3>
    {cartList.map((product)=>{
        const discountPrice=(product.price-(product.price*product.discountPercentage/100)).toFixed(2)
        return <Col xs={12} sm={6} md={4} lg={3}>
        <ProductList key={product.id}  product={product} discPrice={discountPrice} cart={true} setCartList={setCartList} cartList={cartList}/>
        </Col>
    })}
    </Row>
    </Container>
    </div>
}
export default CartPage