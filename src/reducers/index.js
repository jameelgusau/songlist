import {combineReducers} from 'redux'


const songReducer =()=>{
    return[
        {title: 'No scrubs', duration: '4:05'},
        {title: 'All stars', duration: '3:10'},
        {title: 'I want it that way', duration:'2:12'},
        {title: 'How i met you', duration:'4:40'}

    ]
}
const selectedSongReducer=(selectedSong=null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})