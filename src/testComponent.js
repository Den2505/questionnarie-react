import React from 'react'
import {connect} from 'react-redux'
import {withWrapper, WrapperProvider} from "create-react-server/wrapper";
import './styles/style.css'
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.stringify(props.query)
        }
    }


    onChange(event) {
        this.setState({data: event.target.value})
    }



    render() {
        return (
            <div className="w3layouts_main wrap">

                <h3>Пожалуйста, ответьте на вопросы .... </h3>
                <form action="#" method="post" className="agile_form">
                    <h2>Собственно сам вопрос 1/15</h2>
                    <ul className="agile_info_select">
                        <li><input type="radio" name="view" id="excellent"/>
                            <label htmlFor="excellent">вариант 1</label>
                            <div className="check w3"/>
                        </li>
                        <li><input type="radio" name="view" id="good"/>
                            <label htmlFor="good"> вариант 2</label>
                            <div className="check w3ls"/>
                        </li>
                        <li><input type="radio" name="view" id="neutral"/>
                            <label htmlFor="neutral">вариант 3</label>
                            <div className="check wthree"/>
                        </li>
                        <li><input type="radio" name="view" id="poor"/>
                            <label htmlFor="poor">вариант 4</label>
                            <div className="check w3_agileits"/>
                        </li>
                    </ul>
                    <h2>Можно даже оставить коментарий. Возможно добавить вконце анкеты</h2>
                    <textarea placeholder="Additional comments" className="w3l_summary" required=""></textarea>
                   {/* <input type="text" placeholder="Name" name="name" required=""/>*/}
                   {/* <input type="email" placeholder="Email" name="email" required=""/>*/}
                    <input type="submit" value="Далее" className="agileinfo"/>
                </form>
            </div>
        );
    }
}

Test = connect(state => state)(Test);

export default withWrapper(Test);
//export default Test;
