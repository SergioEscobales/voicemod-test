import {ReactComponent as YourSvg} from "./imagenes/voice-favourite-off.svg";
import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";


const VoicemodApp: React.FunctionComponent<{}> = () => {
    const [voices, setVoices] = useState([]);
    const [favs, setFavs] = useState([]);

    const getList = () => {
        React.useEffect(() => {
            fetch("json/voices2.json")
                .then(response => response.json())
                .then(datos => {
                    setVoices(datos)
                })
        }, []);

        return voices
    };

    return (

        <React.Fragment>
            <Container className="container">
                <Row>
                    <div className="">
                        <h3 className="">FAVOURITES VOICES</h3>
                    </div>

                    {Voices.map(datos => (

                        <Col xs lg="2" key={datos.id} className="voices-list" align="center">
                            <div className="col-sm-3 card-voices">
                                <div className="card-fav-list">
                                    <YourSvg className="card-fav-img" id="card-fav-image"/>
                                    <div className="card-list" id="card-icon-image">
                                        <img src={`${process.env.PUBLIC_URL}/imagenes/${datos.icon}`}
                                             alt={datos.name} className="card-img-list"/>
                                    </div>
                                </div>
                                <div className="card-name-list">
                                    {datos.name}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default {VoicemodApp}