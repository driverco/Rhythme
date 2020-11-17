import { PLAYSTOP, CHANGEBPM, TOGGLEPATTERNVIEW, TOGGLEPATTERNEDIT, SETPATTERN, SETPATTERNDISPLAY, TOGGLEPATTERNBEAT, ADDMUSICALTIME, STOP, PLAYING, TOGGLEDEMOPLAY, SETREPEATTIMES, FINISHED, ENDGAME, RESTART, SETPLAYERTRANSLATIONS } from "../actions/ControllerActions";

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
    changed: false,
    playerTranslations:{}

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
            };
        case ENDGAME:
            return {
                ...state,
                playingState: FINISHED,
                demoPlay: false
            };
        case CHANGEBPM:
            let bpmToSet = (action.bpm < 30) ? 30 : (action.bpm > 300) ? 300 : action.bpm;
            return {
                ...state,
                bpm: bpmToSet
            };

        case TOGGLEPATTERNVIEW:
            return {
                ...state,
                patternViewOpen: !state.patternViewOpen
            };
        case TOGGLEPATTERNEDIT:
            return {
                ...state,
                patternEditOpen: !state.patternEditOpen
            };
        case SETPATTERN:
            return {
                ...state,
                bpm: action.pattern.bpm,
                pattern: action.pattern,
                patternViewOpen: !state.patternViewOpen,
                playingState: RESTART
            };
        case SETPATTERNDISPLAY:
            return {
                ...state,
                patternDisplay: action.pattern,
                changed: !state.changed
            };
        case TOGGLEDEMOPLAY:
            return {
                ...state,
                demoPlay: !state.demoPlay,
                playingState: PLAYING
            };
        case SETREPEATTIMES:
            let repeats = (action.repeatTimes < 1) ? 1 : (action.repeatTimes > 20) ? 20 : action.repeatTimes;
            return {
                ...state,
                repeatTimes: repeats
            };
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
            };
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
            };
            case SETPLAYERTRANSLATIONS:
                return {
                    ...state,
                    playerTranslations: action.playerTranslations,
                    changed: !state.changed
                };
                
    

        default:
            return state;
    }
}
export default reducer;