$(function() {
    changer();
});

function changer() {
    var words = [
        "AFFORDABLE HOUSING",
        "BUSES THAT SHOW UP ON TIME",
        "MORE PARKS",
        "LOWER UTILITY BILLS",
        "A PARK IN PROVIDENCE",
        "ZERO CAR ACCIDENTS",
        "LIVABLE WAGES",
        "THE END OF POLICE BRUTALITY",
        "A BETTER TALLAHASSEE",
        "REALISTIC SOLUTIONS TO CURB GUN VIOLENCE",
        "MORE BIKE LANES",
        "CLEAN ENERGY"];
    var idx = Math.floor(words.length * Math.random());
    $('#change').text(words[idx]);
    var time = 1500;
    setTimeout(changer,time);
}