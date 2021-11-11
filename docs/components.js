module.exports = {
    components: {
        schemas: {
            Game: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: "An id of a game",
                        example: "6182435e58e507046d6cd8df"
                    },
                    gameName: {
                        type: 'string',
                        description: "Name of a Game",
                        example: "My Game Name"
                    },
                }
            },
            Question: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: "An id of a question",
                        example: "6182435e58e507046d6cd8df"
                    },
                    question: {
                        type: 'string',
                        description: "the Question",
                        example: "What is this question?"
                    },
                    gameId: {
                        type: 'string',
                        description: "Game Id of the Question",
                        example: "6182435e58e507046d6cd8df?"
                    },
                    options: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                answer: {
                                    type: 'string',
                                    description: "An answer of a question",
                                    example: "Yes"
                                },
                                correct: {
                                    type: 'boolean',
                                    description: "is the answer correct",
                                    example: "true"
                                }
                            }
                        }

                    },
                }
            },
            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    internal_code: {
                        type: 'string'
                    }
                }
            }
        }
    }
}