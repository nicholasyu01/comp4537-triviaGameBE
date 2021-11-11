module.exports = {
    post: {
        tags: ['Game CRUD operations'],
        description: "Create Game",
        operationId: "createGame",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            gameName: {
                                type: 'string'
                            }
                        },
                        example: {
                            gameName: 'My Game'
                        },
                    }
                },
                // $ref: 'https://comp4537triviagame-api.herokuapp.com/api/game/add'
            }
        },
        responses: {
            '200': {
                description: "Game created successfully"
            },
            '400': {
                description: 'Server error'
            }
        }
    }
}