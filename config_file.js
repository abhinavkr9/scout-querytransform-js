import fs from 'fs'

const data = fs.readFileSync ('./config.csv', 'utf8')
let config = {}
data.split (/\r\n|\r|\n/)
    .map (line => line.split (/\s*,\s*/))
    .forEach ((value) => {
        config[value[0]] = value[1]
    })

config['mv_items'] = [ 'dim_items', 
    'id', 'item_id', 
    'name', 'item_name' ]

config['mv_routes'] = [ 'dim_routes', 
'id', 'route_id', 
'name', 'route_name' ]

config['mv_stops'] = [ 'dim_stops', 
'stop_id', 'stop_id', 
'name', 'stop_name' ]

config['mv_production_item_lookup'] = [ 'mv_production_item', 
'well_item_id', 'well_id', 
'production_item_id', 'production_id' ]

config['mv_stop_headers'] = [ 'dim_stop_headers', 
'id', 'header_id', 
'name', 'header_name' ]



export default config
