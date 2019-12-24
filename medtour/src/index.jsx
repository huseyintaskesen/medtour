import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
<<<<<<< HEAD

=======
// import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 8f6ec6b0a6697d12f811a7ad77ec67ad1b37dd87

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
