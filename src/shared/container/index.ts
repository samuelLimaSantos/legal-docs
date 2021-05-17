import { container } from 'tsyringe';
import { LetterOfAttorneyRepository } from '../../modules/letterOfAttorney/infra/pdfkit';
import { ILetterOfAttorney } from '../../modules/letterOfAttorney/repositories/ILetterOfAttorneyRepository';

container.registerSingleton<ILetterOfAttorney>(
  'LetterOfAttorneyRepository',
  LetterOfAttorneyRepository,
);
