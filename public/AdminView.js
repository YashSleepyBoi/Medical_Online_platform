let record = document.querySelectorAll(".data")
console.log(record)

record.forEach(element=>{element.addEventListener('click',
function(e){        
    console.log(e.path[1].children[0].innerHTML+e.path[1].children[1].innerHTML)
    
})})