import { PLAYPAUSE, REWIND, CHANGEBPM,TOGGLEPATTERNVIEW, SETPATTERN, SETPATTERNDISPLAY, STOP, PLAYING, PAUSE, TOGGLEDEMOPLAY, SETREPEATTIMES } from "../actions/ControllerActions";

const initialState = {
    playingState: STOP,
    bpm:120,
    repeatTimes:1,
    demoPlay:false,
    pattern:{"name":"rock8", "difficulty":"hard", "timeSignature":"4/4","bpm":120,"instruments":[{"type":"snare","patternCode":"1111111111111111"}, {"type": "kick","patternCode": "1000000101000000"}, {"type": "cymbal","patternCode": "1010101010101010"}, {"type": "floor","patternCode": "0001000100010001"}]},    
    patternDisplay:{"name":"rock", "difficulty":"easy", "timeSignature":"2/4","bpm":60,"instruments":[{"type":"snare","patternCode":"001000100010"}]},
    patternViewOpen: false,
    keyPress:["A","F","J","L"]
}

export const reducer = (state = initialState, action) => {
    if (action.type === PLAYPAUSE) {
        let newPlayingState = state.playingState;
        if (state.playingState === PAUSE||state.playingState === STOP)
            newPlayingState = PLAYING;
        else
            newPlayingState = STOP;
        return {
            ...state,
            playingState: newPlayingState
        }
    }
    if (action.type === REWIND) {
        return {
            ...state,
            playingState: STOP
        }
    }
    if (action.type === CHANGEBPM) {
        return {
            ...state,
            bpm: action.bpm
        }
    }
    if (action.type === TOGGLEPATTERNVIEW) {
        return {
            ...state,
            patternViewOpen: !state.patternViewOpen
        }
    }
    if (action.type === SETPATTERN) {
        return {
            ...state,
            bpm:action.pattern.bpm,
            pattern: action.pattern
        }
    }
    if (action.type === SETPATTERNDISPLAY) {
        return {
            ...state,
            patternDisplay: action.pattern
        }
    }
    if (action.type === TOGGLEDEMOPLAY) {
        return {
            ...state,
            demoPlay: !state.demoPlay
        }
    }
    if (action.type === SETREPEATTIMES) {
        return {
            ...state,
            repeatTimes: action.repeatTimes
        }
    }

    
    


    return state;
}
export default reducer;