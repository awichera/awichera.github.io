import React, { Component } from 'react'
// import { Container } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar,Card, CardBody, CardHeader,
	 CardFooter, CardGroup, Col, Container, Row,
	 Form, Alert, InputGroup, Input, InputGroupAddon, InputGroupText, FormFeedback,
	} from 'reactstrap';
import MDparser from './MDparser';


class HomeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mdtext:"",
			formInput:""
		}
	}

	handleTextInput(event) {
		this.setState({formInput:event.target.value});
		// console.log ("event.target.value",event.target.value)
	}

	handleSubmit(event) {
		fetch('../../../../public/markdowns/' + this.state.formInput + '.md')
		.then((r) => r.text())
		.then(text  => {
			// console.log("Bude kapr");
			// console.log(text.slice(0,15));
			if (text.slice(0,15) == "<!DOCTYPE html>") {
				text = `## Nenalezen\nZáznam "${this.state.formInput}" průvodce nezná`;
			}
			this.setState({mdtext:text});


		})




		// console.log ("event.target.value",event.target.value)
	}

	render() {

		return (
			<Container fluid>
				<Row className="justify-content-center">
					<Col md="8">
						<Card>
							<CardHeader>
								<b>
									Stopařův průvodce po galaxii
								</b>
							</CardHeader>
							<CardBody>
								<Form>
						<p className="text-muted">Stopuj</p>
						{/* <Alert isOpen = {responseText != null} color = {responseSuccess ? "success":"danger"}>
							{responseText}
						</Alert> */}
									<InputGroup className="mb-3">
										<InputGroupAddon addonType="prepend">
										<InputGroupText>
											{/* <i className="icon-lock"></i> */}
											?
										</InputGroupText>
										</InputGroupAddon>
										<Input
										type="text"
										placeholder="vogonská poezie"
										autoComplete="vogonská poezie"
										// onBlur = {this.handleEmailBlur.bind(this)}
										onChange={this.handleTextInput.bind(this)}
										required
										// valid={this.state.email.valid}
										// invalid={this.state.email.valid===false}
										/>
										<FormFeedback valid>
										This email looks great!
										</FormFeedback>
										<FormFeedback invalid="true">
										This doesn't look like an email
										</FormFeedback>
									</InputGroup>

									<InputGroup>
										<Button
										color="success"
										  onClick={this.handleSubmit.bind(this)}
										//   disabled={!this.state.submitPossible}
										block
										>
										Najít
										</Button>
									</InputGroup>
								</Form>
								{/* <div>
									<br/>
									Kapr

								</div> */}
							</CardBody>
							<CardFooter>
								<MDparser mdtext = {this.state.mdtext}/>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default HomeContainer;
