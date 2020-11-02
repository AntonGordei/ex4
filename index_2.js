const list = require('./test')


const getGraph = (list) => {

    const graph = []
    const map = {}

    list.forEach((el) => {
        const { identity, parentIdentity } = el
        if (!map[identity]) {
            map[identity] = { children: [] }
        }
        map[identity] = { ...el, children: map[identity].children }
        if (!parentIdentity) {
            graph.push(map[identity])
        } else {
            if (!map[parentIdentity]) {
                map[parentIdentity] = { children: [] }
            }
            map[parentIdentity].children.push(map[identity])
        }
    })

    return graph
}

console.log('graph = ', JSON.stringify(getGraph(list), null, 2))
