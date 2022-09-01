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
    skcroll.innerHTML+=`<div class="list__wraper" title="${description}"> 
    <input class="list__checkbox" type="checkbox">
    <p class="list__task">${name}</p>
    <p class="list__date">${date}</p>
    <p class="list__close">&times;</p>
</div>`


}

