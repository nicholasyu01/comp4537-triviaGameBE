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
                // $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/game/add'
            }
        },
        responses: {
            '200': {
                description: "Game created successfully"
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