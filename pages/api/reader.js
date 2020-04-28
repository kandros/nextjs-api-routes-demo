// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getCounter } from "../../lib/shared";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ counter: getCounter() });
};
