import {
  require_deposit
} from "/build/_shared/chunk-MOKNKYWM.js";
import {
  currencyFormatter
} from "/build/_shared/chunk-AEPAPHU6.js";
import {
  clsx_m_default
} from "/build/_shared/chunk-6OU4J75P.js";
import {
  CevronDownIcon
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  Link,
  useLoaderData,
  useOutlet,
  useParams
} from "/build/_shared/chunk-TCCY4H4V.js";
import {
  require_session
} from "/build/_shared/chunk-GLWAIFE6.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__app/sales/deposits.tsx
var React = __toESM(require_react());
var import_deposit = __toESM(require_deposit());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Deposits() {
  const data = useLoaderData();
  const outlet = useOutlet();
  const { depositId } = useParams();
  const depositNotFound = depositId && data.deposits.every((d) => d.id !== depositId);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "overflow-hidden rounded-lg border border-gray-200",
    children: [
      depositNotFound ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-12 text-red-500",
        children: [
          'No deposit found with the ID of "',
          depositId,
          '"'
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/deposits.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
        className: "w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
            className: "border-b-2 border-gray-200",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Date"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Invoice"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 36,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Customer"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 37,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Amount"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 38,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__app/sales/deposits.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/deposits.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
            className: "max-h-[100px]",
            children: data.deposits.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(React.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                        to: d.id === depositId ? "." : d.id,
                        className: "flex justify-center",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CevronDownIcon, {
                          className: clsx_m_default({
                            "-rotate-90": d.id === depositId
                          })
                        }, void 0, false, {
                          fileName: "app/routes/__app/sales/deposits.tsx",
                          lineNumber: 50,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/__app/sales/deposits.tsx",
                        lineNumber: 46,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 45,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: d.depositDateFormatted
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 57,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                        className: "text-blue-600 underline",
                        to: `../invoices/${d.invoice.id}`,
                        children: d.invoice.number
                      }, void 0, false, {
                        fileName: "app/routes/__app/sales/deposits.tsx",
                        lineNumber: 61,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 60,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                        className: "text-blue-600 underline",
                        to: `../customers/${d.invoice.customer.id}`,
                        children: d.invoice.customer.name
                      }, void 0, false, {
                        fileName: "app/routes/__app/sales/deposits.tsx",
                        lineNumber: 69,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 68,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: currencyFormatter.format(d.amount)
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 44,
                  columnNumber: 15
                }, this),
                d.id === depositId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                    colSpan: 5,
                    children: outlet
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/deposits.tsx",
                    lineNumber: 82,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 81,
                  columnNumber: 17
                }, this) : null
              ]
            }, d.id, true, {
              fileName: "app/routes/__app/sales/deposits.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: "app/routes/__app/sales/deposits.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/deposits.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/deposits.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  Deposits as default
};
//# sourceMappingURL=/build/routes/__app/sales/deposits-D72EY3NV.js.map
