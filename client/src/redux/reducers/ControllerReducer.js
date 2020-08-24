import { PLAYPAUSE, REWIND, CHANGEBPM,TOGGLEPATTERNVIEW, SETPATTERN, SETPATTERNDISPLAY, STOP, PLAYING } from "../actions/ControllerActions";

const initialState = {
    playingState: STOP,
    bpm:120,
    pattern:{"name":"rock8", "difficulty":"hard", "timeSignature":"4/4","bpm":120,"instruments":[{"type":"snare","patternCode":"001000100010"}, {"type": "kick","patternCode": "1000000101000000"}, {"type": "cymbal","patternCode": "1000000101000000"}, {"type": "floor","patternCode": "1000000101000000"}]},    patternDisplay:{"name":"rock", "difficulty":"easy", "timeSignaure":"2/4","bpm":60,"instruments":[{"type":"snare","patternCode":"001000100010"}]},
    patternViewOpen: false,
    keyPress:["A","F","J","L"]
}

export const reducer = (state = initialState, action) => {
    if (action.type === PLAYPAUSE) {
        let newPlayingState = state.playingState;
        if (state.playingState === STOP)
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
    


    return state;
}
export default reducer;