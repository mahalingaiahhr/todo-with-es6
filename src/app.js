import $ from 'jquery';
import * as service from './service';
import Controller from './controller';

class App {
    constructor() {
        this.controller = new Controller(service);
    }

}

function init() {
    var app = new App(); /* eslint no-unused-vars: 0*/
}

$(document).ready(init);
