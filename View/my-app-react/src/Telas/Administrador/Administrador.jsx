import React from "react";
import { Container, Input, Col, Row, Form, FormGroup, Label, } from 'reactstrap'
import style from './administrador.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Botao from "../../componentes/Botao/Botao.jsx";
import Modal from "../../componentes/Modal/Modal";
class Administrador extends React.Component {
    constructor() {
        super()
        this.login = "Resilia";
        this.senha = "Resilia";
        this.state = {
            inputLogin: "",
            inputSenha: "",
            showModal: true,

        }

        this.Autenticacao = this.Autenticacao.bind(this);
        this.getInputLogin = this.getInputLogin.bind(this)
    }

    Autenticacao() {
        if (this.login == this.state.inputLogin) {
            console.log("acertou");
        }
        else {
            console.log("errou");
            this.setState({showModal: true})
        }
    }

    getInputLogin(input) {
        this.setState({ inputLogin: input.target.value })
    }

    render() {
        return (
            <Container fluid className={`${style.container}`}>
                {this.state.showModal && 
                    <Modal id="meuModal" bgColor="#FC6D6D" color="#fff" classModal="col-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3" display={this.state.showModal}/>
                }
                <Form>
                    <FormGroup>
                        <Row className="vh-100 justify-content-center align-items-center">
                            <Col className="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3">
                                <Row className="">
                                    <Col className="">
                                        <Input className={`${style.Input} my-3`} type="text" placeholder="Login" onChange={this.getInputLogin} />
                                        <Input className={`${style.Input}`} type="text" placeholder="Senha" />
                                    </Col>
                                </Row>
                                <Row className="justify-content-end">
                                    <Col className="col-auto my-2">
                                        <Input type="checkbox" className="me-1" />
                                        <Label check style={{ color: "#fff", fontSize: "10pt" }}>Me manter conectado</Label>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col className="col-12 my-3">
                                        <Botao title="Confirmar" bgColor="#18A078" color="#fff" onClick={this.Autenticacao} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-center">
                                        <a href="#" style={{ color: "#fff" }}>Esqueci minha senha</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default Administrador;