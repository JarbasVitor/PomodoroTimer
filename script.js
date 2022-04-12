//Initial Time
let time = 25 * 60;
//Variable That will see if it's time to a Break
let timesExecuted = 0;

function SetCountdown(){
    //THAT FUNCTION WILL BE RESPONSIBLE TO SET COUNTDOWN TO BREAK OR TO FOCUS
    
    //TIMESEXECUTED -> ACTION -> TIMESEXECUTED
    // 0 -> 25 MIN          -> 1
    // 1 -> 5 MIN (BREAK)   -> 2
    // 2 -> 25 MIN          -> 3
    // 3 -> 5 MIN (BREAK)   -> 4
    // 4 -> 25 MIN          -> 5
    // 5 -> 15 MIN (BREAK)  -> 6
    // 6 -> RESTART LOOPING -> 0

    switch(timesExecuted){
        case 1:
        case 3: // Normal break
            document.getElementById("Alert").innerHTML = "Time To A Break! Go Get A Water!"
            time = 5 * 60;
            break;
        case 5: // Long break
            document.getElementById("Alert").innerHTML = "Time To A Long Break! Go Get A Snack!"
            time = 15 * 60;
            break;
        case 6: // Restart Looping
            timesExecuted = 0;
            break;
        default: // Default -> 0,2,4
            document.getElementById("Alert").innerHTML = "Time To Focus! Let's Go!"
            time = 25 * 60;
            break;
    }

}

function EnableButtons(startOrStop){
    if (startOrStop == 'Start'){
        document.getElementById("ButtonStart").disabled = true;
        document.getElementById("ButtonStop").disabled = false;
    }else{
        document.getElementById("ButtonStart").disabled = false;
        document.getElementById("ButtonStop").disabled = true;
        document.getElementById("Timer").innerHTML = '25:00'
    }
}

function StartCountdown(){
    EnableButtons('Start');
    SetCountdown();
    Interval = setInterval(Countdown, 1000);
}

function StopCountdown(){
    EnableButtons('Stop');
    clearInterval(Interval)
    time = 25 * 60;
}

function Countdown(){
    //GET MINUTES AND SECONDS
    let minutes = Math.floor(time/60);
    let seconds = time % 60
    //VERIFY IF IS LESS THAN 10 AND ADD A 0 TO TIMER BE BEAUTYFULL
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('Timer').innerHTML = minutes + ':' + seconds;

    if (time > 0) {
        time--;
    } else {
        TimesExecuted++;
        setCoutdown();
    }
}
