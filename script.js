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
            document.getElementById("alert").innerHTML = "Tempo da pausa! Vá pegar uma agua!"
            time = 5 * 60;
            
            break;
        case 5: // Long break
            document.getElementById("alert").innerHTML = "Pare um pouco! Vá pegar um lanche!"
            time = 15 * 60;
            break;
        case 6: // Restart Looping
            timesExecuted = 0;
            break;
        default: // Default -> 0,2,4
            document.getElementById("alert").innerHTML = "Hora De Focar!"
            time = 25 * 60;
            break;
    }
    document.getElementById("alert").classList.remove("invisible")
}

function ChangeLayout(startOrStop){
    if (startOrStop == 'Start'){
        document.getElementById("buttonStart").disabled = true;
        document.getElementById("buttonStop").disabled = false;

        document.getElementById("buttonStart").classList.add("invisible")
        document.getElementById("title").classList.add("invisible");
        document.getElementById("idTimer").classList.add("focused")
    }else{
        document.getElementById("buttonStart").disabled = false;
        document.getElementById("buttonStop").disabled = true;
        document.getElementById("idTimer").innerHTML = '25:00'

        document.getElementById("buttonStart").classList.remove("invisible")
        document.getElementById("title").classList.remove("invisible");
        document.getElementById("idTimer").classList.remove("focused")
    }
}

function StartCountdown(){
    ChangeLayout('Start');
    SetCountdown();
    Interval = setInterval(Countdown, 1000);


}

function StopCountdown(){
    ChangeLayout('Stop');
    clearInterval(Interval)
    time = 25 * 60;
    timesExecuted = 0;
    document.getElementById("alert").classList.add("invisible")
}

function Countdown(){
    //GET MINUTES AND SECONDS
    let minutes = Math.floor(time/60);
    let seconds = time % 60
    //VERIFY IF IS LESS THAN 10 AND ADD A 0 TO TIMER BE BEAUTYFULL
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('idTimer').innerHTML = minutes + ':' + seconds;

    if (time > 0) {
        time--;
    } else {
        timesExecuted++;
        SetCountdown();
    }
}


