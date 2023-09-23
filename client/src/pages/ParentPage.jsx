import React from 'react'
import Home from './Home';
import Navbar from '../components/Navbar';
import Introduction from './Introduction';
import Rules from './Rules';
import Judge from './Judge';
import Question from './Question';
import Timeline from './Timeline';
import Prizes from './Prizes';
import Sponsors from './Sponsors';
import Privacy from './Privacy';
import Footer from './Footer';

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
            <Sponsors />
            <Privacy />
            <Footer />
        </div>
     );
}
 
export default ParentPage;