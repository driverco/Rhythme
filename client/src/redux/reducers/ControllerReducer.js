import { PLAYSTOP, CHANGEBPM, TOGGLEPATTERNVIEW, TOGGLEPATTERNEDIT, SETPATTERN, SETPATTERNDISPLAY, TOGGLEPATTERNBEAT, ADDMUSICALTIME, STOP, PLAYING, TOGGLEDEMOPLAY, SETREPEATTIMES, FINISHED, ENDGAME, RESTART } from "../actions/ControllerActions";

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
    typeOfInstruments: ["snare", "kick", "cymbal", "floor"],
    changed: false

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
                patternDisplay: action.pattern,
                changed: !state.changed
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

        case TOGGLEPATTERNBEAT:
            let instrumentPattern = state.patternDisplay.instruments[action.instrumentNumber].patternCode;
            let chars = instrumentPattern.split("");
            chars[action.beatPos] = (chars[action.beatPos] === "0" ? "1" : "0");
            instrumentPattern = chars.join("");
            let patternDisplayNew = state.patternDisplay;
            patternDisplayNew.instruments[action.instrumentNumber].patternCode = instrumentPattern;
            return {
                ...state,
                patternDisplay: patternDisplayNew,
                changed: !state.changed
            }
        case ADDMUSICALTIME:
            patternDisplayNew = state.patternDisplay;
            state.patternDisplay.instruments.map(function (inst, index) {
                patternDisplayNew.instruments[index].patternCode = inst.patternCode + "0".repeat(state.patternDisplay.timeSignature[0] * 2);
                return "";
            });

            return {
                ...state,
                patternDisplay: patternDisplayNew,
                changed: !state.changed
            }


        default:
            return state;
    };
}
export default reducer;