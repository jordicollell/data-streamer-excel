basic.forever(function () {
    dataStreamer.writeNumberArray([input.lightLevel()])
    led.plot(2, 2)
    basic.pause(200)
    led.unplot(2, 2)
    basic.pause(200)
    dataStreamer.writeLine()
})
