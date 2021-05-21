interface IDocumentFormat {
  title: string;
  grantor: {
    titleStrongUnderline: string;
    nameStrong: string;
    restText: string
  };
  granted: {
    titleStrongUnderline: string;
    nameOneStrong: string;
    between: string;
    nameTwoStrong: string;
    betweenTwo: string;
    advocateStrong: string;
    rest: string;
  };
  powers: {
    partOneStrongAndUnderline: string;
    partTwo: string;
    partThreeItalic: string;
    partFour: string;
    partFiveStrong: string;
    partSix: string;
    partSevenStrong: string;
    partEight: string;
    partNineStrong: string;
    partTen: string;
    partElevenStrong: string;
    partTwelve: string;
  };
  date: string;
  signature: {
    line: string;
    nameStrong: string;
    grantor: string;
  }
}

export { IDocumentFormat };
