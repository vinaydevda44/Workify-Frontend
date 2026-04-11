
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App.jsx'
// import { Provider } from 'react-redux';
// import AuthStore from './store/AuthStore.jsx';


createRoot(document.getElementById('root')).render(

  <App />
// {/* <Provider store={AuthStore}> */}

// {/* </Provider> */}



)
