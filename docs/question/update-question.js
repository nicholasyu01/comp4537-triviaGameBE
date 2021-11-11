module.exports = {
    put: {
        tags: ['Question CRUD operations'],
        description: "Update Question",
        operationId: "updateQuestion",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/question/61807423234d51574c7bd186'
                },
                required: true,
                description: "Id of Question to be updated"
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
                            question: 'My Question',
                            gameId: '6182435e58e507046d6cd8df',
                            options: [
                                {
                                    answer: 'My Answer',
                                    correct: true
                                },
                                {
                                    answer: 'My Answer',
                                    correct: false
                                },
                                {
                                    answer: 'My Answer',
                                    correct: false
                                },
                                {
                                    answer: 'My Answer',
                                    correct: false
                                },
                            ]
                        },
                    }
                },
                // $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/question/add'
            }
        },
        responses: {

            '200': {
                description: "Question updated successfully"
            },
            '400': {
                description: "Access Denied"
            },
            '500': {
                description: "Server error"
            }

        }
    }
}