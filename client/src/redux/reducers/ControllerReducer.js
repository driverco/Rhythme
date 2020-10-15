import { PLAYSTOP, CHANGEBPM, TOGGLEPATTERNVIEW, TOGGLEPATTERNEDIT, SETPATTERN, SETPATTERNDISPLAY, STOP, PLAYING, TOGGLEDEMOPLAY, SETREPEATTIMES, FINISHED, ENDGAME, RESTART } from "../actions/ControllerActions";

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
    patternEditOpen: false,
    keyPress: ["A", "F", "J", "L"],
    typeOfInstruments: ["snare", "kick", "cymbal", "floor"]

};

export const reducer = (state = initialState, action) => {
    if (action.type === PLAYSTOP) {
        let newPlayingState = state.playingState;
        let patternViewOpen = state.patternViewOpen;
        if (state.playingState === STOP) {
            newPlayingState = PLAYING;
            patternViewOpen = false;
        }
        else{
            newPlayingState = STOP;
        }
        return {
            ...state,
            playingState: newPlayingState,
            patternViewOpen
        }
    }
    else if (action.type === ENDGAME) {
        return {
            ...state,
            playingState: FINISHED
        }
    }
    else if (action.type === CHANGEBPM) {
        return {
            ...state,
            bpm: action.bpm
        }
    }
    else if (action.type === TOGGLEPATTERNVIEW) {
        return {
            ...state,
            patternViewOpen: !state.patternViewOpen
        }
    }
    else if (action.type === TOGGLEPATTERNEDIT) {
        return {
            ...state,
            patternEditOpen: !state.patternEditOpen
        }
    }
    else if (action.type === SETPATTERN) {
        return {
            ...state,
            bpm: action.pattern.bpm,
            pattern: action.pattern,
            patternViewOpen: !state.patternViewOpen,
            playingState: RESTART
        }
    }
    else if (action.type === SETPATTERNDISPLAY) {
        return {
            ...state,
            patternDisplay: action.pattern
        }
    }
    else if (action.type === TOGGLEDEMOPLAY) {
        return {
            ...state,
            demoPlay: !state.demoPlay
        }
    }
    else if (action.type === SETREPEATTIMES) {
        return {
            ...state,
            repeatTimes: action.repeatTimes
        }
    }

    return state;
}
export default reducer;