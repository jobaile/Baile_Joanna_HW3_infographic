(() => {
AOS.init(); //initializes AOS library

//Line animation for title
    var letterTime = 800;
    var lineDrawing = anime({
        targets: "path",
        strokeDashoffset: [anime.setDashoffset, 1],
        easing: "easeInOutSine",
        duration: letterTime,
        delay: function(el, i) {
            return letterTime * i;
        },
        begin: function(anim) {
        var letters = document.querySelector("#logo").querySelector('svg').querySelectorAll('path'),
            i;

            for (i = 0; i < letters.length; ++i) {
            letters[i].setAttribute("stroke", "black");
            letters[i].setAttribute("fill", "none");
            }
        },
        update: function(anim) {
            if (anim.currentTime >= letterTime) {
            document.querySelector("#letter-m1").setAttribute("fill", "#8F0000");
            }
            if (anim.currentTime >= 2 * letterTime) {
            document.querySelector("#letter-m2").setAttribute("fill", "#8F0000");
            }
            if (anim.currentTime >= 3 * letterTime) {
            document.querySelector("#letter-i").setAttribute("fill", "#8F0000");
            }
            if (anim.currentTime >= 4 * letterTime) {
            document.querySelector("#letter-w").setAttribute("fill", "#8F0000");
            }
        },
        autoplay: true
    });

//Counting up to 4,232
        var count= 0;
        var speed = 200000;
        timer();

        function timer()
        { count++;
        document.querySelector("#countdown").innerHTML=count;
            if (count >= 4232)
            {
                return;
            }
        speed = speed / 100000; 
        setTimeout(timer, speed);
        }

//Functions
let circleStat1 = document.querySelector("#_x33_times_1_");
const resOne = document.querySelector("#resource1");
const resTwo = document.querySelector("#resource2");
const resThree = document.querySelector("#resource3");

//Waypoint
    var waypoint = new Waypoint({
        element: document.querySelector("#girl-stats"),
        handler: function(direction){
            console.log("scrolled to element!", this.element);
            circle1grow();
        },
        offset: 200
    });

//Gsap codes
function circle1grow(){
    TweenMax.to(circleStat1, 1.5, {scale: 1.1, transformOrigin:"20% 20%", ease:Back.easeOut});
}

function phoneGrow(parent, elements){
    //console.log(parent, elements);
    TweenMax.to(resOne, 0.5, {scale: 1.2, transformOrigin: "20% 20%", ease:Back.easeOut});
}

function phoneUnGrow() {
    TweenMax.to(resOne, 0.5, {scale: 1, transformOrigin: "20% 20%", ease:Back.easeOut});
}

function leafGrow(){
    TweenMax.to(resTwo, 0.5, {scale: 1.2, transformOrigin: "20% 20%", ease:Back.easeOut});
}

function leafUnGrow() {
    TweenMax.to(resTwo, 0.5, {scale: 1, transformOrigin: "20% 20%", ease:Back.easeOut});
}

function turtleGrow(){
    TweenMax.to(resThree, 0.5, {scale: 1.2, transformOrigin: "20% 20%", ease:Back.easeOut});
}

function turtleUnGrow() {
    TweenMax.to(resThree, 0.5, {scale: 1, transformOrigin: "20% 20%", ease:Back.easeOut});
}


//Event Listeners
resOne.addEventListener("mouseover", function() {
    phoneGrow(this.querySelector('.svg-con'), ["phoneCir"]);
});

resOne.addEventListener("mouseout", function() {
    phoneUnGrow(this.querySelector('.svg-con'), ["phoneCir"]);
});

resTwo.addEventListener("mouseover", function() {
    leafGrow(this.querySelector('.svg-con'), ["leafCir"]);
});

resTwo.addEventListener("mouseout", function() {
    leafUnGrow(this.querySelector('.svg-con'), ["leafCir"]);
});

resThree.addEventListener("mouseover", function() {
    turtleGrow(this.querySelector('.svg-con'), ["turtleCir"]);
});

resThree.addEventListener("mouseout", function() {
    turtleUnGrow(this.querySelector('.svg-con'), ["turtleCir"]);
});

//Fetching data for Rankin + Canada map
    const rankinIn = document.querySelector("#rankin");
    const prov = document.querySelectorAll(".data-ref");
    const reso = document.querySelectorAll('.data-res');

    reso.forEach(reso => reso.addEventListener("click", getResData));

   function getResData(){
       console.log("from getresdata");
       let targetURL = `./includes/config.php?resNo=${this.id}`; 
       fetch(targetURL) 
       .then(prov => prov.json()) 
       .then(data => {
           console.log(data);
           showResData(data[0]);
       }) 
       .catch(function(error) {
           console.log(error);
       }); 
       function showResData(data){
           //debugger;
           const { title, info } = data;
           document.querySelector('.resTitle').textContent = title;
           document.querySelector('.resInfo').textContent = info;        
       }
   };

    prov.forEach(prov => prov.addEventListener("mouseover", function getProvData(){
        console.log("from getProvData!");
        let targetURL = `./includes/config.php?provNo=${this.id}`; 
        fetch(targetURL) 
        .then(res => res.json()) 
        .then(data => {
            console.log(data);
            showProvData(data[0]);
        }) 
        .catch(function(error) {
            console.log(error);
        }); 
        function showProvData(data){
            //debugger;
            const { province, number } = data;
            document.querySelector('.provName').textContent = `Province/Territory: ${province}`;
            document.querySelector('.numInfo').textContent = `Number: ${number} missing or murdered`;        
        }
    }));
    
    rankinIn.addEventListener("click", function getRankinData() {
        console.log("rankin");
        let targetURL = `./includes/config.php?cityName`; 

        fetch(targetURL) 
        .then(res => res.json()) 
        .then(data => {
            console.log(data);
            showRankinData(data[0]); 
        }) 
        .catch(function(error) {
            console.log(error);
        }); 
    
        function showRankinData(data){
            const { city, population } = data;
            document.querySelector('.rankinCity').textContent = city;
            document.querySelector('.rankinPop').textContent = `Population: ${population}`;
    
        }
    }); 

    //getProvData(); // trigger the getData function
    //getRankinData();
})();