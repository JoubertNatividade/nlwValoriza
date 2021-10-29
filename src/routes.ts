import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsContoller } from "./controller/ListUserSendComplimentsContoller";
import { ListUserReceiverComplimentsContoller } from "./controller/ListUserReceiverComplimentsContoller";
import { LitTagContoller } from "./controller/ListTagController";
import { ListUsersContoller } from "./controller/ListUsersContoller";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const creatCompliementController = new CreateComplimentController()

const listUserSendComplimentsContoller = new ListUserSendComplimentsContoller()
const listUserReceiverComplimentsContoller = new ListUserReceiverComplimentsContoller()
const listUsersAll = new ListUsersContoller()

const litTagContoller = new LitTagContoller()


router.post("/tags", ensureAuthenticated ,ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle )
router.post("/sessions", authenticateUserController.handle )
router.post("/compliments", ensureAuthenticated, creatCompliementController.handle )

router.get("/tags/list", litTagContoller.handle)


router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsContoller.handle)
router.get("/users/compliments/receiver",ensureAuthenticated, listUserReceiverComplimentsContoller.handle)

router.get("/users/listAll",ensureAuthenticated, listUsersAll.handle )



export { router }
