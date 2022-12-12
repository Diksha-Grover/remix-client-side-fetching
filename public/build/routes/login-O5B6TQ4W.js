import "/build/_shared/chunk-AEPAPHU6.js";
import {
  FullFakebooksLogo,
  inputClasses
} from "/build/_shared/chunk-QVG7WVI2.js";
import {
  Form,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-TCCY4H4V.js";
import {
  require_session
} from "/build/_shared/chunk-GLWAIFE6.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/models/user.server
var require_user = __commonJS({
  "empty-module:~/models/user.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login.tsx
var React = __toESM(require_react());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Login to Fakebooks"
  };
};
function LoginPage() {
  var _a;
  const [searchParams] = useSearchParams();
  const redirectTo = (_a = searchParams.get("redirectTo")) != null ? _a : "";
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  let emailError = null;
  let passwordError = null;
  if (actionData && actionData.errors) {
    const { errors } = actionData;
    emailError = "email" in errors ? errors.email : null;
    passwordError = "password" in errors ? errors.password : null;
  }
  React.useEffect(() => {
    var _a2, _b;
    if (emailError) {
      (_a2 = emailRef.current) == null ? void 0 : _a2.focus();
    } else if (passwordError) {
      (_b = passwordRef.current) == null ? void 0 : _b.focus();
    }
  }, [emailError, passwordError]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex min-h-full flex-col justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "mb-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullFakebooksLogo, {
          size: "lg",
          position: "center"
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 113,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto w-full max-w-md px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
          method: "post",
          className: "space-y-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "email",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Email address"
                }, void 0, false, {
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
                      required: true,
                      autoFocus: true,
                      name: "email",
                      type: "email",
                      autoComplete: "email",
                      "aria-invalid": emailError ? true : void 0,
                      "aria-describedby": "email-error",
                      className: inputClasses
                    }, void 0, false, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 125,
                      columnNumber: 15
                    }, this),
                    emailError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "pt-1 text-red-700",
                      id: "email-error",
                      children: emailError
                    }, void 0, false, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 138,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 124,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
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
                }, void 0, false, {
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
                      "aria-invalid": passwordError ? true : void 0,
                      "aria-describedby": "password-error",
                      className: inputClasses
                    }, void 0, false, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 153,
                      columnNumber: 15
                    }, this),
                    passwordError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "pt-1 text-red-700",
                      id: "password-error",
                      children: passwordError
                    }, void 0, false, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 164,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 152,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 145,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "redirectTo",
              value: redirectTo
            }, void 0, false, {
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
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 174,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "remember",
                    className: "ml-2 block text-sm text-gray-900",
                    children: "Remember me"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 180,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.tsx",
                lineNumber: 173,
                columnNumber: 13
              }, this)
            }, void 0, false, {
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
                }, void 0, false, {
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
                }, void 0, false, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 197,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 188,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/login-O5B6TQ4W.js.map
