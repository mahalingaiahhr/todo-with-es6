import $ from 'jquery';
import {start,greet} from './controller';

console.log(greet);
$(document).ready(() => {
    start();
});
