import {
  require_react
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/utils.ts
var import_react = __toESM(require_react());
var currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});
function asUTC(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
function parseDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return asUTC(new Date(year, month - 1, day));
}

export {
  currencyFormatter,
  parseDate
};
//# sourceMappingURL=/build/_shared/chunk-AEPAPHU6.js.map
