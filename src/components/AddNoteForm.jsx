import { useState } from "react";

export default function AddNoteForm({ notes, onAddBtn }) {

  const [newNoteText, setNewNoteText] = useState('');
  const noteToAdd = {
    id: notes.length + 1,
    text: newNoteText
  }

  return (
    <div>
      <label htmlFor="note">Nouvelle note: </label>
      {/* <input type="text" id="note" /> */}
      <input type="text" id="note" onChange={(event) => setNewNoteText(event.target.value)} />
      <button onClick={onAddBtn(noteToAdd)}>Ajouter</button>
    </div>
  )
}