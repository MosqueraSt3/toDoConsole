require('colors')

const showMenu = () => {

    return new Promise ( res => {
        console.clear()
        console.log('====================='.green)
        console.log('Choose an Option')
        console.log('=====================\n'.green)

        console.log(`${ '1.'.green } Create Task`)
        console.log(`${ '2.'.green } List Tasks`)
        console.log(`${ '3.'.green } List Completes Tasks`)
        console.log(`${ '4.'.green } List Pending Tasks`)
        console.log(`${ '5.'.green } To Complete Tasks`)
        console.log(`${ '6.'.green } Delete Task`)
        console.log(`${ '0.'.green } Exit\n`)

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Choose an Option: ', opt => {
            readLine.close()
            res(opt)
        })
    })
    
}

const pause = () => {
    return new Promise( res => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPress ${'ENTER'.green} to continue\n`, opt => {
            readLine.close()
            res()
        })
    })
}

module.exports = {
    showMenu,
    pause
}