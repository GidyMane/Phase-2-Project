
import "../product.css"
import { useNavigate, useParams} from "react-router";
import { useCart } from "react-use-cart";


function Product({plants}){
    console.log(plants)
    let navigate=useNavigate()
    let params=useParams()
    let { addItem }=useCart()
    // console.log(params)
    let plant=plants.filter(plant=>plant.id === parseInt(params.id))
    
 
    return (
        <div>
            <div className="container mt-5 mb-5" >
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-6 border-end">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="main_image">
                                <img src={plant[0].image} id="main_product_image" style={{ width:"350"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 right-side">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>{plant[0].name}</h3> <span className="heart"><i className='bx bx-heart'></i></span>
                            </div>
                            <div className="mt-2 pr-3 content">
                                <p>{plant[0].description}</p>
                            </div>
                            <h3>${plant[0].price}</h3>
                            <div className="ratings d-flex flex-row align-items-center">
                                <div className="d-flex flex-row"> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> <i className='bx bx-star' ></i> </div>
                                <span>{plant[0].stock} available</span>
                            </div>
                            
                            <div className="buttons d-flex flex-row mt-5 gap-3">
                                <button className="btn btn-outline-dark" onClick={()=>{
                                    navigate("/cart")
                                }}>Buy Now</button>
                                <button className="btn btn-dark" onClick={()=>addItem(plant[0])} >Add to cart</button> </div>
                            <div className="search-option"> <i className='bx bx-search-alt-2 first-search'></i>
                                <div className="inputs"> <input type="text" name=""/> </div> <i className='bx bx-share-alt share'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Product;