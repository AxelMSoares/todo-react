import React, { useRef } from 'react';

export default function AddNoteForm({ onAddBtn }) {
  const noteRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteValue = noteRef.current.value;
    onAddBtn(noteValue); // Appel de la fonction onAddBtn avec la valeur de la note
    // Réinitialisation de la valeur de l'input après soumission du formulaire
    noteRef.current.value = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="note">Nouvelle note: </label>
        <input type="text" id="note" ref={noteRef} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}
