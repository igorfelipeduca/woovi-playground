export default function generateCPF(): string {
  const randomDigit = (): number => Math.floor(Math.random() * 10);

  const generateCPFBlock = (): string => {
    let block = "";
    for (let i = 0; i < 3; i++) {
      block += randomDigit().toString();
    }
    return block;
  };

  const generateCPFVerifierDigit = (partialCPF: string): number => {
    const cpfDigits = partialCPF.split("").map(Number);
    let sum = 0;

    for (let i = 0; i < cpfDigits.length; i++) {
      sum += cpfDigits[i] * (cpfDigits.length + 1 - i);
    }

    let remainder = sum % 11;
    if (remainder < 2) {
      return 0;
    } else {
      return 11 - remainder;
    }
  };

  const firstBlock = generateCPFBlock();
  const secondBlock = generateCPFBlock();
  const thirdBlock = generateCPFBlock();

  const partialCPF = firstBlock + secondBlock + thirdBlock;
  const firstVerifierDigit = generateCPFVerifierDigit(partialCPF);
  const secondVerifierDigit = generateCPFVerifierDigit(
    partialCPF + firstVerifierDigit.toString()
  );

  return `${firstBlock}${secondBlock}${thirdBlock}${firstVerifierDigit}${secondVerifierDigit}`;
}
