import React, { Component } from 'react'
// import { Container } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar,Card, CardBody, CardHeader,
	 CardFooter, CardGroup, Col, Container, Row,
	 Form, Alert, InputGroup, Input, InputGroupAddon, InputGroupText, FormFeedback,
    } from 'reactstrap';

import ReactMarkdown from 'react-markdown'

// import kapr from '../../../../public/markdowns/kapr.md'


export default class MDparser extends Component {

	constructor(props) {
        super(props);
        // this.state = {
        //     // input: '# This is a header\n\nAnd this is a paragraph'
        //     // input:'_Here will be your result_'
        //     keyword:props.keyword,
        // };
    }

    // componentDidMount () {
    //     this.updateMD(this.state.keyword);
    // }

    // updateMD(keyword) {
    //         // console.log(newInput);
    //         // fetch(`../../../../public/markdowns/${input}.md`)
    //         fetch('../../../../public/markdowns/' + keyword + '.md')
    //         .then((r) => r.text())
    //         .then(text  => {
    //             console.log("Bude kapr");
    //             console.log(text);
    //             this.Text = text;
    //         })
    // }

    // componentDidUpdate () {
    //     const newKeyWord =  this.props.keyword;
    //     if (newKeyWord != this.state.keyword){
    //         this.setState({input:newKeyWord});
    //         this.updateMD(newKeyWord)
    //     }
    // }

	render() {

		return (
			<Container fluid>
                <ReactMarkdown source={this.props.mdtext} />
			</Container>
		)
	}
}


