module.exports = {
    put: {
        tags: ['Game CRUD operations'],
        description: "Update Game",
        operationId: "updateGame",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/game/61807423234d51574c7bd186'
                },
                required: true,
                description: "Id of game to be updated"
            }
        ],
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
                description: "Game updated successfully"
            },
            '400': {
                description: "Accessed Denied"
            },
            '500': {
                description: "Server error"
            }

        }
    }
}