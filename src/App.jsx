import { useEffect, useState } from 'react';
import './App.css';
import Note from './Note';

function App() {
    const [notes, setNotes] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const obtainPosition = (event) => { /*for obtaining the x-y position of the mouse*/
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', obtainPosition);

        return () => { /*cleaning function*/
            window.removeEventListener('mousemove', obtainPosition);

        };

    }, []);

    const handleSpaceKeyDown = (event) => { /*for adding new notes to the board */
        if (event.code === "ControlLeft") {
            setNotes([...notes, <Note key={notes.length} posX={mousePosition.x} posY={mousePosition.y} />]);
        }
    };

    return (
        <div className='notes-container' onKeyDown={handleSpaceKeyDown} tabIndex={0}>
            <h1 className='text'>Press ctrl for creating a note</h1>
            <h1 className='text'>Click and drag to move it!</h1>
            {notes.map((note, index) => (
                <Note
                    key={index}
                    posX={note.props.posX}
                    posY={note.props.posY}
                />
            ))}
        </div>
    );
}

export default App;
