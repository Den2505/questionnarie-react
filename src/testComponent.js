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


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.stringify(props.query)
        };
        this.isBrowser = (typeof window !== 'undefined');

    }

    static async getInitialProps({location, query, params, store}) {
        const isBrowser = (typeof window !== 'undefined');
            await store.dispatch(setQuestionnaire());

            await store.dispatch(setInstruction());

            //return {questionnaire:store.questionnaire}


    };

    static getDerivedStateFromProps(props, state) {
        if (props.questionnaire && !state.questionnaire) {
            return {questionnaire: props.questionnaire}
        }
        return null;
    }

    onChange(event) {
        this.setState({data: event.target.value})
    }

    changeForm() {
       debugger
        if (this.state.questionnaire  && this.props.match.path === '/question/:qid' && this.isBrowser) {
            return (
                <QuestionnarieForm question={this.state.questionnaire.questions[this.props.match.params.qid]}
                                   id={this.props.match.params.qid}
                                   answ={this.state.questionnaire.answerBlocks[0].answers}/>

            )
        }
        /*if (this.props.lecturers) {
            return (
                <QuestionnarieForm lecturers={this.props.lecturers}/>
            )
        }*/
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

    return {questionnaire: store.questionnaire}

}

function mapDispatchToProps(dispatch) {
    return {
        loadQuestionnaire: () => dispatch(setQuestionnaire())
    }
}

Test = connect(mapStateToProps, mapDispatchToProps)(Test);

export default withWrapper(Test);
//export default Test;
