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

    //% blockId=say_probably_aiko block="あいこでしょ"
    export function sayProbablyAiko(): void {
        tonosamarobo_talk.say("a'ikodesho.")
    }
    //% blockId=say_green block="あお"
    export function sayGreen(): void {
        tonosamarobo_talk.say("a'o")
    }
    //% blockId=say_red block="あか"
    export function sayRed(): void {
        tonosamarobo_talk.say("a'ka")
    }
    //% blockId=say_per block="あたり"
    export function sayPer(): void {
        tonosamarobo_talk.say("atari")
    }
    //% blockId=say_you_win block="あなたの勝ち"
    export function sayYouWin(): void {
        tonosamarobo_talk.say("ana'tano/ka_chi'.")
    }
    //% blockId=say_your_losing block="あなたの負け"
    export function sayYourLosing(): void {
        tonosamarobo_talk.say("ana'tano/make.")
    }
    //% blockId=say_thank_you block="ありがとう"
    export function sayThankYou(): void {
        tonosamarobo_talk.say("ari'gato-")
    }
    //% blockId=say_thank_you_very_much block="ありがとうございました"
    export function sayThankYouVeryMuch(): void {
        tonosamarobo_talk.say("ari'gato-+gozaima'_shita.")
    }
    //% blockId=say_thank_you block="ありがとうございます"
    export function sayThankYou(): void {
        tonosamarobo_talk.say("ari'gato-+gozaima'_su.")
    }
    //% blockId=say_i_think_that_there_is_a_good_thing block="いいことあると思いますよ"
    export function sayIThinkThatThereIsAGoodThing(): void {
        tonosamarobo_talk.say("i'ikoto/a'ruto/omoima'suyo.")
    }
    //% blockId=say_welcome block="いらっしゃいませ"
    export function sayWelcome(): void {
        tonosamarobo_talk.say("irasshaima'se.")
    }
    //% blockId=say_i_will_fortune-telling block="うらないをしますね"
    export function sayIWillFortune-Telling(): void {
        tonosamarobo_talk.say("uranaio/shima'sune.")
    }
    //% blockId=say_thats_delicious block="おいしいね"
    export function sayThatsDelicious(): void {
        tonosamarobo_talk.say("oishiine.")
    }
    //% blockId=say_it_is_talkative_robot block="おしゃべりロボットです"
    export function sayItIsTalkativeRobot(): void {
        tonosamarobo_talk.say("oshaberiro'bottode_su.")
    }
    //% blockId=say_please block="おねがいします"
    export function sayPlease(): void {
        tonosamarobo_talk.say("oshaberiro'bottode_su.")
    }
    //% blockId=say_good_morning block="おはよう"
    export function sayGoodMorning(): void {
        tonosamarobo_talk.say("ohayo-")
    }
    //% blockId=say_i_will_a_fortune block="おみくじをしますね"
    export function sayIWillAFortune(): void {
        tonosamarobo_talk.say("omikujio/shima'sune.")
    }
    //% blockId=say_congratulations block="おめでとうございます"
    export function sayCongratulations(): void {
        tonosamarobo_talk.say("omedeto-+gozaima'_su.")
    }
    //% blockId=say_good_night block="おやすみ"
    export function sayGoodNight(): void {
        tonosamarobo_talk.say("oyasumi")
    }
    //% blockId=say_yellow block="きいろ"
    export function sayYellow(): void {
        tonosamarobo_talk.say("kiiro")
    }
    //% blockId=say_kichi block="きち"
    export function sayKichi(): void {
        tonosamarobo_talk.say("きち")
    }
    //% blockId=say_today block="きょう"
    export function sayToday(): void {
        tonosamarobo_talk.say("kyo'-")
    }
    //% blockId=say_goo block="グー"
    export function sayGoo(): void {
        tonosamarobo_talk.say("gu'-")
    }
    //% blockId=say_black block="くろ"
    export function sayBlack(): void {
        tonosamarobo_talk.say("ku'ro")
    }
    //% blockId=say_here_please block="こちらをどうぞ"
    export function sayHerePlease(): void {
        tonosamarobo_talk.say("kochirao/do'-zo.")
    }
    //% blockId=say_hello block="こんにちは"
    export function sayHello(): void {
        tonosamarobo_talk.say("konnnichiwa'")
    }
    //% blockId=say_good_evening block="こんばんは"
    export function sayGoodEvening(): void {
        tonosamarobo_talk.say("konnbannwa'")
    }
    //% blockId=say_goodbye block="さようなら"
    export function sayGoodbye(): void {
        tonosamarobo_talk.say("sayo-na'ra")
    }
    //% blockId=say_regret block="ざんねん"
    export function sayRegret(): void {
        tonosamarobo_talk.say("zannnenn")
    }
    //% blockId=say_firm_white block="しっかりしろよ"
    export function sayFirmWhite(): void {
        tonosamarobo_talk.say("shikka'ri/shiroyo.")
    }
    //% blockId=say_faux_pas block="しっぱい"
    export function sayFauxPas(): void {
        tonosamarobo_talk.say("shippai")
    }
    //% blockId=say_rock-paper-scissors block="じゃんけん"
    export function sayRock-Paper-Scissors(): void {
        tonosamarobo_talk.say("jannke'nn")
    }
    //% blockId=say_jankenpon block="じゃんけんぽん"
    export function sayJankenpon(): void {
        tonosamarobo_talk.say("jannke'nnponn")
    }
    //% blockId=say_lets_rock,_paper,_scissors block="じゃんけんをしましょう"
    export function sayLetsRock,Paper,Scissors(): void {
        tonosamarobo_talk.say("jannke'nno/shimasho'-.")
    }
    //% blockId=say_changji block="しょうきち"
    export function sayChangji(): void {
        tonosamarobo_talk.say("shou_kichi")
    }
    //% blockId=say_white block="しろ"
    export function sayWhite(): void {
        tonosamarobo_talk.say("shi'ro")
    }
    //% blockId=say_amazing block="すごいね"
    export function sayAmazing(): void {
        tonosamarobo_talk.say("sugo'ine.")
    }
    //% blockId=say_seiko block="せいこう"
    export function saySeiko(): void {
        tonosamarobo_talk.say("se-ko-")
    }
    //% blockId=say_daikichi block="だいきち"
    export function sayDaikichi(): void {
        tonosamarobo_talk.say("dai_kichi")
    }
    //% blockId=say_daikyo block="だいきょう"
    export function sayDaikyo(): void {
        tonosamarobo_talk.say("daikyo-")
    }
    //% blockId=say_chu_kichi block="ちゅうきち"
    export function sayChuKichi(): void {
        tonosamarobo_talk.say("chuu_kichi")
    }
    //% blockId=say_scissors block="チョキ"
    export function sayScissors(): void {
        tonosamarobo_talk.say("cho'ki")
    }
    //% blockId=say_nice_to_meet_you block="どうぞ、よろしく"
    export function sayNiceToMeetYou(): void {
        tonosamarobo_talk.say("do'-zo yoroshi_ku.")
    }
    //% blockId=say_how_was_it? block="どうでしたか？"
    export function sayHowWasIt?(): void {
        tonosamarobo_talk.say("do'-de_shitaka?")
    }
    //% blockId=say_which_one? block="どっちでしょうか？"
    export function sayWhichOne?(): void {
        tonosamarobo_talk.say("do'cchidesho-ka?")
    }
    //% blockId=say_par block="パー"
    export function sayPar(): void {
        tonosamarobo_talk.say("pa'-")
    }
    //% blockId=say_miss block="はずれ"
    export function sayMiss(): void {
        tonosamarobo_talk.say("hazure")
    }
    //% blockId=say_draw block="ひきわけ"
    export function sayDraw(): void {
        tonosamarobo_talk.say("_hikiwa'ke.")
    }
    //% blockId=say_left block="ひだり"
    export function sayLeft(): void {
        tonosamarobo_talk.say("hidari")
    }
    //% blockId=say_i_bad block="まずいね"
    export function sayIBad(): void {
        tonosamarobo_talk.say("mazu'ine.")
    }
    //% blockId=say_please_come_also block="また来てくださいね"
    export function sayPleaseComeAlso(): void {
        tonosamarobo_talk.say("mata/ki'te+kudasa'ine.")
    }
    //% blockId=say_right block="みぎ"
    export function sayRight(): void {
        tonosamarobo_talk.say("mi'gi")
    }
    //% blockId=say_right_and_left block="みぎとひだり"
    export function sayRightAndLeft(): void {
        tonosamarobo_talk.say("migitohi'dari")
    }
    //% blockId=say_purple_color block="むらさき色"
    export function sayPurpleColor(): void {
        tonosamarobo_talk.say("murasaki'iro")
    }
    //% blockId=say_hooray! block="やった！"
    export function sayHooray!(): void {
        tonosamarobo_talk.say("yatta ")
    }
    //% blockId=say_nice_to_meet_you block="よろしく"
    export function sayNiceToMeetYou(): void {
        tonosamarobo_talk.say("yoro_shiku")
    }
    //% blockId=say_lucky_color block="ラッキーカラーは"
    export function sayLuckyColor(): void {
        tonosamarobo_talk.say("rakki-ka'ra-wa.")
    }
    //% blockId=say_please_press_the_right_button block="右のボタンを押してください"
    export function sayPleasePressTheRightButton(): void {
        tonosamarobo_talk.say("migino/botanno/o_shitekudasa'i.")
    }
    //% blockId=say_it_is_disgusting block="嫌です"
    export function sayItIsDisgusting(): void {
        tonosamarobo_talk.say("iya'de_su.")
    }
    //% blockId=say_please_press_the_favorite_button block="好きなボタンを押してください"
    export function sayPleasePressTheFavoriteButton(): void {
        tonosamarobo_talk.say("_suki'na/botanno/o_shitekudasa'i.")
    }
    //% blockId=say_it_is_the_fortune_of_today block="今日の運勢です"
    export function sayItIsTheFortuneOfToday(): void {
        tonosamarobo_talk.say("kyo'-no/u'nnse-de_su.")
    }
    //% blockId=say_please_press_the_left_button block="左のボタンを押してください"
    export function sayPleasePressTheLeftButton(): void {
        tonosamarobo_talk.say("hidarino/botanno/o_shitekudasa'i.")
    }
}