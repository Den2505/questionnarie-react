import React from 'react'
import {withWrapper} from "create-react-server/wrapper";
import UlInputRadio from "../components/ulInputRadio";

class QuestionnarieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answ:this.props.answ,
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
                    <h2>{this.state.question.name}</h2>
                    <UlInputRadio answ={this.state.answ} questionId={this.props.question.id}/>
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            )
        }
        if(this.props.lecturers){
            return (
                <form onSubmit={this.onSubmitLecturers.bind(this)} className="agile_form">
                    <h2>{`Пожалуйста выберите преподавателя, который ведёт дисциплину "${this.props.discipline}":`}</h2>
                    <UlInputRadio lecturers={this.props.lecturers}/>
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            )
        }

        if (this.props.instruction){
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
        getIndex = getIndex.bind(this);
        // eslint-disable-next-line
        function getIndex() {
            if(this.props.length-1 > Number(this.props.id)){
                return (`/question/${Number(this.props.id) + 1}/`)
            }
            return (`/finish`)
        }
        this.props.history.push(getIndex())

    }
    onSubmitLecturers(event) {
        event.preventDefault();
        this.props.history.push(`/question/${0}/`)

    }
    onSubmitInstruction(event){
        event.preventDefault();
        this.props.history.push(`/lecturers`)
    }

    render() {
        return (
            this.genereteForm()
        );
    }
}

export default withWrapper(QuestionnarieForm);