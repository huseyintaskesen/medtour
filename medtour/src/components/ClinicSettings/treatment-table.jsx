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
