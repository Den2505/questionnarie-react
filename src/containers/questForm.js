import React from 'react'
import {withWrapper} from "create-react-server/wrapper";
import UlInputRadio from "../components/ulInputRadio";
import {connect} from 'react-redux'
import {sendAnswer} from "../redux/actions";

class QuestionnarieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answ: this.props.answ,
            question: this.props.question
        }

    }

    /*static getDerivedStateFromProps(props, state){
        if(props.questionnaire && !state.answ){
            return {
                answ: props.questionnaire.answerBlocks[0].answers
                question
            }
        }

        return null
    }*/

    genereteForm() {
        if (this.props.question) {
            return (
                <form onSubmit={this.onSubmitAnsw.bind(this)} className="agile_form">
                    <h2>{this.props.question.id+1}) {this.state.question.name}</h2>
                    <UlInputRadio answ={this.state.answ} questionId={this.props.question.id}/>
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            )
        }
        if (this.props.lecturers) {
            return (
                <form onSubmit={this.onSubmitLecturers.bind(this)} className="agile_form">
                    <h2>{`Пожалуйста, выберите преподавателя, который ведёт дисциплину "${this.props.discipline}":`}</h2>
                    <UlInputRadio lecturers={this.props.lecturers}/>
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            )
        }

        if (this.props.instruction) {
            return (
                <form onSubmit={this.onSubmitInstruction.bind(this)} className="agile_form">
                    <h2>Добро пожаловать!</h2>
                    <h2>{this.props.instruction}</h2>
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            )
        }

    }

    onSubmitAnsw(event) {
        event.preventDefault();
        // eslint-disable-next-line
        // getIndex = getIndex.bind(this);
        const generateMessage = this.generateMessage.bind(this);
        // eslint-disable-next-line
        if (this.props.length - 1 > Number(this.props.id)) {
            this.props.history.push(`/question/${Number(this.props.id) + 1}/`)
        }
        else {
            this.props.sendAnswer(generateMessage())
                .then((status) => {
                    if (status === 200) {
                        this.props.history.push('/finish')
                    }
                    else if (status === 400) {
                        this.props.history.push('/error')
                    }
                })

        }


        //this.props.history.push(getIndex())

    }

    onSubmitLecturers(event) {
        event.preventDefault();
        this.props.history.push(`/question/${0}/`)

    }

    onSubmitInstruction(event) {
        event.preventDefault();
        this.props.history.push(`/lecturers`)
    }

    generateMessage() {
        const lecturer = JSON.parse(this.props.query.lecturers).find((elem) =>
            (elem.id === Number(this.props.lecturer.id)))
        return {
            group: JSON.parse(this.props.group),
            student: JSON.parse(this.props.student),
            employee: {
                id: lecturer.id,
                first_name: lecturer.fio.split(' ')[0],
                last_name: lecturer.fio.split(' ')[1],
                patronymic: lecturer.fio.split(' ')[2],
            },
            subject: JSON.parse(this.props.subject),
            questionnaire_id: this.props.questionnaire.id,
            answerJSON: JSON.stringify(this.props.answers)
        };
    }

    render() {
        return (
            this.genereteForm()
        );
    }
}


function mapStateToProps(store) {

    return {
        questionnaire: store.questionnaire,
        query: store.query,
        group: store.query.group,
        subject: store.query.subject,
        student: store.query.student,
        answers: store.answersBase.answers,
        lecturer: store.lecturer
    }

}

function mapDispatchToProps(dispatch) {
    return {
        sendAnswer: (message) => (sendAnswer(message))
    }
}

QuestionnarieForm = connect(mapStateToProps, mapDispatchToProps)(QuestionnarieForm);

export default withWrapper(QuestionnarieForm);