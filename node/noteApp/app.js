const yargs = require("yargs");
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
  handler: function (argv) {
    console.log("Title :", argv.title);
    console.log("Body :", argv.body);
  },
});
//remove command
yargs.command({
  command: "remove",
  describe: "Remove a  note",
  handler: function () {
    console.log("Removing a new note!");
  },
});
//read command
yargs.command({
  command: "read",
  describe: "Read note",
  handler: function () {
    console.log("Reading a new note!");
  },
});
//list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log("List notes!");
  },
});

yargs.parse();
// console.log(yargs.argv);
