import { ListGroup,Card,Col,Row,Button } from "react-bootstrap"
import { IoMdStar } from "react-icons/io";
import "../Pages/product.css"
const ProductList=({product,discPrice,cartList,setCartList,cart})=>{
const handleAddCart=()=>{
setCartList((prevcartList)=>([...prevcartList,product]))
const index=cartList.findIndex((item)=>item.id===product.id)
if(index===-1)
{
  product.quantity=1
  setCartList((cartList)=>[...cartList,product])
}
else
{
const res=cartList.map((item)=>{
  if(item.id===product.id)
{
return {...item,quantity:item.quantity+1}
}
return item
})
setCartList(res)
}
}
const handleRemoveCart=()=>{
setCartList((prevcartList)=>prevcartList.filter(item=>item.id!==product.id))
}

const handleQuantity = (operator) => {
  if (operator == "-" && product.quantity == 1) {
      return handleRemoveCart()
  }
  const res = cartList.map(item => {
      if (item.id === product.id) {
          return {
              ...item,
              quantity: operator == "+" ? item.quantity + 1 : item.quantity - 1
          }
      }
      return item
  })
  setCartList(res)
}
return <div> <Row className="m-4 g-4">
<Col>
        <Card style={{width:"15rem"}}>
        <Card.Header>{product.category}</Card.Header>
             <Card.Img variant="top" src={product.images[2]} style={{width:"12rem"}}/>
             <div className="rating">
             <div>{product.rating} <IoMdStar /></div>
             <div style={{width: "2px",backgroundColor: "silver",height: "25px",margin:"0 20px"}}></div>
             <div>{product.stock}</div>
             </div>
          <Card.Body>
            <Card.Title>
                {/* Card title */}
             {product.title}
            </Card.Title>
            {
                cart && <div className="d-flex my-2 justify-content-between align-items-center">
                    <button className="btn btn-success w-50" onClick={() => handleQuantity("-")}> - </button>
                    <div className="w-100">{product.quantity}</div>
                    <button className="btn btn-success w-50" onClick={() => handleQuantity("+")}> + </button>
                </div>
            }

            {!cart?<Button variant="success" className="w-100" onClick={handleAddCart}>Add to Cart</Button>:
            <Button variant ="danger" className="w-100" onClick={handleRemoveCart}>Remove</Button>}
            <ListGroup className="list-group-flush">
              <div style={{display:"flex",justifyContent:"space-between" }}>
        <ListGroup.Item><s>$ {product.price}</s></ListGroup.Item>
        <ListGroup.Item>$ {(discPrice)}</ListGroup.Item>
        </div>
        <ListGroup.Item>{product.tags}</ListGroup.Item>
      </ListGroup>
      <Card.Text>
              {product.description} 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
</div>
}
export default ProductList