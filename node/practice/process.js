// process.argv
// console.log(process.argv);

//yargs
const yargs = require("yargs");
yargs.version("2.2.7");
yargs.command({
  command: "add",
  describe: "to add a new note",
  builder: {
    title: { describe: "Note Title", demandOption: true, type: "string" },
    body: { describe: "Note Body", demandOption: true, type: "string" },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "to delete a note",
  handler: function () {
    console.log("A note is removed");
  },
});

yargs.command({
  command: "list",
  describe: "to view the list of notes",
  handler: function () {
    console.log("A list of all the notes");
  },
});
yargs.command({
  command: "read",
  describe: "to read a note",
  handler: function () {
    console.log("Reading the note");
  },
});

yargs.parse();

// yargs.argv;
// console.log(yargs.argv);
