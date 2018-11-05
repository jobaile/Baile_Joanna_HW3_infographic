(() => {

    function getCounter(startCount,endcount,time,html){
        objects = {
            startCount:startCount,
            endCount:endcount,
            timer:time
        }

        this.function = function(){
            let startTime  = objects.startCount,
                timer = objects.timer,
                endCount = objects.endCount;
            let increament = startTime  < endCount ? 1:+1;
                timmer  = setInterval(function(){
                        startTime  += increament;
                        html.innerHTML = startTime ;
                        if(startTime  == endCount){
                            clearInterval(timmer);
                        }
                    },timer);
           }
        }

        let doc = document.querySelector('#value');
        
        let counter = new getCounter(0,4232,1,doc);
        //calling the function in the object
        counter.function();

    //Waypoint

    var waypoint = new Waypoint({
        element: document.querySelector("#girl-stats"),
        handler: function(direction){
            console.log("scrolled to element!", this.element);
        },
        offset: 200
    });
    
    const prov = document.querySelectorAll(".data-ref");

    function getData() {
        let targetURL = `./includes/connect.php?provNo=${this.id}`; 

        fetch(targetURL) 
        .then(res => res.json()) 
        .then(data => {
            console.log(data);
            showProvData(data[0]); 
        }) 
        .catch(function(error) {
            console.log(error); //if anything broke, log it to the console
        }); 
    }

    function showProvData(data){
        debugger;
        const { province, number, info } = data;
        document.querySelector('.provName').textContent = province;
        document.querySelector('.numInfo').textContent = `${number} missing or murdered`;
        document.querySelector('.provInfo').textContent = info;
    }

    prov.forEach(prov => prov.addEventListener("click", getData)); 

    //getData(); // trigger the getData function

})();