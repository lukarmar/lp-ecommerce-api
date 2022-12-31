import { Router } from "express";
import productsRoutes from "../../products/routes/products.router";
import healthcheckRoutes from "./healthcheck/healthcheck.router";

const routes = Router();

routes.use("/healthcheck", healthcheckRoutes);
routes.use("/products", productsRoutes);

export default routes;