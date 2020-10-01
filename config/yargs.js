const argv = require('yargs')
    .command('create', 'Create a new task to do', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'This command create a new task to do',
        }
    })
    .command('update', 'Update a selected task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'This command allow update a selected task',
        },
        status: {
            alias: 's',
            type: 'boolean',
            default: true,
            desc: 'mark to completed or waiting the selected task'
        }
    })
    .command('list', 'List all task. Allow filter by status', {
        status: {
            alias: 's',
            type: 'boolean',
            desc: 'Define the task you can show. True equals finished and False not finish task'
        }
    })
    .command('delete', 'Delete a selected Task', {
        description: {
            alias: 'd',
            desc: 'Define de description of the task '
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}