
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import jwtInfo from "../config/auth";


export async function authenticateMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const headersAuthorization = req.headers.authorization;

    if (!headersAuthorization) {
      return res.status(401).json({ message: "Token no provided" });
    }

    const parts = headersAuthorization.split(" ")

    console.log("parts", parts.length);

    if(parts.length !== 2) {
      return res.status(401).json({ message: "Invalid token type" });
    }

    const [ scheme, token ] = parts

    if(scheme.indexOf("Bearer") !== 0){
      return res.status(401).json({ message: "Token"})
    }
    console.log("headersAuthorization", headersAuthorization);

    jwt.verify(token, jwtInfo.jwtInfo.secret, (err) => {
      console.log("err", err)
      if (err) {
        return res.status(401).json({ message: "Token invalid/expired" });
      }
    })

    next();

    res.status(201).json({});
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
