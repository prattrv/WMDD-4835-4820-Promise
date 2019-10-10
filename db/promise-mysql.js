const query = (connecionPool, sqlQuery) => {
    return new Promise((resolve, reject) => {
        connecionPool.query(sqlQuery, (error, result) => {
            if(error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

exports.query = query