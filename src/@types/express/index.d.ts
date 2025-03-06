//@types/express/index.d.ts
// Add the following code to src/@types/express/index.d.ts:

import { Request } from "express";

declare module "express" {
  export interface Request {
    user?: { id: string };
  }
}
