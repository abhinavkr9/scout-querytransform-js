// ESM syntax is supported.
export {}
import fs from 'fs'
import { prepareJRXML } from './implementation'

/*const files = fs.readFileSync ('./files', 'utf8')
    .split ('\n')
files.forEach (path_fname => console.log (path_fname.split('/')[4]))*/
//console.log (files.length)
const jrxml = fs.readFileSync ('./MainJrxml_a.data', 'utf8')
fs.writeFileSync ('./MainJrxml1_a.data', prepareJRXML (jrxml, 'bretagne'))
