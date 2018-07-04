    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCVtrj9jB44_VqXfkCwsExE9e_H_V4Gv4M",
      authDomain: "flying-car-bbcab.firebaseapp.com",
      databaseURL: "https://flying-car-bbcab.firebaseio.com",
      projectId: "flying-car-bbcab",
      storageBucket: "",
      messagingSenderId: "214791519023"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    // Adding a button for adding Flying Car Times

    $("#add-car-button").on("click", function(event){
      event.preventDefault();

      //Will the users input

      var carName = $("#carName-input").val().trim();
      var carDestination = $("#destination-input").val().trim();
      var carFreq = $("#frequency-input").val().trim();
    //   var carArrival = moment($("#arrival-input").val().trim(), "MM/DD/YYYY").format("X");
    //   var carAway = $("#away").val().trim();

      //Object for holding the train data

    var newCarTime = {
        name: carName,
        destination: carDestination,
        frequency: carFreq,
        // arrival: carArrival,
        // away: carAway
  };

  database.ref().push(newCarTime);

  console.log(newCarTime.name);
  console.log(newCarTime.destination);
  console.log(newCarTime.frequency);
//   console.log(newCarTime.arrival);
//   console.log(newCarTime.away);

  alert("You have added a Car Time");

  $("#carName-input").val("");
  $("#destination-input").val("");
  $("#frequency-input").val("");
  $("#arrival-input").val("");
//   $("#minAway-input").val("");

});

database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());

    var carName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var freq = childSnapshot.val().frequency;
    var arrival = childSnapshot.val().nextArrival;
    var minAway = childSnapshot.val().minutesAway;

    console.log(carName);
    console.log(destination);
    console.log(freq);
    // console.log(arrival);
    // console.log(minAway);

    var newRow = $("<tr>").append(
        $("<td>").text(carName),
        $("<td>").text(destination),
        $("<td>").text(freq),
        // $("<td>").text(empMonths),
        // $("<td>").text(empRate),
        // $("<td>").text(empBilled)
      );


    $('#car-table > tbody').append(newRow);
    
});
