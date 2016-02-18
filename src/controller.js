import * as service from './service';
import ListView from './listView';
import FormView from './formView';
import $ from 'jquery';

var listView, formView;

function onSubmit(todo){
    console.log("ssssssssss: "+todo.id);
    if (todo.id) {
        edit(todo);
    } else {
        create(todo);
    }
}

function create(todo){
    service.save(todo).then(function(data){
        listView.add(data);
    }).catch(function(cause){
        console.log('Unable to save - '+cause);
    });
}

function onEdit(id){
    service.get(id).then(function(data){
        formView.edit(data);
    }).catch(function(cause){
        console.log('Todo item not found'+cause);
    });
}

function edit(todo){
    service.update(todo).then(function(data){
        listView.update(data);
    }).catch(function(cause){
        console.log('Unable to update - '+cause);
    });
}

function onDelete(todo){
    service.remove(todo).then(function(data){
        console.log("Deleted.");
    }).catch(function(cause){
        listView.add(todo); //Add it back to list;
    });
}

function init(){
    listView = new ListView({
        'container': $("#listcontainer"),
        onEdit,
        onDelete
    });
    formView = new FormView({onSubmit});
    service.load().then(function(data){
        listView.showAll(data);
    });
}

export function start(){
    console.log('Started init');
    init();
};

export var greet="hi";
