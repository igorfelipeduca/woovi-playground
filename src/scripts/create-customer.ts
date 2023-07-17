import { apiWithLog } from "@woovi/apiwithlog";
import { CreateCustomerDTO } from "../dto/create-customer.dto";
import { faker } from "@faker-js/faker";
import generateCPF from "../lib/generateCPF";
import { appID, baseUrl } from "../config";

const mockCustomerData: CreateCustomerDTO = {
  name: faker.person.fullName(),
  taxID: generateCPF(),
};

const run = async () => {
  const url = `${baseUrl}/api/v1/customer`;

  const options = {
    method: "POST",
    body: JSON.stringify(mockCustomerData),
    headers: {
      Authorization: appID,
      "Content-Type": "application/json",
    },
  };

  const request = await apiWithLog(url, options);
  const response = await request.json();

  console.log(response);
};

(async () => {
  try {
    await run();
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    process.exit(1);
  }

  process.exit(0);
})();
