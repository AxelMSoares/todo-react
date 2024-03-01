import { useState } from "react";

export default function AddNoteForm ({notes, onAddNoteBtnHandler}) {

  const [newNoteText , SetNewNoteText] = useState('test');

  const noteToAdd = {
      id : notes.length + 1,
      text : newNoteText
    }

  return (
    <div>
        <label htmlFor="note">Nouvelle note: </label>
        <input type="text" id="note"  onChange ={(event) => SetNewNoteText(event.target.value)}/>
        <button onClick = {onAddNoteBtnHandler(noteToAdd)}>Ajouter</button>
      </div>
  )
}