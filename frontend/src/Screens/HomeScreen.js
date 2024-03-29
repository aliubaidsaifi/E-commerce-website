import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../Components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../Components/Loader'
import Massage from '../Components/Massage'
// import axios from 'axios'

const HomeScreen = () => {
  //             without redux
  // const [products, setProducts] = useState([]);

  // useEffect(()=>{
  //     const fetchProducts = async()=>{
  //     const {data}=await axios.get(`/api/products/`)
  //     setProducts(data)
  //   }
  //   fetchProducts();
  // },[])

const dispatch = useDispatch()
const productList = useSelector((state)=>state.productList)
const {loading, error, products}  = productList

useEffect(()=>{
  dispatch(listProducts())
},[dispatch])


  return (
    <>
      <h1>Lattest Products</h1>
        {loading ? (
          <Loader/>
        ): error ?(
          <Massage variant='danger'>{error}</Massage>
         ) : (
          <Row>
            {products.map(product=>(
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product}/>
                </Col>
            ))}
          
          </Row>
      )}
     
    </>
  )
}

export default HomeScreen
