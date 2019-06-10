import { readXML, writeFile } from './parseJRXML'

import fs from 'fs'

const jrxml = readXML ('./MainJrxml.data')
const re = new RegExp ('<queryString language="SQL">', 'g')
const re1 = new RegExp ('</queryString>', 'g')
let buf = ''
var i = 0
//console.log (jrxml.file.match (re).length)
while (re.test (jrxml.file)) {
    for (; i < re.lastIndex; i++)
        buf += jrxml.file[i]
    re1.test (jrxml.file)
    let qs = ''
    for (; i < re1.lastIndex; i++) {
        qs += jrxml.file[i]
    }
    console.log ('-------------------------------------')
    console.log (qs)
    console.log ('-------------------------------------')
    buf += qs
}
for (; i < jrxml.file.length; i++)
buf += jrxml.file[i]

fs.writeFileSync ('foo.xml', buf)
//re.test (jrxml.file)
//console.log ()