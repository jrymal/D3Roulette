"use strict";

const NBSP = "&nbsp;";

function $(id, prefix = '') {
    return document.getElementById(isBlank(prefix) ? id : prefix+'.'+id);
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function exists(obj){
    return obj && typeof obj !== "undefined";
}

function hasMethod( objMethod ) {
    return typeof objMethod === "function";
}

function length(array){
    return array ? array.length : 0;
}

function isBlank(stringValue) {
    return stringValue === null || stringValue === "" || !stringValue;
}

function hasClass(element, className){
    return element.classList.contains(className);
}
 
function toggle(element) {
    show(element, !isVisible(element));
}

function show(element, vis = true){
    // unclear why this doesn't work in chrome
    // element.classList.toggle("hidden", !vis);
    vis ? element.classList.remove("hidden") : element.classList.add("hidden");
}

function isVisible(element) {
    return !hasClass(element, "hidden");
}

function stripFirst(matchChar, string){
    let index = string.indexOf(matchChar);
    if (index>=0){
        return string.split(matchChar)[1];
    }
    return string;
}

function isValidElement(element){
  return element.value && isVisible(element);
};

function isValidValue(element){
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

function isCheckbox(element){
    return element.type === 'checkbox';
}

function getSelectedValue(element){
    return element.options[element.selectedIndex].value;
}

function removeAllChildren(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function randomizeList(selectEleId){
    let selectEle = $(selectEleId);
    let nodeList = selectEle.querySelectorAll("option");
    let selectedIdx = Math.floor(Math.random() * Math.floor(nodeList.length));
    $(selectEleId).value = nodeList[selectedIdx].value;
}

function listFromLevel(list_of_items, int_max_level){
    return list_of_items.filter(obj => obj.level <= int_max_level);
}

function setSelectedValue(ele_select,str_value){
    var options= ele_select.options;
    for (var i= 0; i<options.length; i++) {
        if (options[i].value===str_value) {
            options[i].selected= true;
            break;
        }
    }
}

function chooseFromList(list_of_items, bool_none=false){
    var max_idx = bool_none ? list_of_items.length+1 : list_of_items.length;
    var idx = Math.floor(Math.random() * Math.floor(max_idx));

    return list_of_items[idx];
}

function chooseSetFromList(list_of_items, int_count){
    var idx_list = [];
    var max_idx = list_of_items.length;
    for(var cnt = int_count; cnt > 0; cnt--){
        var choice = Math.floor(Math.random() * Math.floor(max_idx));
        while(idx_list.includes(choice)){
            choice = Math.floor(Math.random() * Math.floor(max_idx));
        }
        idx_list.push(choice);
    }

    return idx_list.sort().map(idx => {
        return {
            name: list_of_items[idx].name,
            idx: idx,
            level: list_of_items[idx].level
        };

    });
}
