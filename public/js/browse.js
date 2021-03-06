console.log("is loaded");

function getUsers() {
  axios.get("api/users").then(function(response) {
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let n = 0;
    let o = 0;

    function newUserName() {
      i++;
      i = i % response.data.length;
      console.log(response.data[i].username);

      return response.data[i].username;
    }

    function newUserAbout() {
      j++;
      j = j % response.data.length;
      console.log(response.data[j].about);

      return response.data[j].about;
    }

    function newUserImage() {
      k++;
      k = k % response.data.length;
      console.log(response.data[k].image);

      return response.data[k].image;
    }

    function newUserCar() {
      l++;
      l = l % response.data.length;
      console.log(response.data[l].car_model);

      return response.data[l].car_model;
    }

    function newUserCity() {
      m++;
      m = m % response.data.length;
      console.log(response.data[m].city);

      return response.data[m].city;
    }

    function newUserId() {
      o++;
      o = o % response.data.length;
      console.log(response.data[n].id);

      return response.data[o].id;
    }

    document.getElementById("cardUsername").innerHTML =
      newUserName() + ", " + newUserCity();
    // document.getElementById("cardUserCity").innerHTML = newUserCity();
    document.getElementById("cardUserCar").innerHTML = newUserCar();
    document.getElementById("cardUserAbout").innerHTML = newUserAbout();
    document.getElementById("cardUserImg").setAttribute("src", newUserImage());
    document.getElementById("cardUserImg").setAttribute("height", "400px");
    document.getElementById("cardUserImg").setAttribute("width", "520px");

    document
      .getElementById("greenBtn")
      .addEventListener("click", function(event) {
        document.getElementById("cardUsername").innerHTML =
          newUserName() + ", " + newUserCity();
        // document.getElementById("cardUserCity").innerHTML = newUserCity();
        document.getElementById("cardUserCar").innerHTML = newUserCar();
        document.getElementById("cardUserAbout").innerHTML = newUserAbout();
        document
          .getElementById("cardUserImg")
          .setAttribute("src", newUserImage());
        axios
          .post("/api/matches/" + true, { id: newUserId(), yesOrNo: true })
          .then(function(response) {
            console.log("click");
            console.log(response);
          });

        //make axios post or put call to send to matched
      });

    document
      .getElementById("redBtn")
      .addEventListener("click", function(event) {
        document.getElementById("cardUsername").innerHTML =
          newUserName() + ", " + newUserCity();
        document.getElementById("cardUserCar").innerHTML = newUserCar();
        document.getElementById("cardUserAbout").innerHTML = newUserAbout();
        // document.getElementById("cardUserEmail").innerHTML = newUserEmail();
        document
          .getElementById("cardUserImg")
          .setAttribute("src", newUserImage());
        document
          .getElementById("cardUserImg")
          .setAttribute("class", "img-fluid");
        axios
          .post("/api/matches/" + false, { id: newUserId(), yesOrNo: false })
          .then(function(response) {
            console.log(response);
          });
      });
  });
}

getUsers();
