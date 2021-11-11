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
        '/api/game': {
            ...getGames,
        },
        '/api/game/{id}': {
            ...getGame,
            ...updateGame,
            ...deleteGame,
        },
        '/api/game/add': {
            ...createGame,
        },
        '/api/question': {
            ...getQuestions,
        },
        '/api/question/{id}': {
            ...getQuestion,
            ...updateQuestion,
            ...deleteQuestion,
        },
        '/api/question/add': {
            ...createQuestion,
        },
    }
}