import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GeneratePDFLetterOfAttorneyUseCase } from './generatePDFLetterOfAttorneyUseCase';

class GeneratePDFLetterOfAttorneyController {
  async handle(request: Request, response: Response) {
    const {
      address,
      cpf,
      identity,
      maritalStatus,
      name,
      nationality,
      numberOfProcess,
    } = request.body;

    const generatePDFLetterOfAttorneyUseCase = container
      .resolve(GeneratePDFLetterOfAttorneyUseCase);

    const pdf = await generatePDFLetterOfAttorneyUseCase.execute({
      address,
      cpf,
      identity,
      maritalStatus,
      name,
      nationality,
      numberOfProcess,
    });

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/pdf');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-disposition', `attachment; filename="procuracao ${name}.pdf"`);

    pdf.pipe(response);
  }
}

export { GeneratePDFLetterOfAttorneyController };
