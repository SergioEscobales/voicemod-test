import React from "react";


export default class FavoriteList extends React.Component {
  render() {
      const favs = this.props.list.map(datos => (
          <li className="fav-list" key={datos.id}>
              <p>{datos.name}</p>
              <img src={`${process.env.PUBLIC_URL}/imagenes/${datos.icon}`}
                   alt={datos.name} />
          </li>
      ));
      
    const datos = this.props.list.map(elem => {
      return <li>{elem}</li>;
    });
    return (
        <React.Fragment>
          <ul key={datos.key}>{datos}</ul>
            <ul key={favs.key}>{favs}</ul>
        </React.Fragment>
    );
  }
}
