const { RESTDataSource } = require('apollo-datasource-rest')

class UserAPI extends RESTDataSource {
    constructor (){
        super()
        this.caseURL = 'http://localhost:3000'
    }

    async getUsers() {
        return this.get('/users')
    }
}

module.exports = UserAPI