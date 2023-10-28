window.onload = () =>{
    const rootElement = document.getElementById("root");
    const ints = [2,4,6,8,10,12];

    ints.forEach(i => {
        let li = document.createElement("li");
        li.innerHTML = i;
        rootElement.appendChild(li);
    });
} ;