import { Confession } from "../models/confession.schema";

export default defineEventHandler(async (event) => {  
  console.log(
    "New request: " + getRequestURL(event)
  );
});
