import React from 'react'
import {connect} from 'react-redux'
import {withWrapper, WrapperProvider} from "create-react-server/wrapper";
import UlInputRadio from "../components/ulInputRadio";
import {withRouter} from "react-router";

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
                    <UlInputRadio answ={this.state.answ}/>
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            )
        }
        if(this.props.lecturers){
            return (
                <form onSubmit={this.onSubmitLecturers.bind(this)} className="agile_form">
                    <h2>Пожалуйста выберите преподавателя, который ведёт дисциплину "Теория Информации":</h2>
                    <UlInputRadio lecturers={this.props.lecturers}/>
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            )
        }

        if (this.props.instruction){
            debugger
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
        this.props.history.push(`/question/${new Number(this.props.id) + 1}/`)

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