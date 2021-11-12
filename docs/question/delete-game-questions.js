module.exports = {
    delete: {
        tags: ['Question CRUD operations'],
        description: "Deleting a Questions of a game",
        operationId: "deleteGameQuestions",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/question/game/delete/618d8b7355d3cf001635e308'
                },
                required: true,
                description: "Deleting a Questions of a Game"
            }
        ],
        responses: {
            '200': {
                description: "Questions deleted successfully"
            },
            '400': {
                description: 'Access Denied'
            },
            '500': {
                description: "Server error"
            }
        }
    }
}