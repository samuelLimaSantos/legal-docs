import { Router } from 'express';
import { GeneratePDFLetterOfAttorneyController } from '../../../../modules/letterOfAttorney/useCases/generatePDF/generatePDFLetterOfAttorneyController';

const letterOfAttorneyRoutes = Router();
const generatePDFLetterOfAttorneyController = new GeneratePDFLetterOfAttorneyController();

letterOfAttorneyRoutes.post('/procuracao', generatePDFLetterOfAttorneyController.handle);

export { letterOfAttorneyRoutes };
