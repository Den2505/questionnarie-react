import React from 'react'
import quest from '../utils/questionnaire.js'
import {withWrapper, WrapperProvider} from "create-react-server/wrapper";
import {addAnswer, addLecturer} from '../redux/actions'
import {connect} from 'react-redux'


class UlInputRadio extends React.Component {
    constructor(props) {
        super(props)
    }

    generateLi({answ, lecturers}) {
        if (answ) {

            return (
                <ul className="agile_info_select">
                    {answ.map((answ) => (
                        <li key={answ.id}><input type="radio" name='view' id={answ.id}
                                                 defaultChecked={this.isCheckedAnswer(answ.id)}
                                                 onClick={this.onClickAnswer.bind(this)}/>
                            <label htmlFor={answ.id}>{answ.name}</label>
                            <div className="check w3"/>
                        </li>
                    ))}
                </ul>
            );
        }
        if (lecturers) {
            return (
                <ul className="agile_info_select">
                    {lecturers.map((lecturer) => (
                        <li><input type="radio" name="view" id={lecturer.id} onClick={this.onClickLecturer.bind(this)}
                                   defaultChecked={this.isCheckedLecturer(lecturer.id)}/>
                            <label htmlFor={lecturer.id}>{lecturer.fio}</label>
                            <div className="check w3"/>
                            <div className="kartinka">
                                <img src={`https://omgtu.ru/ecab/persons/photo.php?func=getblob&f=${lecturer.id}`}/>
                            </div>
                        </li>
                    ))}
                </ul>
            )
        }

    }

    onClickAnswer(event) {
        const questionId = this.props.questionId;
        const obj = [];
        obj[questionId] = event.target.id;
        this.props.addAnswer(obj)

    }

    isCheckedAnswer(id) {
        if (this.props.answers) {
            if (this.props.answers[this.props.questionId] === `${id}`) {
                return true
            }
        }
        return false
    }

    onClickLecturer(event) {
        this.props.addLecturer(event.target.id)
    }

    isCheckedLecturer(id) {
        if(this.props.lecturer){
            if(this.props.lecturer === `${id}`){

                return true;
            }
        }
        return false
    }

    render() {
        if (this.props.lecturers) {
            const lecturers = this.props.lecturers;
            return (
                this.generateLi({lecturers}))
        }
        if (this.props.answ) {
            const answ = this.props.answ;
            return (this.generateLi({answ}))
        }
    }
}

function mapStateToProps(store) {
    return {
        lecturer: store.lecturer.id,
        answers: store.answersBase.answers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAnswer: (answer) => dispatch(addAnswer(answer)),
        addLecturer: (id) => dispatch(addLecturer(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UlInputRadio)