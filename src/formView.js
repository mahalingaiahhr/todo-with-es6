import $ from 'jquery';

class FormView {
    constructor(options) {
        this.$task = $('#task');
        this.$date = $('#date');
        this.$todoId = $('#todoId');
        this.$submit = $('#formSubmit');
        const onSubmit = options.onSubmit || (() => {});
        this.$submit.on('click', (e) => {
            e.preventDefault();
            onSubmit({
                id: this.$todoId.val(),
                task: this.$task.val(),
                date: this.$date.val()
            });
            this.resetForm();
        });
    }

    edit(todo) {
        this.setForm(todo);
        this.$submit.val('Edit');
    }

    resetForm() {
        this.$task.val('');
        this.$todoId.val('');
        this.$date.val('');
        this.$submit.val('Create');
    }

    setForm(todo) {
        this.$todoId.val(todo.id);
        this.$task.val(todo.task);
        this.$date.val(todo.date);
    }
}

export default FormView;
