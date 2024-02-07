input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
})
let Happy_Pet = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
let Sad_Pet = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
let Dead_Pet = images.createImage(`
    . # # # .
    # . # . #
    # # # # #
    . # # # .
    . # # # .
    `)
let Scared_Pet = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
