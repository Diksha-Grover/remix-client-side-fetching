import {
  require_deposit
} from "/build/_shared/chunk-MOKNKYWM.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  TrashIcon
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  Form,
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

// app/routes/__app/sales/deposits/$depositId.tsx
var import_deposit = __toESM(require_deposit());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DepositRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-8",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex justify-between",
      children: [
        data.depositNote ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: [
            "Note:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "pl-1",
              children: data.depositNote
            }, void 0, false, {
              fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-m-p-sm md:text-d-p-sm uppercase text-gray-500",
          children: "No note"
        }, void 0, false, {
          fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              title: "Delete deposit",
              name: "intent",
              value: "delete",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon, {}, void 0, false, {
                fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  return null;
}
export {
  CatchBoundary,
  DepositRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/deposits/$depositId-LHATMYDG.js.map
