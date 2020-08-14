import { PLAYPAUSE, REWIND } from "../actions/ControllerActionType";

export const STOP = 0;
export const PLAYING = 1;

const initialState = {
    playingState: STOP
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
    return state;
}
export default reducer;