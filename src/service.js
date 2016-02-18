export function save(todo){
    return new Promise(function(resolve, reject){
        todo.id=Date.now();
        localStorage.setItem(""+todo.id, JSON.stringify(todo));
        resolve(todo);
    });
};

export function update(todo){
    return new Promise(function(resolve, reject){
        localStorage.setItem(""+todo.id, JSON.stringify(todo));
        resolve(todo);
    });
};

export function remove(todo){
    return new Promise(function(resolve, reject){
        localStorage.removeItem(""+todo.id);
        resolve(todo);
    });
};

export function load(){
    return new Promise(function(resolve, reject){
        var todos = Object.keys(localStorage).map((key) => JSON.parse(localStorage[key]));
        resolve(todos);
    });
};

export function get(id){
    return new Promise(function(resolve, reject){
        var data = localStorage.getItem(id);
        if (!data) {
            reject("Item not found");
        } else {
            resolve(JSON.parse(data));
        }
    });
};
