module.exports = {
    delete: {
        tags: ['Question CRUD operations'],
        description: "Deleting a Question",
        operationId: "deleteQuestion",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/question/61807423234d51574c7bd186'
                },
                required: true,
                description: "Deleting a Question"
            }
        ],
        responses: {
            '200': {
                description: "Question deleted successfully"
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