const review = [
    {
        name: "Robby willie",
        img: "./images/headshots/1.jpg",
        job: "Chef",
        desc: "lLorem ipsum dolor sit amet consectetur adipisicing elit. Asparaza hello goodbye bro of thr filthy house",
    },
    {
        name: "Roberst",
        img: "./images/headshots/2.jpg",
        job: "Barista",
        desc: "lLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur  hello goodbye bro of thrvoluptate cupiditate consequuntur ab quod cumque!m",
    },
    {
        name: "Derek",
        img: "./images/headshots/3.jpg",
        job: "Manager",
        desc: " hello goodbye bro of thrlLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate cupiditate consequuntur ab quod cumque!m",
    },
    {
        name: "Lola Blues",
        img: "./images/headshots/4.jpg",
        job: "Chief",
        desc: "lLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate cupiditate consequuntur ab quod cumque!m hello goodbye bro of thr",
    }
];

var nxtBtn = document.querySelector(".next-btn");
var prvBtn = document.querySelector(".prev-btn");

var testName = document.getElementById("name");
var testImg = document.getElementById("test-img");
var testJob = document.getElementById("job");
var testDesc = document.getElementById("review");

var pBtn = document.querySelector(".primary-btn");
var after = document.getElementById("showcase");

var counter = 0;

window.addEventListener('DOMContentLoaded', function () {
    newReview(counter);
});

nxtBtn.addEventListener('click', function (e) {
    counter = (counter + 1) % review.length;
    newReview(counter);
});

prvBtn.addEventListener('click', function (e) {
    if (counter == 0) { counter = 3; }
    else { --counter; }
    newReview(counter);
});

pBtn.addEventListener('mouseenter', function (e) {
    after.classList.toggle('no');
    after.classList.toggle('blur');
})
pBtn.addEventListener('mouseleave', function (e) {
    after.classList.toggle('no');
    after.classList.toggle('blur');
})

function newReview(e) {
    let person = review[e];
    testImg.src = person.img;
    testName.innerHTML = person.name;
    testJob.innerHTML = person.job;
    testDesc.innerHTML = person.desc;
}