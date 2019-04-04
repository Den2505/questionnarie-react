import React from 'react'
import {connect} from 'react-redux'
import {withWrapper, WrapperProvider} from "create-react-server/wrapper";
import QuestionnarieForm from './containers/questForm'
import './styles/style.css'
import {setQuestionnaire, setInstruction} from './redux/actions'

const lecturers = [
    {id: 1566, fio: "Магазёв Алексей Анатольевич"},
    {id: 711181, fio: "Самотуга Александр Евгеньевич"},
    {id: 1557, fio: "Михеев Виталий Викторович"},
];

/*
lecturers=[{"id":1566,%20"fio":"Магазёв Алексей Анатольевич"},
{"id":711181,"fio":"Самотуга Александр Евгеньевич"},
{"id":1557,"fio":"Михеев Виталий Викторович"},
{"id":480,"fio":"Данилова Ольга Тимофеевна"},
{"id":808,"fio":"Логинов Константин Валентинович"},
{"id":1556,"fio":"Трапезников Евгений Валерьевич"}]&discipline=Комплексная Защита Информации
*/

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.isBrowser = (typeof window !== 'undefined');

    }

    static async getInitialProps({location, query, params, store}) {
        const isBrowser = (typeof window !== 'undefined');
        if (!store.getState().questionnaire.questions) {
            await store.dispatch(setQuestionnaire());
        }
        if (!store.getState().instruction.text) {
            await store.dispatch(setInstruction());
        }

    };

    /*   static getDerivedStateFromProps(props, state) {
           if (props.questionnaire && !state.questionnaire) {
               return {questionnaire: props.questionnaire}
           }
           return null;
       }
   */
    onChange(event) {
        this.setState({data: event.target.value})
    }

    changeForm() {
        if (this.props.questionnaire && this.props.match.path === '/question/:qid' && this.isBrowser) {
            return (
                <QuestionnarieForm question={this.props.questionnaire.questions[this.props.match.params.qid]}
                                   id={this.props.match.params.qid}
                                   answ={this.props.questionnaire.answerBlocks[0].answers}/>

            )
        }
        if (this.props.query.lecturers && this.props.match.path === '/lecturers') {
            return (
                <QuestionnarieForm lecturers={/*lecturers*/JSON.parse(this.props.query.lecturers)}
                                   discipline={this.props.query.discipline}/>
            )
        }

        if (this.props.match.path === '/' && this.props.instruction.text) {
            return (
                <QuestionnarieForm instruction={this.props.instruction.text}/>
            )
        }

    }

    render() {

        return (
            <div className="w3layouts_main wrap">
                <h3>Пожалуйста, ответьте на вопросы .... </h3>
                {this.changeForm()}
            </div>
        );

    }

}

function mapStateToProps(store) {

    return {
        questionnaire: store.questionnaire,
        query: store.query,
        instruction: store.instruction,
    }

}

function mapDispatchToProps(dispatch) {
    return {
        loadQuestionnaire: () => dispatch(setQuestionnaire())
    }
}

Test = connect(mapStateToProps, mapDispatchToProps)(Test);

export default withWrapper(Test);
//export default Test;
