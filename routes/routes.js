import { Router } from "express";
import { addStatement, delStatementId, getStatement , getStatementId, patchStatement } from "../controllers/statement_controller.js";

const routeApp = Router();


routeApp.post('/statement',addStatement)

routeApp.get('/statement',getStatement)
routeApp.get('/statement/:id',getStatementId)
routeApp.patch('/statement/:id',patchStatement)
routeApp.delete('/statement/:id',delStatementId)



export default routeApp;