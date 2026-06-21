/* @ds-bundle: {"namespace":"Luxor9UI","components":[{"name":"AgentBuilder","sourcePath":"components/general/AgentBuilder/AgentBuilder.jsx"},{"name":"AuditReportCard","sourcePath":"components/general/AuditReportCard/AuditReportCard.jsx"},{"name":"MobileDashboard","sourcePath":"components/general/MobileDashboard/MobileDashboard.jsx"},{"name":"TaskBoard","sourcePath":"components/general/TaskBoard/TaskBoard.jsx"}],"sourceHashes":{"components/general/AgentBuilder/AgentBuilder.jsx":"4d8734625165","components/general/AgentBuilder/AgentBuilder.d.ts":"2eea5de061b5","components/general/AgentBuilder/AgentBuilder.prompt.md":"a9ad1d381564","components/general/AuditReportCard/AuditReportCard.jsx":"596902266a8c","components/general/AuditReportCard/AuditReportCard.d.ts":"7ef76c122868","components/general/AuditReportCard/AuditReportCard.prompt.md":"235063b58f46","components/general/MobileDashboard/MobileDashboard.jsx":"de34deb76466","components/general/MobileDashboard/MobileDashboard.d.ts":"e04ca5aa516d","components/general/MobileDashboard/MobileDashboard.prompt.md":"4c371b91865d","components/general/TaskBoard/TaskBoard.jsx":"d7333c8c7523","components/general/TaskBoard/TaskBoard.d.ts":"b756606eb308","components/general/TaskBoard/TaskBoard.prompt.md":"91b46658ac07"},"inlinedExternals":["lucide-react"],"builtBy":"cc-design-sync"} */
var Luxor9UI = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx5(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx5;
      module.exports.jsxs = jsx5;
      module.exports.jsxDEV = jsx5;
      module.exports.Fragment = R.Fragment;
    }
  });

  // packages/ui/.ds-build/entry.tsx
  var entry_exports = {};
  __export(entry_exports, {
    AgentBuilder: () => AgentBuilder,
    AuditReportCard: () => AuditReportCard,
    MobileDashboard: () => MobileDashboard,
    TaskBoard: () => TaskBoard
  });
  init_define_import_meta_env();

  // packages/ui/src/components/AgentBuilder.tsx
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim(), 1);
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var DEFAULT_HIERARCHY = {
    agents: {
      "luxor-prime": { id: "luxor-prime", name: "LUXOR-PRIME", tier: 0, role: "Commander", model: "nvidia/nemotron-3-ultra-550b-a55b", children: ["cortex", "treasury", "sentinel"] },
      "cortex": { id: "cortex", name: "CORTEX", tier: 1, role: "Strategy", model: "nvidia/llama-3.3-nemotron-super-49b-v1.5", children: ["forge", "nexus", "atlas"] },
      "treasury": { id: "treasury", name: "TREASURY", tier: 1, role: "Finance", model: "deepseek-ai/deepseek-v4-pro", children: ["vault"] },
      "sentinel": { id: "sentinel", name: "SENTINEL", tier: 1, role: "Security", model: "nvidia/nemotron-3-nano-30b-a3b", children: [] },
      "forge": { id: "forge", name: "FORGE", tier: 2, role: "AI Agency", model: "deepseek-ai/deepseek-v4-pro", children: [] },
      "nexus": { id: "nexus", name: "NEXUS", tier: 2, role: "SaaS", model: "deepseek-ai/deepseek-v4-pro", children: [] },
      "atlas": { id: "atlas", name: "ATLAS", tier: 2, role: "Digital", model: "deepseek-ai/deepseek-v4-flash", children: [] },
      "vault": { id: "vault", name: "VAULT", tier: 2, role: "Finance", model: "deepseek-ai/deepseek-v4-pro", children: [] }
    },
    rootId: "luxor-prime"
  };
  var TIER_COLORS = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff"];
  var TIER_LABELS = ["Commander", "C-Suite", "VP", "Manager", "Worker"];
  var ALL_MODELS = [
    "nvidia/nemotron-3-ultra-550b-a55b",
    "nvidia/llama-3.3-nemotron-super-49b-v1.5",
    "deepseek-ai/deepseek-v4-pro",
    "deepseek-ai/deepseek-v4-flash",
    "nvidia/nemotron-3-nano-30b-a3b",
    "mistralai/mistral-medium-3.5-128b",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning"
  ];
  function AgentBuilder() {
    const [hierarchy, setHierarchy] = (0, import_react.useState)(DEFAULT_HIERARCHY);
    const [selectedId, setSelectedId] = (0, import_react.useState)(null);
    const [showAddModal, setShowAddModal] = (0, import_react.useState)(false);
    const selectedAgent = selectedId ? hierarchy.agents[selectedId] : null;
    const addAgent = (0, import_react.useCallback)((parentId, name, role, model) => {
      setHierarchy((prev) => {
        const id = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
        if (prev.agents[id]) return prev;
        const parent = prev.agents[parentId];
        const tier = parent ? parent.tier + 1 : 0;
        return {
          agents: {
            ...prev.agents,
            [id]: { id, name: name.toUpperCase(), tier, role, model, children: [] }
          },
          rootId: prev.rootId
        };
      });
    }, []);
    const removeAgent = (0, import_react.useCallback)((id) => {
      setHierarchy((prev) => {
        const next = { ...prev.agents };
        delete next[id];
        return { agents: next, rootId: prev.rootId };
      });
      setSelectedId(null);
    }, []);
    const updateModel = (0, import_react.useCallback)((id, model) => {
      setHierarchy((prev) => ({
        ...prev,
        agents: {
          ...prev.agents,
          [id]: { ...prev.agents[id], model }
        }
      }));
    }, []);
    const renderNode = (agentId, depth = 0) => {
      const agent = hierarchy.agents[agentId];
      if (!agent) return null;
      const color = TIER_COLORS[Math.min(agent.tier, TIER_COLORS.length - 1)];
      const isSelected = selectedId === agentId;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginLeft: depth * 24, marginTop: 8 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            onClick: () => setSelectedId(agentId),
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 8,
              cursor: "pointer",
              border: `2px solid ${isSelected ? color : "transparent"}`,
              background: isSelected ? `${color}22` : "#1a1a2e",
              color: "#e2e8f0",
              fontFamily: "monospace",
              fontSize: 13,
              minWidth: 300
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: color,
                display: "inline-block"
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontWeight: 700, minWidth: 120 }, children: agent.name }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: "#64748b", fontSize: 11 }, children: agent.role }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { color: "#94a3b8", fontSize: 10, marginLeft: "auto" }, children: [
                "T",
                agent.tier
              ] })
            ]
          }
        ),
        agent.children.map((cid) => renderNode(cid, depth + 1))
      ] }, agentId);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
      display: "flex",
      height: "100vh",
      background: "#0f0f23",
      color: "#e2e8f0",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, padding: 24, overflow: "auto" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: { fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#48dbfb" }, children: "\u{1F537} LUXOR9 Agent Builder" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: 8, marginBottom: 16 }, children: TIER_LABELS.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
          padding: "4px 12px",
          borderRadius: 4,
          fontSize: 11,
          fontWeight: 600,
          background: `${TIER_COLORS[i]}22`,
          color: TIER_COLORS[i],
          border: `1px solid ${TIER_COLORS[i]}44`
        }, children: label }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, marginBottom: 16 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => setShowAddModal(true),
              style: { padding: "6px 16px", borderRadius: 6, background: "#48dbfb22", color: "#48dbfb", border: "1px solid #48dbfb44", cursor: "pointer", fontSize: 12 },
              children: "+ Add Agent"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => {
                setHierarchy(DEFAULT_HIERARCHY);
                setSelectedId(null);
              },
              style: { padding: "6px 16px", borderRadius: 6, background: "#ff6b6b22", color: "#ff6b6b", border: "1px solid #ff6b6b44", cursor: "pointer", fontSize: 12 },
              children: "Reset"
            }
          )
        ] }),
        renderNode(hierarchy.rootId)
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 320, padding: 24, borderLeft: "1px solid #1e1e3e", overflow: "auto" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { fontSize: 14, fontWeight: 600, marginBottom: 16, color: "#94a3b8" }, children: "Agent Properties" }),
        selectedAgent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { style: { fontSize: 11, color: "#64748b", display: "block", marginBottom: 4 }, children: "ID" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                value: selectedAgent.id,
                readOnly: true,
                style: { width: "100%", padding: "6px 8px", borderRadius: 4, background: "#1a1a2e", border: "1px solid #2d2d4e", color: "#e2e8f0", fontSize: 12 }
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { style: { fontSize: 11, color: "#64748b", display: "block", marginBottom: 4 }, children: "Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                value: selectedAgent.name,
                readOnly: true,
                style: { width: "100%", padding: "6px 8px", borderRadius: 4, background: "#1a1a2e", border: "1px solid #2d2d4e", color: "#e2e8f0", fontSize: 12 }
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { style: { fontSize: 11, color: "#64748b", display: "block", marginBottom: 4 }, children: [
              "Tier ",
              selectedAgent.tier
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
              padding: "6px 8px",
              borderRadius: 4,
              fontSize: 12,
              fontWeight: 600,
              background: `${TIER_COLORS[Math.min(selectedAgent.tier, 4)]}22`,
              color: TIER_COLORS[Math.min(selectedAgent.tier, 4)],
              display: "inline-block"
            }, children: TIER_LABELS[Math.min(selectedAgent.tier, 4)] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { style: { fontSize: 11, color: "#64748b", display: "block", marginBottom: 4 }, children: "Model" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "select",
              {
                value: selectedAgent.model,
                onChange: (e) => updateModel(selectedAgent.id, e.target.value),
                style: { width: "100%", padding: "6px 8px", borderRadius: 4, background: "#1a1a2e", border: "1px solid #2d2d4e", color: "#e2e8f0", fontSize: 12 },
                children: ALL_MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: m, children: m.split("/").pop() }, m))
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => removeAgent(selectedAgent.id),
              style: { padding: "6px 16px", borderRadius: 6, background: "#ff6b6b22", color: "#ff6b6b", border: "1px solid #ff6b6b44", cursor: "pointer", fontSize: 12, width: "100%" },
              children: "Remove Agent"
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: "#64748b", fontSize: 13 }, children: "Click an agent to edit properties" })
      ] })
    ] });
  }

  // packages/ui/.ds-build/MobileDashboard.tsx
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var API_URL = {}.VITE_LUXOR9_API || "http://localhost:8000";
  var TIER_NAMES = ["Commander", "C-Suite", "VP", "Manager", "Worker"];
  var TIER_COLORS2 = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff"];
  var MOCK_AGENTS = [
    { id: "overseer", name: "OVERSEER", tier: 0, status: "active", role: "Strategy", model: "Nemotron 3 Ultra" },
    { id: "developer", name: "DEVELOPER", tier: 1, status: "thinking", role: "Coding", model: "DeepSeek V4 Pro" },
    { id: "researcher", name: "RESEARCHER", tier: 1, status: "idle", role: "Research", model: "DeepSeek V4 Flash" },
    { id: "visionary", name: "VISIONARY", tier: 2, status: "active", role: "Image Gen", model: "Nano Omni" },
    { id: "communicator", name: "COMMUNICATOR", tier: 2, status: "idle", role: "Voice", model: "Nano Omni" },
    { id: "speedster", name: "SPEEDSTER", tier: 3, status: "active", role: "Fast LLM", model: "GroqCloud" },
    { id: "analyst", name: "DATA ANALYST", tier: 3, status: "idle", role: "Analysis", model: "DeepSeek V4 Pro" },
    { id: "director", name: "DIRECTOR", tier: 3, status: "idle", role: "Video", model: "Cosmos3 Nano" }
  ];
  function MobileDashboard() {
    const [agents, setAgents] = (0, import_react2.useState)(MOCK_AGENTS);
    const [chatOpen, setChatOpen] = (0, import_react2.useState)(false);
    const [input, setInput] = (0, import_react2.useState)("");
    const statusColor = (s) => s === "active" ? "#22c55e" : s === "thinking" ? "#f59e0b" : "#64748b";
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
      height: "100dvh",
      display: "flex",
      flexDirection: "column",
      background: "#0f0f23",
      color: "#e2e8f0",
      fontFamily: "system-ui",
      overflow: "hidden",
      maxWidth: 480,
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
        padding: "16px 20px",
        borderBottom: "1px solid #1e1e3e",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontSize: 20, fontWeight: 800, color: "#48dbfb" }, children: "LUXOR9" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontSize: 11, color: "#64748b", marginLeft: 8 }, children: "AI Agency OS" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
          display: "flex",
          gap: 4,
          alignItems: "center",
          fontSize: 11,
          color: "#22c55e"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" } }),
          agents.filter((a) => a.status === "active").length,
          " active"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { flex: 1, overflow: "auto", padding: 12 }, children: [0, 1, 2, 3, 4].map((tier) => {
        const tierAgents = agents.filter((a) => a.tier === tier);
        if (!tierAgents.length) return null;
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
            fontSize: 10,
            fontWeight: 700,
            color: TIER_COLORS2[tier],
            textTransform: "uppercase",
            letterSpacing: 1,
            marginBottom: 6,
            paddingLeft: 4
          }, children: TIER_NAMES[tier] }),
          tierAgents.map((agent) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            marginBottom: 4,
            borderRadius: 10,
            background: "#1a1a2e",
            cursor: "pointer",
            fontSize: 13
          }, onClick: () => setChatOpen(true), children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: {
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: statusColor(agent.status),
              flexShrink: 0
            } }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontWeight: 700, fontSize: 13 }, children: agent.name }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { color: "#64748b", fontSize: 11 }, children: [
                agent.role,
                " \xB7 ",
                agent.model
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: {
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 10,
              background: `${statusColor(agent.status)}22`,
              color: statusColor(agent.status)
            }, children: agent.status })
          ] }, agent.id))
        ] }, tier);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
        padding: 12,
        borderTop: "1px solid #1e1e3e",
        display: "flex",
        gap: 8
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            value: input,
            onChange: (e) => setInput(e.target.value),
            placeholder: "Ask your AI agency...",
            style: {
              flex: 1,
              padding: "10px 14px",
              borderRadius: 20,
              border: "1px solid #2d2d4e",
              background: "#1a1a2e",
              color: "#e2e8f0",
              fontSize: 14,
              outline: "none"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { style: {
          width: 40,
          height: 40,
          borderRadius: 20,
          background: "#48dbfb",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18
        }, children: "\u27A4" })
      ] })
    ] });
  }

  // packages/ui/src/components/AuditReport.tsx
  init_define_import_meta_env();

  // packages/ui/node_modules/lucide-react/dist/esm/lucide-react.js
  init_define_import_meta_env();

  // packages/ui/node_modules/lucide-react/dist/esm/createLucideIcon.js
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim());

  // packages/ui/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
  init_define_import_meta_env();
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();

  // packages/ui/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
  init_define_import_meta_env();
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

  // packages/ui/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
  init_define_import_meta_env();

  // packages/ui/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
  init_define_import_meta_env();
  var toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

  // packages/ui/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
  var toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };

  // packages/ui/node_modules/lucide-react/dist/esm/Icon.js
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim());

  // packages/ui/node_modules/lucide-react/dist/esm/defaultAttributes.js
  init_define_import_meta_env();
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // packages/ui/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
  init_define_import_meta_env();
  var hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
    return false;
  };

  // packages/ui/node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react3.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => (0, import_react3.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react3.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );

  // packages/ui/node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react4.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react4.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props
      })
    );
    Component.displayName = toPascalCase(iconName);
    return Component;
  };

  // packages/ui/node_modules/lucide-react/dist/esm/icons/activity.js
  init_define_import_meta_env();
  var __iconNode = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ];
  var Activity = createLucideIcon("activity", __iconNode);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/brain.js
  init_define_import_meta_env();
  var __iconNode2 = [
    ["path", { d: "M12 18V5", key: "adv99a" }],
    ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
    ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
    ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
    ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
    ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
    ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
    ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
  ];
  var Brain = createLucideIcon("brain", __iconNode2);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/chart-column.js
  init_define_import_meta_env();
  var __iconNode3 = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }]
  ];
  var ChartColumn = createLucideIcon("chart-column", __iconNode3);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/check.js
  init_define_import_meta_env();
  var __iconNode4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Check = createLucideIcon("check", __iconNode4);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/chevron-down.js
  init_define_import_meta_env();
  var __iconNode5 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  var ChevronDown = createLucideIcon("chevron-down", __iconNode5);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/circle-check.js
  init_define_import_meta_env();
  var __iconNode6 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ];
  var CircleCheck = createLucideIcon("circle-check", __iconNode6);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/circle.js
  init_define_import_meta_env();
  var __iconNode7 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
  var Circle = createLucideIcon("circle", __iconNode7);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/corner-down-right.js
  init_define_import_meta_env();
  var __iconNode8 = [
    ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
    ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
  ];
  var CornerDownRight = createLucideIcon("corner-down-right", __iconNode8);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/eye.js
  init_define_import_meta_env();
  var __iconNode9 = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ];
  var Eye = createLucideIcon("eye", __iconNode9);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/file-text.js
  init_define_import_meta_env();
  var __iconNode10 = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ];
  var FileText = createLucideIcon("file-text", __iconNode10);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/globe.js
  init_define_import_meta_env();
  var __iconNode11 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }]
  ];
  var Globe = createLucideIcon("globe", __iconNode11);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/info.js
  init_define_import_meta_env();
  var __iconNode12 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ];
  var Info = createLucideIcon("info", __iconNode12);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/link.js
  init_define_import_meta_env();
  var __iconNode13 = [
    ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
    ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
  ];
  var Link = createLucideIcon("link", __iconNode13);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/list-checks.js
  init_define_import_meta_env();
  var __iconNode14 = [
    ["path", { d: "M13 5h8", key: "a7qcls" }],
    ["path", { d: "M13 12h8", key: "h98zly" }],
    ["path", { d: "M13 19h8", key: "c3s6r1" }],
    ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
    ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
  ];
  var ListChecks = createLucideIcon("list-checks", __iconNode14);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/loader-circle.js
  init_define_import_meta_env();
  var __iconNode15 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var LoaderCircle = createLucideIcon("loader-circle", __iconNode15);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/lock.js
  init_define_import_meta_env();
  var __iconNode16 = [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ];
  var Lock = createLucideIcon("lock", __iconNode16);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/map-pin.js
  init_define_import_meta_env();
  var __iconNode17 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ];
  var MapPin = createLucideIcon("map-pin", __iconNode17);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/mic.js
  init_define_import_meta_env();
  var __iconNode18 = [
    ["path", { d: "M12 19v3", key: "npa21l" }],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
    ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
  ];
  var Mic = createLucideIcon("mic", __iconNode18);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/octagon-alert.js
  init_define_import_meta_env();
  var __iconNode19 = [
    ["path", { d: "M12 16h.01", key: "1drbdi" }],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    [
      "path",
      {
        d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
        key: "1fd625"
      }
    ]
  ];
  var OctagonAlert = createLucideIcon("octagon-alert", __iconNode19);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/play.js
  init_define_import_meta_env();
  var __iconNode20 = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ];
  var Play = createLucideIcon("play", __iconNode20);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/plus.js
  init_define_import_meta_env();
  var __iconNode21 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ];
  var Plus = createLucideIcon("plus", __iconNode21);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/rotate-cw.js
  init_define_import_meta_env();
  var __iconNode22 = [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
  ];
  var RotateCw = createLucideIcon("rotate-cw", __iconNode22);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/server.js
  init_define_import_meta_env();
  var __iconNode23 = [
    ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
  ];
  var Server = createLucideIcon("server", __iconNode23);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/terminal.js
  init_define_import_meta_env();
  var __iconNode24 = [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
  ];
  var Terminal = createLucideIcon("terminal", __iconNode24);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/trash-2.js
  init_define_import_meta_env();
  var __iconNode25 = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
  ];
  var Trash2 = createLucideIcon("trash-2", __iconNode25);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/triangle-alert.js
  init_define_import_meta_env();
  var __iconNode26 = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ];
  var TriangleAlert = createLucideIcon("triangle-alert", __iconNode26);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/users.js
  init_define_import_meta_env();
  var __iconNode27 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
  ];
  var Users = createLucideIcon("users", __iconNode27);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/video.js
  init_define_import_meta_env();
  var __iconNode28 = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec"
      }
    ],
    ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
  ];
  var Video = createLucideIcon("video", __iconNode28);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/workflow.js
  init_define_import_meta_env();
  var __iconNode29 = [
    ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
    ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
    ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
  ];
  var Workflow = createLucideIcon("workflow", __iconNode29);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/wrench.js
  init_define_import_meta_env();
  var __iconNode30 = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx"
      }
    ]
  ];
  var Wrench = createLucideIcon("wrench", __iconNode30);

  // packages/ui/node_modules/lucide-react/dist/esm/icons/zap.js
  init_define_import_meta_env();
  var __iconNode31 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
      }
    ]
  ];
  var Zap = createLucideIcon("zap", __iconNode31);

  // packages/ui/src/components/AuditReport.tsx
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var AuditReportCard = ({ report }) => {
    const getSeverityColor = (severity) => {
      switch (severity) {
        case "critical":
          return "text-red-500 bg-red-100 dark:bg-red-950/30 border-red-200 dark:border-red-900/50";
        case "high":
          return "text-orange-500 bg-orange-100 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900/50";
        case "medium":
          return "text-amber-500 bg-amber-100 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50";
        case "low":
          return "text-blue-500 bg-blue-100 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50";
        default:
          return "text-zinc-500";
      }
    };
    const getSeverityIcon = (severity) => {
      switch (severity) {
        case "critical":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OctagonAlert, { size: 14 });
        case "high":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TriangleAlert, { size: 14 });
        case "medium":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Activity, { size: 14 });
        case "low":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Info, { size: 14 });
        default:
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Info, { size: 14 });
      }
    };
    const scoreColor = report.score >= 90 ? "text-emerald-500" : report.score >= 70 ? "text-amber-500" : "text-red-500";
    const scoreStroke = report.score >= 90 ? "#10b981" : report.score >= 70 ? "#f59e0b" : "#ef4444";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "w-full max-w-2xl bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-5 border-b border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.02] flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Server, { size: 20 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "font-bold text-sm text-zinc-900 dark:text-zinc-100 uppercase tracking-wider brand-font", children: "System Audit" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-[10px] text-zinc-500 font-mono flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: report.target }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "w-1 h-1 rounded-full bg-zinc-400" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: new Date(report.timestamp).toLocaleTimeString() })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative w-12 h-12 flex items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: "w-full h-full transform -rotate-90", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "24", cy: "24", r: "20", fill: "none", stroke: "currentColor", strokeWidth: "4", className: "text-zinc-200 dark:text-zinc-800" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "circle",
              {
                cx: "24",
                cy: "24",
                r: "20",
                fill: "none",
                stroke: scoreStroke,
                strokeWidth: "4",
                strokeDasharray: 126,
                strokeDashoffset: 126 - 126 * report.score / 100,
                className: "transition-all duration-1000 ease-out",
                strokeLinecap: "round"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `absolute text-[10px] font-bold ${scoreColor}`, children: report.score })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "p-5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-b border-zinc-200 dark:border-white/5", children: report.summary }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-5 space-y-3 bg-zinc-50/50 dark:bg-black/20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2", children: "Detected Anomalies" }),
        report.findings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-2 text-emerald-600 dark:text-emerald-500 text-xs p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-200 dark:border-emerald-900/20", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CircleCheck, { size: 16 }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "No critical issues detected. System operational." })
        ] }) : report.findings.map((finding) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden transition-all hover:border-zinc-300 dark:hover:border-zinc-700", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-start gap-3 p-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `mt-0.5 p-1.5 rounded-md flex-shrink-0 ${getSeverityColor(finding.severity)}`, children: getSeverityIcon(finding.severity) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate", children: finding.title }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border ${getSeverityColor(finding.severity)}`, children: finding.severity })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[10px] text-zinc-500 leading-relaxed mb-2", children: finding.description }),
            finding.remediation && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex items-center gap-2 mt-2 pt-2 border-t border-zinc-100 dark:border-white/5", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-1 text-[9px] text-emerald-600 dark:text-emerald-500 font-medium bg-emerald-50 dark:bg-emerald-900/10 px-2 py-1 rounded", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Wrench, { size: 10 }),
              " Suggested Fix: ",
              finding.remediation
            ] }) })
          ] })
        ] }) }, finding.id))
      ] })
    ] });
  };

  // packages/ui/src/components/TaskBoard.tsx
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim(), 1);

  // packages/ui/src/types.ts
  init_define_import_meta_env();

  // packages/ui/src/components/TaskBoard.tsx
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var AGENT_ICONS = {
    ["OVERSEER" /* OVERSEER */]: Brain,
    ["HR_MANAGER" /* HR_MANAGER */]: Users,
    ["INTEGRATION_LEAD" /* INTEGRATION_LEAD */]: Wrench,
    ["RESEARCHER" /* RESEARCHER */]: Globe,
    ["DATA_ANALYST" /* DATA_ANALYST */]: ChartColumn,
    ["DEVELOPER" /* DEVELOPER */]: Terminal,
    ["VISIONARY" /* VISIONARY */]: Eye,
    ["DIRECTOR" /* DIRECTOR */]: Video,
    ["COMMUNICATOR" /* COMMUNICATOR */]: Mic,
    ["NAVIGATOR" /* NAVIGATOR */]: MapPin,
    ["SPEEDSTER" /* SPEEDSTER */]: Zap,
    ["ANTIGRAVITY" /* ANTIGRAVITY */]: Server
  };
  var TaskBoard = ({
    tasks,
    onToggleTask,
    onToggleSubTask,
    onAddSubTask,
    onRemoveSubTask,
    onRemoveTask,
    onAddTask,
    onUpdateDependencies,
    onExecuteTask,
    executingTaskIds
  }) => {
    const [expandedTasks, setExpandedTasks] = import_react5.default.useState({});
    const [newSubtaskInputs, setNewSubtaskInputs] = (0, import_react5.useState)({});
    const [newTaskInput, setNewTaskInput] = (0, import_react5.useState)("");
    const [showDependencyEditor, setShowDependencyEditor] = (0, import_react5.useState)(null);
    const getTask = (id) => tasks.find((t) => t.id === id);
    const toggleExpand = (id) => setExpandedTasks((prev) => ({ ...prev, [id]: !prev[id] }));
    const handleAddSubTaskSubmit = (taskId) => {
      const title = newSubtaskInputs[taskId]?.trim();
      if (title) {
        onAddSubTask(taskId, title);
        setNewSubtaskInputs((prev) => ({ ...prev, [taskId]: "" }));
      }
    };
    const handleAddTaskSubmit = () => {
      if (newTaskInput.trim() && onAddTask) {
        onAddTask(newTaskInput.trim());
        setNewTaskInput("");
      }
    };
    const getUnmetDependencies = (task) => {
      if (!task.dependencies) return [];
      return task.dependencies.map((depId) => getTask(depId)).filter((t) => t && !t.completed);
    };
    const toggleDependency = (taskId, depId) => {
      if (!onUpdateDependencies || taskId === depId) return;
      const task = getTask(taskId);
      if (!task) return;
      const currentDeps = task.dependencies || [];
      const newDeps = currentDeps.includes(depId) ? currentDeps.filter((id) => id !== depId) : [...currentDeps, depId];
      onUpdateDependencies(taskId, newDeps);
    };
    const scrollToTask = (taskId) => {
      const el = document.getElementById(`task-card-${taskId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-amber-500", "z-50");
        setTimeout(() => el.classList.remove("ring-2", "ring-amber-500", "z-50"), 2e3);
      }
    };
    const handleRunParallel = () => {
      if (!onExecuteTask) return;
      tasks.forEach((task) => {
        if (!task.completed && task.isParallel && !getUnmetDependencies(task).length) {
          if (!executingTaskIds?.has(task.id)) {
            onExecuteTask(task);
          }
        }
      });
    };
    const getTaskStatus = (task, isBlocked, isExecuting) => {
      if (isExecuting) return { label: "EXECUTING", color: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/50", bg: "bg-cyan-50 dark:bg-cyan-950/20", icon: LoaderCircle, shadow: "shadow-[0_0_15px_rgba(6,182,212,0.2)]" };
      if (task.completed) return { label: "COMPLETE", color: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-50 dark:bg-emerald-950/10", icon: CircleCheck, shadow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]" };
      if (isBlocked) return { label: "LOCKED", color: "text-zinc-500", border: "border-zinc-200 dark:border-zinc-800", bg: "bg-zinc-100/80 dark:bg-zinc-950/50", icon: Lock, shadow: "" };
      if (task.subtasks.some((s) => s.completed) || task.isParallel) return { label: "ACTIVE", color: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", bg: "bg-amber-50 dark:bg-amber-950/10", icon: Activity, shadow: "shadow-[0_0_15px_rgba(245,158,11,0.1)]" };
      return { label: "PENDING", color: "text-zinc-500 dark:text-zinc-400", border: "border-zinc-200 dark:border-white/5", bg: "bg-zinc-50 dark:bg-zinc-900/40", icon: Circle, shadow: "" };
    };
    const completedTasks = tasks.filter((t) => t.completed).length;
    const totalTasks = tasks.length;
    const progressPercent = totalTasks > 0 ? completedTasks / totalTasks * 100 : 0;
    const pendingParallelTasks = tasks.filter((t) => !t.completed && t.isParallel && !getUnmetDependencies(t).length && !executingTaskIds?.has(t.id));
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white/60 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden backdrop-blur-md shadow-lg dark:shadow-2xl animate-in fade-in duration-700 w-full relative group/board", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-300 dark:border-white/20 rounded-tl-sm" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-300 dark:border-white/20 rounded-tr-sm" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-300 dark:border-white/20 rounded-bl-sm" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-300 dark:border-white/20 rounded-br-sm" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between px-5 py-4 bg-zinc-50 dark:bg-white/5 border-b border-zinc-200 dark:border-white/5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "p-1.5 bg-amber-50 dark:bg-amber-500/10 rounded border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-500 shadow-sm dark:shadow-[0_0_10px_rgba(245,158,11,0.2)]", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Workflow, { size: 16 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-[10px] font-bold brand-font text-zinc-900 dark:text-zinc-200 tracking-[0.2em] uppercase", children: "Tactical Plan" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-[8px] text-zinc-500 font-mono mt-0.5 tracking-wider", children: "EXECUTION SEQUENCE_V3" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-col items-end gap-1", children: pendingParallelTasks.length > 1 && onExecuteTask ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "button",
          {
            onClick: handleRunParallel,
            className: "flex items-center gap-1.5 px-3 py-1 bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-500/30 rounded text-[9px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider hover:bg-cyan-200 dark:hover:bg-cyan-900/60 transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)] animate-pulse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Zap, { size: 10, className: "fill-current" }),
              " Auto-Run Parallel (",
              pendingParallelTasks.length,
              ")"
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "text-[9px] font-mono text-amber-600 dark:text-amber-500 font-bold", children: [
            Math.round(progressPercent),
            "%"
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-1 w-24 bg-zinc-200 dark:bg-zinc-900 rounded-sm overflow-hidden border border-zinc-200 dark:border-white/10", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-1000", style: { width: `${progressPercent}%` } }) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "p-3 max-h-[60vh] overflow-y-auto custom-scrollbar relative", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
        tasks.map((task) => {
          const subtaskCount = task.subtasks.length;
          const completedSubtasks = task.subtasks.filter((t) => t.completed).length;
          const unmetDeps = getUnmetDependencies(task);
          const isBlocked = unmetDeps.length > 0;
          const isExpanded = expandedTasks[task.id];
          const isExecuting = executingTaskIds?.has(task.id) || false;
          const status = getTaskStatus(task, isBlocked, isExecuting);
          const StatusIcon = status.icon;
          const subtaskPercent = subtaskCount > 0 ? completedSubtasks / subtaskCount * 100 : 0;
          const AssignedIcon = task.assignedAgent ? AGENT_ICONS[task.assignedAgent] : Circle;
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "div",
            {
              id: `task-card-${task.id}`,
              className: `group/card rounded-xl border transition-all duration-500 relative overflow-hidden flex flex-col ${status.bg} ${status.border} ${isExpanded ? "ring-1 ring-zinc-300 dark:ring-white/10 md:col-span-2" : "col-span-1"} ${status.shadow}`,
              children: [
                isBlocked && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.03)_5px,rgba(0,0,0,0.03)_10px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(255,255,255,0.02)_5px,rgba(255,255,255,0.02)_10px)] pointer-events-none z-0" }),
                isExecuting && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 bg-cyan-500/5 animate-pulse pointer-events-none z-0" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "p-3.5 cursor-pointer select-none relative z-10 flex-1", onClick: () => toggleExpand(task.id), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "button",
                    {
                      disabled: isBlocked || isExecuting,
                      onClick: (e) => {
                        e.stopPropagation();
                        if (!isBlocked) onToggleTask(task.id);
                      },
                      className: `mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center rounded-md transition-all duration-300 shadow-sm ${task.completed ? "bg-emerald-500 text-white dark:text-black shadow-[0_0_8px_rgba(16,185,129,0.4)]" : isBlocked ? "bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:text-zinc-600 cursor-not-allowed" : "bg-white dark:bg-black/20 border border-zinc-300 dark:border-zinc-600 hover:border-amber-500 text-transparent hover:text-amber-500/50"}`,
                      children: isExecuting ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LoaderCircle, { size: 12, className: "animate-spin text-cyan-500" }) : isBlocked ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Lock, { size: 10 }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Check, { size: 12, strokeWidth: 4 })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `text-xs font-bold tracking-wide transition-all ${task.completed ? "text-zinc-400 dark:text-zinc-500 line-through" : isBlocked ? "text-zinc-500" : "text-zinc-800 dark:text-zinc-200"}`, children: task.title }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-1.5", children: [
                        task.assignedAgent && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "p-1 rounded bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400", title: `Assigned to ${task.assignedAgent}`, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AssignedIcon, { size: 10 }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${status.border} ${status.color} bg-white/50 dark:bg-black/20`, children: status.label })
                      ] })
                    ] }),
                    subtaskCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col gap-1.5 mt-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center text-[9px] text-zinc-500 dark:text-zinc-500 font-mono tracking-wide", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ListChecks, { size: 10 }),
                          " ",
                          completedSubtasks,
                          "/",
                          subtaskCount,
                          " Sub-ops"
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { children: [
                          Math.round(subtaskPercent),
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `h-full transition-all duration-500 rounded-full ${task.completed ? "bg-emerald-500" : isExecuting ? "bg-cyan-500 animate-pulse" : "bg-amber-500"}`, style: { width: `${subtaskPercent}%` } }) })
                    ] }),
                    task.isParallel && !subtaskCount && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-1 text-[9px] text-cyan-600 dark:text-cyan-500 font-mono flex items-center gap-1 uppercase tracking-wider", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Zap, { size: 8 }),
                      " Async Ready"
                    ] }),
                    isBlocked && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-3 p-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-lg animate-in fade-in zoom-in-95 duration-300", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-1.5 text-[9px] text-amber-700 dark:text-amber-500 font-bold uppercase tracking-wider mb-1.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Lock, { size: 10 }),
                        " Locked by Prerequisites"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-wrap gap-1.5", children: unmetDeps.map((d) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                        "button",
                        {
                          onClick: (e) => {
                            e.stopPropagation();
                            scrollToTask(d.id);
                          },
                          className: "flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-black/40 border border-amber-200 dark:border-amber-900/40 rounded text-[9px] text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400 transition-all font-mono",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Link, { size: 8 }),
                            " ",
                            d.title
                          ]
                        },
                        d.id
                      )) })
                    ] }),
                    task.completed && task.output && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-2 bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between mb-1.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FileText, { size: 10 }),
                          " Execution Log"
                        ] }),
                        onExecuteTask && !isExecuting && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                          "button",
                          {
                            onClick: (e) => {
                              e.stopPropagation();
                              onExecuteTask(task);
                            },
                            className: "text-[9px] text-amber-600 dark:text-amber-500 hover:text-amber-400 flex items-center gap-1 transition-colors uppercase tracking-wider",
                            title: "Rerun Agent",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(RotateCw, { size: 10 }),
                              " Retry"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-[10px] font-mono text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-tight max-h-32 overflow-y-auto custom-scrollbar opacity-90", children: task.output.length > 250 ? task.output.substring(0, 250) + "..." : task.output })
                    ] }),
                    !isBlocked && !task.completed && onExecuteTask && !isExecuting && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-3 flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                      "button",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          onExecuteTask(task);
                        },
                        className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-bold text-[10px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg group/run border border-transparent",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Play, { size: 10, className: "fill-current" }),
                          " Auto-Run Agent"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { onClick: () => toggleExpand(task.id), className: `text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-transform p-1 ${isExpanded ? "rotate-180" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChevronDown, { size: 14 }) })
                ] }) }),
                isExpanded && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-4 pb-4 pt-0 animate-in slide-in-from-top-1 duration-300 relative z-20", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "border-t border-zinc-200 dark:border-white/5 pt-3 pl-8", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex justify-end mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        setShowDependencyEditor(showDependencyEditor === task.id ? null : task.id);
                      },
                      className: `text-[9px] font-bold text-zinc-500 hover:text-amber-600 dark:hover:text-amber-500 flex items-center gap-1 transition-colors uppercase tracking-wider px-2 py-1 rounded ${showDependencyEditor === task.id ? "bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500" : "hover:bg-zinc-100 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Workflow, { size: 10 }),
                        " ",
                        showDependencyEditor === task.id ? "Close Logic" : "Edit Logic"
                      ]
                    }
                  ) }),
                  showDependencyEditor === task.id && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-zinc-50 dark:bg-black/40 rounded-lg border border-zinc-200 dark:border-white/10 p-3 mb-3 animate-in fade-in slide-in-from-top-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Link, { size: 10 }),
                      " Link Dependencies"
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grid gap-1 max-h-32 overflow-y-auto custom-scrollbar", children: tasks.filter((t) => t.id !== task.id).map((t) => {
                      const isDep = (task.dependencies || []).includes(t.id);
                      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                        "button",
                        {
                          onClick: () => toggleDependency(task.id, t.id),
                          className: `flex items-center justify-between text-[9px] px-2 py-1.5 rounded-md transition-all text-left border ${isDep ? "bg-amber-100 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-400 shadow-sm" : "bg-white dark:bg-white/5 border-transparent text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10"}`,
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "truncate", children: t.title }),
                            isDep ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CircleCheck, { size: 10, className: "text-amber-500" }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Circle, { size: 10, className: "text-zinc-300 dark:text-zinc-700" })
                          ]
                        },
                        t.id
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "space-y-1", children: [
                    task.subtasks.map((subtask) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2 group/sub py-1 px-2 rounded-md hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { disabled: isBlocked, onClick: () => !isBlocked && onToggleSubTask(task.id, subtask.id), className: `w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${subtask.completed ? "bg-emerald-500 border-emerald-500 text-white dark:text-black" : isBlocked ? "border-zinc-300 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900" : "border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black hover:border-amber-500"}`, children: subtask.completed && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Check, { size: 8, strokeWidth: 4 }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `text-[10px] flex-1 ${subtask.completed ? "text-zinc-400 line-through" : "text-zinc-700 dark:text-zinc-300"}`, children: subtask.title }),
                      onRemoveSubTask && !isBlocked && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { onClick: () => onRemoveSubTask(task.id, subtask.id), className: "text-zinc-400 hover:text-red-500 opacity-0 group-hover/sub:opacity-100 transition-opacity", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Trash2, { size: 10 }) })
                    ] }, subtask.id)),
                    !isBlocked && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2 mt-2 px-2 group/input", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CornerDownRight, { size: 10, className: "text-zinc-400" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        "input",
                        {
                          type: "text",
                          value: newSubtaskInputs[task.id] || "",
                          onChange: (e) => setNewSubtaskInputs((prev) => ({ ...prev, [task.id]: e.target.value })),
                          onKeyDown: (e) => e.key === "Enter" && handleAddSubTaskSubmit(task.id),
                          placeholder: "Add sub-routine...",
                          className: "w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 focus:border-amber-500/50 text-[10px] text-zinc-800 dark:text-zinc-300 placeholder-zinc-400 dark:placeholder-zinc-700 py-1 outline-none transition-all font-mono"
                        }
                      )
                    ] })
                  ] })
                ] }) })
              ]
            },
            task.id
          );
        }),
        onAddTask && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "col-span-1 md:col-span-2 flex items-center gap-3 px-4 py-3 border border-dashed border-zinc-300 dark:border-white/10 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors group/new", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-5 h-5 rounded-md border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover/new:text-amber-500 group-hover/new:border-amber-500/50 transition-all", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Plus, { size: 12 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "text",
              value: newTaskInput,
              onChange: (e) => setNewTaskInput(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && handleAddTaskSubmit(),
              placeholder: "Initialize new directive...",
              className: "flex-1 bg-transparent text-xs text-zinc-600 dark:text-zinc-400 placeholder-zinc-400 dark:placeholder-zinc-700 outline-none"
            }
          )
        ] })
      ] }) })
    ] });
  };
  return __toCommonJS(entry_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/activity.js:
lucide-react/dist/esm/icons/brain.js:
lucide-react/dist/esm/icons/chart-column.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/circle.js:
lucide-react/dist/esm/icons/corner-down-right.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/file-text.js:
lucide-react/dist/esm/icons/globe.js:
lucide-react/dist/esm/icons/info.js:
lucide-react/dist/esm/icons/link.js:
lucide-react/dist/esm/icons/list-checks.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/lock.js:
lucide-react/dist/esm/icons/map-pin.js:
lucide-react/dist/esm/icons/mic.js:
lucide-react/dist/esm/icons/octagon-alert.js:
lucide-react/dist/esm/icons/play.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/rotate-cw.js:
lucide-react/dist/esm/icons/server.js:
lucide-react/dist/esm/icons/terminal.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/triangle-alert.js:
lucide-react/dist/esm/icons/users.js:
lucide-react/dist/esm/icons/video.js:
lucide-react/dist/esm/icons/workflow.js:
lucide-react/dist/esm/icons/wrench.js:
lucide-react/dist/esm/icons/zap.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
window.Luxor9UI=Luxor9UI.__dsMainNs?Object.assign({},Luxor9UI,Luxor9UI.__dsMainNs,{__dsMainNs:undefined}):Luxor9UI;
