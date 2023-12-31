#!/usr/bin/env node

/* eslint-disable no-console */
import fs from "node:fs";
import openapiTS from "openapi-typescript";
import yargs from "yargs";

// const { factory } = ts;

const argv = yargs(process.argv.slice(2))
  .option("schema", {
    describe: "Path to the OpenAPI schema",
    demandOption: true,
    type: "string",
  })
  .option("output", {
    describe: "Path to the output TypeScript file",
    demandOption: true,
    type: "string",
  })
  .help().argv;

// const DATE = factory.createTypeReferenceNode("Date", undefined);
// const NULL = factory.createLiteralTypeNode(factory.createNull()); // `null`

const generateTypes = async () => {
  try {
    const arg = await argv;

    const ast = await openapiTS(new URL(arg.schema), {
      transform: (schemaObject) => {
        if ("format" in schemaObject && schemaObject.format === "date-time") {
          return schemaObject.nullable ? "Date | null" : "Date";
        }
      },
    });
    const contents = ast;

    fs.writeFileSync(arg.output, contents);

    console.log(`Types generated successfully and written to ${arg.output}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

generateTypes();
