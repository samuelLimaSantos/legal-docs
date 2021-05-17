import PDFkit from 'pdfkit';
import { ILetterOfAttorney } from '../../repositories/ILetterOfAttorneyRepository';

class LetterOfAttorneyRepository implements ILetterOfAttorney {
  async generatePdf(text: string): Promise<PDFKit.PDFDocument> {
    const pdf = new PDFkit();

    pdf
      .fontSize(11)
      .text(text);

    pdf.save();
    pdf.end();

    return pdf;
  }
}

export { LetterOfAttorneyRepository };
