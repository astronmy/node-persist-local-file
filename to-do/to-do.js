const fs = require('fs');
const colors = require('colors');

let listToDO = [];

const saveDB = () => {
    let data = JSON.stringify(listToDO);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error("The data coudn't save", err);
        console.log("The data has been saved");
    })
}
const loadDB = () => {
    try {
        listToDO = require('../db/data.json');
    } catch (err) {
        listToDO = [];
    }
}
const listTask = (status = null) => {
    loadDB();
    let listado = listToDO;
    if (status) {
        console.log(status);
        listado = listToDO.filter(task => task.finish === status);

    }
    for (let task of listado) {
        console.log("=======TO DO=======".green);
        console.log(task.description);
        console.log('status: ' + task.finish);
        console.log("===================".green);
    }
}
const deleteTask = (description) => {
    loadDB();
    listToDO = listToDO.filter(task => task.description !== description);
    saveDB();

}
const update = (description, finish = true) => {
    loadDB();
    let index = listToDO.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDO[index].finish = finish;
        saveDB();
        return true;
    } else {
        return false;
    }
}
const create = (description) => {
    loadDB();
    let toDo = {
        description,
        finish: false,
    };
    listToDO.push(toDo);
    saveDB();
    return toDo;
}
module.exports = {
    create,
    update,
    listTask,
    deleteTask
}