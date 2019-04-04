import {combineReducers} from "redux";

function query(store = '/',action) {
return store;
}

function questionnaireReducer(store,action) {
    if(action.type === 'SET_QUESTIONNAIRE' && !store.questions){
        const {questGeneralInfo, questions, answerBlocks} = action.payload;
        return Object.assign({},store, questGeneralInfo, {questions}, {answerBlocks})
        /*return {
            ...store,
            questGeneralInfo,
            questions,
            answerBlocks
        }*/
    }
    return {...store}
}



function instructionReducer(store,action) {
    if(action.type === 'SET_INSTRUCTION' && !store.instruction) {
        return {
            ...store,
            text: action.payload
        }

    }
    return {...store}

}

function answersReducer(store,action) {
    if(action.type === 'UPDATE_ANSWERS'){
        if(store.answers){
            const answers = store.answers;
            const newAnswer = action.payload;
            return {
                ...store,
                answers: Object.assign(answers,newAnswer)
            }
        }
        return {
            ...store,
            answers: action.payload
        }
    }
    return {...store}
}

export default combineReducers(
    {   query,
        questionnaire:questionnaireReducer,
        instruction: instructionReducer,
        answersBase: answersReducer

    }
)