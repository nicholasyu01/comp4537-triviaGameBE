module.exports = {
    get: {
        tags: ['Question CRUD operations'],
        description: "Get a Question",
        operationId: "getQuestion",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "A single Question id"
            }
        ],
        responses: {
            '200': {
                description: "Question was obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/question/61807423234d51574c7bd186'
                        },
                        example: {
                            _id: "6182435e58e507046d6cd8df",
                            question: "who is santa?",
                            gameId: "618081b80f6f969e740ad771",
                            options: [
                                {
                                    answer: "a",
                                    correct: true
                                },
                                {
                                    answer: "b",
                                    correct: true
                                },
                                {
                                    answer: "c",
                                    correct: false
                                },
                                {
                                    answer: "d",
                                    correct: false
                                }
                            ],
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