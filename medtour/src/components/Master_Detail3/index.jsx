import classnames from "classnames";
import WarningMessage from "../WarningMessage";
import MasterDetailPage from "./MasterDetailPage";
import MasterDetailSideBarTab from "./MasterDetailSideBarTab";
import GreyAvatar from "../../images/GreyAvatar.svg";
import styles from "./masterdetail.module.scss";
import CONSTANTS from "../../constants";
import React, { useState, useEffect } from 'react';
import "./masterdetail.module.scss";

export default function Master_Detail3() {
  
  var [clinics, setClinics] = useState(0);
  var [hasError, setErrors] = useState(false);

  var result = [];
  

  useEffect (() => {
    async function fetchData() {
      const res = await fetch(CONSTANTS.ENDPOINT.MASTERDETAIL);
      res
        .json()
        .then(res => setClinics(res[0]))
        .catch(err => setErrors(err));
    }

    

    fetchData();
    

  },[]);

  process.on('uncaughtException', function (err) {
    console.log(err);
},[]); 



  function handleItemClick (e) {
    console.log('item clicked');
    
  }

  return (
    <div style={{width: '400px'}}>
    
    <MasterDetailPage key={clinics.id} onClick={handleItemClick} {...clinics}/>

    </div>
    );
  
  }
  
