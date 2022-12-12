import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_customer
} from "/build/_shared/chunk-C5JZNRBB.js";
import {
  LabelText,
  inputClasses,
  submitButtonClasses
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  Form
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

// app/routes/__app/sales/customers/new.tsx
var import_customer = __toESM(require_customer());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewCustomer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "font-display mb-4",
        children: "New Customer"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers/new.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        method: "post",
        className: "flex flex-col gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "name",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                  children: "Name"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/customers/new.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 34,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "name",
                name: "name",
                className: inputClasses,
                type: "text"
              }, void 0, false, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 37,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__app/sales/customers/new.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "email",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                  children: "Email"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/customers/new.tsx",
                  lineNumber: 41,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 40,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "email",
                name: "email",
                className: inputClasses,
                type: "email"
              }, void 0, false, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 43,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__app/sales/customers/new.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              name: "intent",
              value: "create",
              className: submitButtonClasses,
              children: "Create Customer"
            }, void 0, false, {
              fileName: "app/routes/__app/sales/customers/new.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/customers/new.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/customers/new.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/customers/new.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  NewCustomer as default
};
//# sourceMappingURL=/build/routes/__app/sales/customers/new-PWO2TGHG.js.map
