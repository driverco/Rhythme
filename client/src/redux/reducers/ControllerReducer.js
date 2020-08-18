import { PLAYPAUSE, REWIND, CHANGEBPM,TOGGLEPATTERNVIEW, SETPATTERN, SETPATTERNDISPLAY } from "../actions/ControllerActions";

export const STOP = 0;
export const PLAYING = 1;

const initialState = {
    playingState: STOP,
    bpm:60,
    pattern:{"name":"rock", "difficulty":"easy", "numberInstr":1,"timeSignaure":"2/4","bpm":60,"instruments":[{"type":"snare","patternCode":"001000100010"}]},
    patternDisplay:{"name":"rock", "difficulty":"easy", "numberInstr":1,"timeSignaure":"2/4","bpm":60,"instruments":[{"type":"snare","patternCode":"001000100010"}]},
    patternViewOpen: false
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