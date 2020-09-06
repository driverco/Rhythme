export const PLAYSTOP = "PLAYSTOP"
export const ENDGAME = "ENDGAME"
export const CHANGEBPM = "CHANGEBPM"
export const TOGGLEPATTERNVIEW = "TOGGLEPATTERNVIEW"
export const SETPATTERN = "SETPATTERN"
export const SETPATTERNDISPLAY = "SETPATTERNDISPLAY"
export const TOGGLEDEMOPLAY = "TOGGLEDEMOPLAY"
export const SETREPEATTIMES = "SETREPEATTIMES"
export const STOP = 0
export const PLAYING = 1
export const FINISHED = 2


export const playStop = () => ({
    type: PLAYSTOP
});
export const endGame = () => ({
    type: ENDGAME
});
export const changeBPM = (bpm) => ({
    type: CHANGEBPM,
    bpm
});
export const togllePatternView = () => ({
    type: TOGGLEPATTERNVIEW
});
export const setPattern = (pattern) => ({
    type: SETPATTERN,
    pattern
});
export const setPatternDisplay = (pattern) => ({
    type: SETPATTERNDISPLAY,
    pattern
});
export const toggleDemoPlay = () => ({
    type: TOGGLEDEMOPLAY
});
export const setRepeatTimes = (repeatTimes) => ({
    type: SETREPEATTIMES,
    repeatTimes
});

