
function getWeatherData() {
    // LA 2020 average monthly temps
    let temps = [60.9, 62.6, 61.3, 66.6, 70.5, 71.3, 72.2, 76.7, 76.2, 73.0, 62.8, 60.0];
    let bigTemps = [];
    let x = 0;
    let xoff = .1;
    for (let i = 0; i < temps.length; i++) {

        for (let j = 0; j < 30; j++) {
            let weight = 0;
            if (j < 15) {
                weight = map(j, 0, 15, 0, 1);
            }
            else {
                weight = map(j, 15, 30, 1, 0);
            }
            let n = noise(x += xoff, 0);
            let t = map(n, 0, 1, -15, 15);
            bigTemps.push(temps[i] + t * weight);
        }
    }
    return bigTemps;
}

function getRandoNoise() {
    let temps = [];
    let x = 0;
    let xoff = .01;
    let y = 0;
    for (let i = 0; i < 500; i++) {
        let n = noise(x += xoff, y);
        let t = map(n, 0, 1, 45, 110);
        temps.push(round(t, 1));
    }
    return temps;
}

function getText(arr) {
    let t = "";
    for (let i = 0; i < arr.length - 1; i++) {
        t += (arr[i] + ", ");
    }
    t += arr[arr.length - 1];
    return t;
}