import $ from 'jquery';
import _ from 'lodash/core';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="startButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  let count = parseInt($('#count').text()) || 0;
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#startButton').on('click', _.debounce(updateCounter, 1000));
