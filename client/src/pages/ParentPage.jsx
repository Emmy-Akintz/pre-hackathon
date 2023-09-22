import React from 'react'
import Home from './Home';
import Navbar from '../components/Navbar';
import Introduction from './Introduction';

const ParentPage = () => {
    return ( 
        <div>
            <Navbar />
            <Home />
            <Introduction />
        </div>
     );
}
 
export default ParentPage;