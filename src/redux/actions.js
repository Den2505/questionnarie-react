import {getQuestionnaire,getInstruction} from '../utils/backendDependencies'
export const setQuestionnaire = function () {
    return {
        type: 'SET_QUESTIONNAIRE',
        payload: getQuestionnaire()
    }
    
};

export const setInstruction = function () {
    return {
        type: 'SET_INSTRUCTION',
        payload: getInstruction()
    }
};

export const addAnswer = function (answer) {
    return {
        type:'UPDATE_ANSWERS',
        payload: answer,
    }
}

