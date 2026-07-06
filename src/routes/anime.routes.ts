import { AnimeController } from "../controller/anime.controller";
import { Router } from "express";

const router = Router();
const AnimeControllerObj = new AnimeController();

//Funcionalidades para mexer no banco de dados
router.post("/",AnimeControllerObj.create);
router.put("/:id",AnimeControllerObj.update);
router.delete("/:id",AnimeControllerObj.delete);

//Funcionalidades de reading
router.get("/",AnimeControllerObj.listAll);
router.get("/:id",AnimeControllerObj.searchId);


export {router as animeRouterObject};