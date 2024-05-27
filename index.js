const addInput = document.querySelector("#add");

const inputBox = document.querySelector(".input-todo");

const listContainer = document.querySelector("#list-container");

addInput.addEventListener("click", function() {

    addInput.classList.add("pressed1");

    setTimeout(() => {
        addInput.classList.remove("pressed1");
    }, 100);

    addItem();

});

function addItem() {

    if(inputBox.value === '') {
        alert("Please write something.");
        storeList();
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        storeList();
    }
    inputBox.value = '';
    storeList();   
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeList();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeList();
    }
}, false);

function storeList() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

displayList();