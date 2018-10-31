(() => {

    const prov = document.querySelectorAll(".data-ref");

    function getData() {
        // whenever we click on a thumbnail it passes the ID to the php query
        let targetURL = `./includes/connect.php?provNo=${this.id}`; 

        fetch(targetURL) // go get the data and bring it back
        .then(res => res.json()) // turn the result into a plan JS object
        .then(data => {
            console.log(data);// run a function to parse our data
            showCarData(data[0]); // run a function to put the data on the page
        }) 
        .catch(function(error) {
            console.log(error); //if anything broke, log it to the console
        }); // let's see what we got
    }

    function showCarData(data){
        debugger;
        // parse the DB info and put it where it needs to go
        const { province, number, info } = data; // destructiong assignment => MDN JS destructuring

        //grab the elements we need, and populate them withd ata
        document.querySelector('.provName').textContent = province;
        document.querySelector('.numInfo').textContent = `${number} missing or murdered`;
        document.querySelector('.provInfo').textContent = info;
    }

    prov.forEach(prov => prov.addEventListener("click", getData)); 

    //getData(); // trigger the getData function

})();