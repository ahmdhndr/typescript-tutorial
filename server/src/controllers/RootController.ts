import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send("Not permitted");
}

@controller("")
class RootController {
  @get("/")
  getRoute(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <h2>You are logged in</h2>
        <a href="/auth/logout">Logout</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        <h2>You are not logged in</h2>
        <a href="/auth/login">Login</a>
      </div>
    `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome to protected route, logged in user");
  }
}
