import { useState } from 'react';

function Title() {
    const [titleContent, setTitleContent] = useState('Title');
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing(true);
    }

    const handleInputChange = (event) => {
        setTitleContent(event.target.value);
    }

    const handleBlur = () => {
        setIsEditing(false);
    }

    return (
        <h1  className="note-h1" onClick={handleClick}>
            {isEditing ? (
                <input 
                    type="text" 
                    value={titleContent} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur} 
                    autoFocus 
                />
            ) : (
                titleContent
            )}
        </h1>
    );
}

export default Title;
