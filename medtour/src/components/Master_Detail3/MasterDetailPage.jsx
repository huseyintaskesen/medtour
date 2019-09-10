import React from 'react'
import './masterdetail.module.scss'

const Clinic = (props) => {

    const { children, className = '', shortDescription, title,
        orderTotal, id, onClick } = props;
    const toolCls = 'item-tools-left';
        return (
            <div
              className={`list-item ${className} ${toolCls}`}
              onClick={onClick}
              data-id={id}
            >
              <div className="body">
                <div className="main">title: {title}</div>
                <div className="secondary">
                  description: {shortDescription}
                  <br></br>
                  <span className="meta"> order total: {orderTotal}</span>
                </div>
              </div>
        
              <div className="tools">{children}</div>
            </div>
          );
        };

export default Clinic;
