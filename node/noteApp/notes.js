const fs = require("fs");
const chalk = require("chalk");

// Function to get notes
const getNotes = () => {
  return "Your notes....";
};

// Function to add a new note
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bold.green.inverse("Note added!"));
  } else {
    console.log(chalk.bold.red.inverse("Note title taken!"));
  }
};

// Function to save notes to file
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Function to load notes from file
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Function to remove a note
const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bold.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bold.red.inverse("No note found!"));
  }
};
const listNotes = () => {
  console.log(chalk.bold.yellow.inverse("Your notes"));
  notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.bold.blue.inverse(note.title));
  });
};
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.bold.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.bold.red.inverse("Note not found!"));
  }
};

// Exporting functions
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
