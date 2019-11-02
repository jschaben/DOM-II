// Your code goes here

const funBusNav = document.querySelectorAll('.nav-link');
const FunBusBtn = document.querySelectorAll('.btn');
const wholeBody = document.querySelector('body');

const busImgSrcs = [
    'https://i.gifer.com/RqZ2.gif',
    'https://media.giphy.com/media/AjVgZDkl74532/giphy.gif',
    'https://media.giphy.com/media/J1ZajKJKzD0PK/giphy.gif',
    'https://media.giphy.com/media/B5BfWWr1UnVrG/giphy.gif',
    
];

const originalImgSrcs = Array.from(document.querySelectorAll('img')).map(element => element.src);
console.log(originalImgSrcs);

// https://media.giphy.com/media/J1ZajKJKzD0PK/giphy.gif
// nav bar

funBusNav[0].addEventListener("mouseover", e => {
    funBusNav[0].style.color = "blue";
    funBusNav[0].style.background = "gold";
    funBusNav[0].style.padding = "4%";
    funBusNav[0].style.borderRadius = "20%";
    funBusNav[1].style.fontSize = "12px";
    funBusNav[2].style.fontSize = "12px";
    funBusNav[3].style.fontSize = "12px";
});

funBusNav[0].addEventListener("mouseout", e => {
    funBusNav[0].style.background = "white";
    funBusNav[0].style.color = "black";
    funBusNav[0].style.padding = "0%";
    funBusNav[1].style.fontSize = "16px";
    funBusNav[2].style.fontSize = "16px";
    funBusNav[3].style.fontSize = "16px";
});

funBusNav[1].addEventListener("mouseover", e => {
    funBusNav[1].style.color = "blue";
    funBusNav[1].style.background = "gold";
    funBusNav[1].style.padding = "4%";
    funBusNav[1].style.borderRadius = "20%";
    funBusNav[0].style.fontSize = "12px";
    funBusNav[2].style.fontSize = "12px";
    funBusNav[3].style.fontSize = "12px";
});

funBusNav[1].addEventListener("mouseout", e => {
    funBusNav[1].style.background = "white";
    funBusNav[1].style.color = "black";
    funBusNav[1].style.padding = "0%";
    funBusNav[0].style.fontSize = "16px";
    funBusNav[2].style.fontSize = "16px";
    funBusNav[3].style.fontSize = "16px";
});

funBusNav[2].addEventListener("mouseover", e => {
    funBusNav[2].style.color = "blue";
    funBusNav[2].style.background = "gold";
    funBusNav[2].style.padding = "4%";
    funBusNav[2].style.borderRadius = "20%";
    funBusNav[0].style.fontSize = "12px";
    funBusNav[1].style.fontSize = "12px";
    funBusNav[3].style.fontSize = "12px";
});

funBusNav[2].addEventListener("mouseout", e => {
    funBusNav[2].style.background = "white";
    funBusNav[2].style.color = "black";
    funBusNav[2].style.padding = "0%";
    funBusNav[0].style.fontSize = "16px";
    funBusNav[1].style.fontSize = "16px";
    funBusNav[3].style.fontSize = "16px";
});

funBusNav[3].addEventListener("mouseover", e => {
    funBusNav[3].style.color = "blue";
    funBusNav[3].style.background = "gold";
    funBusNav[3].style.padding = "4%";
    funBusNav[3].style.borderRadius = "20%";
    funBusNav[0].style.fontSize = "12px";
    funBusNav[1].style.fontSize = "12px";
    funBusNav[2].style.fontSize = "12px";
});

funBusNav[3].addEventListener("mouseout", e => {
    funBusNav[3].style.background = "white";
    funBusNav[3].style.color = "black";
    funBusNav[3].style.padding = "0%";
    funBusNav[0].style.fontSize = "16px";
    funBusNav[1].style.fontSize = "16px";
    funBusNav[2].style.fontSize = "16px";
});

const imgs = document.querySelectorAll('img');
imgs.forEach((element, i) => {
    element.addEventListener('click', () => {
        element.src = busImgSrcs[i];
    });

    // Original on double click
    element.addEventListener('dblclick', () => {
        element.src = originalImgSrcs[i];
    });
});

const body = document.querySelectorAll('.main-navigation, body, footer');
body.forEach(element => {
    window.addEventListener('scroll', () => {
        element.style.color = 'firebrick';
        element.style.backgroundColor = 'lime';
    });
});

FunBusBtn[0].addEventListener("mouseover", end => {
    FunBusBtn[0].style.color = "green";
    FunBusBtn[0].style.background = "red";
    FunBusBtn[0].style.padding = "5%";
    FunBusBtn[0].style.borderRadius = "15%";
    FunBusBtn[0].style.boxShadow = "2px 17px 35px 1px aliceblue";
    end.stopPropagation()
})

FunBusBtn[0].addEventListener("click", end => {
    FunBusBtn[0].style.color = "hotpink";
    FunBusBtn[0].style.background = "blue";
    FunBusBtn[0].style.fontSize = "24px";
    end.preventDefault();
    end.stopPropagation();
})

FunBusBtn[1].addEventListener("mouseover", end => {
    FunBusBtn[1].style.color = "purple";
    FunBusBtn[1].style.background = "grey";
    FunBusBtn[1].style.padding = "6%";
    FunBusBtn[1].style.borderRadius = "30%";
    FunBusBtn[1].style.boxShadow = "2px 17px 35px 1px aliceblue";
    end.stopPropagation()
})

FunBusBtn[1].addEventListener("click", end => {
    FunBusBtn[1].style.color = "blue";
    FunBusBtn[1].style.background = "hotpink";
    FunBusBtn[1].style.fontSize = "24px";
    end.preventDefault();
    end.stopPropagation();
})

FunBusBtn[2].addEventListener("mouseover", end => {
    FunBusBtn[2].style.color = "red";
    FunBusBtn[2].style.background = "green";
    FunBusBtn[2].style.padding = "8%";
    FunBusBtn[2].style.borderRadius = "35%";
    FunBusBtn[2].style.boxShadow = "2px 17px 35px 1px aliceblue";
    end.stopPropagation()
})

FunBusBtn[2].addEventListener("click", end => {
    FunBusBtn[2].style.color = "orange";
    FunBusBtn[2].style.background = "yellow";
    FunBusBtn[2].style.fontSize = "24px";
    end.preventDefault();
    end.stopPropagation();
})