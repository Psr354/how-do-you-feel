const CHANNEL_META = {
  LU: {
    label: "Paru-paru",
    longLabel: "Meridian paru-paru",
    color: "#a9482d",
    atlasKey: "LU",
    organHints: ["Lung", "Bronchus"],
  },
  LI: {
    label: "Usus besar",
    longLabel: "Meridian usus besar",
    color: "#b76f24",
    atlasKey: "LI",
    organHints: ["Large-Intestine"],
  },
  ST: {
    label: "Lambung",
    longLabel: "Meridian lambung",
    color: "#8f4f17",
    atlasKey: "ST",
    organHints: ["Stomach", "Pancreas"],
  },
  SP: {
    label: "Limpa",
    longLabel: "Meridian limpa",
    color: "#9f7c1f",
    atlasKey: "SP",
    organHints: ["Spleen", "Pancreas"],
  },
  HT: {
    label: "Jantung",
    longLabel: "Meridian jantung",
    color: "#a63333",
    atlasKey: "HT",
    organHints: ["Heart"],
  },
  SI: {
    label: "Usus kecil",
    longLabel: "Meridian usus kecil",
    color: "#8a4b62",
    atlasKey: "SI",
    organHints: ["Small-Intestine"],
  },
  BL: {
    label: "Kandung kemih",
    longLabel: "Meridian kandung kemih",
    color: "#40627e",
    atlasKey: "BL",
    organHints: ["Bladder", "Kidney"],
  },
  KI: {
    label: "Ginjal",
    longLabel: "Meridian ginjal",
    color: "#4f5b93",
    atlasKey: "KI",
    organHints: ["Kidney", "Adrenal"],
  },
  PC: {
    label: "Perikardium",
    longLabel: "Meridian perikardium",
    color: "#8f3c56",
    atlasKey: "PC",
    organHints: ["Heart"],
  },
  TE: {
    label: "Triple energizer",
    longLabel: "Meridian triple energizer",
    color: "#72508a",
    atlasKey: "TE",
    organHints: [],
  },
  GB: {
    label: "Kantong empedu",
    longLabel: "Meridian kantong empedu",
    color: "#627536",
    atlasKey: "GB",
    organHints: ["Gall-Bladder", "Liver"],
  },
  LR: {
    label: "Hati",
    longLabel: "Meridian hati",
    color: "#5d7d2f",
    atlasKey: "LR",
    organHints: ["Liver"],
  },
  GV: {
    label: "Governing vessel",
    longLabel: "Governing vessel",
    color: "#564c8b",
    atlasKey: "GV",
    organHints: [],
  },
  CV: {
    label: "Conception vessel",
    longLabel: "Conception vessel",
    color: "#8f4139",
    atlasKey: "CV",
    organHints: ["Uterus", "Stomach"],
  },
  "EX-HN": {
    label: "Extra kepala",
    longLabel: "Titik ekstra kepala dan leher",
    color: "#914d2d",
    organHints: [],
  },
  "EX-UE": {
    label: "Extra tangan",
    longLabel: "Titik ekstra ekstremitas atas",
    color: "#8d5c45",
    organHints: [],
  },
  "EX-LE": {
    label: "Extra kaki",
    longLabel: "Titik ekstra ekstremitas bawah",
    color: "#6f6d44",
    organHints: [],
  },
  "EX-B": {
    label: "Extra punggung",
    longLabel: "Titik ekstra punggung",
    color: "#4f6776",
    organHints: [],
  },
  "EX-CA": {
    label: "Extra abdomen",
    longLabel: "Titik ekstra abdomen",
    color: "#8b6a4d",
    organHints: ["Uterus"],
  },
  EXTRA: {
    label: "Extra umum",
    longLabel: "Titik extra tanpa keluarga meridian khusus",
    color: "#7d6c5d",
    organHints: [],
  },
};

const CHANNEL_ORDER = [
  "LU",
  "LI",
  "ST",
  "SP",
  "HT",
  "SI",
  "BL",
  "KI",
  "PC",
  "TE",
  "GB",
  "LR",
  "GV",
  "CV",
  "EX-HN",
  "EX-UE",
  "EX-LE",
  "EX-B",
  "EX-CA",
  "EXTRA",
];

const MAP_ZONES = [
  { id: "head", label: "Kepala & wajah" },
  { id: "neck", label: "Leher" },
  { id: "torso", label: "Dada & bahu" },
  { id: "abdomen", label: "Perut" },
  { id: "pelvis", label: "Panggul & genital" },
  { id: "arm", label: "Lengan" },
  { id: "hand", label: "Tangan & jari" },
  { id: "leg", label: "Tungkai" },
  { id: "foot", label: "Kaki & jari kaki" },
  { id: "back_upper", label: "Punggung atas" },
  { id: "back_lower", label: "Pinggang & bokong" },
];

const QUICK_SEARCHES = [
  "batuk + sesak napas",
  "maag + mual",
  "sakit kepala + vertigo",
  "susah tidur + cemas",
  "pilek + hidung tersumbat",
  "bahu pegal + leher kaku",
  "nyeri haid + cemas",
  "hipertensi + pusing",
];

const MERIDIAN_PATHS = {
  LU: [
    { surface: "front", d: "M88 74 C84 88 76 106 64 126 C52 144 44 154 34 160" },
    { surface: "front", d: "M102 74 C106 88 114 106 126 126 C138 144 146 154 156 160" },
  ],
  LI: [
    { surface: "front", d: "M28 160 C42 146 48 128 50 108 C52 86 60 62 80 36" },
    { surface: "front", d: "M162 160 C148 146 142 128 140 108 C138 86 130 62 110 36" },
  ],
  ST: [
    { surface: "front", d: "M86 34 C92 52 92 78 90 110 C90 140 92 170 96 202 C100 220 104 230 108 240" },
    { surface: "front", d: "M104 34 C98 52 98 78 100 110 C100 140 100 170 104 202 C108 220 112 230 116 240" },
  ],
  SP: [
    { surface: "front", d: "M82 240 C82 222 82 198 84 172 C86 146 88 122 92 100 C96 82 102 72 114 64" },
    { surface: "front", d: "M108 240 C108 222 108 198 106 172 C104 146 102 122 98 100 C94 82 88 72 76 64" },
  ],
  HT: [
    { surface: "front", d: "M84 74 C74 92 64 110 54 130 C46 146 40 154 30 160" },
    { surface: "front", d: "M106 74 C116 92 126 110 136 130 C144 146 150 154 160 160" },
  ],
  SI: [
    { surface: "back", d: "M224 160 C236 144 246 126 254 102 C262 78 274 56 296 38" },
    { surface: "back", d: "M346 160 C334 144 324 126 316 102 C308 78 296 56 274 38" },
  ],
  BL: [
    { surface: "back", d: "M274 26 C270 54 268 88 270 124 C272 160 274 194 274 224 C274 232 273 238 272 244" },
    { surface: "back", d: "M296 26 C300 54 302 88 300 124 C298 160 296 194 296 224 C296 232 297 238 298 244" },
  ],
  KI: [
    { surface: "front", d: "M90 238 C92 214 94 188 94 160 C94 132 92 106 92 84 C92 70 94 62 100 56" },
    { surface: "front", d: "M100 238 C98 214 96 188 96 160 C96 132 98 106 98 84 C98 70 96 62 90 56" },
  ],
  PC: [
    { surface: "front", d: "M92 76 C96 92 104 110 112 130 C118 144 126 154 136 164" },
    { surface: "front", d: "M98 76 C94 92 86 110 78 130 C72 144 64 154 54 164" },
  ],
  TE: [
    { surface: "back", d: "M220 160 C228 144 236 126 244 104 C252 82 262 60 282 40" },
    { surface: "back", d: "M350 160 C342 144 334 126 326 104 C318 82 308 60 288 40" },
  ],
  GB: [
    { surface: "front", d: "M118 32 C130 52 132 76 126 106 C120 138 114 170 110 204 C108 222 106 232 102 240" },
    { surface: "back", d: "M304 32 C316 52 318 76 312 106 C306 138 300 170 296 204 C294 222 292 232 288 240" },
  ],
  LR: [
    { surface: "front", d: "M102 240 C98 220 94 196 90 170 C88 146 88 122 92 100 C96 82 104 70 110 60" },
    { surface: "front", d: "M88 240 C92 220 96 196 100 170 C102 146 102 122 98 100 C94 82 86 70 80 60" },
  ],
  GV: [
    { surface: "back", d: "M285 22 C285 54 285 88 285 124 C285 160 285 194 285 244" },
  ],
  CV: [
    { surface: "front", d: "M95 58 C95 84 95 110 95 138 C95 164 95 192 95 220" },
  ],
};

const ORGAN_SHAPES = {
  Thymus: [{ surface: "front", type: "ellipse", x: 95, y: 78, rx: 8, ry: 7 }],
  Larynx: [{ surface: "front", type: "ellipse", x: 95, y: 50, rx: 5, ry: 7 }],
  Lung: [
    { surface: "front", type: "ellipse", x: 82, y: 82, rx: 13, ry: 18 },
    { surface: "front", type: "ellipse", x: 108, y: 82, rx: 13, ry: 18 },
    { surface: "back", type: "ellipse", x: 272, y: 82, rx: 13, ry: 18 },
    { surface: "back", type: "ellipse", x: 298, y: 82, rx: 13, ry: 18 },
  ],
  Bronchus: [{ surface: "front", type: "ellipse", x: 95, y: 70, rx: 7, ry: 10 }],
  Heart: [{ surface: "front", type: "ellipse", x: 96, y: 90, rx: 9, ry: 11 }],
  Liver: [{ surface: "front", type: "ellipse", x: 79, y: 114, rx: 18, ry: 9 }],
  "Gall-Bladder": [{ surface: "front", type: "ellipse", x: 72, y: 111, rx: 6, ry: 8 }],
  Stomach: [{ surface: "front", type: "ellipse", x: 107, y: 114, rx: 16, ry: 11 }],
  Pancreas: [{ surface: "front", type: "ellipse", x: 100, y: 122, rx: 16, ry: 4 }],
  Spleen: [{ surface: "front", type: "ellipse", x: 119, y: 113, rx: 10, ry: 8 }],
  Kidney: [
    { surface: "front", type: "ellipse", x: 85, y: 118, rx: 7, ry: 11 },
    { surface: "front", type: "ellipse", x: 105, y: 118, rx: 7, ry: 11 },
    { surface: "back", type: "ellipse", x: 276, y: 118, rx: 7, ry: 11 },
    { surface: "back", type: "ellipse", x: 294, y: 118, rx: 7, ry: 11 },
  ],
  Adrenal: [
    { surface: "front", type: "ellipse", x: 84, y: 107, rx: 4, ry: 4 },
    { surface: "front", type: "ellipse", x: 106, y: 107, rx: 4, ry: 4 },
  ],
  "Large-Intestine": [{ surface: "front", type: "rect", x: 74, y: 104, width: 42, height: 32, rx: 12 }],
  "Small-Intestine": [{ surface: "front", type: "ellipse", x: 95, y: 121, rx: 12, ry: 10 }],
  Bladder: [{ surface: "front", type: "ellipse", x: 95, y: 146, rx: 8, ry: 9 }],
  Uterus: [{ surface: "front", type: "ellipse", x: 95, y: 150, rx: 10, ry: 6 }],
  Tongue: [{ surface: "front", type: "ellipse", x: 95, y: 38, rx: 7, ry: 5 }],
};

const MARKER_LAYOUT = {
  head: {
    front: [[95, 28], [82, 33], [108, 33], [95, 17]],
    back: [[285, 28], [272, 33], [298, 33], [285, 17]],
  },
  neck: {
    front: [[95, 52]],
    back: [[285, 52]],
  },
  torso: {
    front: [[76, 78], [95, 72], [114, 78], [88, 92], [102, 92]],
    back: [[266, 78], [285, 72], [304, 78], [276, 92], [294, 92]],
  },
  abdomen: {
    front: [[82, 111], [95, 107], [108, 111], [88, 122], [102, 122]],
  },
  pelvis: {
    front: [[88, 141], [102, 141], [95, 150]],
  },
  arm: {
    front: [[42, 82], [148, 82], [40, 108], [150, 108], [36, 126], [154, 126]],
    back: [[232, 82], [338, 82], [230, 108], [340, 108], [226, 126], [344, 126]],
  },
  hand: {
    front: [[34, 146], [156, 146], [28, 160], [162, 160]],
    back: [[224, 146], [346, 146], [218, 160], [352, 160]],
  },
  leg: {
    front: [[86, 170], [104, 170], [86, 196], [104, 196], [84, 220], [106, 220]],
    back: [[276, 170], [294, 170], [276, 196], [294, 196], [274, 220], [296, 220]],
  },
  foot: {
    front: [[82, 238], [108, 238], [88, 228], [102, 228]],
    back: [[272, 238], [298, 238], [278, 228], [292, 228]],
  },
  back_upper: {
    back: [[266, 80], [285, 74], [304, 80], [276, 94], [294, 94]],
  },
  back_lower: {
    back: [[276, 120], [294, 120], [276, 138], [294, 138], [285, 148]],
  },
};

const SEARCH_KEYWORD_STOP = new Set([
  "dan",
  "atau",
  "yang",
  "untuk",
  "dengan",
  "akut",
  "umum",
  "gangguan",
]);

const dataset = window.ACUPUNCTURE_DATA || {
  points: [],
  categories: {},
  channelCounts: {},
  mapZones: {},
};
const atlas = window.ATLAS_ASSET_DATA || {
  bodyRegions: [],
  organLayers: [],
  meridianMeshes: {},
  languages: [],
};
const RECENT_QUERY_KEY = "atlas-keluhan-recent-queries";
const MAX_RECENT_QUERIES = 8;

const refs = {
  searchForm: document.querySelector("#search-form"),
  complaintInput: document.querySelector("#complaint-input"),
  searchSuggestionsRoot: document.querySelector("#search-suggestions"),
  searchActionsRoot: document.querySelector("#search-actions"),
  actionFeedbackRoot: document.querySelector("#action-feedback"),
  recentSearchesRoot: document.querySelector("#recent-searches"),
  resultsRoot: document.querySelector("#results"),
  resultsTitle: document.querySelector("#results-title"),
  resultsSummary: document.querySelector("#results-summary"),
  statsRoot: document.querySelector("#dataset-stats"),
  quickSearchesRoot: document.querySelector("#quick-searches"),
  bodyMapRoot: document.querySelector("#body-map"),
  zonePillsRoot: document.querySelector("#zone-pills"),
  bodyMapSummary: document.querySelector("#body-map-summary"),
  queryInsight: document.querySelector("#query-insight"),
  meridianFiltersRoot: document.querySelector("#meridian-filters"),
  weightEditorRoot: document.querySelector("#weight-editor"),
  pointDetailRoot: document.querySelector("#point-detail"),
  layerModesRoot: document.querySelector("#layer-modes"),
  atlasFocusRoot: document.querySelector("#atlas-focus"),
  atlasSummaryRoot: document.querySelector("#atlas-summary"),
  meridianCatalogRoot: document.querySelector("#meridian-catalog"),
  atlasLanguagesRoot: document.querySelector("#atlas-languages"),
  treatmentPlanRoot: document.querySelector("#treatment-plan"),
};

const pointByCode = new Map(dataset.points.map((point) => [point.code, point]));
const browseEntries = dataset.points
  .slice()
  .sort((left, right) =>
    left.code.localeCompare(right.code, "en", { numeric: true })
  )
  .map((point) => ({
    point,
    score: 0,
    segmentsMatched: 0,
    matches: [],
    concepts: [],
    contributions: [],
  }));

const state = {
  query: "",
  analysis: null,
  rawResults: [],
  zoneFilter: null,
  meridianFilter: null,
  selectedPointCode: null,
  layerMode: "surface",
  weightOverrides: {},
  recentQueries: readRecentQueries(),
  actionFeedback: "",
};

let feedbackTimer = null;

function readRecentQueries() {
  try {
    const raw = window.localStorage.getItem(RECENT_QUERY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(Boolean).slice(0, MAX_RECENT_QUERIES) : [];
  } catch {
    return [];
  }
}

function writeRecentQueries(queries) {
  try {
    window.localStorage.setItem(
      RECENT_QUERY_KEY,
      JSON.stringify((queries || []).slice(0, MAX_RECENT_QUERIES))
    );
  } catch {}
}

function pointFamilyKey(point) {
  return point.channel || (point.category === "Extra" ? "EXTRA" : point.category);
}

function channelMeta(code) {
  return CHANNEL_META[code] || {
    label: code,
    longLabel: code,
    color: "#7d6c5d",
    organHints: [],
  };
}

function zoneLabel(zoneId) {
  return (
    dataset.mapZones?.[zoneId]?.label ||
    MAP_ZONES.find((zone) => zone.id === zoneId)?.label ||
    zoneId
  );
}

function organLabel(organId) {
  return (
    atlas.organLayers.find((organ) => organ.id === organId)?.label ||
    organId.replace(/-/g, " ")
  );
}

function hashText(value) {
  return (value || "").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function groupedZoneCounts(entries) {
  const counts = {};
  entries.forEach((entry) => {
    counts[entry.point.mapZone] = (counts[entry.point.mapZone] || 0) + 1;
  });
  return counts;
}

function markerPosition(point, index) {
  const zone = point.mapZone || "torso";
  const surface = point.surface || "front";
  const layouts =
    MARKER_LAYOUT[zone]?.[surface] ||
    MARKER_LAYOUT[zone]?.front ||
    MARKER_LAYOUT.torso.front;
  const base = layouts[(hashText(point.code) + index) % layouts.length];
  const shift = ((hashText(point.name || point.code) % 3) - 1) * 2;
  return [base[0] + shift, base[1]];
}

function getBaseEntries() {
  if (state.query) {
    return state.rawResults;
  }
  if (state.selectedPointCode && !state.meridianFilter) {
    const selected = activePoint();
    if (selected) {
      const selectedFamily = pointFamilyKey(selected);
      return browseEntries.filter((entry) => {
        if (entry.point.code === selected.code) {
          return true;
        }
        if (selected.channel) {
          return pointFamilyKey(entry.point) === selectedFamily;
        }
        return entry.point.mapZone === selected.mapZone;
      });
    }
  }
  return browseEntries;
}

function getMeridianFilteredEntries() {
  const base = getBaseEntries();
  if (!state.meridianFilter) {
    return base;
  }
  return base.filter(
    (entry) => pointFamilyKey(entry.point) === state.meridianFilter
  );
}

function getVisibleEntries() {
  const meridianFiltered = getMeridianFilteredEntries();
  if (!state.zoneFilter) {
    return meridianFiltered;
  }
  return meridianFiltered.filter((entry) => entry.point.mapZone === state.zoneFilter);
}

function activePoint() {
  return state.selectedPointCode ? pointByCode.get(state.selectedPointCode) || null : null;
}

function findExactPoint(query) {
  const normalized = window.SearchEngine.normalize(query);
  if (!normalized) {
    return null;
  }

  return (
    dataset.points.find((point) =>
      [point.code, point.name, point.slug]
        .filter(Boolean)
        .map((value) => window.SearchEngine.normalize(value))
        .includes(normalized)
    ) || null
  );
}

function meridianMeshInfo(code) {
  return atlas.meridianMeshes?.[code] || null;
}

function setActionFeedback(message) {
  state.actionFeedback = message || "";
  renderActionFeedback();

  if (feedbackTimer) {
    window.clearTimeout(feedbackTimer);
    feedbackTimer = null;
  }

  if (message) {
    feedbackTimer = window.setTimeout(() => {
      state.actionFeedback = "";
      renderActionFeedback();
    }, 2800);
  }
}

function rememberQuery(query) {
  const cleaned = (query || "").trim();
  if (!cleaned) {
    return;
  }

  state.recentQueries = [
    cleaned,
    ...state.recentQueries.filter((entry) => entry !== cleaned),
  ].slice(0, MAX_RECENT_QUERIES);
  writeRecentQueries(state.recentQueries);
}

async function copyText(text) {
  if (!text) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function buildSummaryText() {
  const visible = getVisibleEntries().slice(0, 5);
  const lines = ["How Do You Feel?"];

  if (state.query) {
    lines.push(`Query: ${state.query}`);
  }
  if (state.analysis?.segments?.length) {
    lines.push(
      `Bobot: ${state.analysis.segments
        .map((segment) => `${segment.text} ${segment.weight.toFixed(2)}x`)
        .join(", ")}`
    );
  }
  if (state.meridianFilter) {
    lines.push(`Meridian: ${state.meridianFilter} - ${channelMeta(state.meridianFilter).label}`);
  }
  if (state.zoneFilter) {
    lines.push(`Area: ${zoneLabel(state.zoneFilter)}`);
  }

  if (visible.length) {
    lines.push("Rekomendasi utama:");
    visible.forEach((entry, index) => {
      const reasons = entry.contributions
        .slice()
        .sort((left, right) => right.weightedScore - left.weightedScore)
        .slice(0, 2)
        .map((contribution) => `${contribution.label} ${contribution.weight.toFixed(2)}x`)
        .join(", ");
      lines.push(
        `${index + 1}. ${entry.point.code} ${entry.point.name} | ${channelMeta(
          pointFamilyKey(entry.point)
        ).label} | ${entry.point.zoneLabel}${reasons ? ` | ${reasons}` : ""}`
      );
    });
  } else {
    lines.push("Belum ada hasil aktif.");
  }

  lines.push(`Tautan: ${location.href}`);
  return lines.join("\n");
}

async function shareCurrentState() {
  const url = location.href;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "How Do You Feel?",
        text: state.query ? `Query: ${state.query}` : "How Do You Feel?",
        url,
      });
      setActionFeedback("State explorer berhasil dibagikan.");
      return;
    } catch {}
  }

  const copied = await copyText(url);
  setActionFeedback(
    copied
      ? "Link state explorer disalin ke clipboard."
      : "Clipboard tidak tersedia. Salin URL browser secara manual."
  );
}

async function copySummary() {
  const copied = await copyText(buildSummaryText());
  setActionFeedback(
    copied
      ? "Ringkasan hasil disalin ke clipboard."
      : "Clipboard tidak tersedia untuk menyalin ringkasan."
  );
}

function resetExplorer() {
  state.query = "";
  state.analysis = null;
  state.rawResults = [];
  state.zoneFilter = null;
  state.meridianFilter = null;
  state.selectedPointCode = null;
  state.layerMode = "surface";
  state.weightOverrides = {};
  renderAll();
  refs.complaintInput.focus();
  setActionFeedback("Explorer direset ke kondisi awal.");
}

function buildMeridianCatalogData(sourceEntries) {
  const currentCounts = {};
  sourceEntries.forEach((entry) => {
    const key = pointFamilyKey(entry.point);
    currentCounts[key] = (currentCounts[key] || 0) + 1;
  });

  return CHANNEL_ORDER.filter((key) => currentCounts[key] || dataset.channelCounts?.[key]).map(
    (key) => {
      const meta = channelMeta(key);
      const mesh = meridianMeshInfo(meta.atlasKey || key);
      return {
        code: key,
        label: meta.label,
        longLabel: meta.longLabel,
        color: meta.color,
        currentCount: currentCounts[key] || 0,
        totalCount: dataset.channelCounts?.[key] || 0,
        meshTotal: mesh?.total || 0,
      };
    }
  );
}

function extractKeywords(point) {
  return Array.from(
    new Set(
      point.indication
        .toLowerCase()
        .split(/[^a-z0-9à-ÿ-]+/i)
        .filter(
          (token) =>
            token &&
            token.length >= 4 &&
            !SEARCH_KEYWORD_STOP.has(token)
        )
    )
  ).slice(0, 6);
}

function deriveOrganFocus() {
  const organIds = new Set();

  (state.analysis?.concepts || []).forEach((concept) => {
    (concept.organHints || []).forEach((organ) => organIds.add(organ));
  });

  if (state.meridianFilter) {
    channelMeta(state.meridianFilter).organHints.forEach((organ) =>
      organIds.add(organ)
    );
  }

  const selected = activePoint();
  if (selected) {
    channelMeta(selected.channel || pointFamilyKey(selected)).organHints.forEach(
      (organ) => organIds.add(organ)
    );
  }

  return Array.from(organIds).filter((organ) =>
    atlas.organLayers.some((entry) => entry.id === organ)
  );
}

function deriveMeridianFocusCodes(entries) {
  if (state.meridianFilter && meridianMeshInfo(state.meridianFilter)) {
    return [state.meridianFilter];
  }

  const selected = activePoint();
  if (selected?.channel && meridianMeshInfo(selected.channel)) {
    return [selected.channel];
  }

  const counts = {};
  entries.forEach((entry) => {
    if (entry.point.channel && meridianMeshInfo(entry.point.channel)) {
      counts[entry.point.channel] = (counts[entry.point.channel] || 0) + 1;
    }
  });

  return Object.entries(counts)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 2)
    .map(([code]) => code);
}

function normalizeLayerMode(layer) {
  return ["surface", "organ", "meridian"].includes(layer) ? layer : "surface";
}

function contextDefaultLayer() {
  if (state.meridianFilter || activePoint()?.channel) {
    return "meridian";
  }
  if (state.query && deriveOrganFocus().length) {
    return "organ";
  }
  return "surface";
}

function effectiveLayerMode(entries) {
  if (state.layerMode) {
    return state.layerMode;
  }
  if (state.meridianFilter || activePoint()?.channel) {
    return "meridian";
  }
  if (deriveOrganFocus().length) {
    return "organ";
  }
  return "surface";
}

function syncHash() {
  const params = new URLSearchParams();
  if (state.query) {
    params.set("q", state.query);
  }
  if (state.meridianFilter) {
    params.set("m", state.meridianFilter);
  }
  if (state.zoneFilter) {
    params.set("z", state.zoneFilter);
  }
  if (state.selectedPointCode) {
    params.set("p", state.selectedPointCode);
  }
  if (state.layerMode && state.layerMode !== "surface") {
    params.set("layer", state.layerMode);
  }
  if (state.analysis?.segments?.length) {
    const weighted = state.analysis.segments
      .filter((segment) => segment.weight !== segment.baseWeight)
      .map((segment) => `${segment.id}:${segment.weight}`);
    if (weighted.length) {
      params.set("w", weighted.join(","));
    }
  }

  const nextHash = params.toString();
  const nextUrl = `${location.pathname}${location.search}${nextHash ? `#${nextHash}` : ""}`;
  history.replaceState(null, "", nextUrl);
}

function parseWeightOverrides(raw) {
  if (!raw) {
    return {};
  }

  return raw.split(",").reduce((accumulator, entry) => {
    const [segmentId, weight] = entry.split(":");
    const numeric = Number(weight);
    if (segmentId && Number.isFinite(numeric)) {
      accumulator[segmentId] = numeric;
    }
    return accumulator;
  }, {});
}

function updateSearchState(query, options = {}) {
  const cleaned = (query || "").trim();
  state.query = cleaned;

  if (!cleaned) {
    state.analysis = null;
    state.rawResults = [];
    state.weightOverrides = {};
    if (!options.keepFilters) {
      state.zoneFilter = null;
    }
    return;
  }

  state.weightOverrides = options.weightOverrides || {};
  const analysis = window.SearchEngine.analyzeQuery(cleaned, {
    weightOverrides: state.weightOverrides,
  });
  state.analysis = analysis;
  state.weightOverrides = Object.fromEntries(
    analysis.segments.map((segment) => [segment.id, segment.weight])
  );
  state.rawResults = window.SearchEngine.searchPoints(dataset.points, cleaned, {
    limit: 28,
    analysis,
  });

  const exactPoint = findExactPoint(cleaned);
  if (exactPoint) {
    state.selectedPointCode = exactPoint.code;
  }

  if (!options.keepFilters) {
    state.zoneFilter = null;
  }

  if (!options.keepSelection && state.selectedPointCode) {
    const selectedStillVisible = state.rawResults.some(
      (entry) => entry.point.code === state.selectedPointCode
    );
    if (!selectedStillVisible) {
      state.selectedPointCode = null;
    }
  }
}

function applyRoute() {
  const params = new URLSearchParams(location.hash.replace(/^#/, ""));
  const weightOverrides = parseWeightOverrides(params.get("w"));
  const requestedLayer = params.get("layer");

  state.meridianFilter = params.get("m") || null;
  state.zoneFilter = params.get("z") || null;
  state.selectedPointCode = params.get("p") || null;
  state.layerMode = normalizeLayerMode(
    requestedLayer ||
      (state.meridianFilter || state.selectedPointCode ? "meridian" : "surface")
  );
  updateSearchState(params.get("q") || "", {
    keepFilters: true,
    keepSelection: true,
    weightOverrides,
  });
  renderAll({ syncRoute: false });
}

function channelBadge(point) {
  return point.channel || pointFamilyKey(point);
}

function formatScore(entry) {
  return state.query ? Math.round(entry.score) : null;
}

const PREGNANCY_CAUTION_CODES = new Set([
  "LI4",
  "SP6",
  "BL60",
  "BL67",
  "GB21",
  "CV3",
  "CV4",
  "CV5",
  "CV6",
  "CV7",
  "CV8",
  "BL31",
  "BL32",
  "BL33",
  "BL34",
]);

const ADVANCED_POINT_CODES = new Set([
  "BL1",
  "ST1",
  "GB1",
  "ST9",
  "CV22",
  "GV15",
  "GV16",
  "GB20",
  "BL10",
  "LI18",
  "SI16",
  "SI17",
  "TE16",
]);

const CHEST_POINT_CODES = new Set([
  "LU1",
  "LU2",
  "ST12",
  "ST13",
  "ST14",
  "ST15",
  "ST16",
  "KI22",
  "KI23",
  "KI24",
  "KI25",
  "KI26",
  "KI27",
  "CV17",
]);

const SAFETY_LEVEL_META = {
  safe: { label: "Tidak ada peringatan khusus", rank: 0 },
  caution: { label: "Hati-hati", rank: 1 },
  advanced: { label: "Butuh skill khusus", rank: 2 },
  avoid: { label: "Hindari kondisi tertentu", rank: 3 },
};

function addSafetyWarning(warnings, level, title, text) {
  if (warnings.some((warning) => warning.title === title)) return;
  warnings.push({ level, title, text });
}

function hasPointNumberBetween(point, min, max) {
  const number = Number((point.code || "").match(/\d+/)?.[0]);
  return Number.isFinite(number) && number >= min && number <= max;
}

function assessPointSafety(point) {
  const warnings = [];
  const code = point.code || "";
  const family = pointFamilyKey(point);
  const text = `${point.location || ""} ${point.indication || ""}`.toLowerCase();

  if (PREGNANCY_CAUTION_CODES.has(code)) {
    addSafetyWarning(
      warnings,
      "avoid",
      "Perhatian kehamilan",
      "Titik ini termasuk kelompok yang sering dihindari saat hamil kecuali ditangani praktisi terlatih."
    );
  }

  if (ADVANCED_POINT_CODES.has(code)) {
    addSafetyWarning(
      warnings,
      "advanced",
      "Area sensitif",
      "Lokasinya dekat struktur penting seperti mata, leher, tengkuk, atau pembuluh besar. Jangan digunakan untuk coba-coba."
    );
  }

  if (CHEST_POINT_CODES.has(code) || point.mapZone === "torso") {
    addSafetyWarning(
      warnings,
      "advanced",
      "Area dada",
      "Area dada dan sekitar paru membutuhkan arah serta kedalaman yang tepat. Risiko lebih tinggi bila dilakukan tanpa praktisi."
    );
  }

  if (point.mapZone === "neck") {
    addSafetyWarning(
      warnings,
      "advanced",
      "Area leher",
      "Leher berdekatan dengan pembuluh darah dan saraf penting. Titik ini sebaiknya hanya ditangani oleh praktisi."
    );
  }

  if (point.mapZone === "abdomen" || point.mapZone === "pelvis" || family === "EX-CA") {
    addSafetyWarning(
      warnings,
      "caution",
      "Area perut atau panggul",
      "Perlu skrining kondisi seperti kehamilan, operasi, hernia, perdarahan, atau nyeri akut sebelum tindakan."
    );
  }

  if (point.mapZone === "back_upper" || point.mapZone === "back_lower" || family === "EX-B") {
    addSafetyWarning(
      warnings,
      "caution",
      "Area punggung",
      "Punggung membutuhkan kontrol kedalaman dan arah tusuk, terutama dekat tulang belakang atau area organ dalam."
    );
  }

  if (point.mapZone === "head") {
    addSafetyWarning(
      warnings,
      "caution",
      "Area kepala atau wajah",
      "Area kepala dan wajah lebih sensitif. Hindari tindakan dekat mata, luka, infeksi, atau pembengkakan."
    );
  }

  if (text.includes("arteri") || text.includes("nadi") || text.includes("radialis")) {
    addSafetyWarning(
      warnings,
      "advanced",
      "Dekat pembuluh darah",
      "Lokasi menyebut arteri atau nadi. Penempatan yang salah dapat menimbulkan memar atau cedera pembuluh."
    );
  }

  if (family === "CV" && hasPointNumberBetween(point, 2, 8)) {
    addSafetyWarning(
      warnings,
      "caution",
      "Garis tengah perut bawah",
      "Titik CV bawah perlu kehati-hatian ekstra, terutama pada kehamilan, gangguan kemih, atau nyeri perut yang belum jelas."
    );
  }

  const level = warnings.reduce(
    (current, warning) =>
      SAFETY_LEVEL_META[warning.level].rank > SAFETY_LEVEL_META[current].rank
        ? warning.level
        : current,
    "safe"
  );

  return { level, warnings };
}

function renderSafetyBadge(point) {
  const safety = assessPointSafety(point);
  if (safety.level === "safe") return "";
  return `<span class="badge safety-badge safety-${safety.level}">${SAFETY_LEVEL_META[safety.level].label}</span>`;
}

function renderSafetyPanel(point, compact = false) {
  const safety = assessPointSafety(point);

  if (!safety.warnings.length) {
    return compact
      ? ""
      : `
        <section class="safety-panel safety-safe">
          <p class="result-label">Keamanan</p>
          <p class="result-text">
            Tidak ada peringatan khusus dari aturan konservatif aplikasi ini. Tetap gunakan sebagai referensi,
            bukan instruksi tindakan mandiri.
          </p>
        </section>
      `;
  }

  return `
    <section class="safety-panel safety-${safety.level}">
      <p class="result-label">Peringatan keamanan</p>
      <div class="safety-list">
        ${safety.warnings
          .slice(0, compact ? 2 : 4)
          .map(
            (warning) => `
              <div class="safety-item">
                <strong>${warning.title}</strong>
                <span>${warning.text}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderQuickSearches() {
  refs.quickSearchesRoot.innerHTML = QUICK_SEARCHES.map(
    (term) => `<button type="button" data-query="${term}">${term}</button>`
  ).join("");
}

function renderSearchSuggestions() {
  const suggestions = Array.from(
    new Set([
      ...QUICK_SEARCHES,
      ...Object.values(CHANNEL_META).flatMap((meta) => [meta.label, meta.longLabel]),
      ...(window.SearchEngine.SYMPTOM_LEXICON || []).flatMap((concept) => [
        concept.label,
        ...concept.aliases,
      ]),
    ])
  )
    .filter((entry) => entry && entry.length >= 3)
    .sort((left, right) => left.localeCompare(right, "id"))
    .slice(0, 80);

  refs.searchSuggestionsRoot.innerHTML = suggestions
    .map((entry) => `<option value="${entry}"></option>`)
    .join("");
}

function renderRecentSearches() {
  if (!state.recentQueries.length) {
    refs.recentSearchesRoot.innerHTML = `
      <span class="muted-note">Belum ada query yang tersimpan di browser ini.</span>
    `;
    return;
  }

  refs.recentSearchesRoot.innerHTML = state.recentQueries
    .map(
      (query) =>
        `<button type="button" class="ghost-btn" data-query="${query}">${query}</button>`
    )
    .join("");
}

function renderActionFeedback() {
  refs.actionFeedbackRoot.textContent = state.actionFeedback || "";
}

function buildStats() {
  const meridianFamilies = Object.keys(atlas.meridianMeshes || {}).length;
  const entries = [
    ["Total titik", dataset.totalPoints || dataset.points.length || 0],
    ["Kategori meridian", dataset.categories?.Meridian || 0],
    ["Kategori extra", dataset.categories?.Extra || 0],
    ["Mesh meridian APK", meridianFamilies],
  ];

  refs.statsRoot.innerHTML = entries
    .map(
      ([label, value]) => `
        <div class="stat-item">
          <span class="stat-value">${value}</span>
          <span class="stat-label">${label}</span>
        </div>
      `
    )
    .join("");
}

function renderAtlasSummary() {
  const topMeshes = Object.entries(atlas.meridianMeshes || {})
    .sort((left, right) => right[1].total - left[1].total)
    .slice(0, 4)
    .map(
      ([code, info]) => `
        <div class="atlas-row">
          <span>${code}</span>
          <strong>${info.total}</strong>
        </div>
      `
    )
    .join("");

  refs.atlasSummaryRoot.innerHTML = `
    <div class="atlas-grid">
      <div class="atlas-card">
        <span class="atlas-value">${atlas.bodyRegions.length}</span>
        <span class="atlas-label">Region tubuh APK</span>
      </div>
      <div class="atlas-card">
        <span class="atlas-value">${atlas.organLayers.length}</span>
        <span class="atlas-label">Layer organ APK</span>
      </div>
      <div class="atlas-card">
        <span class="atlas-value">${Object.keys(atlas.meridianMeshes || {}).length}</span>
        <span class="atlas-label">Keluarga mesh meridian</span>
      </div>
    </div>
    <div class="atlas-list">
      ${topMeshes}
    </div>
  `;

  refs.atlasLanguagesRoot.innerHTML = (atlas.languages || [])
    .map((language) => `<span class="mini-chip">${language}</span>`)
    .join("");
}

function renderWeightEditor() {
  if (!state.analysis?.segments?.length) {
    refs.weightEditorRoot.innerHTML = `
      <p class="muted-note">
        Bobot aktif setelah ada query. Kamu juga bisa menulis langsung seperti
        <code>maag^2 + mual + cemas</code>.
      </p>
    `;
    return;
  }

  refs.weightEditorRoot.innerHTML = state.analysis.segments
    .map(
      (segment) => `
        <button type="button" class="weight-chip" data-segment-id="${segment.id}">
          <span class="weight-label">${segment.text}</span>
          <span class="weight-value">${segment.weight.toFixed(2)}x</span>
        </button>
      `
    )
    .join("");
}

function renderMeridianFilters() {
  const catalog = buildMeridianCatalogData(getBaseEntries());
  refs.meridianFiltersRoot.innerHTML = [
    `
      <button type="button" class="filter-chip ${state.meridianFilter ? "" : "is-selected"}" data-meridian="">
        Semua meridian
      </button>
    `,
    ...catalog.map(
      (entry) => `
        <button
          type="button"
          class="filter-chip ${state.meridianFilter === entry.code ? "is-selected" : ""}"
          data-meridian="${entry.code}"
          style="--chip-color:${entry.color}"
        >
          ${entry.code}
          <span>${entry.currentCount || entry.totalCount}</span>
        </button>
      `
    ),
  ].join("");
}

function renderMeridianCatalog() {
  const catalog = buildMeridianCatalogData(browseEntries);
  refs.meridianCatalogRoot.innerHTML = catalog
    .map(
      (entry) => `
        <button
          type="button"
          class="catalog-row ${state.meridianFilter === entry.code ? "is-selected" : ""}"
          data-meridian="${entry.code}"
          style="--catalog-color:${entry.color}"
        >
          <span class="catalog-main">
            <strong>${entry.code}</strong>
            <small>${entry.longLabel}</small>
          </span>
          <span class="catalog-stats">
            <span>${entry.totalCount} titik</span>
            <span>${entry.meshTotal || "-"} mesh</span>
          </span>
        </button>
      `
    )
    .join("");
}

function renderLayerModes(entries) {
  const mode = effectiveLayerMode(entries);
  refs.layerModesRoot.innerHTML = ["surface", "organ", "meridian"]
    .map((layer) => {
      const labels = {
        surface: "Permukaan",
        organ: "Organ",
        meridian: "Meridian",
      };
      return `
        <button type="button" class="layer-chip ${mode === layer ? "is-selected" : ""}" data-layer="${layer}">
          ${labels[layer]}
        </button>
      `;
    })
    .join("");

  const focusedOrgans = deriveOrganFocus();
  const meridianCodes = deriveMeridianFocusCodes(entries);
  const lines = [];

  if (mode === "organ") {
    lines.push(
      focusedOrgans.length
        ? `Organ fokus: ${focusedOrgans.map(organLabel).join(", ")}.`
        : "Tidak ada organ fokus khusus untuk query saat ini."
    );
  }

  if (mode === "meridian") {
    lines.push(
      meridianCodes.length
        ? `Meridian fokus: ${meridianCodes.join(", ")}.`
        : "Pilih meridian atau titik untuk melihat jalur atlas."
    );
  }

  if (mode === "surface") {
    lines.push("Mode permukaan menonjolkan area anatomi hasil pencarian.");
  }

  refs.atlasFocusRoot.innerHTML = `<p class="muted-note">${lines.join(" ")}</p>`;
}

function renderQueryInsight() {
  if (!state.analysis) {
    refs.queryInsight.textContent =
      "Masukkan keluhan, lalu sistem akan memecah query menjadi konsep gejala yang bisa diberi bobot.";
    return;
  }

  const segments = state.analysis.segments
    .map((segment) => {
      const labels = segment.concepts.map((concept) => concept.label).slice(0, 2).join(", ");
      return labels
        ? `${segment.text} ${segment.weight.toFixed(2)}x -> ${labels}`
        : `${segment.text} ${segment.weight.toFixed(2)}x`;
    })
    .join(" | ");

  refs.queryInsight.textContent = `Bobot pencarian: ${segments}. Klik chip bobot untuk mengubah prioritas keluhan.`;
}

function renderOrganOverlay(activeOrgans) {
  const shapes = activeOrgans.flatMap((organId) =>
    (ORGAN_SHAPES[organId] || []).map((shape) => ({ ...shape, organId }))
  );

  return shapes
    .map((shape) => {
      if (shape.type === "rect") {
        return `
          <rect
            class="organ-shape is-active"
            data-organ="${shape.organId}"
            x="${shape.x}"
            y="${shape.y}"
            width="${shape.width}"
            height="${shape.height}"
            rx="${shape.rx}"
          >
            <title>${organLabel(shape.organId)}</title>
          </rect>
        `;
      }

      return `
        <ellipse
          class="organ-shape is-active"
          data-organ="${shape.organId}"
          cx="${shape.x}"
          cy="${shape.y}"
          rx="${shape.rx}"
          ry="${shape.ry}"
        >
          <title>${organLabel(shape.organId)}</title>
        </ellipse>
      `;
    })
    .join("");
}

function renderMeridianOverlay(codes) {
  return codes
    .flatMap((code) => {
      const meta = channelMeta(code);
      return (MERIDIAN_PATHS[code] || []).map(
        (segment) => `
          <path
            class="meridian-line"
            data-surface="${segment.surface}"
            d="${segment.d}"
            stroke="${meta.color}"
          >
            <title>${code} - ${meta.longLabel}</title>
          </path>
        `
      );
    })
    .join("");
}

function zoneClass(zoneId, counts) {
  const classes = ["map-zone"];
  if (counts[zoneId]) {
    classes.push("has-results");
  }
  if (state.zoneFilter === zoneId) {
    classes.push("is-selected");
  }
  if (state.zoneFilter && state.zoneFilter !== zoneId) {
    classes.push("is-dimmed");
  }
  return classes.join(" ");
}

function markerClass(zoneId) {
  return state.zoneFilter && state.zoneFilter !== zoneId
    ? "map-marker is-dimmed"
    : "map-marker";
}

function renderBodyMap() {
  const meridianFiltered = getMeridianFilteredEntries();
  const visible = getVisibleEntries();
  const counts = groupedZoneCounts(meridianFiltered);
  const markers = visible.slice(0, state.query ? 14 : 18);
  const mode = effectiveLayerMode(meridianFiltered);
  const organOverlay = mode === "organ" ? renderOrganOverlay(deriveOrganFocus()) : "";
  const meridianOverlay =
    mode === "meridian" ? renderMeridianOverlay(deriveMeridianFocusCodes(visible)) : "";

  refs.bodyMapRoot.innerHTML = `
    <svg viewBox="0 0 380 260" class="body-map-svg" role="img" aria-label="Peta tubuh depan dan belakang">
      <text x="95" y="12" text-anchor="middle" class="figure-label">Depan</text>
      <text x="285" y="12" text-anchor="middle" class="figure-label">Belakang</text>

      <circle class="${zoneClass("head", counts)}" data-zone="head" cx="95" cy="28" r="19"></circle>
      <rect class="${zoneClass("neck", counts)}" data-zone="neck" x="88" y="46" width="14" height="14" rx="7"></rect>
      <rect class="${zoneClass("torso", counts)}" data-zone="torso" x="64" y="60" width="62" height="48" rx="22"></rect>
      <rect class="${zoneClass("abdomen", counts)}" data-zone="abdomen" x="72" y="100" width="46" height="28" rx="14"></rect>
      <rect class="${zoneClass("pelvis", counts)}" data-zone="pelvis" x="76" y="128" width="38" height="18" rx="9"></rect>
      <rect class="${zoneClass("arm", counts)}" data-zone="arm" x="30" y="66" width="18" height="62" rx="9"></rect>
      <rect class="${zoneClass("arm", counts)}" data-zone="arm" x="142" y="66" width="18" height="62" rx="9"></rect>
      <rect class="${zoneClass("hand", counts)}" data-zone="hand" x="28" y="128" width="14" height="30" rx="7"></rect>
      <rect class="${zoneClass("hand", counts)}" data-zone="hand" x="148" y="128" width="14" height="30" rx="7"></rect>
      <rect class="${zoneClass("leg", counts)}" data-zone="leg" x="80" y="146" width="16" height="86" rx="8"></rect>
      <rect class="${zoneClass("leg", counts)}" data-zone="leg" x="104" y="146" width="16" height="86" rx="8"></rect>
      <ellipse class="${zoneClass("foot", counts)}" data-zone="foot" cx="84" cy="240" rx="12" ry="7"></ellipse>
      <ellipse class="${zoneClass("foot", counts)}" data-zone="foot" cx="116" cy="240" rx="12" ry="7"></ellipse>

      <circle class="${zoneClass("head", counts)}" data-zone="head" cx="285" cy="28" r="19"></circle>
      <rect class="${zoneClass("neck", counts)}" data-zone="neck" x="278" y="46" width="14" height="14" rx="7"></rect>
      <rect class="${zoneClass("back_upper", counts)}" data-zone="back_upper" x="254" y="60" width="62" height="52" rx="24"></rect>
      <rect class="${zoneClass("back_lower", counts)}" data-zone="back_lower" x="262" y="110" width="46" height="38" rx="14"></rect>
      <rect class="${zoneClass("arm", counts)}" data-zone="arm" x="220" y="66" width="18" height="62" rx="9"></rect>
      <rect class="${zoneClass("arm", counts)}" data-zone="arm" x="332" y="66" width="18" height="62" rx="9"></rect>
      <rect class="${zoneClass("hand", counts)}" data-zone="hand" x="218" y="128" width="14" height="30" rx="7"></rect>
      <rect class="${zoneClass("hand", counts)}" data-zone="hand" x="338" y="128" width="14" height="30" rx="7"></rect>
      <rect class="${zoneClass("leg", counts)}" data-zone="leg" x="270" y="146" width="16" height="86" rx="8"></rect>
      <rect class="${zoneClass("leg", counts)}" data-zone="leg" x="294" y="146" width="16" height="86" rx="8"></rect>
      <ellipse class="${zoneClass("foot", counts)}" data-zone="foot" cx="274" cy="240" rx="12" ry="7"></ellipse>
      <ellipse class="${zoneClass("foot", counts)}" data-zone="foot" cx="306" cy="240" rx="12" ry="7"></ellipse>

      <g class="organ-layer">${organOverlay}</g>
      <g class="meridian-layer">${meridianOverlay}</g>

      ${markers
        .map((entry, index) => {
          const [x, y] = markerPosition(entry.point, index);
          const color = channelMeta(entry.point.channel).color || "#6d1307";
          return `
            <g class="${markerClass(entry.point.mapZone)}">
              <circle cx="${x}" cy="${y}" r="4.5" fill="${color}"></circle>
              <text x="${x + 7}" y="${y + 3}">${entry.point.code}</text>
              <title>${entry.point.code} - ${entry.point.name}</title>
            </g>
          `;
        })
        .join("")}
    </svg>
  `;

  refs.zonePillsRoot.innerHTML = [
    `
      <button type="button" class="zone-pill ${state.zoneFilter ? "" : "is-selected"}" data-zone="">
        Semua area <span>${meridianFiltered.length}</span>
      </button>
    `,
    ...MAP_ZONES.filter((zone) => counts[zone.id]).map(
      (zone) => `
        <button type="button" class="zone-pill ${state.zoneFilter === zone.id ? "is-selected" : ""}" data-zone="${zone.id}">
          ${zone.label} <span>${counts[zone.id]}</span>
        </button>
      `
    ),
  ].join("");

  if (!meridianFiltered.length) {
    refs.bodyMapSummary.textContent =
      "Belum ada hasil yang bisa dipetakan. Mulai dari query atau pilih meridian dari katalog.";
    return;
  }

  const zoneSummary = Object.entries(counts)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 3)
    .map(([zoneId, count]) => `${zoneLabel(zoneId)} (${count})`)
    .join(", ");

  if (mode === "organ") {
    const organs = deriveOrganFocus().map(organLabel).join(", ");
    refs.bodyMapSummary.textContent = organs
      ? `Layer organ aktif. Fokus klinis saat ini mengarah ke: ${organs}. Area dominan: ${zoneSummary}.`
      : `Layer organ aktif tanpa fokus khusus. Area dominan: ${zoneSummary}.`;
    return;
  }

  if (mode === "meridian") {
    const codes = deriveMeridianFocusCodes(visible);
    refs.bodyMapSummary.textContent = codes.length
      ? `Layer meridian aktif. Jalur yang disorot: ${codes.join(", ")}. Area dominan: ${zoneSummary}.`
      : `Layer meridian aktif. Area dominan: ${zoneSummary}.`;
    return;
  }

  refs.bodyMapSummary.textContent = `Mode permukaan aktif. Area dominan: ${zoneSummary}. Klik area tubuh untuk memfilter hasil.`;
}

function relatedPoints(point) {
  const siblings = dataset.points
    .filter((candidate) => candidate.code !== point.code)
    .filter((candidate) =>
      point.channel
        ? candidate.channel === point.channel
        : candidate.mapZone === point.mapZone
    )
    .sort((left, right) => left.code.localeCompare(right.code, "en", { numeric: true }));

  return siblings.slice(0, 8);
}

function renderTreatmentPlan() {
  const visible = getVisibleEntries();
  const hasContext = state.query || state.meridianFilter || state.selectedPointCode;

  if (!hasContext || !visible.length) {
    refs.treatmentPlanRoot.innerHTML = "";
    return;
  }

  const topEntries = visible.slice(0, 3);
  const title = state.query
    ? "Rencana cepat"
    : state.meridianFilter
      ? `Tiga titik pembuka ${state.meridianFilter}`
      : `Titik sekitar ${activePoint()?.code || ""}`;
  const subtitle = state.query
    ? "Ambil titik dengan skor tertinggi dulu, lalu dalami detail dan alasan match-nya."
    : "Ringkasan singkat ini membantu browse cepat sebelum membuka detail tiap titik.";

  refs.treatmentPlanRoot.innerHTML = `
    <article class="detail-card">
      <div class="detail-head">
        <div>
          <p class="eyebrow">Ringkasan tindakan</p>
          <h3>${title}</h3>
          <p class="detail-subtitle">${subtitle}</p>
        </div>
        <div class="detail-actions">
          <button type="button" class="ghost-btn" data-app-action="copy-summary">Salin ringkasan</button>
        </div>
      </div>

      <div class="plan-grid">
        ${topEntries
          .map((entry, index) => {
            const reasons = entry.contributions
              .slice()
              .sort((left, right) => right.weightedScore - left.weightedScore)
              .slice(0, 2)
              .map(
                (contribution) =>
                  `<span class="match-chip">${contribution.label} ${contribution.weight.toFixed(2)}x</span>`
              )
              .join("");
            const family = pointFamilyKey(entry.point);
            return `
              <article class="plan-step">
                <div class="plan-step-head">
                  <span class="plan-rank">Prioritas ${index + 1}</span>
                  <span class="badge">${entry.point.code}</span>
                </div>
                <h4>${entry.point.name || entry.point.code}</h4>
                <p class="result-meta">${channelMeta(family).longLabel} · ${entry.point.zoneLabel}</p>
                <p class="result-text">${entry.point.indication || "-"}</p>
                ${renderSafetyPanel(entry.point, true)}
                <div class="match-list">${reasons || "<span class='match-chip'>Browse cepat</span>"}</div>
                <div class="card-actions">
                  <button type="button" class="ghost-btn" data-point="${entry.point.code}">Buka detail</button>
                  <button type="button" class="ghost-btn" data-meridian="${family}">Lihat meridian</button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderDetailPanel() {
  const point = activePoint();
  if (!point) {
    refs.pointDetailRoot.innerHTML = `
      <article class="empty-detail">
        <p class="eyebrow">Detail titik</p>
        <h3>Pilih titik untuk melihat detail.</h3>
        <p class="muted-note">
          Detail bisa dibuka dari hasil pencarian, katalog meridian, atau lewat URL hash seperti
          <code>#p=LI4</code>.
        </p>
      </article>
    `;
    return;
  }

  const family = pointFamilyKey(point);
  const meta = channelMeta(family);
  const mesh = meridianMeshInfo(point.channel);
  const siblings = relatedPoints(point);
  const keywords = extractKeywords(point);

  refs.pointDetailRoot.innerHTML = `
    <article class="detail-card">
      <div class="detail-head">
        <div>
          <p class="eyebrow">Detail titik</p>
          <h3>${point.code} · ${point.name || point.code}</h3>
          <p class="detail-subtitle">${meta.longLabel} · ${point.zoneLabel} · ${point.surface === "back" ? "Belakang" : "Depan"}</p>
        </div>
        <div class="detail-actions">
          <button type="button" class="ghost-btn" data-meridian="${family}">Filter meridian</button>
          <button type="button" class="ghost-btn" data-close-detail="1">Tutup</button>
        </div>
      </div>

      <div class="detail-grid">
        <section>
          <p class="result-label">Lokasi</p>
          <p class="result-text">${point.location || "-"}</p>
        </section>
        <section>
          <p class="result-label">Fungsi utama</p>
          <p class="result-text">${point.indication || "-"}</p>
        </section>
        <section>
          <p class="result-label">Metadata atlas</p>
          <p class="result-text">
            Zona: ${point.zoneLabel}. APK region: ${point.apkRegion}.
            ${mesh ? `Mesh meridian APK: ${mesh.total} titik.` : "Tidak ada mesh meridian spesifik di APK untuk keluarga ini."}
          </p>
        </section>
        <section>
          <p class="result-label">Kata kunci klinis</p>
          <div class="match-list">
            ${keywords.map((keyword) => `<span class="match-chip">${keyword}</span>`).join("") || "<span class='match-chip'>-</span>"}
          </div>
        </section>
      </div>

      ${renderSafetyPanel(point)}

      <section class="detail-related">
        <p class="result-label">Titik terkait</p>
        <div class="related-list">
          ${siblings
            .map(
              (sibling) => `
                <button type="button" class="related-point" data-point="${sibling.code}">
                  <strong>${sibling.code}</strong>
                  <span>${sibling.name}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    </article>
  `;
}

function renderResults() {
  const visible = getVisibleEntries();
  const browsing = !state.query && !state.meridianFilter && !state.selectedPointCode;

  if (browsing) {
    refs.resultsTitle.textContent = "Mulai dari keluhan atau pilih meridian";
    refs.resultsSummary.textContent =
      "Kamu bisa mencari keluhan, memilih meridian dari katalog, atau buka detail titik langsung.";
    refs.resultsRoot.innerHTML = `
      <article class="empty-state">
        <h3>Belum ada alur aktif</h3>
        <p>
          Coba query seperti <strong>maag + mual</strong> atau klik salah satu keluarga
          meridian di panel kiri.
        </p>
      </article>
    `;
    return;
  }

  if (!visible.length) {
    refs.resultsTitle.textContent = state.query
      ? `Tidak ada hasil yang kuat untuk "${state.query}"`
      : "Tidak ada titik pada filter aktif";
    refs.resultsSummary.textContent =
      "Ubah bobot keluhan, ganti meridian, atau lepas filter area tubuh.";
    refs.resultsRoot.innerHTML = `
      <article class="empty-state">
        <h3>Hasil belum ditemukan</h3>
        <p>
          Filter aktif terlalu sempit untuk dataset ini. Coba longgarkan salah satu
          filter atau gunakan kata gejala yang lebih umum.
        </p>
      </article>
    `;
    return;
  }

  if (state.query) {
    refs.resultsTitle.textContent = `Titik paling terkait dengan "${state.query}"`;
    refs.resultsSummary.textContent = state.zoneFilter
      ? `${visible.length} hasil tampil untuk area ${zoneLabel(state.zoneFilter)}.`
      : `${visible.length} hasil teratas ditampilkan dengan bobot keluhan aktif.`;
  } else if (state.selectedPointCode && activePoint()) {
    refs.resultsTitle.textContent = `Titik sekitar ${activePoint().code}`;
    refs.resultsSummary.textContent =
      "Mode detail tanpa query menampilkan keluarga meridian atau area tubuh yang paling dekat dengan titik aktif.";
  } else if (state.meridianFilter) {
    const meta = channelMeta(state.meridianFilter);
    refs.resultsTitle.textContent = `Browse ${meta.longLabel}`;
    refs.resultsSummary.textContent = `${visible.length} titik tampil untuk keluarga meridian ini.`;
  }

  refs.resultsRoot.innerHTML = visible
    .map((entry) => {
      const meta = channelMeta(pointFamilyKey(entry.point));
      const topContributions = entry.contributions
        .slice()
        .sort((left, right) => right.weightedScore - left.weightedScore)
        .slice(0, 3);
      const score = formatScore(entry);

      return `
        <article class="result-card ${state.selectedPointCode === entry.point.code ? "is-active" : ""}">
          <div class="result-top">
            <div>
              <span class="result-code">${entry.point.code}</span>
              <h3>${entry.point.name || entry.point.code}</h3>
              <p class="result-meta">${meta.longLabel} · ${entry.point.zoneLabel}</p>
            </div>
            <div class="badge-row">
              <span class="badge">${entry.point.category}</span>
              <span class="badge">${channelBadge(entry.point)}</span>
              <span class="badge">${entry.point.surface === "back" ? "Belakang" : "Depan"}</span>
              ${renderSafetyBadge(entry.point)}
              ${score !== null ? `<span class="badge score-badge">${score}</span>` : ""}
            </div>
          </div>

          <section class="result-section">
            <p class="result-label">Fungsi utama</p>
            <p class="result-text">${entry.point.indication || "-"}</p>
          </section>

          <section class="result-section">
            <p class="result-label">Lokasi singkat</p>
            <p class="result-text">${entry.point.location || "-"}</p>
          </section>

          ${renderSafetyPanel(entry.point, true)}

          ${
            topContributions.length
              ? `
                <section class="result-section">
                  <p class="result-label">Bobot keluhan yang kena</p>
                  <div class="match-list">
                    ${topContributions
                      .map(
                        (contribution) => `
                          <span class="match-chip">
                            ${contribution.label} · ${contribution.weight.toFixed(2)}x
                          </span>
                        `
                      )
                      .join("")}
                  </div>
                </section>
              `
              : ""
          }

          ${entry.matches.length ? renderMatches(entry.matches) : ""}

          <div class="card-actions">
            <button type="button" class="ghost-btn" data-point="${entry.point.code}">Detail</button>
            <button type="button" class="ghost-btn" data-meridian="${pointFamilyKey(entry.point)}">Meridian</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMatches(matches) {
  return `
    <div class="match-list">
      ${matches
        .slice(0, 4)
        .map((match) => `<span class="match-chip">Cocok: ${match}</span>`)
        .join("")}
    </div>
  `;
}

function renderAll(options = {}) {
  refs.complaintInput.value = state.query;
  renderSearchSuggestions();
  renderRecentSearches();
  renderActionFeedback();
  buildStats();
  renderAtlasSummary();
  renderMeridianCatalog();
  renderWeightEditor();
  renderMeridianFilters();
  renderLayerModes(getVisibleEntries());
  renderQueryInsight();
  renderBodyMap();
  renderTreatmentPlan();
  renderDetailPanel();
  renderResults();

  if (options.syncRoute !== false) {
    syncHash();
  }
}

function runSearch(query, options = {}) {
  updateSearchState(query, options);
  if (state.query) {
    rememberQuery(state.query);
  }
  if (!options.keepLayer && state.query) {
    const selected = activePoint();
    if (selected?.channel && meridianMeshInfo(selected.channel)) {
      state.layerMode = "meridian";
    } else {
      state.layerMode = deriveOrganFocus().length ? "organ" : "surface";
    }
  }
  renderAll();
}

function selectMeridian(code) {
  state.meridianFilter = state.meridianFilter === code || !code ? null : code;
  if (state.meridianFilter && meridianMeshInfo(state.meridianFilter)) {
    state.layerMode = "meridian";
  } else {
    state.layerMode = contextDefaultLayer();
  }
  renderAll();
}

function selectZone(zoneId) {
  const counts = groupedZoneCounts(getMeridianFilteredEntries());
  if (zoneId && !counts[zoneId]) {
    return;
  }
  state.zoneFilter = state.zoneFilter === zoneId || !zoneId ? null : zoneId;
  renderAll();
}

function openPoint(code) {
  if (!pointByCode.has(code)) {
    return;
  }
  state.selectedPointCode = code;
  const point = pointByCode.get(code);
  if (point.channel && meridianMeshInfo(point.channel)) {
    state.layerMode = "meridian";
  }
  renderAll();
  refs.pointDetailRoot.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closePointDetail() {
  state.selectedPointCode = null;
  state.layerMode = contextDefaultLayer();
  renderAll();
}

renderQuickSearches();
applyRoute();

refs.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(refs.complaintInput.value, {
    keepSelection: true,
  });
});

refs.quickSearchesRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-query]");
  if (!target) {
    return;
  }
  refs.complaintInput.value = target.dataset.query || "";
  runSearch(refs.complaintInput.value, { keepSelection: true });
});

refs.recentSearchesRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-query]");
  if (!target) {
    return;
  }
  refs.complaintInput.value = target.dataset.query || "";
  runSearch(refs.complaintInput.value, { keepSelection: true });
});

refs.searchActionsRoot.addEventListener("click", async (event) => {
  const target = event.target.closest("[data-app-action]");
  if (!target) {
    return;
  }

  const action = target.dataset.appAction;
  if (action === "reset") {
    resetExplorer();
    return;
  }
  if (action === "share") {
    await shareCurrentState();
    return;
  }
  if (action === "copy-summary") {
    await copySummary();
  }
});

refs.weightEditorRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-segment-id]");
  if (!target || !state.analysis) {
    return;
  }
  const segmentId = target.dataset.segmentId;
  const current = state.weightOverrides[segmentId];
  state.weightOverrides[segmentId] = window.SearchEngine.nextWeight(current);
  runSearch(state.query, {
    keepFilters: true,
    keepSelection: true,
    keepLayer: true,
    weightOverrides: state.weightOverrides,
  });
});

refs.meridianFiltersRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-meridian]");
  if (!target) {
    return;
  }
  selectMeridian(target.dataset.meridian || null);
});

refs.meridianCatalogRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-meridian]");
  if (!target) {
    return;
  }
  selectMeridian(target.dataset.meridian || null);
});

refs.zonePillsRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-zone]");
  if (!target) {
    return;
  }
  selectZone(target.dataset.zone || null);
});

refs.bodyMapRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-zone]");
  if (!target) {
    return;
  }
  selectZone(target.dataset.zone || null);
});

refs.layerModesRoot.addEventListener("click", (event) => {
  const target = event.target.closest("[data-layer]");
  if (!target) {
    return;
  }
  state.layerMode = normalizeLayerMode(target.dataset.layer);
  renderAll();
});

refs.treatmentPlanRoot.addEventListener("click", async (event) => {
  const pointButton = event.target.closest("[data-point]");
  if (pointButton) {
    openPoint(pointButton.dataset.point);
    return;
  }

  const meridianButton = event.target.closest("[data-meridian]");
  if (meridianButton) {
    selectMeridian(meridianButton.dataset.meridian || null);
    return;
  }

  const actionButton = event.target.closest("[data-app-action]");
  if (actionButton?.dataset.appAction === "copy-summary") {
    await copySummary();
  }
});

refs.resultsRoot.addEventListener("click", (event) => {
  const pointButton = event.target.closest("[data-point]");
  if (pointButton) {
    openPoint(pointButton.dataset.point);
    return;
  }

  const meridianButton = event.target.closest("[data-meridian]");
  if (meridianButton) {
    selectMeridian(meridianButton.dataset.meridian || null);
  }
});

refs.pointDetailRoot.addEventListener("click", (event) => {
  const pointButton = event.target.closest("[data-point]");
  if (pointButton) {
    openPoint(pointButton.dataset.point);
    return;
  }

  const meridianButton = event.target.closest("[data-meridian]");
  if (meridianButton) {
    selectMeridian(meridianButton.dataset.meridian || null);
    return;
  }

  if (event.target.closest("[data-close-detail]")) {
    closePointDetail();
  }
});

window.addEventListener("hashchange", applyRoute);
