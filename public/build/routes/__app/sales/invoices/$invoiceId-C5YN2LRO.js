import {
  require_deposit
} from "/build/_shared/chunk-MOKNKYWM.js";
import {
  require_invoice
} from "/build/_shared/chunk-332B3U2Z.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  currencyFormatter,
  parseDate
} from "/build/_shared/chunk-AEPAPHU6.js";
import {
  LabelText,
  inputClasses,
  submitButtonClasses
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  Link,
  useCatch,
  useFetcher,
  useLoaderData,
  useLocation,
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

// app/routes/__app/sales/invoices/$invoiceId.tsx
var import_invoice = __toESM(require_invoice());
var import_session = __toESM(require_session());
var import_deposit = __toESM(require_deposit());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function validateAmount(amount) {
  if (amount <= 0)
    return "Must be greater than 0";
  if (Number(amount.toFixed(2)) !== amount) {
    return "Must only have two decimal places";
  }
  return null;
}
function validateDepositDate(date) {
  if (Number.isNaN(date.getTime())) {
    return "Please enter a valid date";
  }
  return null;
}
var lineItemClassName = "flex justify-between border-t border-gray-100 py-4 text-[14px] leading-[24px]";
function InvoiceRoute() {
  const data = useLoaderData();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: `../../customers/${data.customerId}`,
        className: "text-[length:14px] font-bold leading-6 text-blue-600 underline",
        children: data.customerName
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:32px] font-bold leading-[40px]",
        children: currencyFormatter.format(data.totalAmount)
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: data.dueStatus === "paid" ? "text-green-brand" : data.dueStatus === "overdue" ? "text-red-brand" : "",
            children: data.dueDisplay
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 122,
            columnNumber: 9
          }, this),
          ` \u2022 Invoiced ${data.invoiceDateDisplay}`
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      data.lineItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineItemDisplay, {
        description: item.description,
        unitPrice: item.unitPrice,
        quantity: item.quantity
      }, item.id, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `${lineItemClassName} font-bold`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: "Net Total"
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: currencyFormatter.format(data.totalAmount)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 146,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 144,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-8"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 148,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Deposits, {}, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 149,
        columnNumber: 7
      }, this)
    ]
  }, location.key, true, {
    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
function Deposits() {
  var _a;
  const data = useLoaderData();
  const newDepositFetcher = useFetcher();
  const formRef = (0, import_react2.useRef)(null);
  const deposits = [...data.deposits];
  if (newDepositFetcher.submission) {
    const amount = Number(newDepositFetcher.submission.formData.get("amount"));
    const depositDateVal = newDepositFetcher.submission.formData.get("depositDate");
    const depositDate = typeof depositDateVal === "string" ? parseDate(depositDateVal) : null;
    if (!validateAmount(amount) && depositDate && !validateDepositDate(depositDate)) {
      deposits.push({
        id: "new",
        amount,
        depositDateFormatted: depositDate.toLocaleDateString()
      });
    }
  }
  const errors = (_a = newDepositFetcher.data) == null ? void 0 : _a.errors;
  (0, import_react2.useEffect)(() => {
    var _a2, _b, _c;
    if (!formRef.current)
      return;
    if (newDepositFetcher.state !== "idle")
      return;
    const formEl = formRef.current;
    if (errors == null ? void 0 : errors.amount) {
      (_a2 = formEl.elements.amount) == null ? void 0 : _a2.focus();
    } else if (errors == null ? void 0 : errors.depositDate) {
      (_b = formEl.elements.depositDate) == null ? void 0 : _b.focus();
    } else if (document.activeElement === formEl.elements.intent) {
      formEl.reset();
      (_c = formEl.elements.amount) == null ? void 0 : _c.focus();
    }
  }, [newDepositFetcher.state, errors]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "font-bold leading-8",
        children: "Deposits"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 212,
        columnNumber: 7
      }, this),
      deposits.length > 0 ? deposits.map((deposit) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: lineItemClassName,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: `../../deposits/${deposit.id}`,
            className: "text-blue-600 underline",
            children: deposit.depositDateFormatted
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: currencyFormatter.format(deposit.amount)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this)
        ]
      }, deposit.id, true, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: "None yet"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(newDepositFetcher.Form, {
        method: "post",
        className: "grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2",
        ref: formRef,
        noValidate: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "min-w-[100px]",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-wrap items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "depositAmount",
                      children: "Amount"
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                      lineNumber: 237,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 236,
                    columnNumber: 13
                  }, this),
                  (errors == null ? void 0 : errors.amount) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                    id: "amount-error",
                    className: "text-d-p-xs text-red-600",
                    children: errors.amount
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 240,
                    columnNumber: 15
                  }, this) : null
                ]
              }, void 0, true, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 235,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "depositAmount",
                name: "amount",
                type: "number",
                className: inputClasses,
                min: "0.01",
                step: "any",
                required: true,
                "aria-invalid": Boolean(errors == null ? void 0 : errors.amount) || void 0,
                "aria-errormessage": (errors == null ? void 0 : errors.amount) ? "amount-error" : void 0
              }, void 0, false, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 245,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 234,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-wrap items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "depositDate",
                      children: "Date"
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                      lineNumber: 260,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 259,
                    columnNumber: 13
                  }, this),
                  (errors == null ? void 0 : errors.depositDate) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                    id: "depositDate-error",
                    className: "text-d-p-xs text-red-600",
                    children: errors.depositDate
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 263,
                    columnNumber: 15
                  }, this) : null
                ]
              }, void 0, true, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 258,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "depositDate",
                name: "depositDate",
                type: "date",
                className: `${inputClasses} h-[34px]`,
                required: true
              }, void 0, false, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 268,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 257,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid grid-cols-1 gap-4 lg:col-span-2 lg:flex",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "depositNote",
                      children: "Note"
                    }, void 0, false, {
                      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                      lineNumber: 283,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 282,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    id: "depositNote",
                    name: "note",
                    type: "text",
                    className: inputClasses
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 285,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 281,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-end",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  className: submitButtonClasses,
                  name: "intent",
                  value: "create-deposit",
                  children: "Create"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                  lineNumber: 293,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 292,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 280,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 228,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
    lineNumber: 211,
    columnNumber: 5
  }, this);
}
function LineItemDisplay({
  description,
  quantity,
  unitPrice
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: lineItemClassName,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: description
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 319,
        columnNumber: 7
      }, this),
      quantity === 1 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[10px]",
        children: [
          "(",
          quantity,
          "x)"
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 320,
        columnNumber: 32
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: currencyFormatter.format(unitPrice)
      }, void 0, false, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 321,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
    lineNumber: 318,
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
        'No invoice found with the ID of "',
        params.invoiceId,
        '"'
      ]
    }, void 0, true, {
      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
      lineNumber: 332,
      columnNumber: 7
    }, this);
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "absolute inset-0 flex justify-center bg-red-100 pt-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "text-red-brand text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-[14px] font-bold",
          children: "Oh snap!"
        }, void 0, false, {
          fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
          lineNumber: 347,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "px-2 text-[12px]",
          children: "There was a problem. Sorry."
        }, void 0, false, {
          fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
          lineNumber: 348,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
      lineNumber: 346,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
    lineNumber: 345,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  InvoiceRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/invoices/$invoiceId-C5YN2LRO.js.map
