import { combineReducers } from "redux";

import counter from "./counter";

import member from "./counter";

import admin from "./admin";

export default combineReducers({ counter, member, admin });
