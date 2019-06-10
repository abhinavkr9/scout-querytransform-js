// ESM syntax is supported.
export {}
import xmlquery from 'xml-query'
import config from './config_file.js'
import { readXML, writeFile } from './parseJRXML'

const jrxml = readXML ('./MainJrxml.data')
const xq = xmlquery (jrxml.xml)
let queryString = xq.find ('queryString').text()
let newQueryString = queryString
    .split ('\n')
    .map ((line) => {
        let replaced = line;
        for (let property in config) {
            if (line.includes(property)) {               
                replaced = replaced.replace (new RegExp (property, "g"), config[property])
            }
        }
        return replaced
    })
let before = /^[\s\S]*?<queryString language="SQL">/
let afer = /<\/queryString>[\s\S]*$/
let buffer = jrxml.file.match(before)[0] + '\n<![CDATA['
buffer += newQueryString.join('\n') + ']]>\n'
buffer += jrxml.file.match(afer)[0]
writeFile ('./MainJrxml1.data', buffer)


//console.log (JSON.stringify (config, null, 2))
//fs.writeFileSync ('./sample_query1.txt', data.join('\n'))
