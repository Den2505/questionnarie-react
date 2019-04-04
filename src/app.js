import React from "react";
import {Provider} from "react-redux";
import {Route, Switch, withRouter} from "react-router";
import {WrapperProvider} from "create-react-server/wrapper";
import Test from "./testComponent"
import createStore from "./redux/store";
import quest from './utils/questionnaire'

export default ({state, props, req}) => {

    if (!state && req) {
        state = {
            //'body' : req.body,
            'query':req.query
        };
    }

    const lecturers = [
        {id:1566,fio:"Магазёв Алексей Анатольевич"},
        {id:711181,fio:"Самотуга Александр Евгеньевич"},
        {id:1557,fio:"Михеев Виталий Викторович"},
    ];

    return (
        <Provider store={createStore(state)}>
            <WrapperProvider initialProps={props}>
                {/*<h2>STATE - {JSON.stringify(state)}</h2>
                <h3>PROPS - {JSON.stringify(props)}</h3>*/}
                <Switch>
                   <Route exact path="/" component={Test}/>
                   <Route exact path="/lecturers" component={Test}/>
                   <Route exact path="/question/:qid" render = {(props)=>(<Test {...props} key={props.match.params.qid} />)}/>
                   <Route exact path="/finish" component={Test}/>

{/*
                    <Route path="/page" component={Page}/>
                    <Route component={NotFound}/>**/}
                </Switch>
            </WrapperProvider>
        </Provider>
    );

};
