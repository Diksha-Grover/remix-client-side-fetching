var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_node = require("@remix-run/node"), import_isbot = __toESM(require("isbot")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      {
        [callbackName]() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
  unstable_shouldReload: () => unstable_shouldReload
});
var import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_dialog = require("@reach/dialog");

// node_modules/@reach/dialog/styles.css
var styles_default = "/build/_assets/styles-MGWA7S4B.css";

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  return userId === void 0 ? null : getUserById(userId);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(
      redirectTo && redirectTo !== "/" ? `/login?${searchParams}` : "/login"
    );
  }
  return userId;
}
async function requireUser(request) {
  let userId = await requireUserId(request), user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request, redirectTo = request.url) {
  let session = await getSession(request), searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
  return (0, import_node2.redirect)(
    redirectTo && redirectTo !== "/" ? `/login?${searchParams}` : "/login",
    {
      headers: {
        "Set-Cookie": await sessionStorage.destroySession(session)
      }
    }
  );
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PML3WK4C.css";

// app/components.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), inputClasses = "text-lg w-full rounded border border-gray-500 px-2 py-1", submitButtonClasses = "w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400", dangerButtonClasses = "w-full rounded bg-red-600 py-2 px-4 text-white hover:bg-red-700 focus:bg-red-500";
function LabelText({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "text-[12px] font-medium uppercase leading-[24px] text-gray-400",
    children
  }, void 0, !1, {
    fileName: "app/components.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function FullFakebooksLogo({
  size,
  position
}) {
  let [logoSize, textSize] = {
    sm: ["h-4 w-4", "text-d-p-sm"],
    lg: ["h-12 w-12", "text-d-h2"]
  }[size];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex items-center ${position === "center" ? "justify-center" : ""} text-[color:#23BF1F]`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FakebooksLogo, {
        className: `relative top-[1px] ${logoSize}`
      }, void 0, !1, {
        fileName: "app/components.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-1"
      }, void 0, !1, {
        fileName: "app/components.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `font-display ${textSize}`,
        children: "Fakebooks"
      }, void 0, !1, {
        fileName: "app/components.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
      }, void 0, !1, {
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
      }, void 0, !1, {
        fileName: "app/components.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
    }, void 0, !1, {
      fileName: "app/components.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
        }, void 0, !1, {
          fileName: "app/components.tsx",
          lineNumber: 183,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components.tsx",
        lineNumber: 182,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-[56px] items-center border-t border-gray-100",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "h-[14px] w-full animate-pulse rounded bg-gray-300",
          children: "\xA0"
        }, void 0, !1, {
          fileName: "app/components.tsx",
          lineNumber: 188,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components.tsx",
        lineNumber: 187,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components.tsx",
    lineNumber: 181,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: styles_default }
], meta = () => ({
  charset: "utf-8",
  title: "Fakebooks Remix"
});
async function loader({ request }) {
  return (0, import_node3.json)({
    user: await getUser(request)
  });
}
function App() {
  let { user } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: "h-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoutTimer, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function LogoutTimer() {
  let [status, setStatus] = (0, import_react4.useState)("idle"), location = (0, import_react3.useLocation)(), submit = (0, import_react2.useSubmit)(), logoutTime = 1e3 * 60 * 60 * 24, modalTime = logoutTime - 1e3 * 60 * 2, modalTimer = (0, import_react4.useRef)(), logoutTimer = (0, import_react4.useRef)(), logout2 = (0, import_react4.useCallback)(() => {
    submit(
      { redirectTo: location.pathname },
      { method: "post", action: "/logout" }
    );
  }, [submit, location.pathname]), cleanupTimers = (0, import_react4.useCallback)(() => {
    clearTimeout(modalTimer.current), clearTimeout(logoutTimer.current);
  }, []), resetTimers = (0, import_react4.useCallback)(() => {
    cleanupTimers(), modalTimer.current = setTimeout(() => {
      setStatus("show-modal");
    }, modalTime), logoutTimer.current = setTimeout(logout2, logoutTime);
  }, [cleanupTimers, logout2, logoutTime, modalTime]);
  (0, import_react4.useEffect)(() => resetTimers(), [resetTimers, location.key]), (0, import_react4.useEffect)(() => cleanupTimers, [cleanupTimers]);
  function closeModal() {
    setStatus("idle"), resetTimers();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_dialog.Dialog, {
    "aria-label": "Pending Logout Notification",
    isOpen: status === "show-modal",
    onDismiss: closeModal,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "text-d-h3 mb-4",
          children: "Are you still there?"
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "You are going to be logged out due to inactivity. Close this modal to stay logged in."
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "h-8"
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex items-end gap-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              onClick: closeModal,
              className: submitButtonClasses,
              children: "Remain Logged In"
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              onClick: logout2,
              className: dangerButtonClasses,
              children: "Logout"
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 114,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
var unstable_shouldReload = ({ submission }) => (submission == null ? void 0 : submission.action) === "/logout" || (submission == null ? void 0 : submission.action) === "/login";

// app/routes/resources/customers.tsx
var customers_exports = {};
__export(customers_exports, {
  CustomerCombobox: () => CustomerCombobox,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_clsx = __toESM(require("clsx")), import_downshift = require("downshift"), import_react6 = require("react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/invoice.server.ts
var getDaysToDueDate = (date) => Math.ceil(
  (date.getTime() - asUTC(new Date()).getTime()) / (1e3 * 60 * 60 * 24)
);
function getInvoiceDerivedData(invoice) {
  let daysToDueDate = getDaysToDueDate(invoice.dueDate), totalAmount = invoice.lineItems.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  ), totalDeposits = invoice.deposits.reduce(
    (acc, deposit) => acc + deposit.amount,
    0
  ), dueStatus = totalAmount === totalDeposits ? "paid" : totalDeposits > totalAmount ? "overpaid" : daysToDueDate < 0 ? "overdue" : "due", dueStatusDisplay = dueStatus === "paid" ? "Paid" : dueStatus === "overpaid" ? "Overpaid" : dueStatus === "overdue" ? "Overdue" : daysToDueDate === 0 ? "Due today" : daysToDueDate === 1 ? "Due tomorrow" : `Due in ${daysToDueDate} days`;
  return {
    totalAmount,
    totalDeposits,
    daysToDueDate,
    dueStatus,
    dueStatusDisplay
  };
}
function asUTC(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
async function getFirstInvoice() {
  return prisma.invoice.findFirst();
}
async function getInvoiceListItems() {
  return (await prisma.invoice.findMany({
    select: {
      id: !0,
      dueDate: !0,
      number: !0,
      customer: {
        select: { name: !0 }
      },
      lineItems: {
        select: { quantity: !0, unitPrice: !0 }
      },
      deposits: {
        select: { amount: !0 }
      }
    }
  })).map((invoice) => ({
    id: invoice.id,
    name: invoice.customer.name,
    number: invoice.number,
    ...getInvoiceDerivedData(invoice)
  }));
}
async function getInvoiceDetails(invoiceId) {
  let invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: {
      number: !0,
      invoiceDate: !0,
      dueDate: !0,
      customer: {
        select: { id: !0, name: !0 }
      },
      lineItems: {
        select: {
          id: !0,
          quantity: !0,
          unitPrice: !0,
          description: !0
        }
      },
      deposits: {
        select: { id: !0, amount: !0, depositDate: !0 }
      }
    }
  });
  return invoice ? { invoice, ...getInvoiceDerivedData(invoice) } : null;
}
async function createInvoice({
  dueDate,
  customerId,
  lineItems
}) {
  let largestInvoiceNumber = await prisma.invoice.findFirst({
    select: { number: !0 },
    orderBy: { number: "desc" }
  }), nextNumber = largestInvoiceNumber ? largestInvoiceNumber.number + 1 : 1;
  return prisma.invoice.create({
    data: {
      number: nextNumber,
      dueDate,
      customer: { connect: { id: customerId } },
      lineItems: {
        create: lineItems.map((li) => ({
          description: li.description,
          quantity: li.quantity,
          unitPrice: li.unitPrice
        }))
      }
    }
  });
}

// app/models/customer.server.ts
async function searchCustomers(query) {
  let customers = await prisma.customer.findMany({
    select: {
      id: !0,
      name: !0,
      email: !0
    }
  }), lowerQuery = query.toLowerCase();
  return customers.filter((c) => c.name.toLowerCase().includes(lowerQuery) || c.email.toLowerCase().includes(lowerQuery));
}
async function getFirstCustomer() {
  return prisma.customer.findFirst();
}
async function getCustomerListItems() {
  return prisma.customer.findMany({
    select: {
      id: !0,
      name: !0,
      email: !0
    }
  });
}
async function getCustomerInfo(customerId) {
  return prisma.customer.findUnique({
    where: { id: customerId },
    select: { name: !0, email: !0 }
  });
}
async function getCustomerDetails(customerId) {
  await new Promise(
    (resolve) => setTimeout(resolve, Math.random() * 3e3 + 1500)
  );
  let customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: {
      id: !0,
      name: !0,
      email: !0,
      invoices: {
        select: {
          id: !0,
          dueDate: !0,
          number: !0,
          lineItems: {
            select: {
              quantity: !0,
              unitPrice: !0
            }
          },
          deposits: {
            select: { amount: !0 }
          }
        }
      }
    }
  });
  if (!customer)
    return null;
  let invoiceDetails = customer.invoices.map((invoice) => ({
    id: invoice.id,
    number: invoice.number,
    ...getInvoiceDerivedData(invoice)
  }));
  return { name: customer.name, email: customer.email, invoiceDetails };
}
async function createCustomer({
  name,
  email
}) {
  return prisma.customer.create({ data: { email, name } });
}

// app/routes/resources/customers.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  await requireUser(request);
  let query = new URL(request.url).searchParams.get("query");
  return (0, import_tiny_invariant2.default)(typeof query == "string", "query is required"), (0, import_node4.json)({
    customers: await searchCustomers(query)
  });
}
function CustomerCombobox({ error }) {
  var _a;
  let customerFetcher = (0, import_react5.useFetcher)(), id = (0, import_react6.useId)(), customers = ((_a = customerFetcher.data) == null ? void 0 : _a.customers) ?? [], [selectedCustomer, setSelectedCustomer] = (0, import_react6.useState)(null), cb = (0, import_downshift.useCombobox)({
    id,
    onSelectedItemChange: ({ selectedItem }) => {
      setSelectedCustomer(selectedItem);
    },
    items: customers,
    itemToString: (item) => item ? item.name : "",
    onInputValueChange: (changes) => {
      !changes.inputValue || customerFetcher.submit(
        { query: changes.inputValue },
        { method: "get", action: "/resources/customers" }
      );
    }
  }), displayMenu = cb.isOpen && customers.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        name: "customerId",
        type: "hidden",
        value: (selectedCustomer == null ? void 0 : selectedCustomer.id) ?? ""
      }, void 0, !1, {
        fileName: "app/routes/resources/customers.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-wrap items-center gap-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            ...cb.getLabelProps(),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
              children: "Customer"
            }, void 0, !1, {
              fileName: "app/routes/resources/customers.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/resources/customers.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
            id: "customer-error",
            className: "text-d-p-xs text-red-600",
            children: error
          }, void 0, !1, {
            fileName: "app/routes/resources/customers.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this) : null
        ]
      }, void 0, !0, {
        fileName: "app/routes/resources/customers.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        ...cb.getComboboxProps(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          ...cb.getInputProps({
            className: (0, import_clsx.default)("text-lg w-full border border-gray-500 px-2 py-1", {
              "rounded-t rounded-b-0": displayMenu,
              rounded: !displayMenu
            }),
            "aria-invalid": Boolean(error) || void 0,
            "aria-errormessage": error ? "customer-error" : void 0
          })
        }, void 0, !1, {
          fileName: "app/routes/resources/customers.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/resources/customers.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        ...cb.getMenuProps({
          className: (0, import_clsx.default)(
            "absolute z-10 bg-white shadow-lg rounded-b w-full border border-t-0 border-gray-500 max-h-[180px] overflow-scroll",
            { hidden: !displayMenu }
          )
        }),
        children: cb.isOpen ? customers.map((customer, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          className: (0, import_clsx.default)("cursor-pointer py-1 px-2", {
            "bg-green-200": cb.highlightedIndex === index
          }),
          ...cb.getItemProps({ item: customer, index }),
          children: [
            customer.name,
            " (",
            customer.email,
            ")"
          ]
        }, customer.id, !0, {
          fileName: "app/routes/resources/customers.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this)) : null
      }, void 0, !1, {
        fileName: "app/routes/resources/customers.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/resources/customers.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");

// app/utils.ts
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}
var currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});
function asUTC2(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
function parseDate(dateString) {
  let [year, month, day] = dateString.split("-").map(Number);
  return asUTC2(new Date(year, month - 1, day));
}

// app/routes/logout.tsx
async function action({ request }) {
  let formData = await request.formData();
  return logout(request, safeRedirect(formData.get("redirectTo"), "/"));
}
async function loader3() {
  return (0, import_node5.redirect)("/");
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader4,
  meta: () => meta2
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), React = __toESM(require("react"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  return await getUserId(request) ? (0, import_node6.redirect)("/") : (0, import_node6.json)({});
}
async function action2({ request }) {
  let formData = await request.formData(), intent = formData.get("intent"), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node6.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  if (typeof password != "string")
    return (0, import_node6.json)(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node6.json)(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  let user;
  switch (intent) {
    case "signup": {
      if (await getUserByEmail(email))
        return (0, import_node6.json)(
          { errors: { email: "A user already exists with this email" } },
          { status: 400 }
        );
      user = await createUser(email, password);
      break;
    }
    case "login": {
      user = await verifyLogin(email, password);
      break;
    }
    default:
      throw new Error(`Unknown intent: ${intent}`);
  }
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node6.json)(
    { errors: { email: "Invalid email or password" } },
    { status: 400 }
  );
}
var meta2 = () => ({
  title: "Login to Fakebooks"
});
function LoginPage() {
  let [searchParams] = (0, import_react9.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? "", actionData = (0, import_react9.useActionData)(), emailRef = React.useRef(null), passwordRef = React.useRef(null), emailError = null, passwordError = null;
  if (actionData && actionData.errors) {
    let { errors } = actionData;
    emailError = "email" in errors ? errors.email : null, passwordError = "password" in errors ? errors.password : null;
  }
  return React.useEffect(() => {
    var _a, _b;
    emailError ? (_a = emailRef.current) == null || _a.focus() : passwordError && ((_b = passwordRef.current) == null || _b.focus());
  }, [emailError, passwordError]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex min-h-full flex-col justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "mb-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullFakebooksLogo, {
          size: "lg",
          position: "center"
        }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 113,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto w-full max-w-md px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Form, {
          method: "post",
          className: "space-y-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "email",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Email address"
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 118,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      ref: emailRef,
                      id: "email",
                      required: !0,
                      autoFocus: !0,
                      name: "email",
                      type: "email",
                      autoComplete: "email",
                      "aria-invalid": emailError ? !0 : void 0,
                      "aria-describedby": "email-error",
                      className: inputClasses
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 125,
                      columnNumber: 15
                    }, this),
                    emailError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "pt-1 text-red-700",
                      id: "email-error",
                      children: emailError
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 138,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 124,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "password",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Password"
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 146,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      id: "password",
                      ref: passwordRef,
                      name: "password",
                      type: "password",
                      autoComplete: "current-password",
                      "aria-invalid": passwordError ? !0 : void 0,
                      "aria-describedby": "password-error",
                      className: inputClasses
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 153,
                      columnNumber: 15
                    }, this),
                    passwordError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "pt-1 text-red-700",
                      id: "password-error",
                      children: passwordError
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 164,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 152,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 145,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "redirectTo",
              value: redirectTo
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 171,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center justify-between",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    id: "remember",
                    name: "remember",
                    type: "checkbox",
                    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, void 0, !1, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 174,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "remember",
                    className: "ml-2 block text-sm text-gray-900",
                    children: "Remember me"
                  }, void 0, !1, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 180,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/login.tsx",
                lineNumber: 173,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 172,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col gap-4 md:flex-row md:gap-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  name: "intent",
                  value: "login",
                  className: "w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400",
                  children: "Log in"
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 189,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  name: "intent",
                  value: "signup",
                  className: "w-full rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400",
                  children: "Sign Up"
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 197,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 188,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}

// app/routes/__app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => AppRoute
});
var import_react10 = require("@remix-run/react"), import_clsx2 = __toESM(require("clsx")), import_spin_delay = require("spin-delay");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AppRoute() {
  let transition = (0, import_react10.useTransition)(), showSpinner = (0, import_spin_delay.useSpinDelay)(transition.state !== "idle", {
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
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
                  to: ".",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullFakebooksLogo, {
                    size: "sm",
                    position: "left"
                  }, void 0, !1, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 23,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 22,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, {
                  visible: showSpinner
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 25,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 21,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "h-7"
            }, void 0, !1, {
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
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 29,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "accounts",
                  children: "Accounts"
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "sales",
                  children: "Sales"
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 31,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "expenses",
                  children: "Expenses"
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 32,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
                  to: "reports",
                  children: "Reports"
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://github.com/Diksha-Grover/",
                  className: "my-1 flex gap-1 py-1 px-2 pr-16 text-[length:14px]",
                  children: [
                    "GitHub ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpRightArrowIcon, {}, void 0, !1, {
                      fileName: "app/routes/__app.tsx",
                      lineNumber: 38,
                      columnNumber: 22
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Form, {
                  method: "post",
                  action: "/logout",
                  className: "my-1 py-1 px-2 pr-16 text-[length:14px]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "flex gap-1 font-bold",
                    children: [
                      "Logout ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoutIcon, {}, void 0, !1, {
                        fileName: "app/routes/__app.tsx",
                        lineNumber: 47,
                        columnNumber: 24
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 46,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 41,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-1",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function NavItem({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.NavLink, {
    to,
    prefetch: "intent",
    className: ({ isActive }) => `my-1 py-1 px-2 pr-16 text-[length:14px] ${isActive ? "rounded-md bg-gray-100" : ""}`,
    children
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function Spinner({ visible }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpinnerIcon, {
    className: (0, import_clsx2.default)("animate-spin transition-opacity", {
      "opacity-0": !visible,
      "opacity-100": visible
    })
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

// app/routes/__app/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardRoute,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader5({ request }) {
  return await requireUser(request), (0, import_node7.json)({});
}
function DashboardRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: "Look at all these graphs!"
  }, void 0, !1, {
    fileName: "app/routes/__app/dashboard.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

// app/routes/__app/accounts.tsx
var accounts_exports = {};
__export(accounts_exports, {
  default: () => AccountsRoute,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  return await requireUser(request), (0, import_node8.json)({});
}
function AccountsRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: "Hope you have tons of accounts I guess."
  }, void 0, !1, {
    fileName: "app/routes/__app/accounts.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

// app/routes/__app/expenses.tsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesRoute,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  return await requireUser(request), (0, import_node9.json)({});
}
function ExpensesRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: "Hope you don't have a lot of these..."
  }, void 0, !1, {
    fileName: "app/routes/__app/expenses.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

// app/routes/__app/reports.tsx
var reports_exports = {};
__export(reports_exports, {
  default: () => ReportsRoute,
  loader: () => loader8
});
var import_react11 = require("@remix-run/react"), import_node10 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  return await requireUser(request), (0, import_node10.json)({});
}
function ReportsRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative h-full p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "font-display text-d-h3 text-black",
        children: "Reports"
      }, void 0, !1, {
        fileName: "app/routes/__app/reports.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-6"
      }, void 0, !1, {
        fileName: "app/routes/__app/reports.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Form, {
          className: "margin-auto flex justify-center gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "startDate",
                  children: "Start Date"
                }, void 0, !1, {
                  fileName: "app/routes/__app/reports.tsx",
                  lineNumber: 57,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "date",
                  id: "startDate",
                  name: "startDate",
                  className: inputClasses
                }, void 0, !1, {
                  fileName: "app/routes/__app/reports.tsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/reports.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "endDate",
                  children: "End Date"
                }, void 0, !1, {
                  fileName: "app/routes/__app/reports.tsx",
                  lineNumber: 66,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "date",
                  id: "endDate",
                  name: "endDate",
                  className: inputClasses
                }, void 0, !1, {
                  fileName: "app/routes/__app/reports.tsx",
                  lineNumber: 67,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/reports.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: submitButtonClasses,
                children: "Submit"
              }, void 0, !1, {
                fileName: "app/routes/__app/reports.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/reports.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/reports.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/reports.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/reports.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/__app/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  default: () => IndexRoute,
  loader: () => loader9
});
var import_react12 = require("@remix-run/react"), import_node11 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader9({ request }) {
  return await requireUser(request), (0, import_node11.redirect)("/sales/invoices");
}
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      "Go to the",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Link, {
        className: "text-blue-600 underline",
        to: "sales",
        children: "sales"
      }, void 0, !1, {
        fileName: "app/routes/__app/index.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      " ",
      "page..."
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales.tsx
var sales_exports = {};
__export(sales_exports, {
  default: () => SalesRoute,
  loader: () => loader10
});
var import_node12 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader10({ request }) {
  await requireUser(request);
  let [firstInvoice, firstCustomer] = await Promise.all([
    getFirstInvoice(),
    getFirstCustomer()
  ]);
  return (0, import_node12.json)({
    firstInvoiceId: firstInvoice == null ? void 0 : firstInvoice.id,
    firstCustomerId: firstCustomer == null ? void 0 : firstCustomer.id
  });
}
var linkClassName = ({ isActive }) => isActive ? "font-bold text-black" : "";
function SalesRoute() {
  let data = (0, import_react13.useLoaderData)(), matches = (0, import_react13.useMatches)(), indexMatches = matches.some((m) => m.id === "routes/__app/sales/index"), invoiceMatches = matches.some(
    (m) => m.id === "routes/__app/sales/invoices"
  ), customerMatches = matches.some(
    (m) => m.id === "routes/__app/sales/customers"
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative h-full p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "font-display text-d-h3 text-black",
        children: "Sales"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-6"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium text-gray-400",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
            to: ".",
            className: linkClassName({ isActive: indexMatches }),
            children: "Overview"
          }, void 0, !1, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
            prefetch: "intent",
            to: "subscriptions",
            className: linkClassName,
            children: "Subscriptions"
          }, void 0, !1, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
            prefetch: "intent",
            to: data.firstInvoiceId ? `invoices/${data.firstInvoiceId}` : "invoices",
            className: linkClassName({ isActive: invoiceMatches }),
            children: "Invoices"
          }, void 0, !1, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
            prefetch: "intent",
            to: data.firstCustomerId ? `customers/${data.firstCustomerId}` : "Customers",
            className: linkClassName({ isActive: customerMatches }),
            children: "Customers"
          }, void 0, !1, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
            prefetch: "intent",
            to: "deposits",
            className: linkClassName,
            children: "Deposits"
          }, void 0, !1, {
            fileName: "app/routes/__app/sales.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
        fileName: "app/routes/__app/sales.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales/subscriptions.tsx
var subscriptions_exports = {};
__export(subscriptions_exports, {
  default: () => Subscriptions,
  loader: () => loader11
});
var import_node13 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader11({ request }) {
  return await requireUser(request), (0, import_node13.json)({});
}
function Subscriptions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: "Woo. Subs. Money."
  }, void 0, !1, {
    fileName: "app/routes/__app/sales/subscriptions.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

// app/routes/__app/sales/customers.tsx
var customers_exports2 = {};
__export(customers_exports2, {
  default: () => Customers,
  loader: () => loader12
});
var import_react14 = require("@remix-run/react"), import_node14 = require("@remix-run/node"), import_spin_delay2 = require("spin-delay");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader12({ request }) {
  return await requireUser(request), (0, import_node14.json)({
    customers: await getCustomerListItems()
  });
}
function Customers() {
  var _a, _b, _c;
  let { customers } = (0, import_react14.useLoaderData)(), transition = (0, import_react14.useTransition)(), loadingCustomer;
  (_a = transition.location) != null && _a.state && (loadingCustomer = (_c = (_b = transition.location) == null ? void 0 : _b.state) == null ? void 0 : _c.customer);
  let showSkeleton = (0, import_spin_delay2.useSpinDelay)(Boolean(loadingCustomer), {
    delay: 200,
    minDuration: 300
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex overflow-hidden rounded-lg border border-gray-100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-1/2 border-r border-gray-100",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.NavLink, {
            to: "new",
            prefetch: "intent",
            className: ({ isActive }) => "block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : ""),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex gap-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilePlusIcon, {}, void 0, !1, {
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Create new customer"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 51,
                  columnNumber: 30
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "max-h-96 overflow-y-scroll",
            children: customers.map((customer) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.NavLink, {
              to: customer.id,
              state: { customer },
              prefetch: "intent",
              className: ({ isActive }) => "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : ""),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:14px] font-bold leading-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: customer.name
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/customers.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:12px] font-medium leading-4 text-gray-400",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: customer.email
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/customers.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/customers.tsx",
                  lineNumber: 70,
                  columnNumber: 15
                }, this)
              ]
            }, customer.id, !0, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
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
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
            className: "p-2 text-center",
            children: "Note: this is arbitrarily slow to demonstrate pending UI."
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
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
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 97,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:32px] font-bold leading-[40px]",
        children: name
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-m-h3 font-bold leading-8",
        children: "Invoices"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, !1, {
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
            }, void 0, !1, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-[56px] items-center border-t border-gray-100",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "h-[14px] w-full animate-pulse rounded bg-gray-300",
              children: "\xA0"
            }, void 0, !1, {
              fileName: "app/routes/__app/sales/customers.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/customers.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/customers.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/customers.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales/customers/$customerId.tsx
var customerId_exports = {};
__export(customerId_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => CustomerRoute,
  loader: () => loader13
});
var import_node15 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader13({ request, params }) {
  await requireUser(request);
  let { customerId } = params;
  if ((0, import_tiny_invariant3.default)(
    typeof customerId == "string",
    "params.customerId is not available"
  ), new URL(request.url).searchParams.get("invoiceDetails"))
    return (0, import_node15.json)({
      customerDetails: await getCustomerDetails(customerId)
    });
  let customerInfo = await getCustomerInfo(customerId);
  if (!customerInfo)
    throw new Response("not found", { status: 404 });
  return (0, import_node15.json)({
    customerInfo
  });
}
var lineItemClassName = "border-t border-gray-100 text-[14px] h-[56px]";
function CustomerRoute() {
  let data = (0, import_react15.useLoaderData)();
  if (!("customerInfo" in data))
    throw new Error("customerInfo is not available");
  let params = (0, import_react15.useParams)(), { load: loadInvoiceDetails, ...invoiceDetailsFetcher } = (0, import_react15.useFetcher)();
  return (0, import_react16.useEffect)(() => {
    loadInvoiceDetails(
      `/sales/customers/${params.customerId}?invoiceDetails=true`
    );
  }, [loadInvoiceDetails, params.customerId]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:14px] font-bold leading-6",
        children: data.customerInfo.email
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:32px] font-bold leading-[40px]",
        children: data.customerInfo.name
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-m-h3 font-bold leading-8",
        children: "Invoices"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, !1, {
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
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Link, {
                  className: "text-blue-600 underline",
                  to: `../../invoices/${invoiceDetails.id}`,
                  children: invoiceDetails.number
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                className: "text-center uppercase " + (invoiceDetails.dueStatus === "paid" ? "text-green-brand" : invoiceDetails.dueStatus === "overdue" ? "text-red-brand" : ""),
                children: invoiceDetails.dueStatusDisplay
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                className: "text-right",
                children: currencyFormatter.format(invoiceDetails.totalAmount)
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/customers/$customerId.tsx",
                lineNumber: 100,
                columnNumber: 17
              }, this)
            ]
          }, invoiceDetails.id, !0, {
            fileName: "app/routes/__app/sales/customers/$customerId.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/customers/$customerId.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoiceDetailsFallback, {}, void 0, !1, {
        fileName: "app/routes/__app/sales/customers/$customerId.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/customers/$customerId.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react15.useCatch)(), params = (0, import_react15.useParams)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-12 text-red-500",
      children: [
        'No customer found with the ID of "',
        params.customerId,
        '"'
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/sales/customers/$customerId.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this);
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// app/routes/__app/sales/customers/index.tsx
var customers_exports3 = {};
__export(customers_exports3, {
  default: () => InvoiceIndex,
  loader: () => loader14
});
var import_node16 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader14({ request }) {
  await requireUser(request);
  let firstCustomer = await getFirstCustomer();
  return firstCustomer ? (0, import_node16.redirect)(`/sales/customers/${firstCustomer.id}`) : (0, import_node16.json)({});
}
function InvoiceIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-10",
    children: "You don't have any customers \u{1F62D}"
  }, void 0, !1, {
    fileName: "app/routes/__app/sales/customers/index.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/routes/__app/sales/customers/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action3,
  default: () => NewCustomer
});
var import_react17 = require("@remix-run/react"), import_node17 = require("@remix-run/node"), import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function action3({ request }) {
  await requireUser(request);
  let formData = await request.formData(), intent = formData.get("intent");
  switch (intent) {
    case "create": {
      let name = formData.get("name"), email = formData.get("email");
      (0, import_tiny_invariant4.default)(typeof name == "string", "name is required"), (0, import_tiny_invariant4.default)(typeof email == "string", "email is required");
      let customer = await createCustomer({ name, email });
      return (0, import_node17.redirect)(`/sales/customers/${customer.id}`);
    }
  }
  return new Response(`Unsupported intent: ${intent}`, { status: 400 });
}
function NewCustomer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "font-display mb-4",
        children: "New Customer"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/customers/new.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Form, {
        method: "post",
        className: "flex flex-col gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "name",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                  children: "Name"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/customers/new.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 34,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "name",
                name: "name",
                className: inputClasses,
                type: "text"
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 37,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/customers/new.tsx",
                  lineNumber: 41,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 40,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "email",
                name: "email",
                className: inputClasses,
                type: "email"
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/customers/new.tsx",
                lineNumber: 43,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
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
            }, void 0, !1, {
              fileName: "app/routes/__app/sales/customers/new.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/customers/new.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/customers/new.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/customers/new.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales/deposits.tsx
var deposits_exports = {};
__export(deposits_exports, {
  default: () => Deposits,
  loader: () => loader15
});
var React2 = __toESM(require("react")), import_react18 = require("@remix-run/react"), import_node18 = require("@remix-run/node");

// app/models/deposit.server.ts
async function getDepositListItems() {
  return (await prisma.deposit.findMany({
    orderBy: {
      depositDate: "desc"
    },
    select: {
      id: !0,
      depositDate: !0,
      amount: !0,
      invoice: {
        select: {
          id: !0,
          number: !0,
          customer: {
            select: {
              id: !0,
              name: !0
            }
          }
        }
      }
    }
  })).map((d) => ({
    ...d,
    depositDateFormatted: d.depositDate.toLocaleDateString()
  }));
}
async function getDepositDetails(depositId) {
  return prisma.deposit.findFirst({
    where: { id: depositId },
    select: { note: !0 }
  });
}
async function createDeposit(data) {
  return prisma.deposit.create({ data });
}
async function deleteDeposit(id) {
  return prisma.deposit.delete({ where: { id } });
}

// app/routes/__app/sales/deposits.tsx
var import_clsx3 = __toESM(require("clsx")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader15({ request }) {
  return await requireUser(request), (0, import_node18.json)({
    deposits: await getDepositListItems()
  });
}
function Deposits() {
  let data = (0, import_react18.useLoaderData)(), outlet = (0, import_react18.useOutlet)(), { depositId } = (0, import_react18.useParams)(), depositNotFound = depositId && data.deposits.every((d) => d.id !== depositId);
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
      }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Date"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Invoice"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 36,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Customer"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 37,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                  className: "border border-gray-100 py-2 px-4",
                  children: "Amount"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 38,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/sales/deposits.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/deposits.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
            className: "max-h-[100px]",
            children: data.deposits.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(React2.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
                        to: d.id === depositId ? "." : d.id,
                        className: "flex justify-center",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CevronDownIcon, {
                          className: (0, import_clsx3.default)({
                            "-rotate-90": d.id === depositId
                          })
                        }, void 0, !1, {
                          fileName: "app/routes/__app/sales/deposits.tsx",
                          lineNumber: 50,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/sales/deposits.tsx",
                        lineNumber: 46,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 45,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: d.depositDateFormatted
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 57,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
                        className: "text-blue-600 underline",
                        to: `../invoices/${d.invoice.id}`,
                        children: d.invoice.number
                      }, void 0, !1, {
                        fileName: "app/routes/__app/sales/deposits.tsx",
                        lineNumber: 61,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 60,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
                        className: "text-blue-600 underline",
                        to: `../customers/${d.invoice.customer.id}`,
                        children: d.invoice.customer.name
                      }, void 0, !1, {
                        fileName: "app/routes/__app/sales/deposits.tsx",
                        lineNumber: 69,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 68,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "border border-gray-100 py-2 px-4",
                      children: currencyFormatter.format(d.amount)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/deposits.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 44,
                  columnNumber: 15
                }, this),
                d.id === depositId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                    colSpan: 5,
                    children: outlet
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/deposits.tsx",
                    lineNumber: 82,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/deposits.tsx",
                  lineNumber: 81,
                  columnNumber: 17
                }, this) : null
              ]
            }, d.id, !0, {
              fileName: "app/routes/__app/sales/deposits.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/deposits.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/deposits.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/deposits.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales/deposits/$depositId.tsx
var depositId_exports = {};
__export(depositId_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action4,
  default: () => DepositRoute,
  loader: () => loader16
});
var import_react19 = require("@remix-run/react"), import_node19 = require("@remix-run/node");
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader16({ request, params }) {
  await requireUser(request);
  let { depositId } = params;
  (0, import_tiny_invariant5.default)(typeof depositId == "string", "params.depositId is not available");
  let depositDetails = await getDepositDetails(depositId);
  if (!depositDetails)
    throw new Response("not found", { status: 404 });
  return (0, import_node19.json)({
    depositNote: depositDetails.note
  });
}
async function action4({ request, params }) {
  let { depositId } = params;
  (0, import_tiny_invariant5.default)(typeof depositId == "string", "params.depositId is not available");
  let intent = (await request.formData()).get("intent");
  switch ((0, import_tiny_invariant5.default)(typeof intent == "string", "intent must be a string"), intent) {
    case "delete":
      return await deleteDeposit(depositId), (0, import_node19.redirect)("/sales/deposits");
    default:
      throw new Error(`Unsupported intent: ${intent}`);
  }
}
function DepositRoute() {
  let data = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-8",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex justify-between",
      children: [
        data.depositNote ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: [
            "Note:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "pl-1",
              children: data.depositNote
            }, void 0, !1, {
              fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-m-p-sm md:text-d-p-sm uppercase text-gray-500",
          children: "No note"
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              title: "Delete deposit",
              name: "intent",
              value: "delete",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon, {}, void 0, !1, {
                fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/sales/deposits/$depositId.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  return null;
}

// app/routes/__app/sales/deposits/index.tsx
var deposits_exports2 = {};
__export(deposits_exports2, {
  default: () => DepositsIndexRoute
});
function DepositsIndexRoute() {
  return null;
}

// app/routes/__app/sales/invoices.tsx
var invoices_exports = {};
__export(invoices_exports, {
  default: () => InvoicesRoute,
  loader: () => loader17
});
var import_react20 = require("@remix-run/react");
var import_node20 = require("@remix-run/node"), import_react21 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader17({ request }) {
  await requireUser(request);
  let invoiceListItems = await getInvoiceListItems(), dueSoonAmount = invoiceListItems.reduce((sum, li) => {
    if (li.dueStatus !== "due")
      return sum;
    let remainingBalance = li.totalAmount - li.totalDeposits;
    return sum + remainingBalance;
  }, 0), overdueAmount = invoiceListItems.reduce((sum, li) => {
    if (li.dueStatus !== "overdue")
      return sum;
    let remainingBalance = li.totalAmount - li.totalDeposits;
    return sum + remainingBalance;
  }, 0);
  return (0, import_node20.json)({
    invoiceListItems,
    overdueAmount,
    dueSoonAmount
  });
}
function InvoicesRoute() {
  let data = (0, import_react21.useLoaderData)(), hundo = data.dueSoonAmount + data.overdueAmount, dueSoonPercent = Math.floor(data.dueSoonAmount / hundo * 100);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center justify-between gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoicesInfo, {
            label: "Overdue",
            amount: data.overdueAmount
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-4 flex-1 overflow-hidden rounded-full",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-yellow-brand flex-1"
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-green-brand",
                style: { width: `${dueSoonPercent}%` }
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoicesInfo, {
            label: "Due Soon",
            amount: data.dueSoonAmount,
            right: !0
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
        children: "Invoice List"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-2"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoiceList, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__app/sales/invoices.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
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
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:18px] text-black",
        children: currencyFormatter.format(amount)
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/invoices.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
function InvoiceList({ children }) {
  let { invoiceListItems } = (0, import_react21.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex overflow-hidden rounded-lg border border-gray-100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-1/2 border-r border-gray-100",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.NavLink, {
            to: "new",
            prefetch: "intent",
            className: ({ isActive }) => "block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : ""),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex gap-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilePlusIcon, {}, void 0, !1, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 96,
                  columnNumber: 13
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Create new invoice"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 96,
                  columnNumber: 30
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/sales/invoices.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "max-h-96 overflow-y-scroll",
            children: invoiceListItems.map((invoice) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.NavLink, {
              to: invoice.id,
              prefetch: "intent",
              className: ({ isActive }) => "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : ""),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:14px] font-bold leading-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: invoice.name
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 112,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: currencyFormatter.format(invoice.totalAmount)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 113,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 111,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between text-[length:12px] font-medium leading-4 text-gray-400",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: invoice.number
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 116,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "uppercase " + (invoice.dueStatus === "paid" ? "text-green-brand" : invoice.dueStatus === "overdue" ? "text-red-brand" : ""),
                      children: invoice.dueStatusDisplay
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices.tsx",
                      lineNumber: 117,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/sales/invoices.tsx",
                  lineNumber: 115,
                  columnNumber: 15
                }, this)
              ]
            }, invoice.id, !0, {
              fileName: "app/routes/__app/sales/invoices.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-1/2",
        children
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/invoices.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales/invoices/$invoiceId.tsx
var invoiceId_exports = {};
__export(invoiceId_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action5,
  default: () => InvoiceRoute,
  loader: () => loader18
});
var import_node21 = require("@remix-run/node"), import_react22 = require("@remix-run/react");
var import_tiny_invariant6 = __toESM(require("tiny-invariant")), import_react23 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader18({ request, params }) {
  await requireUser(request);
  let { invoiceId } = params;
  if (typeof invoiceId != "string")
    throw new Error("This should be impossible.");
  let invoiceDetails = await getInvoiceDetails(invoiceId);
  if (!invoiceDetails)
    throw new Response("not found", { status: 404 });
  return (0, import_node21.json)({
    customerName: invoiceDetails.invoice.customer.name,
    customerId: invoiceDetails.invoice.customer.id,
    totalAmount: invoiceDetails.totalAmount,
    dueStatus: invoiceDetails.dueStatus,
    dueDisplay: invoiceDetails.dueStatusDisplay,
    invoiceDateDisplay: invoiceDetails.invoice.invoiceDate.toLocaleDateString(),
    lineItems: invoiceDetails.invoice.lineItems.map((li) => ({
      id: li.id,
      description: li.description,
      quantity: li.quantity,
      unitPrice: li.unitPrice
    })),
    deposits: invoiceDetails.invoice.deposits.map((deposit) => ({
      id: deposit.id,
      amount: deposit.amount,
      depositDateFormatted: deposit.depositDate.toLocaleDateString()
    }))
  });
}
function validateAmount(amount) {
  return amount <= 0 ? "Must be greater than 0" : Number(amount.toFixed(2)) !== amount ? "Must only have two decimal places" : null;
}
function validateDepositDate(date) {
  return Number.isNaN(date.getTime()) ? "Please enter a valid date" : null;
}
async function action5({ request, params }) {
  await requireUser(request);
  let { invoiceId } = params;
  if (typeof invoiceId != "string")
    throw new Error("This should be impossible.");
  let formData = await request.formData(), intent = formData.get("intent");
  switch ((0, import_tiny_invariant6.default)(typeof intent == "string", "intent required"), intent) {
    case "create-deposit": {
      let amount = Number(formData.get("amount")), depositDateString = formData.get("depositDate"), note = formData.get("note");
      (0, import_tiny_invariant6.default)(!Number.isNaN(amount), "amount must be a number"), (0, import_tiny_invariant6.default)(typeof depositDateString == "string", "dueDate is required"), (0, import_tiny_invariant6.default)(typeof note == "string", "dueDate is required");
      let depositDate = parseDate(depositDateString), errors = {
        amount: validateAmount(amount),
        depositDate: validateDepositDate(depositDate)
      };
      return Object.values(errors).some(
        (errorMessage) => errorMessage
      ) ? (0, import_node21.json)({ errors }) : (await createDeposit({ invoiceId, amount, note, depositDate }), new Response("ok"));
    }
    default:
      throw new Error(`Unsupported intent: ${intent}`);
  }
}
var lineItemClassName2 = "flex justify-between border-t border-gray-100 py-4 text-[14px] leading-[24px]";
function InvoiceRoute() {
  let data = (0, import_react22.useLoaderData)(), location = (0, import_react22.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Link, {
        to: `../../customers/${data.customerId}`,
        className: "text-[length:14px] font-bold leading-6 text-blue-600 underline",
        children: data.customerName
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-[length:32px] font-bold leading-[40px]",
        children: currencyFormatter.format(data.totalAmount)
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: data.dueStatus === "paid" ? "text-green-brand" : data.dueStatus === "overdue" ? "text-red-brand" : "",
            children: data.dueDisplay
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 122,
            columnNumber: 9
          }, this),
          ` \u2022 Invoiced ${data.invoiceDateDisplay}`
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-4"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      data.lineItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineItemDisplay, {
        description: item.description,
        unitPrice: item.unitPrice,
        quantity: item.quantity
      }, item.id, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `${lineItemClassName2} font-bold`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: "Net Total"
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: currencyFormatter.format(data.totalAmount)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 146,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 144,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-8"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 148,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Deposits2, {}, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 149,
        columnNumber: 7
      }, this)
    ]
  }, location.key, !0, {
    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
function Deposits2() {
  var _a;
  let data = (0, import_react22.useLoaderData)(), newDepositFetcher = (0, import_react22.useFetcher)(), formRef = (0, import_react23.useRef)(null), deposits = [...data.deposits];
  if (newDepositFetcher.submission) {
    let amount = Number(newDepositFetcher.submission.formData.get("amount")), depositDateVal = newDepositFetcher.submission.formData.get("depositDate"), depositDate = typeof depositDateVal == "string" ? parseDate(depositDateVal) : null;
    !validateAmount(amount) && depositDate && !validateDepositDate(depositDate) && deposits.push({
      id: "new",
      amount,
      depositDateFormatted: depositDate.toLocaleDateString()
    });
  }
  let errors = (_a = newDepositFetcher.data) == null ? void 0 : _a.errors;
  return (0, import_react23.useEffect)(() => {
    var _a2, _b, _c;
    if (!formRef.current || newDepositFetcher.state !== "idle")
      return;
    let formEl = formRef.current;
    errors != null && errors.amount ? (_a2 = formEl.elements.amount) == null || _a2.focus() : errors != null && errors.depositDate ? (_b = formEl.elements.depositDate) == null || _b.focus() : document.activeElement === formEl.elements.intent && (formEl.reset(), (_c = formEl.elements.amount) == null || _c.focus());
  }, [newDepositFetcher.state, errors]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "font-bold leading-8",
        children: "Deposits"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 212,
        columnNumber: 7
      }, this),
      deposits.length > 0 ? deposits.map((deposit) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: lineItemClassName2,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Link, {
            to: `../../deposits/${deposit.id}`,
            className: "text-blue-600 underline",
            children: deposit.depositDateFormatted
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: currencyFormatter.format(deposit.amount)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this)
        ]
      }, deposit.id, !0, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: "None yet"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(newDepositFetcher.Form, {
        method: "post",
        className: "grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2",
        ref: formRef,
        noValidate: !0,
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
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                      lineNumber: 237,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 236,
                    columnNumber: 13
                  }, this),
                  errors != null && errors.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                    id: "amount-error",
                    className: "text-d-p-xs text-red-600",
                    children: errors.amount
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 240,
                    columnNumber: 15
                  }, this) : null
                ]
              }, void 0, !0, {
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
                required: !0,
                "aria-invalid": Boolean(errors == null ? void 0 : errors.amount) || void 0,
                "aria-errormessage": errors != null && errors.amount ? "amount-error" : void 0
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 245,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
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
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                      lineNumber: 260,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 259,
                    columnNumber: 13
                  }, this),
                  errors != null && errors.depositDate ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                    id: "depositDate-error",
                    className: "text-d-p-xs text-red-600",
                    children: errors.depositDate
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 263,
                    columnNumber: 15
                  }, this) : null
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 258,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "depositDate",
                name: "depositDate",
                type: "date",
                className: `${inputClasses} h-[34px]`,
                required: !0,
                "aria-invalid": Boolean(errors == null ? void 0 : errors.depositDate) || void 0,
                "aria-errormessage": errors != null && errors.depositDate ? "depositDate-error" : void 0
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 268,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
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
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                      lineNumber: 283,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 282,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    id: "depositNote",
                    name: "note",
                    type: "text",
                    className: inputClasses
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                    lineNumber: 285,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                  lineNumber: 293,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
                lineNumber: 292,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
            lineNumber: 280,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 228,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
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
    className: lineItemClassName2,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: description
      }, void 0, !1, {
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
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 320,
        columnNumber: 32
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: currencyFormatter.format(unitPrice)
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
        lineNumber: 321,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
    lineNumber: 318,
    columnNumber: 5
  }, this);
}
function CatchBoundary3() {
  let caught = (0, import_react22.useCatch)(), params = (0, import_react22.useParams)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-12 text-red-500",
      children: [
        'No invoice found with the ID of "',
        params.invoiceId,
        '"'
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
      lineNumber: 332,
      columnNumber: 7
    }, this);
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "absolute inset-0 flex justify-center bg-red-100 pt-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "text-red-brand text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-[14px] font-bold",
          children: "Oh snap!"
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
          lineNumber: 347,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "px-2 text-[12px]",
          children: "There was a problem. Sorry."
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
          lineNumber: 348,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
      lineNumber: 346,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/sales/invoices/$invoiceId.tsx",
    lineNumber: 345,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales/invoices/index.tsx
var invoices_exports2 = {};
__export(invoices_exports2, {
  default: () => InvoiceIndex2,
  loader: () => loader19
});
var import_node22 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader19({ request }) {
  await requireUser(request);
  let firstInvoice = await getFirstInvoice();
  return firstInvoice ? (0, import_node22.redirect)(`/sales/invoices/${firstInvoice.id}`) : (0, import_node22.json)({});
}
function InvoiceIndex2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-10",
    children: "You don't have any invoices \u{1F62D}"
  }, void 0, !1, {
    fileName: "app/routes/__app/sales/invoices/index.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/routes/__app/sales/invoices/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action6,
  default: () => NewInvoice,
  loader: () => loader20
});
var import_react24 = require("@remix-run/react");
var import_node23 = require("@remix-run/node");
var import_tiny_invariant7 = __toESM(require("tiny-invariant")), import_react25 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader20({ request }) {
  return await requireUser(request), (0, import_node23.json)({});
}
function validateCustomerId(customerId) {
  return customerId === "" ? "Please select a customer" : null;
}
function validateDueDate(date) {
  return Number.isNaN(date.getTime()) ? "Please enter a valid date" : null;
}
function validateLineItemQuantity(quantity) {
  return quantity <= 0 ? "Must be greater than 0" : Number(quantity.toFixed(0)) !== quantity ? "Fractional quantities are not allowed" : null;
}
function validateLineItemUnitPrice(unitPrice) {
  return unitPrice <= 0 ? "Must be greater than 0" : Number(unitPrice.toFixed(2)) !== unitPrice ? "Must only have two decimal places" : null;
}
async function action6({ request }) {
  await requireUser(request);
  let formData = await request.formData(), intent = formData.get("intent");
  switch (intent) {
    case "create": {
      let customerId = formData.get("customerId"), dueDateString = formData.get("dueDate");
      (0, import_tiny_invariant7.default)(typeof customerId == "string", "customerId is required"), (0, import_tiny_invariant7.default)(typeof dueDateString == "string", "dueDate is required");
      let dueDate = parseDate(dueDateString), lineItemIds = formData.getAll("lineItemId"), lineItemQuantities = formData.getAll("quantity"), lineItemUnitPrices = formData.getAll("unitPrice"), lineItemDescriptions = formData.getAll("description"), lineItems = [];
      for (let i = 0; i < lineItemQuantities.length; i++) {
        let quantity = +lineItemQuantities[i], unitPrice = +lineItemUnitPrices[i], description = lineItemDescriptions[i];
        (0, import_tiny_invariant7.default)(typeof quantity == "number", "quantity is required"), (0, import_tiny_invariant7.default)(typeof unitPrice == "number", "unitPrice is required"), (0, import_tiny_invariant7.default)(typeof description == "string", "description is required"), lineItems.push({ quantity, unitPrice, description });
      }
      let errors = {
        customerId: validateCustomerId(customerId),
        dueDate: validateDueDate(dueDate),
        lineItems: lineItems.reduce((acc, lineItem, index) => {
          let id = lineItemIds[index];
          return (0, import_tiny_invariant7.default)(typeof id == "string", "lineItem ids are required"), acc[id] = {
            quantity: validateLineItemQuantity(lineItem.quantity),
            unitPrice: validateLineItemUnitPrice(lineItem.unitPrice)
          }, acc;
        }, {})
      }, customerIdHasError = errors.customerId !== null, dueDateHasError = errors.dueDate !== null, lineItemsHaveErrors = Object.values(errors.lineItems).some(
        (lineItem) => Object.values(lineItem).some(Boolean)
      );
      if (dueDateHasError || customerIdHasError || lineItemsHaveErrors)
        return (0, import_node23.json)({ errors });
      let invoice = await createInvoice({ dueDate, customerId, lineItems });
      return (0, import_node23.redirect)(`/sales/invoices/${invoice.id}`);
    }
  }
  return new Response(`Unsupported intent: ${intent}`, { status: 400 });
}
function NewInvoice() {
  let actionData = (0, import_react24.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "font-display mb-4",
        children: "New Invoice"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/new.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Form, {
        method: "post",
        className: "flex flex-col gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomerCombobox, {
            error: actionData == null ? void 0 : actionData.errors.customerId
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-wrap items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "dueDate",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                      children: "Due Date"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/sales/invoices/new.tsx",
                      lineNumber: 124,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/new.tsx",
                    lineNumber: 123,
                    columnNumber: 13
                  }, this),
                  actionData != null && actionData.errors.dueDate ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                    id: "dueDate-error",
                    className: "text-d-p-xs text-red-600",
                    children: actionData.errors.dueDate
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/new.tsx",
                    lineNumber: 127,
                    columnNumber: 15
                  }, this) : null
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/sales/invoices/new.tsx",
                lineNumber: 122,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: "dueDate",
                name: "dueDate",
                className: inputClasses,
                type: "date",
                "aria-invalid": Boolean(actionData == null ? void 0 : actionData.errors.dueDate) || void 0,
                "aria-errormessage": actionData != null && actionData.errors.dueDate ? "dueDate-error" : void 0
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices/new.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 121,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineItems, {}, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 143,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              name: "intent",
              value: "create",
              className: submitButtonClasses,
              children: "Create Invoice"
            }, void 0, !1, {
              fileName: "app/routes/__app/sales/invoices/new.tsx",
              lineNumber: 145,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 144,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices/new.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/invoices/new.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
var generateRandomId = () => Math.random().toString(32).slice(2);
function LineItems() {
  let firstId = (0, import_react25.useId)(), [lineItems, setLineItems] = (0, import_react25.useState)(() => [firstId]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-2",
    children: [
      lineItems.map((lineItemClientId, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineItemFormFields, {
        lineItemClientId,
        index,
        onRemoveClick: () => {
          setLineItems(
            (lis) => lis.filter((id, i) => id !== lineItemClientId)
          );
        }
      }, lineItemClientId, !1, {
        fileName: "app/routes/__app/sales/invoices/new.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-3 text-right",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          title: "Add Line Item",
          type: "button",
          onClick: () => setLineItems((lis) => [...lis, generateRandomId()]),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon, {}, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 185,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/invoices/new.tsx",
          lineNumber: 180,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/new.tsx",
        lineNumber: 179,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/sales/invoices/new.tsx",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}
function LineItemFormFields({
  lineItemClientId,
  index,
  onRemoveClick
}) {
  let actionData = (0, import_react24.useActionData)(), errors = actionData == null ? void 0 : actionData.errors.lineItems[lineItemClientId];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
    className: "border-b-2 py-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "button",
            title: "Remove Line Item",
            onClick: onRemoveClick,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MinusIcon, {}, void 0, !1, {
              fileName: "app/routes/__app/sales/invoices/new.tsx",
              lineNumber: 207,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 206,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
            children: [
              "Line Item ",
              index + 1
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 209,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices/new.tsx",
        lineNumber: 205,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        value: lineItemClientId,
        name: "lineItemId",
        type: "hidden"
      }, void 0, !1, {
        fileName: "app/routes/__app/sales/invoices/new.tsx",
        lineNumber: 211,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex w-full gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-wrap items-center gap-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: `quantity-${lineItemClientId}`,
                          children: "Quantity:"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/sales/invoices/new.tsx",
                          lineNumber: 217,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/sales/invoices/new.tsx",
                        lineNumber: 216,
                        columnNumber: 15
                      }, this),
                      errors != null && errors.quantity ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                        id: "quantity-error",
                        className: "text-d-p-xs text-red-600",
                        children: errors.quantity
                      }, void 0, !1, {
                        fileName: "app/routes/__app/sales/invoices/new.tsx",
                        lineNumber: 222,
                        columnNumber: 17
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/sales/invoices/new.tsx",
                    lineNumber: 215,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    id: `quantity-${lineItemClientId}`,
                    name: "quantity",
                    type: "number",
                    className: inputClasses,
                    "aria-invalid": Boolean(errors == null ? void 0 : errors.quantity) || void 0,
                    "aria-errormessage": errors != null && errors.quantity ? "name-error" : void 0
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/new.tsx",
                    lineNumber: 227,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/sales/invoices/new.tsx",
                lineNumber: 214,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-wrap items-center gap-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: `unitPrice-${lineItemClientId}`,
                          children: "Unit Price:"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/sales/invoices/new.tsx",
                          lineNumber: 239,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/sales/invoices/new.tsx",
                        lineNumber: 238,
                        columnNumber: 15
                      }, this),
                      errors != null && errors.unitPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                        id: "unitPrice-error",
                        className: "text-d-p-xs text-red-600",
                        children: errors.unitPrice
                      }, void 0, !1, {
                        fileName: "app/routes/__app/sales/invoices/new.tsx",
                        lineNumber: 244,
                        columnNumber: 17
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/sales/invoices/new.tsx",
                    lineNumber: 237,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    id: `unitPrice-${lineItemClientId}`,
                    name: "unitPrice",
                    type: "number",
                    min: "1",
                    step: "any",
                    className: inputClasses,
                    "aria-invalid": Boolean(errors == null ? void 0 : errors.unitPrice) || void 0,
                    "aria-errormessage": errors != null && errors.unitPrice ? "name-error" : void 0
                  }, void 0, !1, {
                    fileName: "app/routes/__app/sales/invoices/new.tsx",
                    lineNumber: 249,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/sales/invoices/new.tsx",
                lineNumber: 236,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 213,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelText, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: `description-${lineItemClientId}`,
                  children: "Description:"
                }, void 0, !1, {
                  fileName: "app/routes/__app/sales/invoices/new.tsx",
                  lineNumber: 263,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices/new.tsx",
                lineNumber: 262,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                id: `description-${lineItemClientId}`,
                name: "description",
                className: inputClasses
              }, void 0, !1, {
                fileName: "app/routes/__app/sales/invoices/new.tsx",
                lineNumber: 267,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/sales/invoices/new.tsx",
            lineNumber: 261,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/sales/invoices/new.tsx",
        lineNumber: 212,
        columnNumber: 7
      }, this)
    ]
  }, lineItemClientId, !0, {
    fileName: "app/routes/__app/sales/invoices/new.tsx",
    lineNumber: 204,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "absolute inset-0 flex justify-center bg-red-100 pt-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "text-red-brand text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-[14px] font-bold",
          children: "Oh snap!"
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/invoices/new.tsx",
          lineNumber: 284,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "px-2 text-[12px]",
          children: "There was a problem. Sorry."
        }, void 0, !1, {
          fileName: "app/routes/__app/sales/invoices/new.tsx",
          lineNumber: 285,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/sales/invoices/new.tsx",
      lineNumber: 283,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/sales/invoices/new.tsx",
    lineNumber: 282,
    columnNumber: 5
  }, this);
}

// app/routes/__app/sales/index.tsx
var sales_exports2 = {};
__export(sales_exports2, {
  default: () => SalesOverview,
  loader: () => loader21
});
var import_node24 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader21({ request }) {
  return await requireUser(request), (0, import_node24.json)({});
}
function SalesOverview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: "Overview"
  }, void 0, !1, {
    fileName: "app/routes/__app/sales/index.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "449f075f", entry: { module: "/build/entry.client-CA6547Z6.js", imports: ["/build/_shared/chunk-S54LQFQP.js", "/build/_shared/chunk-TCCY4H4V.js", "/build/_shared/chunk-BPQL3L3K.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LP6NL2X7.js", imports: ["/build/_shared/chunk-7VEY5MID.js", "/build/_shared/chunk-QVG7WVI2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-3ZHNX7L7.js", imports: ["/build/_shared/chunk-6OU4J75P.js", "/build/_shared/chunk-4GWPHVFQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/accounts": { id: "routes/__app/accounts", parentId: "routes/__app", path: "accounts", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/accounts-TY4O6PLV.js", imports: ["/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/dashboard": { id: "routes/__app/dashboard", parentId: "routes/__app", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/dashboard-2CT2RQ6U.js", imports: ["/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses": { id: "routes/__app/expenses", parentId: "routes/__app", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses-MXWQWAMP.js", imports: ["/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/index": { id: "routes/__app/index", parentId: "routes/__app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/index-42T5JBFA.js", imports: ["/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/reports": { id: "routes/__app/reports", parentId: "routes/__app", path: "reports", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/reports-JNYOILNI.js", imports: ["/build/_shared/chunk-QVG7WVI2.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales": { id: "routes/__app/sales", parentId: "routes/__app", path: "sales", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales-5MAML4NU.js", imports: ["/build/_shared/chunk-332B3U2Z.js", "/build/_shared/chunk-C5JZNRBB.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/customers": { id: "routes/__app/sales/customers", parentId: "routes/__app/sales", path: "customers", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/customers-6GVUJ4TO.js", imports: ["/build/_shared/chunk-4GWPHVFQ.js", "/build/_shared/chunk-QVG7WVI2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/customers/$customerId": { id: "routes/__app/sales/customers/$customerId", parentId: "routes/__app/sales/customers", path: ":customerId", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/customers/$customerId-GJDGPN76.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-C5JZNRBB.js", "/build/_shared/chunk-AEPAPHU6.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app/sales/customers/index": { id: "routes/__app/sales/customers/index", parentId: "routes/__app/sales/customers", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/sales/customers/index-NGIHBYOG.js", imports: ["/build/_shared/chunk-C5JZNRBB.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/customers/new": { id: "routes/__app/sales/customers/new", parentId: "routes/__app/sales/customers", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/customers/new-PWO2TGHG.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-C5JZNRBB.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/deposits": { id: "routes/__app/sales/deposits", parentId: "routes/__app/sales", path: "deposits", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/deposits-D72EY3NV.js", imports: ["/build/_shared/chunk-MOKNKYWM.js", "/build/_shared/chunk-AEPAPHU6.js", "/build/_shared/chunk-6OU4J75P.js", "/build/_shared/chunk-QVG7WVI2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/deposits/$depositId": { id: "routes/__app/sales/deposits/$depositId", parentId: "routes/__app/sales/deposits", path: ":depositId", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/deposits/$depositId-LHATMYDG.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app/sales/deposits/index": { id: "routes/__app/sales/deposits/index", parentId: "routes/__app/sales/deposits", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/sales/deposits/index-RHZLP2D4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/index": { id: "routes/__app/sales/index", parentId: "routes/__app/sales", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/sales/index-QWPFIDVR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/invoices": { id: "routes/__app/sales/invoices", parentId: "routes/__app/sales", path: "invoices", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/invoices-UKTHDM7R.js", imports: ["/build/_shared/chunk-AEPAPHU6.js", "/build/_shared/chunk-QVG7WVI2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/invoices/$invoiceId": { id: "routes/__app/sales/invoices/$invoiceId", parentId: "routes/__app/sales/invoices", path: ":invoiceId", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/invoices/$invoiceId-CHTLENNV.js", imports: ["/build/_shared/chunk-MOKNKYWM.js", "/build/_shared/chunk-332B3U2Z.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__app/sales/invoices/index": { id: "routes/__app/sales/invoices/index", parentId: "routes/__app/sales/invoices", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/sales/invoices/index-Y7EVUTBF.js", imports: ["/build/_shared/chunk-332B3U2Z.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/sales/invoices/new": { id: "routes/__app/sales/invoices/new", parentId: "routes/__app/sales/invoices", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/invoices/new-XT3GDJK4.js", imports: ["/build/_shared/chunk-332B3U2Z.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-C5JZNRBB.js", "/build/_shared/chunk-7VEY5MID.js", "/build/_shared/chunk-6OU4J75P.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/sales/subscriptions": { id: "routes/__app/sales/subscriptions", parentId: "routes/__app/sales", path: "subscriptions", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/sales/subscriptions-OQHWDHJ5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-O5B6TQ4W.js", imports: ["/build/_shared/chunk-AEPAPHU6.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-URVIM235.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/customers": { id: "routes/resources/customers", parentId: "root", path: "resources/customers", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/customers-JKDD5YAJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-449F075F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resources/customers": {
    id: "routes/resources/customers",
    parentId: "root",
    path: "resources/customers",
    index: void 0,
    caseSensitive: void 0,
    module: customers_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/dashboard": {
    id: "routes/__app/dashboard",
    parentId: "routes/__app",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/__app/accounts": {
    id: "routes/__app/accounts",
    parentId: "routes/__app",
    path: "accounts",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_exports
  },
  "routes/__app/expenses": {
    id: "routes/__app/expenses",
    parentId: "routes/__app",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/__app/reports": {
    id: "routes/__app/reports",
    parentId: "routes/__app",
    path: "reports",
    index: void 0,
    caseSensitive: void 0,
    module: reports_exports
  },
  "routes/__app/index": {
    id: "routes/__app/index",
    parentId: "routes/__app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_exports2
  },
  "routes/__app/sales": {
    id: "routes/__app/sales",
    parentId: "routes/__app",
    path: "sales",
    index: void 0,
    caseSensitive: void 0,
    module: sales_exports
  },
  "routes/__app/sales/subscriptions": {
    id: "routes/__app/sales/subscriptions",
    parentId: "routes/__app/sales",
    path: "subscriptions",
    index: void 0,
    caseSensitive: void 0,
    module: subscriptions_exports
  },
  "routes/__app/sales/customers": {
    id: "routes/__app/sales/customers",
    parentId: "routes/__app/sales",
    path: "customers",
    index: void 0,
    caseSensitive: void 0,
    module: customers_exports2
  },
  "routes/__app/sales/customers/$customerId": {
    id: "routes/__app/sales/customers/$customerId",
    parentId: "routes/__app/sales/customers",
    path: ":customerId",
    index: void 0,
    caseSensitive: void 0,
    module: customerId_exports
  },
  "routes/__app/sales/customers/index": {
    id: "routes/__app/sales/customers/index",
    parentId: "routes/__app/sales/customers",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: customers_exports3
  },
  "routes/__app/sales/customers/new": {
    id: "routes/__app/sales/customers/new",
    parentId: "routes/__app/sales/customers",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/__app/sales/deposits": {
    id: "routes/__app/sales/deposits",
    parentId: "routes/__app/sales",
    path: "deposits",
    index: void 0,
    caseSensitive: void 0,
    module: deposits_exports
  },
  "routes/__app/sales/deposits/$depositId": {
    id: "routes/__app/sales/deposits/$depositId",
    parentId: "routes/__app/sales/deposits",
    path: ":depositId",
    index: void 0,
    caseSensitive: void 0,
    module: depositId_exports
  },
  "routes/__app/sales/deposits/index": {
    id: "routes/__app/sales/deposits/index",
    parentId: "routes/__app/sales/deposits",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: deposits_exports2
  },
  "routes/__app/sales/invoices": {
    id: "routes/__app/sales/invoices",
    parentId: "routes/__app/sales",
    path: "invoices",
    index: void 0,
    caseSensitive: void 0,
    module: invoices_exports
  },
  "routes/__app/sales/invoices/$invoiceId": {
    id: "routes/__app/sales/invoices/$invoiceId",
    parentId: "routes/__app/sales/invoices",
    path: ":invoiceId",
    index: void 0,
    caseSensitive: void 0,
    module: invoiceId_exports
  },
  "routes/__app/sales/invoices/index": {
    id: "routes/__app/sales/invoices/index",
    parentId: "routes/__app/sales/invoices",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: invoices_exports2
  },
  "routes/__app/sales/invoices/new": {
    id: "routes/__app/sales/invoices/new",
    parentId: "routes/__app/sales/invoices",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/__app/sales/index": {
    id: "routes/__app/sales/index",
    parentId: "routes/__app/sales",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: sales_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
