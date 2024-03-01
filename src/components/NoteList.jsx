import NoteListItem from './NoteListItem';

export default function NoteList ( {notes, onRemoveBtn} ) {

    const listNotes = notes.map( (note, index) => 
        <li key = {index} >
            {note.text}
            &nbsp;  <button onClick={(event) => onRemoveBtn(note)} >X</button>
        </li>
    );

    return (
        <>
            <p> A Note List </p>
            <ul>
                { listNotes }
            </ul>
        </>
    )
}

// $nbsp c'est pour prendre en compte les espaces