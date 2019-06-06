import fs from 'fs'
import xmlreader from 'xml-reader'

export function readXML(filename) {
    const data = fs.readFileSync (filename, 'utf8')
    const reader = xmlreader.create ()
    return xmlreader.parseSync (data)
}
