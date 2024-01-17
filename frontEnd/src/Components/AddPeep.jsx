import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import axios from 'axios';
import PeepModel from "./utils/Peep.model.js";

const AddPeep = ({ user: { name, username } }) => {
    const [createPeep, setCreatePeep] = useState('');
    const [addContent, setAddContent] = useState('');
    const [tempMessage, setTempMessage] = useState('');

    const navigate = useNavigate(); // Import useNavigate from react-router-dom

    const makeNewPeep = async (e) => {
        e.preventDefault();
        const peepDateCreated = new Date().toISOString();

        const newPeep = new PeepModel(createPeep, peepDateCreated, name, username);

        if (Object.keys(newPeep).length) {
            try {
                const res = await axios.post(`http://${import.meta.env.VITE_PEEPSURL}/add`, newPeep);

                setAddContent(res.data.message);
                setCreatePeep('');
                setTempMessage("Thanks, your Tweet has been posted!");

                setTimeout(() => {
                    setTempMessage('');
                    navigate(`/dashboard/${username}`);
                }, 5000); 

            } catch (error) {
                setTempMessage('Request unsuccessful, please try again');
            }
        }
    }

    return (
        <div id="postComponent">
            <div>
                <h1> Time to post! </h1>
                <h3 className="name">From: {name} ✅</h3>
                <h4 className="username">Username: {username}</h4>
                <form onSubmit={makeNewPeep}>
                    <textarea
                        className="smallerTextarea"
                        onChange={e => setCreatePeep(e.target.value)}
                        placeholder="Enter your Tweet here..."
                        value={createPeep}
                    ></textarea>

                    {addContent && <small>{addContent}</small>}
                    <br />
                    <button id="newPeep-button" type="submit"> Publish! </button>
                </form>
            </div>
                {tempMessage && <small>{tempMessage}</small>}
        </div>
    )
}

AddPeep.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            peepCreatedBy: PropTypes.string,
            username: PropTypes.string
        })
    ])
}

export default AddPeep;
