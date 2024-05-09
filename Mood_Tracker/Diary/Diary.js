const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = []; // Array to store note content

function showNotes() {
  const notesFromStorage = JSON.parse(localStorage.getItem("notes") || "[]"); // Handle empty storage

  notesFromStorage.forEach(note => {
    const inputBox = document.createElement("P");
    inputBox.className = "input-box";
    inputBox.textContent = note; // Set note content from array
    inputBox.setAttribute("contenteditable", "true");
    const img = document.createElement("img");
    img.src = "/Mood_Tracker/Diary/delete.png";

    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);

    // Add blur event listener for individual notes (optional)
    inputBox.addEventListener("blur", updateStorage);
  });
}

function updateStorage() {
  // Get all notes from container (considering dynamic creation)
  notes = Array.from(notesContainer.querySelectorAll(".input-box"))
    .map(note => note.textContent);
  localStorage.setItem("notes", JSON.stringify(notes)); // Store as JSON
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("P");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    const img = document.createElement("img");
    img.src = "/Mood_Tracker/Diary/delete.png";
  
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);
  
    // Optionally add blur event listener here for the new note
  
    updateStorage(); // Call updateStorage after creating a new note
    
    // Clear the notesContainer before appending new notes
    notesContainer.innerHTML = "";
    // Call showNotes() again to re-render all notes
    showNotes();
  });

notesContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak"); // Corrected command
    event.preventDefault();
  }
});

// Call showNotes() initially to load existing notes
showNotes();


function resetNotes() {
  localStorage.removeItem("notes");
  notesContainer.innerHTML = ""; // Clear displayed notes
  // Optionally, set a default note or array in `showNotes()`
}
