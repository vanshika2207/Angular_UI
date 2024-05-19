const notes = require("./notes.js");
const yargs = require("yargs");
const chalk = require("chalk");

yargs.version("1.1.0");
//add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
//remove command
yargs.command({
  command: "remove",
  describe: "Remove a  note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
//read command
yargs.command({
  command: "read",
  describe: "Read note",
  builder: {
    title: {
      describe: "Note Take",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});
//list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
// console.log(yargs.argv);
