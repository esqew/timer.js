var elapsedTime = 0, timer;

self.onmessage = (e) => {
    switch (e.data.action) {
        case "start":
            timerStart(e.data.tickLength !== null ? e.data.tickLength : 1000);
            break;
    }
}

const timerStart = (tickLength = 1000) => timer = setInterval(tick, tickLength, tickLength)

const tick = (amount) => {
    elapsedTime += amount;
    postMessage({ 
        currentTime: elapsedTime
    });
}