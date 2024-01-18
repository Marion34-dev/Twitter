import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Peep from "./Peep";
// import mockAxios from './utils/mockAxios'; 

const Dashboard = () => {
    const [peepsArray, setPeepsArray] = useState([]);
    
    useEffect(() => {
        const getPeeps = async () => {
            try {
          //      const response = await axios.get(`http://localhost:8080/`);

                //    
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}`);
                setPeepsArray(response.data);

            } catch (error) {
                console.error("Sorry, unsuccessful operation:", error);
            }
        }
        getPeeps();
    }, []);

    return (
        <>
            {peepsArray.map(peep => (
                <Peep key={peep._id} body={peep} />
            ))}
        </>
    )
}

Dashboard.propTypes = {
    peepsArray: PropTypes.array
}

export default Dashboard;
