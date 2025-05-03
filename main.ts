controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    msLeft = 5000
    textSprite.setText(text.stringify(msLeft))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    while (0 < msLeft) {
        pause(1000)
        msLeft = msLeft - 1000
        textSprite.setText(text.stringify(msLeft))
    }
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
let msLeft = 0
let textSprite: TextSprite = null
textSprite = textsprite.create("")
msLeft = 5000
textSprite.setText(text.stringify(msLeft))
scene.setBackgroundColor(15)
