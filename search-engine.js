(function (global) {
  const SYMPTOM_LEXICON = [
    {
      id: "sleep",
      label: "Tidur & ketenangan",
      aliases: ["susah tidur", "tidak bisa tidur", "begadang", "insomnia"],
      expansions: ["insomnia", "gelisah", "mimpi buruk", "cemas"],
      channelHints: ["HT", "PC", "GV", "BL", "EX-HN"],
      zoneHints: ["head", "back_upper", "hand", "arm"],
      organHints: ["Heart"],
    },
    {
      id: "stomach",
      label: "Lambung atas",
      aliases: ["maag", "asam lambung", "perut perih", "lambung"],
      expansions: ["gastritis", "mual", "muntah", "nyeri ulu hati", "gangguan lambung"],
      priorityChannels: ["ST", "CV", "SP"],
      channelHints: ["ST", "CV", "SP", "BL"],
      zoneHints: ["abdomen", "back_upper", "foot"],
      organHints: ["Stomach", "Pancreas", "Spleen"],
    },
    {
      id: "sinus",
      label: "Hidung & sinus",
      aliases: ["pilek", "flu", "hidung mampet", "hidung tersumbat", "sinus", "sinusitis"],
      expansions: ["rhinitis", "hidung tersumbat", "alergi", "sinusitis", "hidung"],
      channelHints: ["LI", "BL", "GB", "EX-HN"],
      zoneHints: ["head"],
      organHints: ["Larynx"],
    },
    {
      id: "breathing",
      label: "Pernapasan",
      aliases: ["sesak", "asma", "napas pendek", "sesak napas", "batuk"],
      expansions: ["sesak napas", "asma", "batuk", "dada", "tenggorokan", "suara serak"],
      channelHints: ["LU", "CV", "BL", "ST"],
      zoneHints: ["torso", "neck", "back_upper"],
      organHints: ["Lung", "Bronchus", "Larynx", "Thymus"],
    },
    {
      id: "lung-organ",
      label: "Paru-paru",
      aliases: ["paru", "paru-paru", "gangguan paru"],
      expansions: ["batuk", "sesak napas", "asma", "dada", "tenggorokan"],
      priorityChannels: ["LU"],
      channelHints: ["LU", "CV", "BL", "ST"],
      zoneHints: ["torso", "neck", "back_upper"],
      organHints: ["Lung", "Bronchus"],
    },
    {
      id: "headache",
      label: "Kepala & saraf",
      aliases: ["pusing", "migrain", "sakit kepala", "vertigo"],
      expansions: ["sakit kepala", "migrain", "vertigo", "kepala", "leher kaku"],
      channelHints: ["GV", "GB", "BL", "EX-HN", "LU"],
      zoneHints: ["head", "neck", "back_upper"],
      organHints: [],
    },
    {
      id: "body-ache",
      label: "Nyeri otot",
      aliases: ["pegal", "linu", "nyeri badan", "capek badan"],
      expansions: ["nyeri", "bahu", "lengan", "pinggang", "punggung", "kaku"],
      channelHints: ["LI", "SI", "TE", "BL", "GB"],
      zoneHints: ["arm", "torso", "back_upper", "back_lower", "leg"],
      organHints: [],
    },
    {
      id: "constipation",
      label: "BAB",
      aliases: ["susah bab", "konstipasi", "bab keras", "sembelit"],
      expansions: ["sembelit", "nyeri perut", "diare", "gangguan pencernaan"],
      channelHints: ["LI", "ST", "SP", "CV"],
      zoneHints: ["abdomen", "torso", "leg"],
      organHints: ["Large-Intestine", "Small-Intestine", "Stomach"],
    },
    {
      id: "menstrual",
      label: "Haid",
      aliases: ["mens sakit", "haid sakit", "nyeri haid", "dismenore"],
      expansions: ["nyeri haid", "dismenore", "haid", "panggul", "perut bawah"],
      channelHints: ["CV", "SP", "LR", "KI", "EX-CA"],
      zoneHints: ["pelvis", "abdomen", "leg"],
      organHints: ["Uterus"],
    },
    {
      id: "palpitation",
      label: "Jantung & palpitasi",
      aliases: ["jantung berdebar", "debar-debar", "berdebar", "palpitasi"],
      expansions: ["palpitasi", "cemas", "insomnia", "nyeri dada", "gangguan jantung"],
      priorityChannels: ["HT", "PC"],
      channelHints: ["HT", "PC", "CV", "BL", "GV"],
      zoneHints: ["torso", "hand", "arm", "back_upper"],
      organHints: ["Heart"],
    },
    {
      id: "stress",
      label: "Stres",
      aliases: ["cemas", "stres", "gelisah", "tegang"],
      expansions: ["stres", "gelisah", "depresi", "insomnia", "palpitasi"],
      channelHints: ["HT", "PC", "GV", "EX-HN"],
      zoneHints: ["head", "torso", "arm", "hand"],
      organHints: ["Heart"],
    },
    {
      id: "kidney",
      label: "Ginjal & kemih",
      aliases: [
        "ginjal",
        "gangguan ginjal",
        "anyang-anyangan",
        "sering kencing",
        "sulit kencing",
        "kencing sakit",
      ],
      expansions: ["disuria", "edema", "impotensi", "pinggang", "gangguan kemih"],
      priorityChannels: ["KI", "BL"],
      channelHints: ["KI", "BL", "CV"],
      zoneHints: ["back_lower", "pelvis", "leg", "foot"],
      organHints: ["Kidney", "Bladder", "Adrenal"],
    },
    {
      id: "nausea",
      label: "Mual muntah",
      aliases: ["mual", "muntah", "eneg"],
      expansions: ["mual", "muntah", "gangguan pencernaan", "gastritis"],
      channelHints: ["ST", "CV", "SP", "PC", "BL"],
      zoneHints: ["abdomen", "back_upper", "foot", "hand"],
      organHints: ["Stomach", "Pancreas", "Spleen"],
    },
    {
      id: "diarrhea",
      label: "Diare",
      aliases: ["diare", "mencret"],
      expansions: ["diare", "nyeri perut", "gangguan pencernaan"],
      channelHints: ["ST", "SP", "CV", "LI"],
      zoneHints: ["abdomen", "leg", "torso"],
      organHints: ["Large-Intestine", "Small-Intestine", "Spleen", "Stomach"],
    },
    {
      id: "throat",
      label: "Tenggorokan",
      aliases: ["sakit tenggorokan", "radang", "tenggorokan"],
      expansions: ["sakit tenggorokan", "suara serak", "batuk", "demam"],
      channelHints: ["LU", "LI", "CV", "EX-HN"],
      zoneHints: ["neck", "head", "torso"],
      organHints: ["Larynx", "Tongue"],
    },
    {
      id: "bp",
      label: "Tekanan darah",
      aliases: ["hipertensi", "darah tinggi"],
      expansions: ["hipertensi", "vertigo", "sakit kepala"],
      channelHints: ["GB", "GV", "LI", "ST"],
      zoneHints: ["head", "neck", "torso"],
      organHints: ["Heart"],
    },
    {
      id: "eye",
      label: "Mata",
      aliases: ["mata lelah", "mata merah", "mata sakit", "penglihatan kabur"],
      expansions: ["gangguan mata", "mata merah", "penglihatan", "migrain"],
      channelHints: ["GB", "BL", "ST", "EX-HN"],
      zoneHints: ["head"],
      organHints: [],
    },
    {
      id: "liver",
      label: "Hati & empedu",
      aliases: ["hati", "empedu", "batu empedu", "emosi", "marah"],
      expansions: ["empedu", "stres", "hipertensi", "pusing", "haid"],
      priorityChannels: ["LR", "GB"],
      channelHints: ["LR", "GB", "GV", "CV"],
      zoneHints: ["abdomen", "torso", "head", "leg"],
      organHints: ["Liver", "Gall-Bladder"],
    },
    {
      id: "joint",
      label: "Sendi",
      aliases: ["bahu pegal", "lutut sakit", "pinggang sakit", "leher kaku"],
      expansions: ["bahu", "lutut", "pinggang", "leher", "nyeri"],
      channelHints: ["LI", "SI", "TE", "BL", "GB"],
      zoneHints: ["arm", "leg", "back_lower", "neck", "torso"],
      organHints: [],
    },
    {
      id: "low-back",
      label: "Pinggang & punggung bawah",
      aliases: ["nyeri pinggang", "pinggang sakit", "punggung bawah", "sciatica", "saraf kejepit"],
      expansions: ["pinggang", "punggung", "betis", "lutut", "nyeri"],
      channelHints: ["BL", "KI", "GB", "GV"],
      zoneHints: ["back_lower", "leg", "foot"],
      organHints: [],
    },
  ];

  const DEFAULT_WEIGHT_SEQUENCE = [1.5, 1.15, 1, 0.9];
  const WEIGHT_STEPS = [0.75, 1, 1.25, 1.5, 2];

  function normalize(text) {
    return (text || "")
      .toString()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s\-/.+*^]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function unique(values) {
    return Array.from(new Set(values.filter(Boolean)));
  }

  function tokenize(text) {
    return normalize(text)
      .replace(/\b(dan|atau|plus|serta)\b/g, " ")
      .split(" ")
      .map((token) => token.trim())
      .filter((token) => token.length >= 2);
  }

  function nextWeight(current) {
    const index = WEIGHT_STEPS.indexOf(current);
    return WEIGHT_STEPS[(index + 1) % WEIGHT_STEPS.length];
  }

  function parseSegmentWeight(segment) {
    const match = segment.match(/^(.*?)(?:\s*(?:\^|\*)(\d+(?:\.\d+)?))$/);
    if (!match) {
      return {
        text: segment.trim(),
        explicitWeight: null,
      };
    }

    return {
      text: match[1].trim(),
      explicitWeight: Number(match[2]),
    };
  }

  function splitSegments(query) {
    const raw = (query || "").trim();
    if (!raw) {
      return [];
    }

    const parts = raw
      .split(/\s*(?:\+|,|;|\/|\bdan\b|\batau\b|\bplus\b|\bserta\b)\s*/i)
      .map((entry) => entry.trim())
      .filter(Boolean);

    return parts.length ? parts : [raw];
  }

  function matchConcepts(normalizedText) {
    return SYMPTOM_LEXICON.filter((entry) => {
      const candidates = unique([entry.label, ...entry.aliases, ...entry.expansions])
        .map((term) => normalize(term))
        .filter(Boolean);

      return candidates.some((term) => {
        if (term === normalizedText) {
          return true;
        }
        if (term.length < 4 && normalizedText.length < 4) {
          return false;
        }
        return normalizedText.includes(term) || term.includes(normalizedText);
      });
    });
  }

  function defaultWeight(index) {
    return DEFAULT_WEIGHT_SEQUENCE[index] || 0.85;
  }

  function buildSegment(rawSegment, index, overrides = {}) {
    const parsed = parseSegmentWeight(rawSegment);
    const normalizedText = normalize(parsed.text);
    const concepts = matchConcepts(normalizedText);
    const terms = new Set([normalizedText]);
    const tokens = tokenize(parsed.text);

    tokens.forEach((token) => terms.add(token));

    concepts.forEach((concept) => {
      concept.expansions.forEach((term) => {
        terms.add(normalize(term));
        tokenize(term).forEach((token) => terms.add(token));
      });
    });

    const id = `segment-${index}-${normalizedText.replace(/\s+/g, "-") || "query"}`;
    const baseWeight = parsed.explicitWeight || defaultWeight(index);
    const weight = overrides[id] || baseWeight;

    return {
      id,
      index,
      raw: rawSegment,
      text: parsed.text,
      normalized: normalizedText,
      tokens,
      terms: Array.from(terms).filter(Boolean),
      weight,
      baseWeight,
      explicitWeight: parsed.explicitWeight,
      concepts: concepts.map((concept) => ({
        id: concept.id,
        label: concept.label,
        aliases: concept.aliases,
        expansions: concept.expansions,
        priorityChannels: concept.priorityChannels,
        channelHints: concept.channelHints,
        zoneHints: concept.zoneHints,
        organHints: concept.organHints,
      })),
    };
  }

  function analyzeQuery(query, options = {}) {
    const normalized = normalize(query);
    const rawSegments = splitSegments(query);
    const segments = rawSegments.map((segment, index) =>
      buildSegment(segment, index, options.weightOverrides || {})
    );

    const concepts = unique(
      segments.flatMap((segment) => segment.concepts.map((concept) => concept.id))
    ).map((id) => {
      const concept = SYMPTOM_LEXICON.find((entry) => entry.id === id);
      return concept
        ? {
            id: concept.id,
            label: concept.label,
            aliases: concept.aliases,
            expansions: concept.expansions,
            priorityChannels: concept.priorityChannels,
            channelHints: concept.channelHints,
            zoneHints: concept.zoneHints,
            organHints: concept.organHints,
          }
        : null;
    }).filter(Boolean);

    return {
      raw: query,
      normalized,
      tokens: unique(segments.flatMap((segment) => segment.tokens)),
      segments,
      concepts,
      isMultiComplaint: segments.length > 1,
    };
  }

  function createIndex(points) {
    return (points || []).map((point) => {
      const indexed = {
        raw: point,
        code: normalize(point.code),
        name: normalize(point.name),
        location: normalize(point.location),
        indication: normalize(point.indication),
        category: normalize(point.category),
        channel: normalize(point.channel),
        zone: normalize(point.mapZone || ""),
      };

      indexed.corpus = [
        indexed.code,
        indexed.name,
        indexed.location,
        indexed.indication,
        indexed.category,
        indexed.channel,
        indexed.zone,
      ].join(" ");

      return indexed;
    });
  }

  function scoreSegment(indexedPoint, segment) {
    const matches = new Set();
    const conceptLabels = new Set();
    let rawScore = 0;
    const compactSegment = segment.normalized.replace(/\s+/g, "");
    const compactCode = indexedPoint.code.replace(/\s+/g, "");

    if (compactSegment && compactCode === compactSegment) {
      rawScore += 240;
      matches.add(indexedPoint.raw.code);
    }

    if (segment.normalized && indexedPoint.name === segment.normalized) {
      rawScore += 180;
      matches.add(indexedPoint.raw.name);
    }

    segment.terms.forEach((term) => {
      const isPhrase = term.includes(" ");
      const indicationHit = indexedPoint.indication.includes(term);
      const locationHit = indexedPoint.location.includes(term);
      const nameHit = indexedPoint.name.includes(term);
      const codeHit = indexedPoint.code.includes(term);

      if (indicationHit) {
        rawScore += isPhrase ? 36 : 18;
        matches.add(term);
      }
      if (locationHit) {
        rawScore += isPhrase ? 10 : 5;
      }
      if (nameHit) {
        rawScore += isPhrase ? 14 : 7;
      }
      if (codeHit) {
        rawScore += isPhrase ? 16 : 8;
      }
    });

    const phraseBoost = indexedPoint.indication.includes(segment.normalized) ? 70 : 0;
    const tokenCoverage = segment.tokens.length &&
      segment.tokens.every((token) => indexedPoint.corpus.includes(token))
      ? segment.tokens.length * 12
      : 0;

    rawScore += phraseBoost + tokenCoverage;

    segment.concepts.forEach((concept) => {
      const directConceptMatch = [concept.label, ...concept.aliases].some(
        (term) => normalize(term) === segment.normalized
      );
      const conceptHit = concept.expansions.some((term) =>
        indexedPoint.indication.includes(normalize(term))
      );
      if (conceptHit) {
        rawScore += 14;
        conceptLabels.add(concept.label);
      }

      if (concept.channelHints.includes(indexedPoint.raw.channel)) {
        rawScore += directConceptMatch ? 18 : 10;
        conceptLabels.add(concept.label);
      }

      if (
        directConceptMatch &&
        concept.priorityChannels?.includes(indexedPoint.raw.channel)
      ) {
        rawScore += 18;
      }

      if (concept.zoneHints.includes(indexedPoint.raw.mapZone)) {
        rawScore += directConceptMatch ? 10 : 8;
      }

      if (directConceptMatch && concept.organHints.length) {
        rawScore += 6;
      }
    });

    return {
      id: segment.id,
      label: segment.text,
      weight: segment.weight,
      rawScore,
      weightedScore: rawScore * segment.weight,
      matches: Array.from(matches),
      concepts: Array.from(conceptLabels),
    };
  }

  function searchPoints(points, query, options = {}) {
    const analysis = options.analysis || analyzeQuery(query, options);
    const limit = options.limit || 18;

    if (!analysis.normalized) {
      return [];
    }

    const indexedPoints = createIndex(points);

    return indexedPoints
      .map((indexedPoint) => {
        const contributions = analysis.segments
          .map((segment) => scoreSegment(indexedPoint, segment))
          .filter((entry) => entry.rawScore > 0);

        const segmentsMatched = contributions.length;
        const aggregateScore = contributions.reduce(
          (sum, entry) => sum + entry.weightedScore,
          0
        );
        const combinationBoost = segmentsMatched > 1 ? segmentsMatched * 10 : 0;

        return {
          point: indexedPoint.raw,
          score: aggregateScore + combinationBoost,
          segmentsMatched,
          matches: unique(contributions.flatMap((entry) => entry.matches)),
          concepts: unique(contributions.flatMap((entry) => entry.concepts)),
          contributions,
        };
      })
      .filter((entry) => entry.score > 0)
      .sort((left, right) => {
        if (right.score !== left.score) {
          return right.score - left.score;
        }
        return left.point.code.localeCompare(right.point.code, "en", {
          numeric: true,
        });
      })
      .slice(0, limit);
  }

  const api = {
    SYMPTOM_LEXICON,
    WEIGHT_STEPS,
    analyzeQuery,
    createIndex,
    nextWeight,
    normalize,
    searchPoints,
    splitSegments,
    tokenize,
  };

  global.SearchEngine = api;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
