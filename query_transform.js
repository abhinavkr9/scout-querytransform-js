export function query_transform (query, config) {
    let ret_arr = query
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
    return ret_arr
}