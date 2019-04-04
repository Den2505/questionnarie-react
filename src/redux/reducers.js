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

export default combineReducers(
    {   query,
        questionnaire:questionnaireReducer,
        instruction: instructionReducer,

    }
)