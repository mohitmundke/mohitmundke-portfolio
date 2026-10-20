/**
 * MONOLITH. // ARCHIVAL SOUND & PHYSICAL EDITIONS
 * Editorial Data Architecture
 * 
 * Strict compliance with design system:
 * - Primary Background: #0A0C0E
 * - Secondary Background: #101317
 * - Primary Text: #EDE7DC
 * - Secondary Text: #9EA5A8
 * - Muted Text: #6C7378
 * - Amber Accent: #E8913C
 * - Teal Accent: #2E6B72
 * - Hairline Border: rgba(237, 231, 220, 0.13)
 */

window.PORTAL_DATA = {
  brand: {
    name: "MONOLITH",
    period: ".",
    fullName: "MONOLITH RECORDINGS",
    tagline: "Acoustic Permanence in a Fugitive World",
    wordmark: {
      left: "MONO",
      right: "LITH."
    },
    heroPhotography: {
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
      fallbackGradient: "radial-gradient(circle at 60% 40%, #1e2830 0%, #0d1217 60%, #06080a 100%)",
      alt: "Monolithic architectural chamber with acoustic light study"
    },
    statementPhotography: {
      url: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop",
      alt: "Acoustic driver membrane and physical sound study"
    }
  },

  navigation: [
    { id: "hero", label: "INDEX", href: "#hero" },
    { id: "statement", label: "MANIFESTO", href: "#statement" },
    { id: "catalogue", label: "CATALOGUE", href: "#catalogue" },
    { id: "roster", label: "ROSTER", href: "#roster" },
    { id: "dates", label: "DATES", href: "#dates" },
    { id: "contact", label: "CONTACT", href: "#contact" }
  ],

  cornerMetadata: {
    topLeft: {
      label: "IDENTITY",
      text: "MONOLITH ARCHIVE // PHYSICAL SOUND"
    },
    topRight: {
      label: "ORIGIN & GENRE",
      text: "BERLIN · SPATIAL & ANALOGUE"
    },
    bottomLeft: {
      label: "EDITION",
      text: "VOL. 04 / 2026 CATALOGUE"
    },
    bottomRight: {
      label: "SCROLL GUIDANCE",
      text: "SCROLL TO UNCOVER PORTAL ↓"
    }
  },

  statement: {
    eyebrow: "// EDITORIAL MANIFESTO",
    indexNumeral: "01",
    statementLead: "We engineer sound as ",
    statementHighlight: "physical architecture.",
    statementFollow: " In an era of ephemeral streaming, MONOLITH preserves tactile permanence through heavyweight vinyl pressings, spatial acoustic studies, and uncompromising minimalist composition.",
    details: [
      {
        term: "LATHE-CUT EDITIONS",
        description: "Zero algorithmic compression. Direct-to-acetate acoustic transcription preserving dynamic master headroom."
      },
      {
        term: "SPATIAL ARCHITECTURE",
        description: "Compositions engineered specifically for multi-channel room dispersion and resonant physical chambers."
      }
    ]
  },

  catalogue: {
    eyebrow: "CATALOGUE // 2026 ARCHIVE",
    title: "Physical Editions & Tactile Pressings",
    description: "Hand-numbered limited runs, bespoke 350gsm uncoated cardstock, and virgin vinyl formulations. Each release is a physical artifact built to outlast digital bandwidth.",
    deckHint: "DRAG & THROW CARDS HORIZONTALLY, OR USE ARROW KEYS (← / →)",
    releases: [
      {
        id: "mn-042",
        catalogueNumber: "MN-042",
        title: "Chamber Reverberations",
        artist: "Korvus Archive",
        format: "180g Bone White Vinyl",
        edition: "Edition of 300 · Hand-Numbered",
        date: "2026.04.18",
        genre: "Analogue Ambient / Concrete",
        runtime: "44:18",
        artAccent: "#E8913C",
        palette: "linear-gradient(135deg, #1b1612 0%, #0d0f11 100%)",
        accentColor: "#E8913C",
        tracks: ["I. Aethelgard Chamber", "II. Cold Sintering", "III. Residual Trace"],
        coverGraphic: "geometric-rings"
      },
      {
        id: "mn-043",
        catalogueNumber: "MN-043",
        title: "Sub-surface Resonance",
        artist: "Vera Cygnus",
        format: "Clear Acetate 12\" Gatefold",
        edition: "Edition of 250 · Silk-Screened",
        date: "2026.05.22",
        genre: "Modular Synthesis / Drone",
        runtime: "38:42",
        artAccent: "#2E6B72",
        palette: "linear-gradient(135deg, #10191a 0%, #0a0d0f 100%)",
        accentColor: "#2E6B72",
        tracks: ["I. Bathymetric Low", "II. Deep Core Oscillation", "III. Thermocline"],
        coverGraphic: "waveform-grid"
      },
      {
        id: "mn-044",
        catalogueNumber: "MN-044",
        title: "Tectonic Drift Suite",
        artist: "Statik Drift",
        format: "Heavyweight Matt Black 2xLP",
        edition: "Edition of 500 · Foil Stamped",
        date: "2026.06.30",
        genre: "Deep Minimal / Microtonal",
        runtime: "52:10",
        artAccent: "#E8913C",
        palette: "linear-gradient(135deg, #1a1510 0%, #0c0e10 100%)",
        accentColor: "#E8913C",
        tracks: ["I. Fault Line A", "II. Isochrone", "III. Mantle Discontinuity"],
        coverGraphic: "architectural-lines"
      },
      {
        id: "mn-045",
        catalogueNumber: "MN-045",
        title: "Monochrome Frequencies",
        artist: "Elena Solokov",
        format: "Silk-Screen Boxset + 10\" Book",
        edition: "Edition of 180 · Custom Cloth Box",
        date: "2026.08.14",
        genre: "Experimental Acoustic / Prepared Piano",
        runtime: "41:05",
        artAccent: "#2E6B72",
        palette: "linear-gradient(135deg, #121817 0%, #090c0e 100%)",
        accentColor: "#2E6B72",
        tracks: ["I. Damped Wire Study", "II. Resonant Wood", "III. Felt & Tension"],
        coverGraphic: "concentric-arcs"
      },
      {
        id: "mn-046",
        catalogueNumber: "MN-046",
        title: "Null Space Reflections",
        artist: "Null Sector",
        format: "Lathe-Cut 10\" + Reel Tape",
        edition: "Edition of 120 · Master Acetate",
        date: "2026.10.02",
        genre: "Tape Loops & Spectral Decay",
        runtime: "36:20",
        artAccent: "#EDE7DC",
        palette: "linear-gradient(135deg, #17181a 0%, #08090a 100%)",
        accentColor: "#EDE7DC",
        tracks: ["I. Demagnetized Loop", "II. Oxide Scatter", "III. Ghost Floor"],
        coverGraphic: "spectral-bars"
      }
    ]
  },

  roster: {
    eyebrow: "ARTIST ROSTER // RESIDENT COLLECTIVE",
    title: "Composers & Acoustic Researchers",
    artists: [
      {
        category: "ANALOGUE AMBIENT",
        name: "Korvus Archive",
        origin: "Berlin, DE",
        releaseCount: "04 RELEASES",
        catalogues: "MN-012, MN-024, MN-033, MN-042",
        activeSince: "2021"
      },
      {
        category: "MODULAR SYNTHESIS",
        name: "Vera Cygnus",
        origin: "Reykjavik, IS",
        releaseCount: "03 EDITIONS",
        catalogues: "MN-019, MN-029, MN-043",
        activeSince: "2022"
      },
      {
        category: "DEEP MINIMAL",
        name: "Statik Drift",
        origin: "Tokyo, JP",
        releaseCount: "06 DISCS",
        catalogues: "MN-008, MN-017, MN-026, MN-035, MN-040, MN-044",
        activeSince: "2020"
      },
      {
        category: "EXPERIMENTAL ACOUSTIC",
        name: "Elena Solokov",
        origin: "Prague, CZ",
        releaseCount: "02 EDITIONS",
        catalogues: "MN-031, MN-045",
        activeSince: "2023"
      },
      {
        category: "TAPE LOOPS & SPECTRAL",
        name: "Null Sector",
        origin: "London, UK",
        releaseCount: "05 RELEASES",
        catalogues: "MN-014, MN-022, MN-028, MN-037, MN-046",
        activeSince: "2021"
      },
      {
        category: "SPATIAL SOUND DESIGN",
        name: "Komorebi Systems",
        origin: "Kyoto, JP",
        releaseCount: "03 EDITIONS",
        catalogues: "MN-016, MN-027, MN-039",
        activeSince: "2022"
      }
    ]
  },

  releaseDates: {
    eyebrow: "CALENDAR // DISPATCH SCHEDULE",
    title: "Upcoming & Archival Pressings",
    dates: [
      {
        date: "2026.04.18",
        catalogueNumber: "MN-042",
        title: "Chamber Reverberations",
        artist: "Korvus Archive",
        format: "180g Bone White Vinyl",
        status: "NOW SHIPPING"
      },
      {
        date: "2026.05.22",
        catalogueNumber: "MN-043",
        title: "Sub-surface Resonance",
        artist: "Vera Cygnus",
        format: "Clear Acetate 12\" Gatefold",
        status: "PRE-ORDER OPEN"
      },
      {
        date: "2026.06.30",
        catalogueNumber: "MN-044",
        title: "Tectonic Drift Suite",
        artist: "Statik Drift",
        format: "Heavyweight Matt Black 2xLP",
        status: "LACQUER MASTERING"
      },
      {
        date: "2026.08.14",
        catalogueNumber: "MN-045",
        title: "Monochrome Frequencies",
        artist: "Elena Solokov",
        format: "Silk-Screen Boxset + Book",
        status: "PRESSING IN QUEUE"
      },
      {
        date: "2026.10.02",
        catalogueNumber: "MN-046",
        title: "Null Space Reflections",
        artist: "Null Sector",
        format: "Lathe-Cut 10\" + Reel Tape",
        status: "SCHEDULED"
      }
    ]
  },

  closing: {
    eyebrow: "// ARCHIVAL DISPATCH",
    headline: "Acoustic Permanence in a Fugitive World.",
    subtext: "Mastered specifically for high-fidelity analogue transducers and physical playback systems. Every release is hand-numbered, lathe-cut or heavy-pressed, and never reissued.",
    dispatchNote: "Enter your dispatch address to receive notification 48 hours prior to public release windows.",
    actions: {
      primary: "SUBSCRIBE TO DISPATCH",
      secondary: "VIEW ARCHIVE INDEX"
    },
    colophon: {
      copyright: "© 2026 MONOLITH RECORDINGS. ALL RIGHTS RESERVED.",
      location: "BERLIN · LONDON · TOKYO",
      links: [
        { label: "INDEX", href: "#hero" },
        { label: "CATALOGUE", href: "#catalogue" },
        { label: "ROSTER", href: "#roster" },
        { label: "DATES", href: "#dates" },
        { label: "TERMS", href: "#" },
        { label: "DISPATCH", href: "#contact" }
      ]
    }
  }
};
