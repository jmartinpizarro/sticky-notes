import { useEffect, useState } from 'react';
import './App.css';
import Note from './Note';

function App() {
    const [notes, setNotes] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const notesContainer = document.querySelector('.notes-container');

        const obtainPosition = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', obtainPosition);

        const handleClick = () => {
            setNotes([...notes, <Note key={notes.length} posX={mousePosition.x} posY={mousePosition.y} />]);
        };

        notesContainer.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', obtainPosition);
            notesContainer.removeEventListener('click', handleClick);
        };
    }, [notes, mousePosition]);

    return (
        <div className='notes-container'>
            {notes}
        </div>
    );
}

export default App;
