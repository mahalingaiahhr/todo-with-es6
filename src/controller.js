import ListView from './listView';
import FormView from './formView';

class Controller {
    constructor(service) {
        this.service = service;
        this.formView = new FormView({
            onSubmit: (todo) => {
                this.onSubmit(todo);
            }
        });
        this.listView = new ListView({
            onEdit: (todo) => {
                this.onEdit(todo);
            },
            onDelete: (todo) => {
                this.onDelete(todo);
            }
        });

        this.service.load().then((data) => {
            this.listView.showAll(data);
        });
    }

    onSubmit(todo) {
        if (todo.id) {
            this.edit(todo);
        } else {
            this.create(todo);
        }
    }

    create(todo) {
        this.service.save(todo).then((data) => {
            this.listView.add(data);
        }).catch(function(cause) {
            console.log('Unable to save - ' + cause);
        });
    }

    onEdit(id) {
        this.service.get(id).then((data) => {
            this.formView.edit(data);
        }).catch(function(cause) {
            console.log('Todo item not found' + cause);
        });
    }

    edit(todo) {
        this.service.update(todo).then((data) => {
            this.listView.update(data);
        }).catch(function(cause) {
            console.log('Unable to update - ' + cause);
        });
    }

    onDelete(todo) {
        this.service.remove(todo).then(() => {
            console.log('Deleted.');
        }).catch(() => {
            this.listView.add(todo); // Add it back to list;
        });
    }
}
export default Controller;
