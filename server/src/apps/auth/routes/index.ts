import { Router } from "express";
import fs from "fs";

export function registerRoutes(router: Router) {
  try {
    const files = fs.readdirSync(__dirname);
    const regex = /route/;
    files.forEach((file) => {
      if (regex.test(file)) {
        const route = require(`${__dirname}/${file}`);
        route.register(router);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
