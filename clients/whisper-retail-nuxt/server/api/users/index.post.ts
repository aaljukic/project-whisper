import { randomUUID } from "crypto";
import { User } from "../../models/user.schema";

export default defineEventHandler(async (filter) => {
  try {
    console.log("SAVING NEW USER...");
    const newUser = await User.create({
      id: randomUUID(),
      isAdmin: false,
      lastActivity: Date.now(),
    });
    console.log("SAVED NEW USER!");
    return newUser
  } catch (error) {
    return error;
  }
});
