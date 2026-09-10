// Load and display notes from the server
async function loadNotes() {
    const response = await fetch("/notes");
    const notes = await response.json();

    const notesContainer = document.getElementById("notesContainer");

    notesContainer.innerHTML = "";

    notes.forEach((note) => {
        const noteDiv = document.createElement("div");

        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
        `;

        notesContainer.appendChild(noteDiv);
    });
}


loadNotes();


// Adds a new note
const noteForm = document.getElementById("noteForm");

noteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("noteTitle").value;
    const content = document.getElementById("noteContent").value;

    await fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            content: content
        })
    });

    noteForm.reset();

    loadNotes();
});





