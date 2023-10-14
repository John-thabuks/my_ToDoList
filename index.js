document.addEventListener("DOMContentLoaded", function(){

    let form = document.querySelector("form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        buildToDo(e.target.new_todo.value);
        form.reset();
    })
})

function buildToDo(todo){
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.addEventListener("click", handleDelet)

    btn.textContent = "x";
    p.textContent = `${todo} `;
    p.appendChild(btn);
    document.querySelector("#todo_container").appendChild(p);

}

function handleDelet(e){    
    e.target.parentNode.remove();
}


// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector("form").addEventListener("submit", (e) => {
//         e.preventDefault();
//         const submittedButton = document.activeElement;
//         console.log(submittedButton);
//     })
// });
