document.addEventListener("DOMContentLoaded",()=>{
    
    function refresh( dnum, ttl, author, vcnt, day){
        const list_container = document.createElement('div');
        const list_dnum = document.createElement("div");
        const list_ttl = document.createElement("div");
        const list_author = document.createElement("div");
        const list_vcnt = document.createElement("div");
        const list_day = document.createElement("div");

        const container = document.getElementsByClassName('container');
        
        container[0].appendChild(list_container).append(list_dnum, list_ttl, list_author, list_vcnt, list_day);
        list_container.setAttribute("class",'titles2');
        list_dnum.setAttribute("class",'dnum');
        list_ttl.setAttribute("class",'ttl');
        list_author.setAttribute("class",'author');
        list_vcnt.setAttribute("class",'vcnt');
        list_day.setAttribute("class",'day');


        list_dnum.innerHTML=dnum;
        list_ttl.innerHTML=ttl;
        list_author.innerHTML=author;
        list_vcnt.innerHTML=vcnt;
        list_day.innerHTML=day;

        list_container.addEventListener("click",()=>{
            const cur = dnum;
            if(localStorage.getItem('cur')){
                localStorage.removeItem('cur');
                localStorage.setItem('cur',cur);
            }else{
                localStorage.setItem('cur',cur);
            }
            window.location.href = './watch.html';
        })
        /* cur 값을 setAttribute와 getAttirbute에서 dnum으로 대체했습니다. */
    }
    
    if(localStorage.getItem('cur')){
        localStorage.removeItem('cur');
    }// 초기 로드 시 cur라는 키가 있다면 제거하고 시작.

    const keys = Object.keys(localStorage).sort((a,b)=>b-a);
    
    while(1){
        if(keys.indexOf('cur')==-1){
            break;
        }else{
            keys.splice(keys.indexOf('cur'),1);
        }
    }// 배열에서 글 목록 내용만 뽑아내기 위해 반복문 사용.
    console.log(keys);
    
    if(keys){
        for(let i=0 ; i<keys.length ; i++){
            const item = JSON.parse(localStorage.getItem(keys[i]));
            console.log(item);
            refresh(item.dnum, item.ttl, item.author, item.vcnt, item.day)
        }
    }

    


})