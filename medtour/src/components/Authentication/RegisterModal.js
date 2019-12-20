import React, {Component} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';


class RegisterModal extends Component{

    state = {
        modal: false,
        name: '',
        surname: '',
        userName: '',
        password: '',
        email: '',
        msg: null

    };

    static propTypes ={
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const { error, isAuthenticated } = this.props; 
        if( error !== prevProps.error){
            //Check for register error
            if( error.id === 'REGISTER_FAIL' ){
                this.setState({msg: error.msg.msg});
            }
            else{
                this.setState({ msg: null});
            }
        }

        //If authenticated , close modal
        if( this.state.modal){
            if( isAuthenticated ){
                this.toggle();
            }
        }
    }


    toggle = () => {
        //Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit = (e) =>{
        
        e.preventDefault(); //preventing from submiting
       
        //register

        const {name, surname, userName, password, email} = this.state;

        //Create user object

        const newUser = {
            name, surname, userName, password, email
        };

        //Attempt to register
        this.props.register(newUser);

        //this.toggle();

    }


    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Register
                </NavLink>

                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader
                    toggle={this.toggle}
                >
                    Register as a new User
                </ModalHeader>

                <ModalBody>
                    {this.state.msg ? (
                        <Alert color = "danger"> {this.state.msg} </Alert>
                    ): null}
                    <Form
                        onSubmit={this.onSubmit}
                    >
                        <FormGroup>

                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>

                            <Input
                                type="text"
                                name="surname"
                                id="surname"
                                placeholder="Surname"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>

                            <Input
                                type="text"
                                name="userName"
                                id="userName"
                                placeholder="Username"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>


                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>

                            <Input
                                type="pasword"
                                name="passwordConfirm"
                                id="passwordConfirm"
                                placeholder="Confirm Password"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>


                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>

                           
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >
                                Register
                            </Button>

                        </FormGroup>

                    </Form>

                </ModalBody>
                    
                </Modal>
            </div>
        );

    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error //from reducer!!!
});

export default connect(mapStateToProps, { register, clearErrors} )(RegisterModal);