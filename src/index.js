import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../src/App"
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { store } from "./redux/Store.js"
// import {ToastContainer} from "react-toastify";
import {Toaster} from "react-hot-toast"
//adding Toaster is compulsory index m krne se sb m alg alg dalne ki need nhi h but agr yha nhi daalna to specificly hr ek componnet m jakr daalna pdega jha bhi taost chahiye.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* end m jakr toaster component daal do */}
        <Toaster/>
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);