import React from 'react'
import quest from '../utils/questionnaire.js'
import {withWrapper, WrapperProvider} from "create-react-server/wrapper";

 function ulInputRadio ({answ, lecturers}) {

    /*const lecturers = [
        {id:1566,fio:"Магазёв Алексей Анатольевич"},
        {id:711181,fio:"Самотуга Александр Евгеньевич"},
        {id:1557,fio:"Михеев Виталий Викторович"}
    ]*/

    function generateLi({answ, lecturers}) {
        if (answ) {
            return (
                <ul className="agile_info_select">
                    {answ.map((answ) => (
                        <li key={answ.name}><input type="radio" name='view' id={answ.name}/>
                            <label htmlFor={answ.name}>{answ.name}</label>
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
                        <li><input type="radio" name="view" id={lecturer.id}/>
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


    if (lecturers) {
        return (
            generateLi({lecturers}))
    }
    if (answ) {
        return (generateLi({answ}))
    }



}

export default withWrapper(ulInputRadio)