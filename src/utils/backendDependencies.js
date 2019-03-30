import quest from './questionnaire'

 export const getQuestionnaire = function () {
    let questions, generalInformation, answerBlocks;

    const questionnaire = JSON.parse(quest);
    questions = questionnaire.questions;
    generalInformation = questionnaire.general;
    answerBlocks = questionnaire.answBlocks;

    return {questions, generalInformation, answerBlocks};

}

export const getInstruction = function () {
return 'Инструкия'
}

