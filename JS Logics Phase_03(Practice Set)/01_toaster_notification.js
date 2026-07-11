/*
function createToaster(config){
    return function(notification){
        let main = document.createElement("div");
        main.className = `${config.theme === "dark" ? "bg-gray-100 text-white" : "bg-gray-100 text-black"}
            px-6 py-3 rounded shadow-lg pointer-events-none
             ${config.positionX === "right"? "right-10" : "left-10"} 
             ${config.positionY === "top"? "top-10" : "bottom-10"}`;

        main.textContent = `${notification}`;
        document.body.appendChild(main);

        setTimeout(() => {
            document.body.removeChild(main);
        }, config.duration*1000);
    }
}
let toaster = createToaster({
    positionX: "left",
    positionY: "bottom",
    theme: "dark",
    duration: 3    
});

toaster("This is a dummy notification!");
*/

function createToaster(config){
    return function(notify){
        let div = document.createElement("div");
        div.textContent = notify;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-100 text-white" : "bg-gray-100 text-black"} 
        px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity`;

        let par = document.querySelector(".parent");
        par.appendChild(div);

        if(config.positionX === "right" || config.positionY === "bottom"){
            par.className += `${config.positionX === "right"? " right-10" : " left-10"} 
                            ${config.positionY === "bottom"? " bottom-10" : " top-10"}`;
        }

        setTimeout(() => {
            par.removeChild(div);
        }, config.duration*1000);

    }
}
let notification = createToaster({
    positionX: "right",
    positionY: "top", 
    theme: "light",
    duration: 3
});

notification("1 unread message from MAA!");

setTimeout(() => {
    notification("1 unread message from PAPA!");
}, 2000);

setTimeout(() => {
    notification("You are selected as an SDE-2 @Amazon!");
}, 3000);