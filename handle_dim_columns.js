import { query_transform } from './query_transform'
import config from './config_file.js'

export function handle_dim_columns (query) {
    let config1 = {}
    let tables = [ 'mv_items', 'mv_stops', 'mv_routes', 'mv_stop_headers', 'mv_production_item_lookup' ]
    tables.forEach (table => {       
        let re = new RegExp (table + '\\s(\\w*)', 'gi')
        let arr = query.match (re)
        if (arr) {
            let alias = new Set()          
            arr.forEach (x => alias.add (x.split (' ')[1]))
            alias.forEach (a => {             
                for (let i = 1; i < config[table].length;) {
                    config1[a + '.' + config[table][i]] = a + '.' + config[table][++i]
                    ++i
                }
            })
        }
    })

    return (query_transform (query, config1)).join ('\n')
}
/*
var config = {}
config['mv_items'] = [ 'dim_items', 
    'id', 'item_id', 
    'name', 'item_name' ]

config['mv_routes'] = [ 'dim_routes', 
'id', 'route_id', 
'name', 'route_name' ]

var re = new RegExp ('select[\\s\\S]+?mv_items\\s(\\w*)', 'gi')
var newstr = str.replace (re, (match, p1, offset, string) => {
	var replaced = match
	//console.log (match, p1)
    for (let i = 1; i < config['mv_items'].length;) {
        replaced = replaced.replace (p1 + '.' + config['mv_items'][i], p1 + '.' + config['mv_items'][++i])
			//console.log (replaced)
        ++i;
    }
	return replaced
})
console.log (newstr)*/