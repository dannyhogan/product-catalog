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

// Gets snowboard details from API and stores in variable.
const snowboard = snowboardsApi.get();

// Sets values of DD elements equal to each object property
brand.textContent = snowboard.boardBrand;
type.textContent = snowboard.boardType;
length.textContent = snowboard.boardLength;
age.textContent = snowboard.boardAge;
bindings.textContent = snowboard.boardWithBindings;
quality.textContent = snowboard.boardQuality;
style.textContent = snowboard.boardStyle;
description.textContent = snowboard.boardDescription;