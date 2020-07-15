import React, {useState, useContext} from 'react';
import Input from './../UI/Input/input';
import Select from './../UI/Input/select';
import Button from './../UI/Button/button';
import { postData } from './../FetchData/fetchData';
import { Context } from './../Context/context';
import classes from './addSong.module.css';

const AddSong = () => {
    const categories = useContext(Context)
    const [select, setSelect] = useState('blues')
    const [year, setYear] = useState('')
    const [song, setSong] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')

    const onSelectChange = (value) => {
        setSelect(value)
    }
    const onAlbumChange = (value) => {
        setAlbum(value)
    }
    const onArtistChange = (value) => {
        setArtist(value)
    }
    const onSongChange = (value) => {
        setSong(value)
    }
    const onYearChange = (value) => {
        setYear(value)
    }
    const params = {album: album, artist: artist, song: song, year: year}
    const onFormSubmit = (e) => {
        e.preventDefault()
        postData(`https://music-recommendation-d8c50.firebaseio.com/${select}.json`, params)
        .then(setAlbum(''),setArtist(''),setYear(''),setSong(''))
    }
    
    return (
        <form className={classes.addForm} onSubmit={onFormSubmit}>
            <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>Add New Track</legend>
                <Select options={categories} onChange={onSelectChange} label='Choose genre:'/>
                <Input type='text' value={song} onChange={onSongChange} label='Enter song name:'/>
                <Input type='text' value={artist} onChange={onArtistChange} label='Enter artist:'/>
                <Input type='text' value={album} onChange={onAlbumChange} label='Enter album:'/>
                <Input type='number' value={year} onChange={onYearChange} label='Enter song year:'/>
            </fieldset>
            <Button type='submit' value='Add'/>
        </form>
    )
}

export default AddSong