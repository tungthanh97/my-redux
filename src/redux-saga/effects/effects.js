export const CALL_EFFECT = 'effect/CALL';
export const PUT_EFFECT = 'effect/PUT';
export const TAKE_EFFECT = 'effect/TAKE';
export const SELECT_EFFECT = 'effect/SELECT';
export const FORK = 'FORK';
export const CANCEL = 'CANCEL';

export const call = (fn, ...args) => {
  return {
    type: CALL_EFFECT,
    fn,
    args: args,
  };
};

export const put = (action) => {
  return {
    type: PUT_EFFECT,
    action,
  };
};

export const select = (selector) => ({ type: SELECT_EFFECT, selector });
export const take = (actionType) => ({ type: TAKE_EFFECT, actionType });
export const fork = (saga, ...args) => ({ type: FORK, saga, args });
export const cancel = (action) => ({ type: CANCEL, action });
