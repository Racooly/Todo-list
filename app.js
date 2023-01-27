const input = document.querySelector('.entered-list')
const addBtn = document.querySelector('.add-list')
const tasks = document.querySelector('.tasks');
const description = document.querySelector('.description')

//btn disable and description
input.addEventListener('keyup', ()=> {
    if(input.value.trim() != 0){
        addBtn.classList.add("active")
        description.style.display = "inline"
    }else{
        addBtn.classList.remove("active")
        description.style.display = "none"
    }
})

//adding new item
addBtn.addEventListener('click', () =>{
    if(input.value.trim() != 0 ){
        let newEl = document.createElement('div')
        newEl.classList.add('item')
        newEl.innerHTML = `
        <div> 
			<p class="name">${input.value}</p>
			<p class="desc">${description.value}</p>
		</div>
		<div class="item-btn">
			<p class="done">DONE</p>
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

//mark item as completed
tasks.addEventListener('click', (k) => {
    if(k.target.classList.contains('done')){
        k.target.parentElement.parentElement.classList.toggle('completed')
    }
})