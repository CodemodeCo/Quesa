import React from 'react';
import {Col, Card} from 'react-materialize';

export default class DisplayQuestions extends React.Component{
    
    render(){
       
        var latest = this.props.questions.map((curr,i)=>{
            console.log(curr);
            return <Col  m={12} s={12}>
                <Card key={i} className='gra-back darken-1' textClassName='black-text' title={curr.question.ques + "  asked by - "+curr.user} actions={[<a href='#' style={{color: 'white'}}>Asked on - 
                {new Date(curr.question.askTime)
                    .toString().split("").splice(0,15).join("") +" "+ 
                    new Date(curr.question.askTime).toLocaleTimeString()}<span style={{float: 'right'}}>{curr.answers.length} answers</span></a>]}>
                    {curr.question.description}
                </Card>
            </Col>
        });
        return (this.props.sort == 'latest')?(<div>{latest}</div>):<h1>nosort</h1>
    }
}