(() => {
  const country = document.querySelectorAll('.data-res');
  
  function getData(){
          console.log(this);
          let targetURL = `includes/config.php?resNo=${this.id}`; //whenever we click on a thumbnail, pass its id to the php query
          fetch (targetURL) // go get the data and bring it back! good doggy
          .then(res => res.json()) //turn the result into a plain JS object
          .then(data => {
              console.log(data);
              //run a function to parse our data
              showCountryData(data[0]);
          }) //lets see what we got
          .catch(function(error) {
              console.log(error); //if anything broke, log it to the console
          });

          function showCountryData(data) {
              const { title, info } = data;
              document.querySelector('.resTitle').textContent = title;
              document.querySelector('.resInfo').textContent = info;    
          }
      };

      country.forEach(country => country.addEventListener("click", getData));
  
      //getData(); //trigger the getData function
  })();
  
