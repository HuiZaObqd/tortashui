
function erekciq(){
    const pagesNumber = 8;
    let a=document.getElementsByClassName("derekciq");
    let b=a.length;
    console.log(b);
    if(b > 0){
        for(let i=0; i < pagesNumber; i++) {
            document.getElementsByClassName("derekciq")[0].setAttribute("class", "seks");
        }
        console.log("kur");
    }else{
        for(let i=0; i < pagesNumber; i++) {
            document.getElementsByClassName("seks")[0].setAttribute("class", "derekciq");
        }
    }
}
