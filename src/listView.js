import $ from 'jquery';

function generateDispalyContent(todo) {
    return `${todo.task} created at ${todo.date}
    <a src="#" class="edit">Edit</a>&nbsp; <a src="#" class="delete">Delete</a>`;
}

var createHtml = function(todo) {
    return `<div id='${todo.id}'> ${generateDispalyContent(todo)} </div>`;
};

class ListView {
    constructor(options) {
        this.container = $('#listcontainer');
        var onEdit = options.onEdit;
        this.container.on('click', '.edit', function(e) {
            e.preventDefault();
            onEdit($(this).parent().attr('id'));
        });
        var onDelete = options.onDelete;
        this.container.on('click', '.delete', function(e) {
            e.preventDefault();
            var id = $(this).parent().attr('id');
            $(`#${id}`).remove();
            onDelete.call(null, { id });
        });
    }

    add(todo) {
        this.container.append(createHtml(todo));
    }

    update(todo) {
        $(`#${todo.id}`).html(generateDispalyContent(todo));
    }

    showAll(todos) {
        for (const todo of todos) {
            this.add(todo);
        }
    }
}

export default ListView;
