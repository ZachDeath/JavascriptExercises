function calculateTime() {
    let time = new Date();
    let x = time.getHours();
    let y = time.getMinutes();
    let z = time.getSeconds();
    console.log(`${x}` + ":" + `${y}`+ ":" + `${z}`)
}

setInterval(calculateTime, 1000);