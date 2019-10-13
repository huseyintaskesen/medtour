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

  var clinicList = [];
  

   useEffect (() => {
    async function fetchData() {
      const res = await fetch(CONSTANTS.ENDPOINT.MASTERDETAIL);
      res
        .json()
        .then(res => handleDataFetch(res))
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

  function handleDataFetch(res){
    clinicList = res;
    setClinics(clinicList);
    console.log(clinicList);
  }

  return (
    <div style={{width: '400px'}}>
    {clinicList}
    <MasterDetailPage key={clinics.id} onClick={handleItemClick} {...clinicList[0]}/>

    </div>
    );
  
  }
  
