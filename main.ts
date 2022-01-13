let lights = 0
function squidLight () {
    for (let index = 0; index < 4; index++) {
        if (lights == 0) {
            lights = 1
        } else {
            lights = 0
        }
        pins.digitalWritePin(DigitalPin.P1, lights)
        pins.digitalWritePin(DigitalPin.P2, lights)
        pins.digitalWritePin(DigitalPin.P3, lights)
        basic.pause(1000)
    }
}
function blobfishOne (onoff: number) {
    if (onoff == 1) {
        servos.P0.run(-31)
    } else {
        servos.P0.run(0)
    }
}
function blobfishTwo (onoff: number) {
    if (onoff == 1) {
        servos.P0.run(63)
    } else {
        servos.P0.run(0)
    }
}
basic.forever(function () {
    if (input.lightLevel() > 100) {
        blobfishOne(1)
        blobfishTwo(1)
    } else {
        blobfishOne(0)
        blobfishTwo(0)
        squidLight()
    }
    basic.pause(5000)
})
