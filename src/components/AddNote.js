import React, {useState} from 'react';


//similar to note ocmponetn so reuse 
//button triggers event for note



const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200; //do not put in state user cannot change


    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) //cannot go over character count
            setNoteText(event.target.value);
        
    };
    //set this to state console.log(event.target.value)
    //state updated everytime user types

    //create function for button
    const handleSaveClick = () => {
        //state updated with new note, state in top level component in app.js, child component in addnote.js
        //pass function from parent to allow child to update state
        if(noteText.trim().length > 0) { //.trim functio removes white space from start and end; if length > 0 there is still text
            handleAddNote(noteText);
            setNoteText('');
        } 

        //if empty it won't save
        //set back to empty string
    };

    //{characterLimit - noteText.length} this will create character count
    //prevent text from updating if over 200 characters

    return(
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder='Type to add note...'
                value={noteText}
                onChange= {handleChange} >
            </textarea>
            <div className='note-footer'>
                    <small>{characterLimit - noteText.length} remaining</small>
                    <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

//save note when user clicks save button add onclick

export default AddNote;