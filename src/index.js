export const paintCards = () => {
    let listOfLi = document.getElementsByTagName("li");
    for (let i = 0; i < listOfLi.length; i++) {
        if (!(i % 2)) {
            listOfLi[i].style.backgroundColor = "red";
        }
    }
}


    export const findElement = () => {
    let likeLi = document.getElementsByClassName('likedItem');
    for (let i = 0; i < likeLi.length; i++){
        likeLi[i].style.backgroundColor = "blue";
    }
};

