const cryptModel = [
    {
        recived : "a",
        forward: "d"
    },
    {
        recived : "b",
        forward: "e"
    },
    {
        recived : "c",
        forward: "f"
    },{
        recived : "d",
        forward: "g"
    },{
        recived : "e",
        forward: "h"
    },{
        recived : "f",
        forward: "i"
    },{
        recived : "g",
        forward: "j"
    },{
        recived : "h",
        forward: "k"
    },{
        recived : "i",
        forward: "l"
    },{
        recived : "j",
        forward: "m"
    },{
        recived : "k",
        forward: "n"
    },
    {
        recived : "l",
        forward: "o"
    },{
        recived : "m",
        forward: "p"
    },{
        recived : "n",
        forward: "q"
    },{
        recived : "o",
        forward: "r"
    },{
        recived : "p",
        forward: "s"
    },{
        recived : "q",
        forward: "t"
    },{
        recived : "r",
        forward: "u"
    },{
        recived : "s",
        forward: "v"
    },{
        recived : "t",
        forward: "w"
    },{
        recived : "u",
        forward: "x"
    },{
        recived : "v",
        forward: "y"
    },{
        recived : "w",
        forward: "z"
    },{
        recived : "x",
        forward: "a"
    },{
        recived : "y",
        forward: "b"
    },{
        recived : "z",
        forward: "c"
    },{
        recived : " ",
        forward: "/"
    },{
        recived : "0",
        forward: "5"
    },{
        recived : "1",
        forward: "7"
    },{
        recived : "2",
        forward: "1"
    },{
        recived : "3",
        forward: "0"
    },{
        recived : "4",
        forward: "8"
    },{
        recived : "5",
        forward: "9"
    },{
        recived : "6",
        forward: "2"
    },{
        recived : "7",
        forward: "4"
    },{
        recived : "8",
        forward: "3"
    },{
        recived : "9",
        forward: "6"
    },
]

const encryptText = (text) => {
    arrayText = text.split("")
    res = arrayText.map(el => {
        value = cryptModel.find(v => el === v.recived)
        if(value){
            return value.forward
        }
    })
    return res.join().replaceAll(',','')
}


const unCryptText = (text) => {
    arrayText = text.split("")
    res = arrayText.map(el => {
        value = cryptModel.find(v => el === v.forward)
        if(value){
            return value.recived
        }
    })
    return res.join().replaceAll(',','')
}

console.log(unCryptText("krod/pxqgr"))