import { VercelRequest, VercelResponse } from "@vercel/node";
import { getDateBasedOnTimezone } from "./_utils";

export default (req: VercelRequest, res: VercelResponse) => {
  const currentSwitzerlandDate = getDateBasedOnTimezone("Europe/Zurich");
  const timeInSeconds = currentSwitzerlandDate.getTime() / 1000;

  const beatTime = Math.abs(timeInSeconds % 86_400 / 86.4)
  
  return res.status(200).json(beatTime);
};