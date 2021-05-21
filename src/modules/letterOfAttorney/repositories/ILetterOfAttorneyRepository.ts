import { IDocumentFormat } from '../dtos/DocumentFormat';

interface ILetterOfAttorneyData {
  name: string;
  nationality: string;
  maritalStatus: string;
  identity: string;
  cpf: string;
  numberOfProcess: string;
  address: {
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    cep: string;
    state: string;
  }
}

interface ILetterOfAttorney {
  // generatePdf(text: string): Promise<void>;
  generatePdf(text: IDocumentFormat): Promise<PDFKit.PDFDocument>;
}

export { ILetterOfAttorney, ILetterOfAttorneyData };
