function Clothes ({listClothes}) {
    return (<div className="products">
   {listClothes.map((element => {
    const{id, name, price, image} = element;
    return (<div className="product-card" key={id}>
    <div className="top">
        <img src={image} alt="foto" width="400px" height="500px"/>
        
        <div className="product-info">  
            <div className="name"> 
            <h3>{name}</h3> 
            </div>
            <div className="name">
            <h4>{price}</h4>
            </div>
        </div>
    </div>
        </div>
    )

    }))}
</div>    );
}
export default Clothes;