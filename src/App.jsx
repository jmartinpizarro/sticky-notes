import { useEffect, useState } from 'react';
import './App.css';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesContainer = document.querySelector('.notes-container');

    const handleClick = () => {
      setNotes([...notes, <Note key={notes.length}/>]);
    };

    notesContainer.addEventListener('click', handleClick);

    return () => { /*función de limpieza*/
      notesContainer.removeEventListener('click', handleClick);
    };
  }, [notes]);
  return (
    <div className='notes-container'>
      {notes}
    </div>
  );
}

export default App;
