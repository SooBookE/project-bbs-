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
        list_container.setAttribute("class",'titles');
        list_container.setAttribute("key",dnum);
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
    }
    



    /* 테스트용 구문 */
    class Article {

        constructor( dnum, ttl, author, vcnt, day ) {
        this.dnum = dnum //글번호
        this.ttl = ttl // 제목
        this.author = author // 작성자
        this.vcnt = vcnt // 조회수
        this.day = day // 날짜
    
        }
    }
    const ranArr = [];
    const obj1 = new Article(1,'1번','ㄱㄱㄱ', 1212, '2022.12.15.18:23:08');
    const obj2 = new Article(2,'2번','ㄴㄴㄴ', 2222, '2023.12.15.18:23:08');
    const obj3 = new Article(3,'3번','ㄷㄷㄷ', 3232, '2024.12.15.18:23:08');
    const obj4 = new Article(4,'4번','ㄹㄹㄹ', 4242, '2025.12.15.18:23:08');
    const obj5 = new Article(5,'5번','ㅁㅁㅁ', 5252, '2026.12.15.18:23:08');
    
    ranArr.push(obj1);
    ranArr.push(obj2);
    ranArr.push(obj3);
    ranArr.push(obj4);
    ranArr.push(obj5);
    
    for(let i=1 ; i<=5 ; i++ ){
        localStorage.setItem(i,JSON.stringify(ranArr[i-1]));
    }
    /* //테스트용 구문 */
    

    
    const keys = Object.keys(localStorage).sort((a,b)=>b-a);
    
    console.log(keys);
    
    if(keys){
        for(let i=0 ; i<keys.length ; i++){
            const item = JSON.parse(localStorage.getItem(keys[i]));
            console.log(item);
            refresh(item.dnum, item.ttl, item.author, item.vcnt, item.day)
        }
    }

    


})