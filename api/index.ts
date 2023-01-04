import type {VercelRequest, VercelResponse} from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
    const timeZone = (req.query.zone as string) || "Europe/London";
    const dateString = new Date().toLocaleString("en-GB", { timeZone });
    const date = new Date(dateString);

  return res.send(date.getFullYear());
};