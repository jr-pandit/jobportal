import React, {Component, useEffect, useState} from "react";
import { Link, withRouter} from "react-router-dom";
import { Button, Container,Form, FormGroup, Input, Label} from "reactstrap";
import Header from '../Layout/Header';

class JobApplyOrEditApplication extends Component {

    emptyItem = {
        jobseekerName: '',
        Email: '',
        phone: '',
        countryName: '',
        curriculumVitae: '',
        coverLetter: '',
        githubURL: '',
        linkedInURL: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const job = await (await fetch(`/portal/api/v1/jobs/${this.props.match.params.id}`)).json();
            this.setState({item: job});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/portal/api/v1/jobs' + (item.id ? '/' + item.id : ''), {
        method: (item.id) ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    });
    this.props.history.push('/jobapplyoreditapplication');
}

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Application' : 'Apply'}</h2>;

        return <div>
            <Header/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="jobseekerName">JobSeeker Name</Label>
                        <Input type="text" name="jobseekerName" id="jobseekerName" value={item.jobseekerName || ''}
                               onChange={this.handleChange} autoComplete="jobseekerName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="text" name="Email" id="Email" value={item.Email || ''}
                               onChange={this.handleChange} autoComplete="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone Number</Label>
                        <Input type="text" name="phone" id="phone" value={item.phone || ''}
                               onChange={this.handleChange} autoComplete="phone"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="countryName">Country Name</Label>
                        <Input type="text" name="countryName" id="countryName" value={item.countryName || ''}
                               onChange={this.handleChange} autoComplete="countryName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="curriculumVitae">Curriculumvitae (CV)</Label>
                        <Input type="text" name="curriculumVitae" id="curriculumVitae" value={item.curriculumVitae || ''}
                               onChange={this.handleChange} autoComplete="curriculumVitae"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="coverLetter">Cover Letter</Label>
                        <Input type="text" name="coverLetter" id="coverLetter" value={item.coverLetter || ''}
                               onChange={this.handleChange} autoComplete="coverLetter"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="githubURL">Github URL</Label>
                        <Input type="text" name="githubURL" id="githubURL" value={item.githubURL || ''}
                               onChange={this.handleChange} autoComplete="githubURL"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/jobs">Cancel</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label for="linkedInURL">LinkedIn URL</Label>
                        <Input type="text" name="linkedInURL" id="linkedInURL" value={item.linkedInURL || ''}
                               onChange={this.handleChange} autoComplete="linkedInURL"/>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(JobApplyOrEditApplication);
