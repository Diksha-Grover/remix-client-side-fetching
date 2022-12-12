import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_customer
} from "/build/_shared/chunk-C5JZNRBB.js";
import {
  currencyFormatter
} from "/build/_shared/chunk-AEPAPHU6.js";
import {
  InvoiceDetailsFallback
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  Link,
  useCatch,
  useFetcher,
  useLoaderData,
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

// app/routes/__app/sales/customers/$customerId.tsx
var import_react2 = __toESM(require_react());
var import_customer = __toESM(require_customer());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var lineItemClassName = "border-t border-gray-100 text-[14px] h-[56px]";
function CustomerRoute() {
  const data = useLoaderData();
  if (!("customerInfo" in data)) {
    throw new Error("customerInfo is not available");
  }
  const params = useParams();
  const { load: loadInvoiceDetails, ...invoiceDetailsFetcher } = useFetcher();
  (0, import_react2.useEffect)(() => {
    loadInvoiceDetails(
      `/sales/customers/${params.customerId}?invoiceDetails=true`
    );
  }, [loadInvoiceDetails, params.customerId]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:14px] font-bold leading-6",
        children: data.customerInfo.email
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:32px] font-bold leading-[40px]",
        children: data.customerInfo.name
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-m-h3 font-bold leading-8",
        children: "Invoices"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this),
      invoiceDetailsFetcher.state === "idle" && invoiceDetailsFetcher.data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
        className: "w-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
          children: invoiceDetailsFetcher.data.customerDetails.invoiceDetails.map((invoiceDetails) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            className: lineItemClassName,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  className: "text-blue-600 underline",
                  to: `../../invoices/${invoiceDetails.id}`,
                  children: invoiceDetails.number
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                className: "text-center uppercase " + (invoiceDetails.dueStatus === "paid" ? "text-green-brand" : invoiceDetails.dueStatus === "overdue" ? "text-red-brand" : ""),
                children: invoiceDetails.dueStatusDisplay
              }, void 0, false, {
                fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                className: "text-right",
                children: currencyFormatter.format(invoiceDetails.totalAmount)
              }, void 0, false, {
                fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                lineNumber: 100,
                columnNumber: 17
              }, this)
            ]
          }, invoiceDetails.id, true, {
            fileName: "app/routes/__app/sales/customers/$customerId.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: "app/routes/__app/sales/customers/$customerId.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoiceDetailsFallback, {}, void 0, false, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/customers/$customerId.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-12 text-red-500",
      children: [
        'No customer found with the ID of "',
        params.customerId,
        '"'
      ]
    }, void 0, true, {
      fileName: "app/routes/__app/sales/customers/$customerId.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this);
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
export {
  CatchBoundary,
  CustomerRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/customers/$customerId-GJDGPN76.js.map
