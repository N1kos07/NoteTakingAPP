// Stores all notes from the server
let notes = [];

// Stores the note currently being edited
let selectedNoteId = null;

// Get elements from the page
const noteForm = document.getElementById("noteForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const notesList = document.getElementById("notesList");
const createNoteBtn = document.getElementById("createNoteBtn");
const deleteBtn = document.getElementById("deleteBtn");
const message = document.getElementById("message");



// Loads notes from the server
// Load notes from the server
async function loadNotes() {
    const response = await fetch("/notes");

    if (!response.ok) {
        message.textContent = "Could not load notes.";
        return;
    }

    notes = await response.json();

    message.textContent = "";
    displayNotes();
}


// Display notes in the sidebar
function displayNotes() {
    notesList.innerHTML = "";

    notes.forEach((note) => {
        const noteDiv = document.createElement("div");

        noteDiv.textContent = note.title;
        noteDiv.classList.add("note-item");

        if (note._id === selectedNoteId) {
            noteDiv.classList.add("active");
        }

        noteDiv.addEventListener("click", () => {
            selectNote(note._id);
        });

        notesList.appendChild(noteDiv);
    });
}


// Open a note in the editor
function selectNote(id) {
    selectedNoteId = id;

    const note = notes.find((note) => note._id === id);

    titleInput.value = note.title;
    contentInput.value = note.content;

    displayNotes();
}


// Start a new note
createNoteBtn.addEventListener("click", () => {
    selectedNoteId = null;

    titleInput.value = "";
    contentInput.value = "";

    displayNotes();

    titleInput.focus();
});


// Save or update a note
noteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const noteData = {
        title: titleInput.value,
        content: contentInput.value
    };

    if (selectedNoteId === null) {
        const response = await fetch("/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            message.textContent = errorData.error;
            return;
        }

        const newNote = await response.json();
        selectedNoteId = newNote._id;
    } else {
        const response = await fetch(`/notes/${selectedNoteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            message.textContent = errorData.error;
            return;
        }
    }

    message.textContent = "";
    await loadNotes();      
});


// Delete the selected note
// Delete the selected note
deleteBtn.addEventListener("click", async () => {
    if (selectedNoteId === null) {
        return;
    }

    const response = await fetch(`/notes/${selectedNoteId}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        const errorData = await response.json();
        message.textContent = errorData.error;
        return;
    }

    selectedNoteId = null;

    titleInput.value = "";
    contentInput.value = "";

    message.textContent = "";

    await loadNotes();
});






// Load notes when the page opens
loadNotes();