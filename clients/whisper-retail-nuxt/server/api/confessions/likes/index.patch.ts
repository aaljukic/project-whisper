import { randomUUID } from "crypto";
import { Confession } from "../../../models/confession.schema";
import { Dislike } from "../../../models/dislike.schema";
import { Like } from "../../../models/like.schema";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event)
  console.log(query);
  
  try {
    console.log("CHECKING IF DILIKED...");
    const isDisliked = await Dislike.findOne({
      user: query.anonymousUserID,
      confession: query.itemId,
    });
    console.log("CHECKED IF DILIKED! " + isDisliked);


    if (isDisliked) {
      console.log("UPDATING DISLIKE BECAUSE IT EXIST...");
      const newDislike = await Confession.updateOne(
      {id: isDisliked.confession,},
      { $inc: { dislikeCount: -1, } },
      { new: true }
      );
      await Dislike.findByIdAndDelete(isDisliked._id);
      console.log("UPDATED DISLIKE BECAUSE IT EXIST! ", newDislike);
    }

    
    console.log("CREATING NEW LIKE...", query.anonymousUserID);
    const newLike = await Like.create({
      id: randomUUID(),
      user: query.anonymousUserID,
      creationDate: Date.now(),
      confession: query.itemId,
    });
    console.log("CREATED NEW LIKE!");
    
    console.log("UPDATING CONFESSION LIKE...");
    const newConfession = await Confession.updateOne(
    {id: query.itemId,},
    { $inc: { likeCount: 1 } },
    { new: true }
    );
    console.log("UPDATED CONFESSION LIKE! ", newConfession);
    return newConfession
  } catch (error) {
    return error;
  }
});
