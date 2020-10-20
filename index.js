const list = require('./test')

const getGraph = (list, obj = { identity: null }) => {
    return list
            .filter(el => el.parentIdentity === obj.identity)
            .map(newEl => {

                // remove item
                const index = list.indexOf(newEl)
                if (index > -1) {
                    list.splice(index, 1)
                }
                // ===========================

                return {
                        ...newEl,
                        children: getGraph(list, newEl)
                       }
            }
    )
}

console.log(JSON.stringify(getGraph(list), null, 2))
