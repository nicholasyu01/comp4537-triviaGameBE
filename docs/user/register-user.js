module.exports = {
    post: {
        tags: ['User Auth'],
        description: "Register User",
        operationId: "registerUser",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            username: {
                                type: 'string'
                            },
                            password: {
                                type: 'string',
                            },
                        },
                        example: {
                            username: 'admin',
                            gameId: '1234abcd',
                        },
                    }
                },
            }
        },
        responses: {
            '200': {
                description: "User created successfully"
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