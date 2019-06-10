import fs from 'fs'

const data = fs.readFileSync ('./config.csv', 'utf8')
let config = {}
data.split (/\r\n|\r|\n/)
    .map (line => line.split (/\s*,\s*/))
    .forEach ((value) => {
        config[value[0]] = value[1]
    })

export default config
