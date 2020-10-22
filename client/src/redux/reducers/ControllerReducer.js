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
    keyPress: ["Q", "R", "U", "P"],
    typeOfInstruments: ["snare", "kick", "cymbal", "floor"]

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYSTOP:
            let newPlayingState = state.playingState;
            let patternViewOpen = state.patternViewOpen;
            if (state.playingState === STOP) {
                newPlayingState = PLAYING;
                patternViewOpen = false;
            }
            else {
                newPlayingState = STOP;
            }
            return {
                ...state,
                playingState: newPlayingState,
                patternViewOpen
            }
        case ENDGAME:
            return {
                ...state,
                playingState: FINISHED
            }
        case CHANGEBPM:
            return {
                ...state,
                bpm: action.bpm
            }

        case TOGGLEPATTERNVIEW:
            return {
                ...state,
                patternViewOpen: !state.patternViewOpen
            }
        case TOGGLEPATTERNEDIT:
            return {
                ...state,
                patternEditOpen: !state.patternEditOpen
            }
        case SETPATTERN:
            return {
                ...state,
                bpm: action.pattern.bpm,
                pattern: action.pattern,
                patternViewOpen: !state.patternViewOpen,
                playingState: RESTART
            }
        case SETPATTERNDISPLAY:
            return {
                ...state,
                patternDisplay: action.pattern
            }
        case TOGGLEDEMOPLAY:
            return {
                ...state,
                demoPlay: !state.demoPlay
            }
        case SETREPEATTIMES:
            return {
                ...state,
                repeatTimes: action.repeatTimes
            }

        default:
            return state;
    }
}
export default reducer;