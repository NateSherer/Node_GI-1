const chalk = require('chalk')
const yargs = require('yargs')

// //Customize yargs
// yargs.version('1.1.0')

// //Create a command method
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function(){
//     console.log('Adding a new note!')  
//     }
// })

// //Remove command 
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function(){
//         console.log('Removing the note')
//     }
// })


yargs.command({
    command: 'add',
    describe: 'New note',
    builder:{
        title: {
            describe: 'Title',
            type: 'string',
            demandOption: true,
        }, body:{
            describe: 'Body',
            type: 'string',
            demandOption: true,
        }
    },
    handler: function (argv) {
        
    }
}) 
console.log()


console.log(yargs.argv)