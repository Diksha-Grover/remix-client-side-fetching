import {
  require_invoice
} from "/build/_shared/chunk-332B3U2Z.js";
import {
  require_customer
} from "/build/_shared/chunk-C5JZNRBB.js";
import {
  NavLink,
  Outlet,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-TCCY4H4V.js";
import {
  require_session
} from "/build/_shared/chunk-GLWAIFE6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__app/sales.tsx
var import_customer = __toESM(require_customer());
var import_invoice = __toESM(require_invoice());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var linkClassName = ({ isActive }) => isActive ? "font-bold text-black" : "";
function SalesRoute() {
  const data = useLoaderData();
  const matches = useMatches();
  const indexMatches = matches.some((m) => m.id === "routes/__app/sales/index");
  const invoiceMatches = matches.some(
    (m) => m.id === "routes/__app/sales/invoices"
  );
  const customerMatches = matches.some(
    (m) => m.id === "routes/__app/sales/customers"
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative h-full p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "font-display text-d-h3 text-black",
        children: "Sales"
      }, void 0, false, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-6"
      }, void 0, false, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium text-gray-400",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            to: ".",
            className: linkClassName({ isActive: indexMatches }),
            children: "Overview"
          }, void 0, false, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            prefetch: "intent",
            to: "subscriptions",
            className: linkClassName,
            children: "Subscriptions"
          }, void 0, false, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            prefetch: "intent",
            to: data.firstInvoiceId ? `invoices/${data.firstInvoiceId}` : "invoices",
            className: linkClassName({ isActive: invoiceMatches }),
            children: "Invoices"
          }, void 0, false, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            prefetch: "intent",
            to: data.firstCustomerId ? `customers/${data.firstCustomerId}` : "Customers",
            className: linkClassName({ isActive: customerMatches }),
            children: "Customers"
          }, void 0, false, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            prefetch: "intent",
            to: "deposits",
            className: linkClassName,
            children: "Deposits"
          }, void 0, false, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, false, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
export {
  SalesRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales-5MAML4NU.js.map
