import { Like } from "../../../models/like.schema";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event)
  console.log(query);

  try {
    console.log("FETCHING SINGLE LIKE INFO...");
    const likeInfo = await Like.findOne({
      user: query.anonymousUserID,
      confession: query.itemId,
    });
    console.log("FETCHED SINGLE LIKE INFO! ", likeInfo);
    return likeInfo
  } catch (error) {
    return error;
  }
});
