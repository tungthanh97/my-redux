export const CHANGENAME = "CHANGENAME";
export const RESETNAME = "RESETNAME";

export const changeNameAction = (name) => ({ type: CHANGENAME, name });
export const resetNameAction = () => ({ type: RESETNAME });
