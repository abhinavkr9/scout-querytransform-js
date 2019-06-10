import fs from 'fs'
import xmlreader from 'xml-reader'

export function readXML(filename) {
    const data = fs.readFileSync (filename, 'utf8')
    const reader = xmlreader.create ()
    let data_obj = { 'file': data }
    data_obj.xml = xmlreader.parseSync (data)
    return data_obj
}

export function writeFile(filename, data) {
    fs.writeFileSync (filename, data)
}
