import {getInstruction} from '../utils/backendDependencies'

export const setQuestionnaire = function (quest) {
    return {
        type: 'SET_QUESTIONNAIRE',
        payload: quest
    }

};

export const fetchQuestionnaire = async function (dispatch) {

    fetch('http://192.168.20.44:3001/api/questionnaire').then(res => res.json())
        .then((questionnaire) => {

            const quest = questionnaire.questionnaire.json;
            const questions = quest.questions;
            const generalInformation = quest.general;
            const answerBlocks = quest.answBlocks;
            dispatch(setQuestionnaire({questions, generalInformation, answerBlocks}))

        })
};

export const sendAnswer = function (message) {
    return fetch('http://192.168.20.44:3001/api/answer', {   //46.233.196.46
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
        .then((res) => {
           return res.status
        })

};

export const setInstruction = function () {
    return {
        type: 'SET_INSTRUCTION',
        payload: getInstruction()
    }
};

export const addAnswer = function (answer) {
    return {
        type: 'UPDATE_ANSWERS',
        payload: answer,
    }
}

export const addLecturer = function (lecturer) {
    return {
        type: 'UPDATE_LECTURER',
        payload: lecturer
    }
}
