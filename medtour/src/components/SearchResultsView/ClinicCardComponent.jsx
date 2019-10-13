import React from 'react'
import styles from './masterdetail.module.css'
import TreatmentListComponent from './TreatmentListComponent'


export default function Clinic (props) {
    

    // const { children, className = '', shortDescription, title,
    //     orderTotal, id, onClick } = props;
    // const toolCls = 'item-tools-left';

    return (
    <div class="card">
        
        <h5 class="card-header">Clinic Name</h5>
        <div class="card-body">
            <h5 class="card-title">Treatment Title</h5>
            <p class="card-text">Clinic description.</p>
            <TreatmentListComponent></TreatmentListComponent>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            <div width="400px" height="400px" class='image'> Image</div>
        </div>
        
    </div>
    );
    
        // return (
        //     <div
        //       className={`list-item ${className} ${toolCls}`}
        //       onClick={onClick}
        //       data-id={id}
        //     >
        //       <div className="body">
        //         <div className="main">title: {title}</div>
        //         <div className="secondary">
        //           description: {shortDescription}
        //           <br></br>
        //           <span className="meta"> order total: {orderTotal}</span>
        //         </div>
        //       </div>
        
        //       <div className="tools">{children}</div>
        //     </div>
        //   );
        }
        
