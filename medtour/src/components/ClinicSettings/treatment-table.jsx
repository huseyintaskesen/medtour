import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: "Treatment Name", field: "name" },
            { title: "Treatment Info", field: "info" },
            { title: "Price Low", field: "plow" },
            { title: "Price Low Currency", field: "plowcurrency" },
            { title: "Price Low", field: "phigh" },
            { title: "Price High Currency", field: "phighcurrency" }
        ],
        data: [
            {
                name: "Hair Removal",
                info: "Saçlar şekkkiiil",
                plow: "100",
                plowcurrency: "USD",
                phigh: "250",
                phighcurrency: "USD"
            },
            {
                name: "Breast Implant",
                info: "büyük iyidir",
                plow: "250",
                plowcurrency: "TL",
                phigh: "500",
                phighcurrency: "TL"
            }
        ]
    });


    function postToDB()
    {

    }

    function addDataDummy(name,info,plow,plowcurrency,phigh,phighcurrency)
    {

        const options = {
            headers: {'content-type': 'application/json'}
        };
        // search/"+treatment_type
        fetch("http://localhost:3001/api/tourData/clinic/5dfe3f6e79469144a4653524", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        }).then(response => {
            return response.json();
        }).then(muutuja => {
            console.log('RESPONSE'+muutuja.trans[0].u_id.name)
            this.setState({
                userName: muutuja.trans[0].u_id.name,
                surName: muutuja.trans[0].u_id.surname,
                treatmentName: muutuja.trans[0].t_id.name,
                treatmentDate: muutuja.trans[0].treatment_Date,
                treatmentPrice: muutuja.trans[0].t_id.priceLow
            },()=>{
              console.log(this.state)
              this.setState({currentView: 'calendar'})
            })
            
        });

        var data= state.data
        var newData = {
            name: name,
            info: info,
            plow: plow,
            plowcurrency: plowcurrency,
            phigh: phigh,
            phighcurrency: phighcurrency
        }

        var test = new Promise(resolve => {
            setTimeout(() => {
                resolve();
                setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                }).then(
                    postToDB()
                );
            }, 600);
        });




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
                                
                                return { ...prevState, data };
                            });
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
