const noteTitle = document.getElementById('noteTitle');
const noteBody = document.getElementById('noteBody');
const saveNote = document.getElementById('saveNote');

const emptyForm = () => {
    noteTitle.value = '';
    noteBody.value = '';
}

const postNote = (note) =>
    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    })
    .then((res) => res.json(),
    console.log('hello1'))
    .then((data) => {
        console.log('Successful POST request:', data);
        emptyForm();
        return data;
    })
    .catch((err) => {
        console.error('Error in POST request:', err);
    });

saveNote.addEventListener('click', (e) => {
    e.preventDefault();
    const newNote = {
        title: noteTitle.value.trim(),
        text: noteBody.value.trim(),
    };
    console.log(newNote);
    postNote(newNote).then((data) => alert('New note added!')).catch((err) => console.error(err));
});