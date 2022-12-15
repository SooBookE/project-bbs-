document.addEventListener("DOMContentLoaded",()=>{
    
    function refresh(){
        const list_container = document.createElement('div');
        const list_dnum = document.createElement("div");
        const list_ttl = document.createElement("div");
        const list_author = document.createElement("div");
        const list_vcnt = document.createElement("div");
        const list_day = document.createElement("div");

        const container = document.getElementsByClassName('container');
        
        container[0].appendChild(list_container).append(list_dnum, list_ttl, list_author, list_vcnt, list_day);
        list_container.setAttribute("class",'titles');
        list_dnum.setAttribute("class",'dnum');
        list_ttl.setAttribute("class",'ttl');
        list_author.setAttribute("class",'author');
        list_vcnt.setAttribute("class",'vcnt');
        list_day.setAttribute("class",'day');
    }


    const ranArr = [{},{},{}]

    localStorage.setItem('value',)
    


})