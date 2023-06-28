import { randomUUID } from "crypto";
import { Confession } from "../../../models/confession.schema";
import { Dislike } from "../../../models/dislike.schema";
import { Like } from "../../../models/like.schema";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event)
  console.log(query);
  
  try {
    console.log("CHECKING IF LIKED...");
    const isLiked = await Like.findOne({
      user: query.anonymousUserID,
      confession: query.itemId,
    });
    console.log("CHECKED IF LIKED! " + isLiked);

    if (isLiked) {
      console.log("UPDATING LIKE BECAUSE IT EXIST...");
      const newLike = await Confession.updateOne(
      {id: isLiked.confession,},
      { $inc: { likeCount: -1 } },
      { new: true }
      );
      await Like.findByIdAndDelete(isLiked._id);
      console.log("UPDATED LIKE BECAUSE IT EXIST! ", newLike);
    }

    
    console.log("CREATING NEW DISLIKE...");
    const newDislike = await Dislike.create({
      id: randomUUID(),
      user: query.anonymousUserID,
      creationDate: Date.now(),
      confession: query.itemId,
    });
    console.log("CREATED NEW DISLIKE!");
    
    console.log("UPDATING CONFESSION DISLIKE...");
    const newConfession = await Confession.updateOne(
    {id: query.itemId,},
    { $inc: { dislikeCount: 1 } },
    { new: true }
    );
    console.log("UPDATED CONFESSION DISLIKE! ", newConfession);
    return newConfession
  } catch (error) {
    return error;
  }
});
