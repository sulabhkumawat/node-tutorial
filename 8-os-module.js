const os = require('os')

console.log(os.userInfo())

console.log(os.version())
const currentOS = {
  name:os.type(),
  relase:os.release(),
  totalmen : os.totalmem(),
  freemen:os.freemem(),


}

console.log(currentOS)