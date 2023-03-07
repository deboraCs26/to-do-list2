const tasks = [
  {
    name : 'whak'
  

},
  {
    name : 'coffe'
    
  
  },

  {
    name : 'study'
    

  }
]

  function showItem() {
  const ul = document.getElementById("list")
  let lis = ""
  tasks.map((list, index) =>  {
   
    lis = lis + `<li id="${index}">${list.name} <button onclick="remove(${index})">Remove</button></li>`
  })
  ul.innerHTML = lis
}

function add() {
  
const input_value = document.form_main.task.value;

tasks.push({name: input_value})

showItem()


}

function remove(removeItem) {

 tasks.splice(removeItem, 1);
  
 showItem()
   
  }
  

    


  
 
  

  
