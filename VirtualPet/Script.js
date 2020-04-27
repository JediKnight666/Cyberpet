document.getElementById("feed").disabled = true;
document.getElementById("play").disabled = true;
document.getElementById("clean").disabled = true;
document.getElementById("sleep").disabled = true;

var hunger = 10;
var bored = 10;
var sleepy = 10;
var cleanliness = 10;
var maxVal = 10

var statsLow;
var updates;
var check;
var active = false;
var name = "dragon";

var asleep = false;

// start Cyberpet.
function tamaStart() {
    if (active == false) {
        name=prompt("Please name your pet!")
        document.getElementById("egg").src="images/dragon1.png";
        document.getElementById("statusText").innerHTML=`Your baby dragon has hatched! Welcome ${name}!`
        document.getElementById("feed").disabled = false;
        document.getElementById("play").disabled = false;
        document.getElementById("clean").disabled = false;
        document.getElementById("sleep").disabled = false;
        document.getElementById("screen").style.backgroundImage = "url('images/day.jpg')"
        active = true;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
        statsLow = setInterval(statDown, 20000) //Timer to lower stats every 30 seconds.
        updates = setInterval(statusUpdate, 10000) //Update changes every 15 seconds.
        check = setInterval(checkStats, 2000) //Check stats every 5 second.
    }
}
//Hunger down
function statDownHunger() {
    if (hunger > 0) {
        hunger = hunger - 1;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    }
}
//Happy down stat.
function statDownBored() {
    if (bored > 0) {
        bored = bored - 1;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    }
}
//Energy down stat.
function statDownSleepy() {
    if (sleepy > 0) {
        sleepy = sleepy - 1;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    }
}
//Clean down stat.
function statDownClean() {
    if (cleanliness > 0) {
        cleanliness = cleanliness - 1;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    }
}
//Function to call all stat down functions, for use in the timer.
function statDown() {
    statDownHunger();
    statDownBored();
    statDownSleepy();
    statDownClean();
}

//Button press to feed yor dragon but also lowers the clean stat.
function foodTime() {
    clearInterval(check)
    document.getElementById("statusText").innerHTML=`${name} is grateful for the food!`;
    document.getElementById("egg").src="images/seagullEat.png";
    setTimeout(function() {check = setInterval(checkStats, 2000);}, 5000);
    if (hunger >= (maxVal - 5) && cleanliness >= 2) {
        hunger = maxVal;
        cleanliness = cleanliness - 2;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    } else if (hunger >= (maxVal - 5) && cleanliness <= 2) {
        hunger = maxVal;
        cleanliness = 0;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    } else if (hunger <= (maxVal - 5) && cleanliness >= 2) {
        hunger = hunger + 5;
        cleanliness = cleanliness - 2;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    } else {
        hunger = hunger + 5;
        cleanliness = 0;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    }
}

//Button press to play with pet, which also lowers the hungry stat.
function playTime() {
    clearInterval(check);
    document.getElementById("statusText").innerHTML=`${name} loves to play!`
    document.getElementById("egg").src="images/seagullPlay.png";
    setTimeout(function() {check = setInterval(checkStats, 2000);}, 5000);
    if (bored >= (maxVal - 5) && hunger >= 2) {
        bored = maxVal;
        hunger = hunger - 3;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    } else if (bored >= (maxVal - 5) && hunger <= 2) {
        bored = maxVal;
        hunger = 0;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    } else if (bored <= (maxVal - 5) && hunger >= 2) {
        bored = bored + 5;
        hunger = hunger - 2;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    } else {
        bored = bored + 5;
        hunger = 0;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`;
    }
}

//Button press to clean pet.
function bathTime() {
    clearInterval(check);
    document.getElementById("statusText").innerHTML=`${name} loves water!`
    document.getElementById("Images").src="images/bath.jpeg";
    setTimeout(function() {check = setInterval(checkStats, 2000);}, 5000);
    if (cleanliness >= (maxVal - 5) && sleepy >= 2) {
        cleanliness = maxVal;
        sleepy = sleepy - 2;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`
    } else if (cleanliness >= (maxVal - 5) && sleepy <= 2) {
        cleanliness = maxVal;
        sleepy = 0;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`
    } else if (cleanliness <= (maxVal - 5) && sleepy >= 2) {
        cleanliness = cleanliness + 5;
        sleepy = sleepy - 2;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`
    } else {
        cleanliness = cleanliness + 5;
        sleepy = 0;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`
    }
}

//Button press to sleep.
var t;

function bedTime() {
    if (document.getElementById("feed").disabled == false) {
        clearInterval(updates);
        clearInterval(check);
        asleep = true;
        document.getElementById("feed").disabled = true;
        document.getElementById("play").disabled = true;
        document.getElementById("clean").disabled = true;
        document.getElementById("sleep").innerHTML = "Wake up";
        document.getElementById("screen").style.backgroundImage = "url('images/nighttime.jep')"
        document.getElementById("Images").src="images/dragonleep.png";
        resting = setInterval(sleeping, 2000)
        document.getElementById("statusText").innerHTML=`${name} is asleep..zzz`
    } else {
        clearInterval(resting);
        asleep = false;
        updates = setInterval(statusUpdate, 10000);
        check = setInterval(checkStats, 1000);
        document.getElementById("feed").disabled = false;
        document.getElementById("play").disabled = false;
        document.getElementById("clean").disabled = false;
        document.getElementById("screen").style.backgroundImage = "url('images/day.jpg')"
        document.getElementById("Images").src="images/dragonsleep.jep";
        document.getElementById("sleep").innerHTML = "Sleep";
        document.getElementById("statusText").innerHTML=`${name} wakes up!`
    }
}

function sleeping() {
    if (sleepy < maxVal) {
        sleepy = sleepy + 1;
        document.getElementById("statusVar").innerHTML = `Hunger: ${hunger}, Happy: ${bored}, Energy: ${sleepy}, Clean: ${cleanliness}`
    }
}

//Random status updates.
function statusUpdate() {
    update = Math.ceil(Math.random()*6);
    switch(update) {
        case 1:
            document.getElementById("statusText").innerHTML=`${name} is thinking about fish?!...`
            break;
        case 2:
            document.getElementById("statusText").innerHTML=`${name} is bored!!`
            break;
        case 3:
            document.getElementById("statusText").innerHTML=`${name} is thinking how much they love you!`
            break;
        case 4:
            document.getElementById("statusText").innerHTML=`It looks like ${name} would like to cuddle up with you!`
            break;
        case 5:
            document.getElementById("statusText").innerHTML=`Maybe ${name} would like to know what you are doing?`
            break;
        case 6:
            document.getElementById("statusText").innerHTML=`${name} likes playing games with you!`
            break;
    }
}

//Function on how to check the stats of yor dragon.
function checkStats() {
    if (asleep == true) {
        document.getElementById("images").src="images/dragonsleep.png";
    } else {
        if (hunger < 2 || bored < 2 || sleepy < 2 || cleanliness < 2) {
            document.getElementById("images").src="images/hungry.jpg";
            document.getElementById("statusText").innerHTML=`${name} is NOT very happy!`
        } else {
            document.getElementById("images").src="images/saddragon.png";
        }
    }
}


