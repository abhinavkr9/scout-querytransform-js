import { query_transform } from './query_transform'
import { handle_dim_columns } from './handle_dim_columns'
import config from './config_file.js'

export function prepareJRXML (jrxml, schema_name) {
    const re = new RegExp ('<queryString language="SQL">', 'g')
    const re1 = new RegExp ('</queryString>', 'g')
    let buf = ''
    let config1 = {}
    var i = 0
    while (re.test (jrxml)) {
        for (; i < re.lastIndex; i++)
            buf += jrxml[i]
        re1.test (jrxml)
        let qs = ''
        let qs1 = ''
        for (; i < re1.lastIndex; i++) {
            qs += jrxml[i]
        }
        qs1 = handle_dim_columns (qs)
        if (qs1)
            qs = qs1
        for (let prop in config) {
            if (typeof config[prop] === 'string') {
                let x = config[prop].match (/stg_(\w+)/)
                if (x && x.length === 2)
                    config1[prop] = schema_name + '.' + config[prop] + ' ' + x[1]
                else config1[prop] = config[prop]
            }
        }
        qs1 = (query_transform (qs, config1)).join ('\n')
        buf += (query_transform (qs1, { 'core.': `${schema_name}.` })).join ('\n')
    }
    for (; i < jrxml.length; i++)
        buf += jrxml[i]
    return buf
}
