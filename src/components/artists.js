import React, { Component } from 'react';
import Artist from './artist.js'
import { connect } from 'react-redux';



class Artists extends Component {



  render() {
    const ArtistList = this.props.artists.map((artist,index,array) => {

          return (
            <div key={index}>
            <Artist
              name = {artist.data[0].name ? artist.data[0].name : ''}
              image = {artist.data[0].image_url ? artist.data[0].image_url : ''}
              facebook = {artist.data[0].facebook_page_url ? artist.data[0].facebook_page_url : ''}
              events = {artist.data[1] ? artist.data[1] : []}
              id = {artist.id}
            />
            </div>
          )

    })

    if (this.props.artists.length > 0) {
        return (
          <div className="Artists">
              {ArtistList}
          </div>
        );
    }

    else {
        return (
          <div style={{textAlign:'center',marginTop:'50px'}}>
          <p>Добрый день. Вашему вниманию представлено тестовое задание. Удачного дня</p>
          </div>
        )
    }

  }
}

const mapStateToProps = state => (
    {
        artists: state.artists,
    }

);



export default connect(mapStateToProps)(Artists);
