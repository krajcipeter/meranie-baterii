basic.forever(function () {
    serial.writeValue("Analogove citanie", 3.3 / 1023 * pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
})
