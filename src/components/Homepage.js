import react from 'react'

function Homepage({product}){
    return(<>
    <h1 className="title"> Welcome to our shop</h1>
    {product.map((item)=>(
        <div  className="products" key={item.id}>
   <h4>Product name:{item.product_name}</h4>
   <p >Product Decription:{item.product_description}</p>
   <h4>Product price:{item.unit_price}</h4>
   <h4>Product Ranking:{item.ranking}</h4>
   <h4>Date Created:{item.created}</h4>
   <h4>Date updated:{item.updated}</h4>
   <img src={item.product_full_image} alt={item.product_name}/>
   </div>

    ))}
    
    </>)
}
export default Homepage;
