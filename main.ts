//% weight=70 icon="\uf075" color=#ee6e73 block="とのさまロボ"
namespace tonosamarobo {
    //% blockId=init block="ロボきどう %v"
    export function init(): void {
        pins.servoWritePin(AnalogPin.P12, 140)
        pins.servoWritePin(AnalogPin.P16, 30)
        serial.redirect(
            SerialPin.P2,
            SerialPin.P0,
            BaudRate.BaudRate9600
        )
        basic.pause(1000)
        music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        tonosamarobo.say("tonosama'robo/kido-shima'_shita.")
    }

    //% blockId=say block="ロボはなす %v"
    export function say(text: string): void {
        serial.writeLine(text);
        basic.pause(500 * text.length + 100);
    }

    //% blockId=left_arm block="ロボひだりて %v"
    export function leftArm(): void {
        pins.servoWritePin(AnalogPin.P12, 30)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P12, 140)
        basic.pause(500)
    }

    //% blockId=right_arm block="ロボみぎて %v"
    export function rightArm(): void {
        pins.servoWritePin(AnalogPin.P16, 140)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P16, 30)
        basic.pause(500)
    }

}
