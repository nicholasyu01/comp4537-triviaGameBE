const getQuestions = require('./question/get-questions');
const createQuestion = require('./question/create-question');
const getQuestion = require('./question/get-question');
const updateQuestion = require('./question/update-question');
const deleteQuestion = require('./question/delete-question');

const getGames = require('./game/get-games');
const createGame = require('./game/create-game');
const getGame = require('./game/get-game');
const updateGame = require('./game/update-game');
const deleteGame = require('./game/delete-game');

module.exports = {
    paths: {
        '/api/v1/game': {
            ...getGames,
        },
        '/api/v1/game/{id}': {
            ...getGame,
            ...updateGame,
            ...deleteGame,
        },
        '/api/v1/game/add': {
            ...createGame,
        },
        '/api/v1/question': {
            ...getQuestions,
        },
        '/api/v1/question/{id}': {
            ...getQuestion,
            ...updateQuestion,
            ...deleteQuestion,
        },
        '/api/v1/question/add': {
            ...createQuestion,
        },
    }
}