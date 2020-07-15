import React from 'react';
import PropTypes from 'prop-types';
import classes from './track.module.css';

const Track = ({artist, song, album = 'unknown', year = '9999'}) => {
    return (
        <div className={classes.trackPlate}>
            <span className={classes.artist}>Artist: {artist}</span>
            <span className={classes.song}>Song: {song}</span>
            <span className={classes.album}>Album: {album}</span>
            <span className={classes.year}>Year: {year}</span>
        </div>
    )
}
Track.propTypes = {
    artist: PropTypes.string,
    song: PropTypes.string,
    album: PropTypes.string,
    year: PropTypes.string
}

export default Track