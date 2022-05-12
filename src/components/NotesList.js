import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

//map over notes array, and for each note render the note component
//pass current note into function
// for each note render the note component
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList;