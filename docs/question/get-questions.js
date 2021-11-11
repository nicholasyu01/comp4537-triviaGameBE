

module.exports = {
    get: {
        tags: ['Question CRUD operations'],
        description: "Get list of Questions",
        operationId: 'getQuestions',
        parameters: [],
        responses: {
            '200': {
                description: "Question were obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: 'https://comp4537triviagame-api.herokuapp.com/api/v1/question'
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
                    },
                },
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