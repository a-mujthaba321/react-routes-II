import axios from 'axios';

export const FETCH_ATOLLS = 'FETCH_ATOLLS';

const ROOT_URL = 'http://localhost:8080';

export function fetchAtolls() {
  const request = axios.get(`${ROOT_URL}/atolls`);

  return {
    type: FETCH_ATOLLS,
    payload: request
  };
}
