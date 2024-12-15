const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.green.bold('Success!')
// console.log(greenMsg)

// console.log(process.argv[2])

// const command = process.argv[2]

// console.log(process.argv)

// if(command === 'add') {
// console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

//Customize Yargs Version
yargs.version('1.1.0')

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    body:{
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    },
    handler: function(argv){
    notes.addNotes(argv.title,argv.body)
    }
})

//Remove Commands 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

//Create a list command 
yargs.command({
    command: 'list',
    describe: 'list your note',
    handler: function(){
        console.log('listing the note')
    }
})

// Create Read Command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})

yargs.parse() // Goes through process using the yargs process
// console.log(yargs.argv)