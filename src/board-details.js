import snowboardsApi from './snowboard-api.js';

// Gets all needed DOM elements.
const brand = document.getElementById('brand');
const type = document.getElementById('type');
const length = document.getElementById('length');
const age = document.getElementById('age');
const bindings = document.getElementById('bindings');
const quality = document.getElementById('quality');
const style = document.getElementById('style');
const description = document.getElementById('description');

// Gets snowboard values from API and stores in object variable.
const snowboard = snowboardsApi.get();

// Sets text content the of DD elements equal to each object property value
brand.textContent = snowboard.boardBrand;
type.textContent = snowboard.boardType;
length.textContent = snowboard.boardLength;
age.textContent = snowboard.boardAge;
// Converts boardWithBindings from boolean to yes or no
if(snowboard.boardWithBindings) {
    bindings.textContent = 'Yes';
} else {
    bindings.textContent = 'No';
}
quality.textContent = snowboard.boardQuality;
style.textContent = snowboard.boardStyle;
description.textContent = snowboard.boardDescription;