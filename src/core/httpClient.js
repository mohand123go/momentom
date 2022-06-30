/* eslint-disable no-nested-ternary */
import axios from "axios";

const { VUE_APP_HRC_BASE_URL, VUE_APP_PUMPKIN_BASE_URL } = process.env;

export default axios.create({
  baseURL: VUE_APP_HRC_BASE_URL,
});

export const pumpkinClient = axios.create({
  baseURL: VUE_APP_PUMPKIN_BASE_URL,
});
