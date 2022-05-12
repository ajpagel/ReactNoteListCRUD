import { useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
//use state hook to hold array of notes


function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(), //need this to delete notes
      text: "First note!",
      date: "15/01/2022"
    },
    {
      id: nanoid(), //need this to delete notes
      text: "Second note!",
      date: "21/04/2022"
    },
    {
      id: nanoid(), //need this to delete notes
      text: "Third note!",
      date: "23/04/2022"
    },
    {
      id: nanoid(), //need this to delete notes
      text: "new note!",
      date: "12/5/2022"
    },
]); //will be changing this data so stroe in state

//const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);


//function for child classes
const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString() //convert date 
    
  }
  const newNotes = [...notes, newNote]; //create new array instead of updating old array
  setNotes(newNotes); //update with new data 
}


const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id); //filter returns new array
  setNotes(newNotes);
}


  //{notes} is equal to the notes in teh array
  //destructure props in noteslist.js
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search />
        <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/> 
      </div>
    </div>
    
  );
}

export default App;


//https://randomuser.me/api/?results=25
