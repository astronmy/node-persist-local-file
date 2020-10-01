const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');


let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        toDo.listTask(argv.status);
        break;
    case 'update':
        toDo.update(argv.description, argv.status);
        break;
    case 'delete':
        toDo.deleteTask(argv.description);
        break;
    default:
        console.log('Command not found. For more informartion use help');
        break;
}