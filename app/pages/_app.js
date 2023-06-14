import "bootstrap/dist/css/bootstrap.min.css"; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
//import '../styles/custom.css'; // Optional: Add your custom CSS file if needed

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
