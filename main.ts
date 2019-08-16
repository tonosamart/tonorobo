//% weight=70 icon="\uf075" color=#ee6e73 block="とのさまロボ"
namespace tonosamarobo_main {
    //% blockId=init block="ロボきどう %v"
    export function init(): void {
        pins.servoWritePin(AnalogPin.P12, 130)
        pins.servoWritePin(AnalogPin.P16, 40)
        serial.redirect(
            SerialPin.P2,
            SerialPin.P0,
            BaudRate.BaudRate9600
        )
        basic.pause(1000)
        tonosamarobo_talk.say("tonosama'robo/kido-shima'_shita.")
        basic.pause(2000)
    }

    //% blockId=left_arm_up block="ひだりてあげる %v"
    export function leftArmUp(): void {
        pins.servoWritePin(AnalogPin.P12, 40)
        basic.pause(500)
    }
    //% blockId=left_arm_down block="ひだりてさげる %v"
    export function leftArmDown(): void {
        pins.servoWritePin(AnalogPin.P12, 130)
        basic.pause(500)
    }

    //% blockId=right_arm_up block="みぎてあげる %v"
    export function rightArmUp(): void {
        pins.servoWritePin(AnalogPin.P16, 130)
        basic.pause(500)
    }
    //% blockId=right_arm_down block="みぎてあげる %v"
    export function rightArmDown(): void {
        pins.servoWritePin(AnalogPin.P16, 40)
        basic.pause(500)
    }
}

//% weight=70 icon="\uf075" color=#ee6e73 block="とのさまロボ：おしゃべり"
namespace tonosamarobo_talk {
    //% blockId=say block="ロボはなす %v"
    export function say(text: string): void {
        basic.pause(500)
        serial.writeLine(text)
        basic.pause(200 * text.length)
    }

    //% blockId=say_nice_to_meet_you_douzo block="どうぞ、よろしく"
    export function sayNiceToMeetYouDouzo(): void {
        say("どうぞ、よろしく")
    }
    //% blockId=say_which_one block="どっちでしょうか？"
    export function sayWhichOne(): void {
        say("どっちでしょうか？")
    }
    //% blockId=say_miss block="はずれ"
    export function sayMiss(): void {
        say("はずれ")
    }
    //% blockId=say_please_come_also block="また来てくださいね"
    export function sayPleaseComeAlso(): void {
        say("また来てくださいね")
    }
    //% blockId=say_nice_to_meet_you block="よろしく"
    export function sayNiceToMeetYou(): void {
        say("よろしく")
    }
    //% blockId=say_right block="右"
    export function sayRight(): void {
        say("右")
    }
    //% blockId=say_right_and_left block="右と左"
    export function sayRightAndLeft(): void {
        say("右と左")
    }
    //% blockId=say_please_press_the_right_button block="右のボタンを押してください"
    export function sayPleasePressTheRightButton(): void {
        say("右のボタンを押してください")
    }
    //% blockId=say_it_is_disgusting block="嫌です"
    export function sayItIsDisgusting(): void {
        say("嫌です")
    }
    //% blockId=say_please_press_the_favorite_button block="好きなボタンを押してください"
    export function sayPleasePressTheFavoriteButton(): void {
        say("好きなボタンを押してください")
    }
    //% blockId=say_left block="左"
    export function sayLeft(): void {
        say("左")
    }
    //% blockId=say_please_press_the_left_button block="左のボタンを押してください"
    export function sayPleasePressTheLeftButton(): void {
        say("左のボタンを押してください")
    }
    //% blockId=say_error block="失敗"
    export function sayError(): void {
        say("失敗")
    }
    //% blockId=say_success block="成功"
    export function saySuccess(): void {
        say("成功")
    }
    //% blockId=say_i_will_the_fortune_telling block="占いをしますね"
    export function sayIWillTheFortuneTelling(): void {
        say("占いをしますね")
    }
}