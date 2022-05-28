import jwt from "jsonwebtoken";
import "dotenv/config";
import textConstants from "../constants/textConstants";

export default (req, res, next) => {
  const token = req.headers.token;
  console.log(req.headers);

  if (token) {
    //verify
    try {
      const isValid = jwt.verify(token, process.env.JWT_SECRET);
      if (isValid) next();
      else
        return res
          .status(403)
          .json({ success: false, message: textConstants.INVALID_TOKEN });
    } catch (err) {
      return res.status(403).json(err);
    }
  } else res.status(403).json(textConstants.TOKEN_NOT_PROVIDED);
};
