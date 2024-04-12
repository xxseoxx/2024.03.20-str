class Book{ //syntatic sugar (설탕을 살짝 바르다.)
    constructor(title, totalPages, nowPage){
    this.title = title;
    this.totalPages = totalPages;
    this.nowPage = nowPage;
    }
    read() {
        if(this.nowPage >= this.totalPages) console.log("다 읽었어요.")
        else{
    
        
        console.log(`${this.title}을 읽습니다. 지금 ${this.nowPage}를 읽고 있습니다.`);
        
        }
        this.nowPage++;
    }
}
let book1 = new Book("front tech", 3, 1);
let book2 = new Book("backend tech", 4, 2);
book1.read();
book2.read();