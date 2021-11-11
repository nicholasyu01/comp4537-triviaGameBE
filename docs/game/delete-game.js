module.exports = {
    delete: {
        tags: ['Game CRUD operations'],
        description: "Deleting a Game",
        operationId: "deleteGame",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/game/61807423234d51574c7bd186'
                },
                required: true,
                description: "Deleting a game"
            }
        ],
        responses: {
            '200': {
                description: "Game deleted successfully"
            },
            '500': {
                description: "Server error"
            },
            '400': {
                description: 'Access Denied'
            }
        }
    }
}
