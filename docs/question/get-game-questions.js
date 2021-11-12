module.exports = {
    get: {
        tags: ['Question CRUD operations'],
        description: "Get questions of a game",
        operationId: "getGameQuestions",
        parameters: [
            {
                name: "gameId",
                in: "path",
                required: true,
                description: "A Game id"
            }
        ],
        responses: {
            '200': {
                description: "Questions were obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/question/game/618081b80f6f969e740ad771'
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