

module.exports = {
    get: {
        tags: ['Game CRUD operations'],
        description: "Get list of games",
        operationId: 'getTodos',
        parameters: [],
        responses: {
            '200': {
                description: "Games were obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/game'
                        },
                        example: {
                            "_id": "61807423234d51574c7bd186",
                            "gameName": "My Game",
                            "__v": 0
                        },
                    },
                },
            },
            '500': {
                description: 'Server error'
            },
            '400': {
                description: 'Access Denied'
            }
        }
    }
}