import React from "react";

const Nav=(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <div>
                        <h3 onClick={()=>props.handleShow(false)}>Home</h3>
                    </div>
                </div>
                <div className="col-2">
                    <div>
                       <p><i class="fa-solid fa-cart-shopping" onClick={()=>props.handleShow(true)}></i><sup>{props.count}</sup></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav