import React from 'react'
import Home from './Home';
import Navbar from '../components/Navbar';
import Introduction from './Introduction';
import Rules from './Rules';
import Judge from './Judge';
import Question from './Question';
import Timeline from './Timeline';
import Prizes from './Prizes';

const ParentPage = () => {
    return ( 
        <div>
            <Navbar />
            <Home />
            <Introduction />
            <Rules />
            <Judge />
            <Question />
            <Timeline />
            <Prizes />
        </div>
     );
}
 
export default ParentPage;