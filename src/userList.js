import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "@material-ui/core/Container";
import './components/styles.css';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';


export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voices: [],
            addToFav: false,
            favorites: [],
            tags: '',
            favState: false,
            randomFav: null
        };

        this.onToggle = addToFav => {
            this.setState({
                addToFav
            });
        };
    }


    componentDidMount() {
        fetch("json/voices2.json")
            .then(response => response.json())
            .then(datos => {
                this.setState({
                    voices: datos
                });
            });

        return this.state.voices
    }


    render() {

        function remove(e) {
            const element = e.target;
            element.remove(e);
        }

        function removeFavs() {
            let elem = document.getElementById('favs-row');
            elem.parentNode.removeChild(elem);
            return false;
        }


        return (

            <React.Fragment>
                <Container>
                    <Row className="header-content">
                        <div className="free-solo-2-demo">
                            <Autocomplete
                                id="combo-box-demo"
                                autoComplete
                                options={this.state.voices.map((option) => option.name)}
                                style={{width: 300, backgroundColor: '#000000'}}
                                includeInputInList
                                size="small"
                                renderInput={(params) =>
                                    <TextField {...params}
                                               label={<SearchIcon style={{color: 'darkgrey'}}/>}
                                               variant="outlined"
                                               InputProps={{...params.InputProps, type: 'search'}}
                                    />}
                            />
                        </div>
                    </Row>
                    <h3 className="fav-title">FAVOURITES VOICES</h3>
                    {this.props.list.map(datos => (
                        <Row className="voices-favs-list" id="favs-row" onClick={remove}>
                            <Col xs lg="2" key={datos.name} id="voices-favs-list" align="center">
                                <li
                                    className="col-sm-3 card-list"
                                    id="card-icon-image"
                                    key={datos.id}
                                    style={{listStyleType: 'none'}}
                                    onClick={removeFavs}>
                                    <img
                                        className="card-img-list"
                                        src={`${process.env.PUBLIC_URL}/imagenes/${datos.icon}`}
                                        alt={datos.name}
                                    />
                                    <p style={{marginTop: '1rem'}}>{datos.name}</p>
                                </li>
                            </Col>
                        </Row>
                    ))}
                </Container>
                <Container className="container-1">
                    <Row>
                        <h3 className="pro-title">PRO VOICES</h3>

                        {this.state.voices.map(datos => (

                            <Col xs lg="2" key={datos.id} className="col-sm-3 voices-list" align="center"
                                 onClick={() => this.props.clicked(datos)}>
                                <div className="card-list" onSelect={this.onSelect} id="card-list">
                                    <span className="card-fav-img"/>
                                    <img
                                        onToggle={this.onToggle}
                                        alt={datos.name}
                                        className="card-img-list"
                                        //onClick={() => this.props.clicked(datos)}
                                        src={`${process.env.PUBLIC_URL}/imagenes/${datos.icon}`}
                                    />
                                    <span style={{marginTop: '1rem'}}>{datos.name}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
