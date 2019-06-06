// ESM syntax is supported.
export {}
import xmlquery from 'xml-query'
import { config } from './config_file.js'
import { readXML } from './parseJRXML'

const jrxml = readXML ('./MainJrxml.data')
const xq = xmlquery (jrxml)
let queryString = xq.text ('queryString')
//console.log (queryString)
let newQueryString = queryString
    .split ('\n')
    .map ((line, index, arr) => {
        let replaced = line;
        for (let property in config) {
            if (line.includes(property)) {               
                replaced = replaced.replace (new RegExp(property, "g"), config[property])
            }
        }
        return replaced
    })
console.log (newQueryString)
//fs.writeFileSync ('./sample_query1.txt', data.join('\n'))
