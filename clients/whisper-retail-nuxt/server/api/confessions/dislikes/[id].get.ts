import { Dislike } from "../../../models/dislike.schema";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event)
  console.log(query);

  try {
    console.log("FETCHING SINGLE DISLIKE INFO...");
    const dislikeInfo = await Dislike.findOne({
      user: query.anonymousUserID,
      confession: query.itemId,
    });
    console.log("FETCHED SINGLE DISLIKE INFO! ", dislikeInfo);
    return dislikeInfo
  } catch (error) {
    return error;
  }
});
