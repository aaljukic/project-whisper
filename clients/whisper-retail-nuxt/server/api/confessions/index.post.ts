import { randomUUID } from "crypto";
import { Confession } from "../../models/confession.schema";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event)
  console.log(query);

  try {
    console.log("SAVING NEW CONFESSION...");
    const newConfession = await Confession.create({
      id: randomUUID(),
      title: query.confessionTitle,
      content: query.confessionContent,
      user: query.anonymousUserID,
      likeCount: 0,
      dislikeCount: 0,
      commentCount: 0,
      creationDate: Date.now(),
      approved: false,
    });
    console.log("SAVED NEW CONFESSION!");
    return newConfession
  } catch (error) {
    return error;
  }
});
