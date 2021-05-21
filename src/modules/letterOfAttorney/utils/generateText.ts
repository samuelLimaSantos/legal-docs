import moment from 'moment';
import { IDocumentFormat } from '../dtos/DocumentFormat';
import { ILetterOfAttorneyData } from '../repositories/ILetterOfAttorneyRepository';

export function generateText({
  address,
  cpf,
  identity,
  maritalStatus,
  name,
  nationality,
  numberOfProcess,
}: ILetterOfAttorneyData) {
  moment.locale('pt-br');

  const documentFormat: IDocumentFormat = {
    title: 'PROCURAÇÃO',
    grantor: {
      titleStrongUnderline: 'OUTORGANTE',
      nameStrong: `: ${name}`,
      restText: `, ${nationality}, ${maritalStatus}, portador da cédula de identidade nº. ${identity} SDS/PE e CPF nº. ${cpf}, residente e domiciliado à ${address.street}, nº. ${address.number}, ${address.neighborhood}, ${address.city}/${address.state}, CEP: ${address.cep}.`,
    },
    granted: {
      titleStrongUnderline: 'OUTORGADO',
      nameOneStrong: ': MARCOS JOSÉ SANTOS MEIRA',
      between: ', OAB/PE nº. 17.374 e ',
      nameTwoStrong: 'CLEHILTON DA SILVA FRANÇA NETO',
      betweenTwo: ', OAB/PE n° 31.093, na qualidade de integrantes da ',
      advocateStrong: 'M MEIRA ADVOGADOS ASSOCIADOS E CONSULTORIA',
      rest: ', inscrita no CNPJ sob o nº. 03.111.306/0001-03 e registrada na OAB/PE sob o nº. 418, com endereço profissional à Rua Barão de Souza Leão, nº. 425, 14º andar, Sala 1407, Boa Viagem, Recife/PE, CEP: 51.030-300.',
    },
    powers: {
      partOneStrongAndUnderline: 'PODERES',
      partTwo: ': Das cláusulas ',
      partThreeItalic: 'ad-judicia',
      partFour: ', de representação para o foro em geral, perante a instância administrativa e judicial, em qualquer juízo, instância ou tribunal, podendo assinar documentos, desistir, transigir, e ainda, substabelecer, no todo ou em parte, com ou sem reservas de poderes, para atuar em defesa do ',
      partFiveStrong: 'OUTORGANTE',
      partSix: ' no processo de habilitação de herdeiros nos autos da Execução nº. ',
      partSevenStrong: numberOfProcess,
      partEight: ', decorrente da Ação Ordinária nº. ',
      partNineStrong: '0000946-40.1991.4.05.8300 ',
      partTen: ' (91.0000946-6), em trâmite perante a 5ª Vara Federal da Seção Judiciária de Pernambuco, podendo tudo o mais fazer para o bom e fiel cumprimento do presente mandato, ',
      partElevenStrong: ' que servirá como contrato de prestação de serviços advocatícios, pactuando-se que o outorgante repassará aos outorgados, a título de honorários advocatícios, o percentual de  15 % (quinze por cento) sobre o montante que vier a receber através do referido procedimento',
      partTwelve: ', inclusive multas, ficando expressamente autorizada a retenção dos honorários aqui estipulados, nos termos do Art. 22, §4° do EAOAB.',
    },
    date: `Recife/PE, ${moment().format('LL')}.`,
    signature: {
      line: '________________________________________',
      nameStrong: name,
      grantor: '(Outorgante)',
    },
  };

  return documentFormat;
}
