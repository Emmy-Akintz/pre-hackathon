import React from 'react'
import Home from './Home';
import Navbar from '../components/Navbar';
import Introduction from './Introduction';
import Rules from './Rules';
import Judge from './Judge';

const ParentPage = () => {
    return ( 
        <div>
            <Navbar />
            <Home />
            <Introduction />
            <Rules />
            <Judge />
        </div>
     );
}
 
export default ParentPage;