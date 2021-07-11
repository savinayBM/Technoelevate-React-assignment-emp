import React, {Fragment } from 'react';
import './Home.css';

const Home = () =>{
    return(
        <Fragment>
        <div className="body" style={{marginLeft:450, marginTop:50}}> 
        <div className="div1" >
        <div className="row">
            
            <div className="col-5 col2">
            <img src="https://cdn.pixabay.com/photo/2021/03/02/13/04/laptop-6062423__340.jpg" alt="" className="img" />
            </div>
            
            <div className="col-5 col2">
            <div className="head">
            <h2>React</h2>
            <h6>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.

Try React</h6>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="w-100">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur officia at dolores in sit temporibus suscipit, minima explicabo. Nihil repudiandae odit quis,
               libero aliquid soluta sequi. Nobis minus accusamus officiis.
            </p>
            </div>
            </div>
            </div>

        </div>
        <div className="div2">
            
            <div className="row">
            <div className="col-5 col1 ">
            <div className="head">
            <h2>React</h2>
            <h6>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.

Try React</h6>
            </div>
            <br />
            <br />
            <br />
          <br />
            <div className="para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur officia at dolores in sit temporibus suscipit, minima explicabo. Nihil repudiandae odit quis,
               libero aliquid soluta sequi. Nobis minus accusamus officiis.
            </p>
            </div>
            </div>
            
            <div className="col-3 ">
            <img src="https://cdn.pixabay.com/photo/2021/03/02/13/04/laptop-6062423__340.jpg" alt="" className="img" />
            </div>
            </div>
        </div>
       
        </div>
      </Fragment>
  )
}
export default Home;