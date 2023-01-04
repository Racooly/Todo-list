let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.tasks');

//btn disable 
input.addEventListener('keyup', ()=> {
    if(input.value.trim() != 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
})

//adding new item
addBtn.addEventListener('click', () =>{
    if(input.value.trim() != 0 ){
        let newEl = document.createElement('div')
        newEl.classList.add('item')
        newEl.innerHTML = `
        <p>${input.value}</p>
		<div class="item-btn">
		<p class="Delete">DELETE</p>
		</div>
        `
        tasks.appendChild(newEl)
    }
})

//delete item from list
tasks.addEventListener('click', (k) => {
    if(k.target.classList.contains('Delete')){
        k.target.parentElement.parentElement.remove()
    }
})