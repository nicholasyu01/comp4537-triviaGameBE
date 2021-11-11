module.exports = {
    get: {
        tags: ['Game CRUD operations'],
        description: "Get a Game",
        operationId: "getGame",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/game/61807423234d51574c7bd186'
                },
                required: true,
                description: "A single game id"
            }
        ],
        responses: {
            '200': {
                description: "Game was obtained",
                content: {
                    'application/json': {
                        example: {
                            "_id": "61807423234d51574c7bd186",
                            "gameName": "My Game",
                            "__v": 0
                        },
                    }
                }
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