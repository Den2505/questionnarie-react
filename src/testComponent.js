import React from 'react'
import {connect} from 'react-redux'
import {withWrapper} from "create-react-server/wrapper";
import QuestionnarieForm from './containers/questForm'
import './styles/style.css'
import {setInstruction, fetchQuestionnaire, sendAnswer} from './redux/actions'

/*const lecturers = [
    {id: 1566, fio: "Магазёв Алексей Анатольевич"},
    {id: 711181, fio: "Самотуга Александр Евгеньевич"},
    {id: 1557, fio: "Михеев Виталий Викторович"},
];*/

/*
lecturers=[{"id":1566, "fio":"Магазёв Алексей Анатольевич"},
{"id":711181,"fio":"Самотуга Александр Евгеньевич"},
{"id":1557,"fio":"Михеев Виталий Викторович"}]
&group={"id":1, "name": "РТ-161", "speciality": "Радиоэлектроника"}&student={"id":2, "first_name": "Иван", "last_name":"Иванов"}
&subject={"id": 1, "name":"Комплексная Защита Информации"}
*/

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.isBrowser = (typeof window !== 'undefined');

    }

    static async getInitialProps({location, query, params, store}) {

        if (!store.getState().instruction.text) {
            await store.dispatch(setInstruction());
        }
        if (!store.getState().questionnaire.questions) {
            await fetchQuestionnaire(await store.dispatch);
        }
    };

    findAnswer(blockId) {
        return this.props.questionnaire.answerBlocks.find((block) => (block.id === blockId))
    }

    changeForm() {

        if (this.props.questionnaire.answerBlocks && this.props.match.path === '/question/:qid' && this.isBrowser) {
            return (
                <QuestionnarieForm question={this.props.questionnaire.questions[this.props.match.params.qid]}
                                   id={this.props.match.params.qid} length={this.props.questionnaire.questions.length}
                                   answ={this.findAnswer(this.props.questionnaire.questions[this.props.match.params.qid].answBlockId).answers /*this.props.questionnaire.answerBlocks[0].answers*/}/>

            )
        }
        if (this.props.query.lecturers && this.props.match.path === '/lecturers') {
            return (
                <QuestionnarieForm lecturers={/*lecturers*/JSON.parse(this.props.query.lecturers)}
                                   discipline={JSON.parse(this.props.query.subject).name}/>
            )
        }

        if (this.props.match.path === '/' && this.props.instruction.text && this.isBrowser) {
            return (
                <QuestionnarieForm instruction={this.props.instruction.text}/>
            )
        }

        if (this.props.match.path === '/finish') {
            return (
                <div>
                    <br></br>
                    <h3 align="center">Спасибо, Ваш голос принят!</h3>
                </div>
            )
        }

        if (this.props.match.path === '/error') {
            const lecturer = JSON.parse(this.props.query.lecturers).find((elem) =>
                (elem.id === Number(this.props.lecturer.id)))
            return (
                <div>
                    <br></br>
                    <h3 align="center">Ошибка! Возможно вы уже голосовали за дисциплину
                        `{JSON.parse(this.props.query.subject).name}`,
                        которую преподаёт {lecturer.fio}</h3>
                </div>
            )
        }
    }

    render() {

        return (
            <div className="w3layouts_main wrap">
                {/*
                <h3>Пожалуйста, ответьте на вопросы .... </h3>
*/}
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
        answers: store.answersBase,
        group: store.group,
        lecturer: store.lecturer,
        student: store.student
    }

}

function mapDispatchToProps(dispatch) {
    return {
        sendAnswer: (message) => dispatch(sendAnswer(message))
    }
}

Test = connect(mapStateToProps, mapDispatchToProps)(Test);

export default withWrapper(Test);
//export default Test;
