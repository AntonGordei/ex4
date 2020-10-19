const list = require('./test')

const getGraph = (list, obj = { identity: null }) => {
    return list.filter(el => el.parentIdentity === obj.identity).map(newEl => ({
        ...newEl,
        children: getGraph(list, newEl)
        })
    )
}

console.log(JSON.stringify(getGraph(list), null, 2))
