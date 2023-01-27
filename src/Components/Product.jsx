import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'

import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBBtn,MDBRipple} from 'mdb-react-ui-kit';
import { Newcontext } from './App';
import { Link } from 'react-router-dom';



function Product  () {
    const {value1,value2}=useContext(Newcontext);
    
    const [pdct,setpdct]=useState([]);
    
    const [hide,sethide]=value1;
    const [New,setNew]=value2;
   
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products" ).then((res)=>setpdct(res.data));
      console.log(pdct);
      //sethide(pdct)
      setNew(true)
      }, [pdct]);
         sethide(pdct)
        
   const [search,setsearch]=useState("");
   const Filteredpdct=hide.filter((item)=>(item.title).includes(search));
   console.log(Filteredpdct);

         return (
    <div>
     
      <div className='row' style={{minWidth:"300px"}}>
        {Filteredpdct.map((pro)=>{
           
           
           return(
            
            
              <MDBCard
              className='float-left mt-5' 
              style={{width:"400px",marginLeft:"50px"}}
              >
              
              <Link to={`/details/${pro.id}`} style={{textDecoration:'none'}}>
              
              <MDBRipple  
              rippleColor='light'
              rippleTag='div' 
              className='bg-image hover-overlay'
              >
             
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
             </MDBRipple>
      <MDBCardBody>
        
        <MDBCardTitle className='title'>{pro.name}</MDBCardTitle>
        
        <MDBCardImage className='image'
              src={pro.image}  
              style={{width:"300px",height:"300px"}}
               fluid alt='...' />
        {/* <MDBCardText>Release Date:{mov.release_date}</MDBCardText>
        <MDBCardText>Movie Overview:{mov.overview}</MDBCardText> */}
<div>
    <MDBBtn className='button button-primary'>Add to Cart</MDBBtn>
</div>

      </MDBCardBody>
      </Link>
    </MDBCard>


            );
            
        })}
    </div>
    </div>
  )
}

export default Product;