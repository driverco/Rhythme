import { PLAYSTOP, CHANGEBPM, TOGGLEPATTERNVIEW, SETPATTERN, SETPATTERNDISPLAY, STOP, PLAYING, TOGGLEDEMOPLAY, SETREPEATTIMES, FINISHED, ENDGAME, RESTART } from "../actions/ControllerActions";

const initialState = {
    playingState: STOP,
    bpm: 60,
    repeatTimes: 1,
    demoPlay: false,
    pattern: { 
        "name": "basic1",
        "difficulty": "easy",
        "timeSignature": "2/4",
        "bpm": 60,
        "instruments": [{
            "type": "snare",
            "patternCode": "1111111111111111"
        }]
    },
    patternDisplay: { "name": "rock", "difficulty": "easy", "timeSignature": "2/4", "bpm": 60, "instruments": [{ "type": "snare", "patternCode": "001000100010" }] },
    patternViewOpen: false,
    keyPress: ["A", "F", "J", "L"]
}

export const reducer = (state = initialState, action) => {
    if (action.type === PLAYSTOP) {
        let newPlayingState = state.playingState;
        let patternViewOpen = state.patternViewOpen;
        if (state.playingState === FINISHED || state.playingState === STOP) {
            newPlayingState = PLAYING;
            patternViewOpen = false;
        }
        else
            newPlayingState = STOP;
        return {
            ...state,
            playingState: newPlayingState,
            patternViewOpen: patternViewOpen
        }
    }
    if (action.type === ENDGAME) {
        return {
            ...state,
            playingState: FINISHED
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
            bpm: action.pattern.bpm,
            pattern: action.pattern,
            patternViewOpen: !state.patternViewOpen,
            playingState: RESTART
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