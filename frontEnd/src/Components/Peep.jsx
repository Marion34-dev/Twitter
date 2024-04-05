import PropTypes from 'prop-types';
import formatDate from '../Components/utils/peepDateCreated';

const Peep = ({ body }) => {
    const { peepCreatedBy, username, peepDateCreated, peepMessage } = body;
    const formattedDate = formatDate(peepDateCreated);

    return (
        <div className="tweet-card">
            <div className="tweet-content">
                {body ? (
                    <>
                        <h2 className='tweet-message'>{peepMessage}</h2>
                        <div className="tweet-info">
                            <h4 className='tweet-creator'>{peepCreatedBy}</h4>
                            <h6 className='tweet-username'>@{username}</h6>
                            <h6 className='tweet-date'>{formattedDate}</h6>
                        </div>
                    </>
                ) : (
                    <p>Sorry, there are no Tweets available. How about posting one now?</p>
                )}
            </div>
        </div>
    );
}

Peep.propTypes = {
    body: PropTypes.shape({
        _id: PropTypes.string,
        peepCreatedBy: PropTypes.string,
        username: PropTypes.string,
        peepDateCreated: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date),
        ]),
        peepMessage: PropTypes.string,
    }),
};

export default Peep;
