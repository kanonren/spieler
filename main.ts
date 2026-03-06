input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (idgesetzt == false) {
        meineid = 1
        idgesetzt = true
        basic.showNumber(1)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (idgesetzt == false) {
        meineid = 3
        idgesetzt = true
        basic.showNumber(3)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (idgesetzt == false) {
        meineid = 2
        idgesetzt = true
        basic.showNumber(2)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let idgesetzt = false
let meineid = 0
radio.setGroup(77)
meineid = 0
idgesetzt = false
let aufgabe = 0
let habegesendet = false
basic.showString("ID?")
basic.forever(function () {
	
})
