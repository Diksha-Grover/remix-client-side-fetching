import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var inputClasses = "text-lg w-full rounded border border-gray-500 px-2 py-1";
var submitButtonClasses = "w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400";
var dangerButtonClasses = "w-full rounded bg-red-600 py-2 px-4 text-white hover:bg-red-700 focus:bg-red-500";
function LabelText({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "text-[12px] font-medium uppercase leading-[24px] text-gray-400",
    children
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function FullFakebooksLogo({
  size,
  position
}) {
  const [logoSize, textSize] = {
    sm: [`h-4 w-4`, `text-d-p-sm`],
    lg: [`h-12 w-12`, `text-d-h2`]
  }[size];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex items-center ${position === "center" ? "justify-center" : ""} text-[color:#23BF1F]`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FakebooksLogo, {
        className: `relative top-[1px] ${logoSize}`
      }, void 0, false, {
        fileName: "app/components.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-1"
      }, void 0, false, {
        fileName: "app/components.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `font-display ${textSize}`,
        children: "Fakebooks"
      }, void 0, false, {
        fileName: "app/components.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function FakebooksLogo({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      fill: "#23BF1F",
      fillRule: "evenodd",
      d: "M12 3a9 9 0 000 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 001.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 00-9-9zm-4 8a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm3 4a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z",
      clipRule: "evenodd"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function FilePlusIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "24px",
    height: "24px",
    fill: "none",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M11.25 19.25h-3.5a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2H14L18.25 9v2.25M17 14.75v4.5M19.25 17h-4.5"
      }, void 0, false, {
        fileName: "app/components.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M18 9.25h-4.25V5"
      }, void 0, false, {
        fileName: "app/components.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function PlusIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "24px",
    height: "24px",
    fill: "none",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M12 5.75v12.5M18.25 12H5.75"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function MinusIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "24px",
    height: "24px",
    fill: "none",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M18.25 12.25H5.75"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function CevronDownIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M15.25 10.75 12 14.25l-3.25-3.5"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
function TrashIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "m5.75 7.75.841 9.673a2 2 0 0 0 1.993 1.827h5.832a2 2 0 0 0 1.993-1.827l.841-9.673H5.75ZM9.75 10.75v5.5M13.25 10.75v5.5M8.75 7.75v-1a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v1M4.75 7.75h13.5",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 125,
    columnNumber: 5
  }, this);
}
function LogoutIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "m15.75 8.75 3.5 3.25-3.5 3.25M19 12h-8.25M15.25 4.75h-8.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
function UpRightArrowIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M17.25 15.25v-8.5h-8.5M17 7 6.75 17.25"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}
function SpinnerIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: "app/components.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}
function InvoiceDetailsFallback() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-[56px] items-center border-t border-gray-100",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "h-[14px] w-full animate-pulse rounded bg-gray-300",
          children: "\xA0"
        }, void 0, false, {
          fileName: "app/components.tsx",
          lineNumber: 183,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components.tsx",
        lineNumber: 182,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-[56px] items-center border-t border-gray-100",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "h-[14px] w-full animate-pulse rounded bg-gray-300",
          children: "\xA0"
        }, void 0, false, {
          fileName: "app/components.tsx",
          lineNumber: 188,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components.tsx",
        lineNumber: 187,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components.tsx",
    lineNumber: 181,
    columnNumber: 5
  }, this);
}

export {
  inputClasses,
  submitButtonClasses,
  dangerButtonClasses,
  LabelText,
  FullFakebooksLogo,
  FilePlusIcon,
  PlusIcon,
  MinusIcon,
  CevronDownIcon,
  TrashIcon,
  LogoutIcon,
  UpRightArrowIcon,
  SpinnerIcon,
  InvoiceDetailsFallback
};
//# sourceMappingURL=/build/_shared/chunk-QVG7WVI2.js.map
