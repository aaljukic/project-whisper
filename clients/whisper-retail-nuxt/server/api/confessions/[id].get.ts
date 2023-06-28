import { Confession } from "../../models/confession.schema";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event)
  console.log(query);

  try {
    console.log("FETCHING SINGLE CONFESSION...");
    const confession = await Confession.findOne({
      id: query.itemId
    });
    console.log("FETCHED SINGLE CONFESSION! ", confession);
    return confession
  } catch (error) {
    return error;
  }
});
