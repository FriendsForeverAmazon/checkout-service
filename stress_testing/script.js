import http from "k6/http";
import { sleep } from "k6";

export const options = {
  duration: '30s',
  rps: 500,
};

export default function () {
  http.get('http://localhost:3000/cart/1');
  // sleep(0.1);
}
