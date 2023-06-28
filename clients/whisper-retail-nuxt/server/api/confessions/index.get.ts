import { Confession } from "../../models/confession.schema";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log(query);
  const sortOrder = query.sortOrder || "desc";

  // (likeCount, dislikeCount, or creationDate)
  const sortField = query.sortField || "creationDate";
  
  try {
    console.log("FETCHING ALL CONFESSIONS...");
    const confessionList = await Confession.find({}).sort({ [String(sortField)]: sortOrder === "asc" ? 1 : -1 });
    console.log("FETCHED ALL CONFESSIONS!", confessionList);
    return confessionList;
  } catch (error) {
    return error;
  }
});
