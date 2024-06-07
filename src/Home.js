import { useState } from "react";
import './App.css';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';



function Home (){
    const [clothes, setClothes] = useState(data);
   
    const chosenClothes =(searchTerm) => {
    const newClothes =data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  }


    return (<div>
        <div className='cont'>
            <div className='back'>
        <h2>welcome to our online store</h2>
        <h5>Dress here and be in style</h5>
        <p>Free Standard Shipping</p>
            </div>
        </div>


        <Buttons filteredClothes ={chosenClothes} setClothes={data}/>
        <Clothes listClothes={clothes}/>
      
        </div>
    )
}
export default Home;