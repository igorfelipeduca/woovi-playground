# Woovi Playground

Woovi API's functionalities applyed to typescript ES scripts.

## Install using Yarn (recommended)

To install the project, first clone its repository into your local machine.

```bash
git clone https://github.com/igorfelipeduca/woovi-playground
```

When it is done, start installing the dependencies using [Yarn](https://yarnpkg.com/).

```bash
yarn install
```

And then run the command `cd woovi-playground` to enter the project's folder

## Install using Npm

To install the repository using NPM, you may clone the project the same way as it is done at the example above. Once the project is in your local machine, install the project dependencies using [Npm](https://npmjs.com) CLI.

```bash
npm install
```

## Configure the project

To configure the project, you need to create an account at [Woovi](https://woovi.com).

Once your account is created, head to the [API/Plugins page](https://app.woovi.com/home/applications/tab/tutorial).

Click in the **"New Api/Plugin"** button and select the **Plugin** option. Give the plugin a name and then proceed with the creation.

Select the created Plugin and copy its **AppID** and **Client ID**.
Once they are copied, run the following command in your terminal

### 1. Using the command `cp` (Linux, macOS, e Windows com Git Bash)

```bash
cp .env.example .env
```

### 2. Using the command `copy` (Windows CMD or PowerShell)

```bash
copy .env.example .env
```

After running the command, you may see that a file called `.env` is now created.
Enter inside of the `.env` file and replace its variables to your Woovi Plugin credentials.

## How to run

Once your project is cloned and all of the dependencies are installed, you can run an specific script using this following command:

### Running with Yarn

```bash
yarn es src/scripts/{file}.ts
```

### Running with Npm

```bash
npm run src/scripts/{file}.ts
```

## API reference

- [charge](./docs/charge.md)
- [customer](./docs/customer.md)
