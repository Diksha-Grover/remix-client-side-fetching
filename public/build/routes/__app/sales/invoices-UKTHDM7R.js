import {
  require_invoice
} from "/build/_shared/chunk-332B3U2Z.js";
import {
  currencyFormatter
} from "/build/_shared/chunk-AEPAPHU6.js";
import {
  FilePlusIcon,
  LabelText
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  NavLink,
  Outlet,
  useLoaderData
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

// app/routes/__app/sales/invoices.tsx
var import_invoice = __toESM(require_invoice());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function InvoicesRoute() {
  const data = useLoaderData();
  const hundo = data.dueSoonAmount + data.overdueAmount;
  const dueSoonPercent = Math.floor(data.dueSoonAmount / hundo * 100);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center justify-between gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoicesInfo, {
            label: "Overdue",
            amount: data.overdueAmount
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-4 flex-1 overflow-hidden rounded-full",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-yellow-brand flex-1"
              }, void 0, false, {
                fileName: "app/routes/__app/sales/invoices.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-green-brand",
                style: { width: `${dueSoonPercent}%` }
              }, void 0, false, {
                fileName: "app/routes/__app/sales/invoices.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoicesInfo, {
            label: "Due Soon",
            amount: data.dueSoonAmount,
            right: true
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
        children: "Invoice List"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-2"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoiceList, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/__app/sales/invoices.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/invoices.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function InvoicesInfo({
  label,
  amount,
  right
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: right ? "text-right" : "",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
        children: label
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:18px] text-black",
        children: currencyFormatter.format(amount)
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/invoices.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
function InvoiceList({ children }) {
  const { invoiceListItems } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex overflow-hidden rounded-lg border border-gray-100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-1/2 border-r border-gray-100",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            to: "new",
            prefetch: "intent",
            className: ({ isActive }) => "block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : ""),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex gap-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilePlusIcon, {}, void 0, false, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 96,
                  columnNumber: 13
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Create new invoice"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 96,
                  columnNumber: 30
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__app/sales/invoices.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "max-h-96 overflow-y-scroll",
            children: invoiceListItems.map((invoice) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: invoice.id,
              prefetch: "intent",
              className: ({ isActive }) => "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : ""),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:14px] font-bold leading-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: invoice.name
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 112,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: currencyFormatter.format(invoice.totalAmount)
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 113,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 111,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:12px] font-medium leading-4 text-gray-400",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: invoice.number
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 116,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "uppercase " + (invoice.dueStatus === "paid" ? "text-green-brand" : invoice.dueStatus === "overdue" ? "text-red-brand" : ""),
                      children: invoice.dueStatusDisplay
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 117,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 115,
                  columnNumber: 15
                }, this)
              ]
            }, invoice.id, true, {
              fileName: "app/routes/__app/sales/invoices.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-1/2",
        children
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/invoices.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
export {
  InvoicesRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/invoices-UKTHDM7R.js.map
