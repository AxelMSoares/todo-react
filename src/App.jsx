import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './components/Counter'
import AddNoteForm from './components/AddNoteForm'
import Search from './components/Search'
import NoteList from './components/NoteList'


function App() {
  const title = "Notes";

  const [notes, SetNotes] = useState([
    { id: 1, text: "Premiere note" },
    { id: 2, text: "Seconde note" },
    { id: 3, text: "Troisieme note" }
  ])


  function onRemoveNoteBtnHandler(noteToDelete) {
    console.log('click on remove index: ', noteToDelete);
    const newNotes = notes.filter(note => note.id !== noteToDelete.id);
    SetNotes(newNotes);
  }

  function onAddNoteBtnHandle(noteValue) {
    const noteToAdd = {
      id: notes.length + 1,
      text: noteValue
    }

    SetNotes(prevNotes => [...prevNotes, noteToAdd]);
  }

  return (
    <>
      <h1>{title}</h1>
      < Counter notes={notes} />
      < AddNoteForm notes={notes} onAddBtn={onAddNoteBtnHandle} />
      < Search />
      < NoteList notes={notes} onRemoveBtn={onRemoveNoteBtnHandler} />
    </>

  )
}


export default App
