import { Router } from "express";

import { StatusGetCtrl } from "../controllers/StatusGetCtrl";

export function register(router: Router) {
  const controller = new StatusGetCtrl();
  router.get("/status", function (req, res) {
    controller.run(req, res);
  });
}
