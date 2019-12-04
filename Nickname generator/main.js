'use strict';
//Nickname generator code


let nicknameList;


fetch("words.txt").then(convertData).then(processData);

function convertData(rawData) {
  return rawData.text(); // convert file contents to string
}

function processData(data) {
  nicknameList = data.split(/, | \r\n/)  // Split string by end of line
  console.log(nicknameList);

}



//event listeners
document.getElementById('random').addEventListener('click' , nicknameCreate2);
document.getElementById('all').addEventListener('click' , allPicked);








// functions

function nicknameCreate2() {
    let first = document.getElementById('first').value;

    let last = document.getElementById('last').value;

    let chosen = Math.floor(Math.random()* 5);

    console.log(chosen);
    

    document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nicknameList[chosen] + " \'" + last + "</p>";

}


function allPicked() {
    let first = document.getElementById('first').value;

    let last = document.getElementById('last').value;

    for(let i = 0; i < nickNameList; i++) {

        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nicknameList[i] + " \'" + last + "</p>";
    }

    
}



