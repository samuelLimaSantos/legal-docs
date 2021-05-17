import { inject, injectable } from 'tsyringe';
import { ILetterOfAttorney, ILetterOfAttorneyData } from '../../repositories/ILetterOfAttorneyRepository';
import { generateText } from '../../utils/generateText';

@injectable()
class GeneratePDFLetterOfAttorneyUseCase {
  constructor(
    @inject('LetterOfAttorneyRepository')
    private letterOfAttorneyRepository: ILetterOfAttorney,
  ) {}

  async execute({
    name,
    address,
    cpf,
    identity,
    maritalStatus,
    nationality,
    numberOfProcess,
  }: ILetterOfAttorneyData) {
    const textContent = generateText({
      name,
      address,
      cpf,
      identity,
      maritalStatus,
      nationality,
      numberOfProcess,
    });

    const pdf = await this.letterOfAttorneyRepository.generatePdf(textContent);

    return pdf;
  }
}

export { GeneratePDFLetterOfAttorneyUseCase };
