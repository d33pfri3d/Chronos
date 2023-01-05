import type {VercelRequest, VercelResponse} from '@vercel/node';
import { getDateBasedOnTimezone } from './_utils';

export default (req: VercelRequest, res: VercelResponse) => {
    const date = getDateBasedOnTimezone(req.query.timezone as string)
    const responseData = date.getFullYear();
    return res.status(200).json(responseData);
};