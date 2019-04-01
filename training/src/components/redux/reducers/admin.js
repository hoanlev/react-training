import { IS_ADMIN, IS_NOT_ADMIN } from "../action/adminType";

const initState = {
  isAdmin: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case IS_ADMIN: {
      return { isAdmin: true };
    }
    case IS_NOT_ADMIN: {
      return { isAdmin: false };
    }
    default: {
      return state;
    }
  }
}
