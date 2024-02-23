import PropTypes from 'prop-types';
import Title from './Title';
import { useRef, useState } from 'react';

function Note({ posX, posY }) {
    const [isDragging, setIsDragging] = useState(false);
    const noteRef = useRef(null);

    const handleMouseDown = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const newX = event.clientX - noteRef.current.offsetWidth / 2;
            const newY = event.clientY - noteRef.current.offsetHeight / 2;
            noteRef.current.style.left = newX + 'px';
            noteRef.current.style.top = newY + 'px';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={noteRef}
            className="note"
            style={{
                pointerEvents: 'auto',
                left: posX + 'px',
                top: posY + 'px',
                width: '200px',
                height: '300px',
                backgroundColor: 'yellowgreen',
                border: '1px solid white',
                position: 'absolute',
                cursor: isDragging ? 'grabbing' : 'pointer',
                transition: 'transform .5s ease'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <Title/>
        </div>
    );
}

Note.propTypes = {
    posX: PropTypes.number.isRequired,
    posY: PropTypes.number.isRequired,
};

export default Note;
