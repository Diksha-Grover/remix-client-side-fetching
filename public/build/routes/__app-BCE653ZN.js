import {
  clsx_m_default
} from "/build/_shared/chunk-6OU4J75P.js";
import {
  require_dist
} from "/build/_shared/chunk-4GWPHVFQ.js";
import {
  FullFakebooksLogo,
  LogoutIcon,
  SpinnerIcon,
  UpRightArrowIcon
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  useTransition
} from "/build/_shared/chunk-TCCY4H4V.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__app.tsx
var import_spin_delay = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AppRoute() {
  const transition = useTransition();
  const showSpinner = (0, import_spin_delay.useSpinDelay)(transition.state !== "idle", {
    delay: 200,
    minDuration: 300
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative flex h-full rounded-lg bg-white text-gray-600",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "border-r border-gray-100 bg-gray-50",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "p-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-wrap items-center gap-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: ".",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullFakebooksLogo, {
                    size: "sm",
                    position: "left"
                  }, void 0, false, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 23,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 22,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, {
                  visible: showSpinner
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 25,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 21,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "h-7"
            }, void 0, false, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col font-bold text-gray-800",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "dashboard",
                  children: "Dashboard"
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 29,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "accounts",
                  children: "Accounts"
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "sales",
                  children: "Sales"
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 31,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "expenses",
                  children: "Expenses"
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 32,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "reports",
                  children: "Reports"
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://github.com/kentcdodds/advanced-remix",
                  className: "my-1 flex gap-1 py-1 px-2 pr-16 text-[length:14px]",
                  children: [
                    "GitHub ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpRightArrowIcon, {}, void 0, false, {
                      fileName: "app/routes/__app.tsx",
                      lineNumber: 38,
                      columnNumber: 22
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
                  method: "post",
                  action: "/logout",
                  className: "my-1 py-1 px-2 pr-16 text-[length:14px]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "flex gap-1 font-bold",
                    children: [
                      "Logout ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoutIcon, {}, void 0, false, {
                        fileName: "app/routes/__app.tsx",
                        lineNumber: 47,
                        columnNumber: 24
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 46,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 41,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-1",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function NavItem({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
    to,
    prefetch: "intent",
    className: ({ isActive }) => `my-1 py-1 px-2 pr-16 text-[length:14px] ${isActive ? "rounded-md bg-gray-100" : ""}`,
    children
  }, void 0, false, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function Spinner({ visible }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpinnerIcon, {
    className: clsx_m_default("animate-spin transition-opacity", {
      "opacity-0": !visible,
      "opacity-100": visible
    })
  }, void 0, false, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
export {
  AppRoute as default
};
//# sourceMappingURL=/build/routes/__app-BCE653ZN.js.map
