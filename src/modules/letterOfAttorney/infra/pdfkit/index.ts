import PDFkit from 'pdfkit';
import { IDocumentFormat } from '../../dtos/DocumentFormat';
import { ILetterOfAttorney } from '../../repositories/ILetterOfAttorneyRepository';

class LetterOfAttorneyRepository implements ILetterOfAttorney {
  async generatePdf(text: IDocumentFormat): Promise<PDFKit.PDFDocument> {
    const pdf = new PDFkit({
      size: 'A4',
    });

    // Title
    pdf
      .fontSize(11)
      .font('Times-Bold')
      .text(text.title, {
        align: 'center',
        underline: true,
      });

    // Outorgante
    pdf
      .moveDown(3)
      .font('Times-Bold')
      .text(text.grantor.titleStrongUnderline, {
        underline: true,
        continued: true,
        lineGap: 1.5,
      })
      .font('Times-Bold')
      .text(text.grantor.nameStrong, {
        continued: true,
        underline: false,
        lineGap: 1.5,
      })
      .font('Times-Roman')
      .text(text.grantor.restText, {
        align: 'justify',
        underline: false,
        lineGap: 1.5,

      });

    // Outorgados
    pdf
      .moveDown(2)
      .font('Times-Bold')
      .text(text.granted.titleStrongUnderline, {
        align: 'justify',
        underline: true,
        continued: true,
        lineGap: 1.5,

      })
      .text(text.granted.nameOneStrong, {
        continued: true,
        lineGap: 1.5,
        underline: false,
      })
      .font('Times-Roman')
      .text(text.granted.between, {
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Bold')
      .text(text.granted.nameTwoStrong, {
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Roman')
      .text(text.granted.betweenTwo, {
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Bold')
      .text(text.granted.advocateStrong, {
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Roman')
      .text(text.granted.rest);

    // Poderes
    pdf
      .moveDown(2)
      .font('Times-Bold')
      .text(text.powers.partOneStrongAndUnderline, {
        align: 'justify',
        underline: true,
        continued: true,
        lineGap: 1.5,

      })
      .font('Times-Roman')
      .text(text.powers.partTwo, {
        continued: true,
        align: 'justify',
        lineGap: 1.5,
        underline: false,
      })
      .font('Times-Italic')
      .text(text.powers.partThreeItalic, {
        lineGap: 1.5,
        align: 'justify',
        continued: true,
      })
      .font('Times-Roman')
      .text(text.powers.partFour, {
        lineGap: 1.5,
        continued: true,
        align: 'justify',
      })
      .font('Times-Bold')
      .text(text.powers.partFiveStrong, {
        lineGap: 1.5,
        align: 'justify',
        continued: true,
      })
      .font('Times-Roman')
      .text(text.powers.partSix, {
        align: 'justify',
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Bold')
      .text(text.powers.partSevenStrong, {
        align: 'justify',
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Roman')
      .text(text.powers.partEight, {
        align: 'justify',
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Bold')
      .text(text.powers.partNineStrong, {
        align: 'justify',
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Roman')
      .text(text.powers.partTen, {
        lineGap: 1.5,
        align: 'justify',
        continued: true,
      })
      .font('Times-Bold')
      .text(text.powers.partElevenStrong, {
        align: 'justify',
        lineGap: 1.5,
        continued: true,
      })
      .font('Times-Roman')
      .text(text.powers.partTwelve, {
        align: 'justify',
        lineGap: 1.5,
      });

    // Data
    pdf
      .moveDown(3)
      .text(text.date, {
        align: 'center',
      });

    // Assinatura
    pdf
      .moveDown(2)
      .text(text.signature.line, {
        align: 'center',
      })
      .moveDown(1)
      .font('Times-Bold')
      .text(text.signature.nameStrong, {
        align: 'center',
      })
      .font('Times-Roman')
      .text(text.signature.grantor, {
        align: 'center',
      });

    pdf.save();
    pdf.end();

    return pdf;
  }
}

export { LetterOfAttorneyRepository };
