import PropTypes from 'prop-types';

function Note({ posX, posY }) {
    return (
        <div className="note" style={{
            pointerEvents: 'none',
            left: posX - 10 + 'px',
            top: posY - 10 + 'px',
            width: '100px',
            height: '100px',
            backgroundColor: 'yellowgreen',
            border: '1px solid white',
            position: 'absolute'
        }}>
        </div>
    );
}

Note.propTypes = {
    posX: PropTypes.number.isRequired,
    posY: PropTypes.number.isRequired,
};

export default Note;
