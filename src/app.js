import $ from 'jquery';
import * as service from './service';
import Controller from './controller';

class App {
    constructor() {
        this.controller = new Controller(service);
    }

    init() {

    }
}

var app = null;
function init() {
    app = new App();
    app.init();
}

$(document).ready(init);
