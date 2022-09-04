let nameInput = document.querySelector ('.main__input');
let dateInput = document.querySelector ('.date__input');
let descriptionInput = document.querySelector ('.description__input');
let mainButton = document.querySelector ('.main__button');
let skcroll = document.querySelector ('.skcroll');


mainButton.onclick = () =>{

    let name = nameInput.value;
    console.log(name)
    let date = dateInput.value;
    let description = descriptionInput.value
//     skcroll.innerHTML+=`<div class="list__wraper" title="${description}"> 
//     <input class="list__checkbox" type="checkbox">
//     <p class="list__task">${name}</p>
//     <p class="list__date">${date}</p>
//     <p class="list__close">&times;</p>
// </div>`
let wraperBlock = document.createElement('div');
let listCheckbox = document.createElement('input');
let taskName = document.createElement('p');
let taskDate = document.createElement('p');
let taskClose = document.createElement('p');

wraperBlock.className="list__wraper";
listCheckbox.className="list__checkbox";
taskName.className="list__task";
taskDate.className="list__task";
taskClose.className="list__close";

wraperBlock.title=description;
listCheckbox.type="checkbox";

taskName.textContent=`${name}`;
taskDate.textContent=`${date}`;
taskClose.textContent="X";

wraperBlock.append(listCheckbox,taskName,taskDate,taskClose);

skcroll.append(wraperBlock);



//skcroll.append(nameInput)
}



//1 create  5 elements 
// attribut 
//mydiv.append
