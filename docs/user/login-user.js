module.exports = {
    post: {
        tags: ['User Auth'],
        description: "Login User",
        operationId: "loginUser",
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
                description: "Game created successfully",
                content: {
                    'application/json': {
                        example: {
                            success: true,
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGRiM2FjYmIyMGMyODhiMGYxMmMyMiIsImlhdCI6MTYzNjY3OTEwMiwiZXhwIjoxNjY4MjM2MDI4fQ",
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