import http from "k6/http";
import { sleep } from "k6";

export const options = {
  duration: '150s',
  rps: 10000,
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default function () {
  // http.get(`http://13.58.27.1:3000/cart/${Math.round(getRandomArbitrary(9000000, 10000000))}`);
  http.get('http://localhost:3000/cart/' + Math.round(getRandomArbitrary(9000000, 10000000)));
  // sleep(0.1);
}
