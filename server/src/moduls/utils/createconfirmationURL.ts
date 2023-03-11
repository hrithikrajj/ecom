import { v4 } from "uuid";
import { redis } from "../../redis";
import { confirmationPrefix } from "../constants/redisPrefixes";
export const createconfirmationURL = async (userdId: number) => {
  const token = v4();
  await redis.set(confirmationPrefix + token, userdId, "ex", 60 * 60 * 24);
  return `http://localhost:3000/confirm-user/${token}`;
};
