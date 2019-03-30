import {combineReducers} from "redux";

function query(store = '/',action) {
return store;
}

function questionnaireReducer(store,action) {
    if(action.type === 'SET_QUESTIONNAIRE' && !store.questions){
        const {questGeneralInfo, questions, answerBlocks} = action.payload;
        console.log('asd')
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
            instruction: action.payload
        }
    }

}

export default combineReducers(
    {   query,
        questionnaire:questionnaireReducer,

    }
)