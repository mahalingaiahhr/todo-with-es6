class FormView {
    constructor(options) {
        this.task = document.getElementById('task');
        this.date = document.getElementById('date');
        this.todoId = document.getElementById('todoId');
        this.submit = document.getElementById('formSubmit');
        const onSubmit = options.onSubmit || (() => {});
        this.submit.addEventListener('click', (e) => {
            e.preventDefault();
            onSubmit({
                id: this.todoId.value,
                task: this.task.value,
                date: this.date.value
            });
            this.resetForm();
        });
    }

    edit(todo) {
        this.setForm(todo);
        this.submit.value = 'Edit';
    }

    resetForm() {
        this.task.value = '';
        this.todoId.value = '';
        this.date.value = '';
        this.submit.value = 'Create';
    }

    setForm(todo) {
        this.todoId.value = todo.id;
        this.task.value = todo.task;
        this.date.value = todo.date;
    }
}

export default FormView;
