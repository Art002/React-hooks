import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { getData } from './../FetchData/fetchData';
import classes from './artists.module.css';
import Track from './Track/track'

const Artists = ({ match }) => {
    const [track, setTrack] = useState({})
    const header = match.params.id
    useEffect(() => {
        const fetchData = async () => {
          const resp = await getData(`https://music-recommendation-d8c50.firebaseio.com/${header}.json`)
          setTrack(resp.data)
        }
        fetchData()
    },[])
    
    const content = Object.values(track).map(({artist, song, album, year}, i) => {
        return <Track artist={artist} song={song} album={album} year={year} key={i}/>
    })

    return (
        <>
            <h1 className={classes.header}>{header}</h1>
            <div className={classes.artistsWrapper}>
                {content}
            </div>
        </>
    )
}

export default withRouter(Artists)