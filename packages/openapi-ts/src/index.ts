import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";
import ts from "typescript";

const DATE = ts.factory.createIdentifier("Date"); // `Date`
const NULL = ts.factory.createLiteralTypeNode(ts.factory.createNull()); // `null`

const ast = await openapiTS(
  new URL(
    "http://aladin-env-v1.ap-southeast-1.elasticbeanstalk.com/api/v3/api-docs",
    import.meta.url,
  ),
  {
    transform(schemaObject) {
      if (schemaObject.format === "date-time") {
        return schemaObject.nullable ? ts.factory.createUnionTypeNode([DATE, NULL]) : DATE;
      }
    },
  },
);
const contents = astToString(ast);

// (optional) write to file
fs.writeFileSync("./my-schema.ts", contents);
