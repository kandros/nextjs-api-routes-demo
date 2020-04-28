// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { increment } from "../../lib/shared";

export default (req, res) => {
  increment();
  res.statusCode = 200;
  res.json({ ok: true });
};
