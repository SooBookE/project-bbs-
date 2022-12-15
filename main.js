document.addEventListener("DOMContentLoaded",()=>{
    
    function refresh(){
        const list_container = document.createElement('div');
        const list_num = document.createElement("div");
        const list_title = document.createElement("div");
        const list_writer = document.createElement("div");
        const list_view = document.createElement("div");
        const list_date = document.createElement("div");

        const container = document.getElementsByClassName('container');
        
        container[0].appendChild(list_container).append(list_num, list_title, list_writer, list_view, list_date);
        // list_container에 display: flex 넣어야 합니다!
    }
    const insert = document.querySelector("button");

    insert.addEventListener("click",refresh);


})