import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import cogoToast from 'cogo-toast';
import axios from 'axios';


var c_id;
c_id = localStorage.getItem('clinicID')

export default function MaterialTableDemo() {

    
    

    const [state, setState] = React.useState({
        columns: [
            { title: "Treatment Name", field: "name" },
            { title: "Treatment Info", field: "info" },
            { title: "Price Low", field: "plow" },
            { title: "Price High", field: "phigh" },
            { title: "Price Currency", field: "phighcurrency" }
        ],
        data: [
            
        ]
    });

    async function postToDB(newData){
        console.log(newData)



        var name = newData.newData.name;
        
        var info = newData.newData.info;
        var priceLow = newData.newData.plow;
        var priceHigh = newData.newData.phigh;
        var currency = newData.newData.phighcurrency;

        const body = JSON.stringify({
            name,
            info,
            priceLow,
            priceHigh,
            currency
        });
    //     console.log(body);
        //Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };
    //Request body
       var resp = await axios.post("api/treatments/newTreatment/"+c_id, body, config).then((res) => {
            return res.data
        }).catch(err => {
        
        console.log('error returned:'+err)
        })
        if(resp != undefined){
            cogoToast.success("Successful!")
        }

    }

    return (
        <MaterialTable
            style={{ width: "100%" }}
            title="Active Treatment List"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                postToDB({newData})
                                return { ...prevState, data };
                            })
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    })
            }}
        />
    );
}
