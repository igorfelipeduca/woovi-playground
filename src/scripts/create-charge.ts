import { apiWithLog } from "@woovi/apiwithlog";
import { CreateCustomerDTO } from "../dto/create-customer.dto";
import { faker } from "@faker-js/faker";
import generateCPF from "../lib/generateCPF";
import { appID, baseUrl } from "../config";
import { CreateChargeDTO } from "../dto/create-charge.dto";

const mockChargeData: CreateChargeDTO = {
  correlationID: process.argv[0] as string,
  value: JSON.stringify(Math.floor(Math.random() * 100)),
};

const run = async () => {
  const url = `${baseUrl}/api/v1/charge`;

  const options = {
    method: "POST",
    body: JSON.stringify(mockChargeData),
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
