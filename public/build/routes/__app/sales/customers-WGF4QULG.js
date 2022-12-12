import {
  require_customer
} from "/build/_shared/chunk-C5JZNRBB.js";
import {
  require_dist
} from "/build/_shared/chunk-4GWPHVFQ.js";
import {
  FilePlusIcon
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  NavLink,
  Outlet,
  useLoaderData,
  useTransition
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

// app/routes/__app/sales/customers.tsx
var import_spin_delay = __toESM(require_dist());
var import_session = __toESM(require_session());
var import_customer = __toESM(require_customer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Customers() {
  var _a, _b, _c;
  const { customers } = useLoaderData();
  const transition = useTransition();
  let loadingCustomer;
  if ((_a = transition.location) == null ? void 0 : _a.state) {
    loadingCustomer = (_c = (_b = transition.location) == null ? void 0 : _b.state) == null ? void 0 : _c.customer;
  }
  const showSkeleton = (0, import_spin_delay.useSpinDelay)(Boolean(loadingCustomer), {
    delay: 200,
    minDuration: 300
  });
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
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Create new customer"
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 51,
                  columnNumber: 30
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-[12rem] overflow-y-scroll",
            children: customers.map((customer) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: customer.id,
              state: { customer },
              prefetch: "intent",
              className: ({ isActive }) => "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : ""),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:14px] font-bold leading-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: customer.name
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/customers.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:12px] font-medium leading-4 text-gray-400",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: customer.email
                  }, void 0, false, {
                    fileName: "app/routes/__app/sales/customers.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 70,
                  columnNumber: 15
                }, this)
              ]
            }, customer.id, true, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex w-1/2 flex-col justify-between",
        children: [
          loadingCustomer && showSkeleton ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomerSkeleton, {
            name: loadingCustomer.name,
            email: loadingCustomer.email
          }, void 0, false, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
            className: "p-2 text-center",
            children: "Note: this is arbitrarily slow to demonstrate pending UI."
          }, void 0, false, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/customers.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function CustomerSkeleton({ name, email }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:14px] font-bold leading-6",
        children: email
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 97,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:32px] font-bold leading-[40px]",
        children: name
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-m-h3 font-bold leading-8",
        children: "Invoices"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, false, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-[56px] items-center border-t border-gray-100",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "h-[14px] w-full animate-pulse rounded bg-gray-300",
              children: "\xA0"
            }, void 0, false, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-[56px] items-center border-t border-gray-100",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "h-[14px] w-full animate-pulse rounded bg-gray-300",
              children: "\xA0"
            }, void 0, false, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/sales/customers.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
export {
  Customers as default
};
//# sourceMappingURL=/build/routes/__app/sales/customers-WGF4QULG.js.map
