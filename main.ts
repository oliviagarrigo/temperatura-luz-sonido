bluetooth.onBluetoothConnected(function () {
    if ("" == "") {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Sensor.tempC(AnalogPin.P1))
    basic.clearScreen()
    basic.pause(Sensor.tempC(AnalogPin.P1))
    if (3 > Sensor.tempC(AnalogPin.P1)) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.clearScreen()
        if (Sensor.tempC(AnalogPin.P1) > 7) {
            music.playTone(440, music.beat(BeatFraction.Half))
            basic.showNumber(Sensor.tempC(AnalogPin.P1))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Sensor.soundLevel(AnalogPin.P0))
    if (Sensor.soundLevel(AnalogPin.P0) > 85) {
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Sensor.lightLevel(AnalogPin.P2))
    if (Sensor.lightLevel(AnalogPin.P2) < 175) {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
        basic.clearScreen()
    }
})
