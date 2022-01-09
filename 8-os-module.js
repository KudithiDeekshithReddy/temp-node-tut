const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)
//return sysstem uptime
console.log(`system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMen:os.freemem(),

}
console.log(currentOS)