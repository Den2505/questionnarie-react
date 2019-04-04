import React from 'react'
import {connect} from 'react-redux'
import {withWrapper, WrapperProvider} from "create-react-server/wrapper";
import UlInputRadio from './components/ulInputRadio'
import QuestionnarieForm from './containers/questForm'
import './styles/style.css'
////////////////////////////
import quest from './utils/questionnaire'
import {setQuestionnaire, setInstruction} from './redux/actions'

const lecturers = [
    {id: 1566, fio: "Магазёв Алексей Анатольевич"},
    {id: 711181, fio: "Самотуга Александр Евгеньевич"},
    {id: 1557, fio: "Михеев Виталий Викторович"},
];

/*
lecturers=[%20{"id":%201566,%20"fio":%20"Магазёв%20Алексей%20Анатольевич"},%20{"id":%20711181,%20"fio":%20"Самотуга%20Александр%20Евгеньевич"},%20{"id":%201557,%20"fio":%20"Михеев%20Виталий%20Викторович"}%20]&discipline=RTYRTY
*/

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.isBrowser = (typeof window !== 'undefined');

    }

    static async getInitialProps({location, query, params, store}) {
        const isBrowser = (typeof window !== 'undefined');
            await store.dispatch(setQuestionnaire());
            await store.dispatch(setInstruction());

            //return {questionnaire:store.questionnaire}


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
        if (this.props.questionnaire  && this.props.match.path === '/question/:qid' && this.isBrowser) {
            return (
                <QuestionnarieForm question={this.props.questionnaire.questions[this.props.match.params.qid]}
                                   id={this.props.match.params.qid}
                                   answ={this.props.questionnaire.answerBlocks[0].answers}/>

            )
        }
        if (this.props.query.lecturers && this.props.match.path === '/lecturers') {
            return (
                <QuestionnarieForm lecturers={JSON.parse(this.props.query.lecturers)} discipline={this.props.query.discipline}/>
            )
        }

        if (this.props.match.path === '/' && this.props.instruction.text){
            return (
                <QuestionnarieForm instruction={this.props.instruction.text} />
            )
        }

    }

    render() {

        return (
            <div className="w3layouts_main wrap">
                <h3>Пожалуйста, ответьте на вопросы .... </h3>
                {this.changeForm()}
                {/* <QuestionnarieForm questionnarie={this.props.questionnarie} id={this.props.id}/>
                <QuestionnarieForm lecturers={lecturers}/>*/}

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
