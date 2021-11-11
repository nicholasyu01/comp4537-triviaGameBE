module.exports = {
    post: {
        tags: ['Question CRUD operations'],
        description: "Create Question",
        operationId: "createQuestion",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            question: {
                                type: 'string'
                            },
                            gameId: {
                                type: 'string',
                            },
                            options: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        answer: {
                                            type: 'string',
                                        },
                                        correct: {
                                            type: 'boolean',
                                        }
                                    }
                                }
                            },
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