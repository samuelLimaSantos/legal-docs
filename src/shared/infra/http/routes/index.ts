import { Router } from 'express';
import { letterOfAttorneyRoutes } from './procuracao.routes';

const appRoutes = Router();

appRoutes.use(letterOfAttorneyRoutes);

export { appRoutes };
