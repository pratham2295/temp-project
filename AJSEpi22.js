var scout = {
  "firstname":"Eren",
  "lastname":"Yeager",
  "designation":"Newbie Scout"
}

console.log(scout.firstname + " " +scout.lastname + " is " +scout.designation + ".");

var scouts = [

    {"firstname":"Eren","lastname":"Yeager","designation":"Scout"},
    {"firstname":"Mikasa","lastname":"Ackermen","designation":"Scout"},
    {"firstname":"Levi","lastname":"Ackermen","designation":"Scout"}
]

scouts.forEach(function(scout){

    console.log(scout.firstname + " " +"is" +" " +scout.designation);
});
