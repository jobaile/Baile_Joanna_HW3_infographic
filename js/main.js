(() => {

//Line animation for title
    var letterTime = 1200;
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
    var speed = 4000;
    timer();

    function timer()
    { count++;
     document.querySelector("#countdown").innerHTML=count;
        if (count >= 4232)
        {
            return;
        }
    speed = speed / 4000; 
    setTimeout(timer, speed);
    }

//Waypoint
    var waypoint = new Waypoint({
        element: document.querySelector("#girl-stats"),
        handler: function(direction){
            console.log("scrolled to element!", this.element);
            runAnimation();
        },
        offset: 20
    });

    var waypoint = new Waypoint({
        element: document.querySelector("#section3"),
        handler: function(direction){
            console.log("scrolled to element!", this.element);
        },
        offset: 200
    });

    var waypoint = new Waypoint({
        element: document.querySelector("#section4"),
        handler: function(direction){
            console.log("scrolled to element!", this.element);
        },
        offset: 200
    });
    

//Fetching data for Rankin + Canada map
    const prov = document.querySelectorAll(".data-ref");
    const rankinIn = document.querySelector("#rankin");

    function getProvData() {
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
    }

    function showProvData(data){
        //debugger;
        const { province, number, info } = data;
        document.querySelector('.provName').textContent = `Province/Territory: ${province}`;
        document.querySelector('.numInfo').textContent = `Number: ${number} missing or murdered`;
        document.querySelector('.provInfo').textContent = `Population of Indigenous peoples: ${info}`;
    }

    prov.forEach(prov => prov.addEventListener("click", getProvData));
    
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