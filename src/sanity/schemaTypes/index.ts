import { type SchemaTypeDefinition } from "sanity";
import service from "./service";
import product from "./product";
import event from "./event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, product, event],
};
