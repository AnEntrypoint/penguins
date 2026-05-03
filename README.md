# Penguin Species Database & Information Site

A comprehensive reference project covering all 18 living penguin species — their biology, distribution, behaviour, and conservation status. This repository combines a structured species database with a static informational website designed for educators, researchers, and anyone captivated by the world's most recognisable flightless birds.

---

## About This Project

Penguins are among the most studied and most threatened groups of seabirds on Earth. All 18 species are endemic to the Southern Hemisphere, ranging from the Antarctic ice shelf to the Galápagos Islands on the equator. Despite their cultural ubiquity, many people are unaware that more than half of all penguin species are classified as Vulnerable, Endangered, or Near Threatened by the IUCN. Climate change, commercial overfishing, oil pollution, and invasive predators are driving population collapses that demand broader public awareness.

This project aims to consolidate accurate, up-to-date information into an accessible, open-source format. Whether you are a student writing a report, a teacher building a lesson plan, or a curious reader, you will find species profiles, population estimates, range maps, conservation notes, and biological facts gathered from peer-reviewed sources and international conservation bodies.

---

## What This Repository Contains

| Path | Contents |
|---|---|
| `data/species.json` | Structured database of all 18 species with taxonomy, range, diet, breeding behaviour, and IUCN status |
| `data/conservation.json` | Population trend data, primary threats, and active conservation programmes |
| `data/facts.json` | Curated facts, records, and curiosities indexed by species |
| `index.html` | Landing page for the static site |
| `species/` | One HTML page per species with full profile |
| `assets/` | Stylesheets, scripts, and illustration assets |
| `sources/` | Annotated bibliography and raw data citations |

---

## Biology and Natural History

### Shared Characteristics

Penguins (order Sphenisciformes, family Spheniscidae) evolved from flying ancestors roughly 60 million years ago. Their wings became rigid, paddle-shaped flippers adapted for propulsion through water rather than air — a transition so complete that modern penguins are among the most efficient underwater swimmers of any bird. Emperor Penguins can dive deeper than 550 metres and hold their breath for over 20 minutes, sustained by blood haemoglobin concentrations roughly twice that of most other birds.

Their iconic black-and-white colouration is a form of countershading called disruptive coloration: from below, the white belly blends with light at the ocean surface; from above, the dark back blends with the depths. This offers camouflage from both aerial predators and underwater hunters such as leopard seals and orca.

Penguins are highly social, nesting in colonies that range from a few hundred pairs (Yellow-eyed Penguin) to several million individuals (Macaroni Penguin). Most species are monogamous within a breeding season, and many reunite with the same partner across successive years. Communication is sophisticated — individuals identify mates and chicks through individually distinctive vocalisations in colonies where visual identification would be impossible.

### Thermoregulation and Climate Adaptation

Penguins regulate body temperature through a counter-current heat exchange system in their flippers and legs, where arterial blood warms returning venous blood before heat is lost to the environment. Species living in cold climates have higher feather densities — Emperor Penguins carry approximately 100 feathers per square centimetre, the highest density of any bird. Conversely, the Galápagos Penguin, living on the equator, holds its flippers away from its body and pants to shed excess heat.

---

## The 18 Species

### Genus *Aptenodytes* — Great Penguins

| # | Common Name | Scientific Name | Height | Weight | IUCN Status |
|---|---|---|---|---|---|
| 1 | Emperor Penguin | *Aptenodytes forsteri* | 122 cm | 23–45 kg | Vulnerable |
| 2 | King Penguin | *Aptenodytes patagonicus* | 95 cm | 9–18 kg | Least Concern |

### Genus *Pygoscelis* — Brush-tailed Penguins

| # | Common Name | Scientific Name | Height | Weight | IUCN Status |
|---|---|---|---|---|---|
| 3 | Adélie Penguin | *Pygoscelis adeliae* | 70 cm | 3.6–6 kg | Least Concern |
| 4 | Chinstrap Penguin | *Pygoscelis antarcticus* | 72 cm | 3.2–5.3 kg | Near Threatened |
| 5 | Gentoo Penguin | *Pygoscelis papua* | 75–90 cm | 4.5–8.5 kg | Least Concern |

### Genus *Eudyptula* — Little Penguins

| # | Common Name | Scientific Name | Height | Weight | IUCN Status |
|---|---|---|---|---|---|
| 6 | Little Blue (Fairy) Penguin | *Eudyptula minor* | 33–43 cm | 1.0–1.5 kg | Least Concern |

### Genus *Spheniscus* — Banded Penguins

| # | Common Name | Scientific Name | Height | Weight | IUCN Status |
|---|---|---|---|---|---|
| 7 | Magellanic Penguin | *Spheniscus magellanicus* | 70–76 cm | 2.7–6.5 kg | Near Threatened |
| 8 | African Penguin | *Spheniscus demersus* | 60–70 cm | 2.1–3.7 kg | Endangered |
| 9 | Humboldt Penguin | *Spheniscus humboldti* | 56–70 cm | 3.6–5.9 kg | Vulnerable |
| 10 | Galápagos Penguin | *Spheniscus mendiculus* | 48–50 cm | 1.7–2.6 kg | Endangered |

### Genus *Eudyptes* — Crested Penguins

| # | Common Name | Scientific Name | Height | Weight | IUCN Status |
|---|---|---|---|---|---|
| 11 | Macaroni Penguin | *Eudyptes chrysolophus* | 70–71 cm | 3.3–6.6 kg | Vulnerable |
| 12 | Royal Penguin | *Eudyptes schlegeli* | 65–76 cm | 3.0–8.2 kg | Near Threatened |
| 13 | Southern Rockhopper Penguin | *Eudyptes chrysocome* | 55–62 cm | 2.3–3.4 kg | Vulnerable |
| 14 | Northern Rockhopper Penguin | *Eudyptes moseleyi* | 55–62 cm | 2.3–3.4 kg | Endangered |
| 15 | Fiordland Penguin | *Eudyptes pachyrhynchus* | 60 cm | 3.7–5.9 kg | Near Threatened |
| 16 | Snares Penguin | *Eudyptes robustus* | 50–61 cm | 2.9–4.0 kg | Vulnerable |
| 17 | Erect-crested Penguin | *Eudyptes sclateri* | 67 cm | 2.5–6.0 kg | Endangered |

### Genus *Megadyptes* — Yellow-eyed Penguins

| # | Common Name | Scientific Name | Height | Weight | IUCN Status |
|---|---|---|---|---|---|
| 18 | Yellow-eyed Penguin | *Megadyptes antipodes* | 56–78 cm | 3.0–8.5 kg | Endangered |

---

## Conservation Status Summary

| IUCN Category | Count | Species |
|---|---|---|
| Least Concern | 4 | King, Adélie, Gentoo, Little Blue |
| Near Threatened | 5 | Chinstrap, Magellanic, Royal, Northern Rockhopper*, Fiordland |
| Vulnerable | 5 | Emperor, Humboldt, Macaroni, Southern Rockhopper, Snares |
| Endangered | 4 | African, Galápagos, Northern Rockhopper, Erect-crested, Yellow-eyed |

> \* Northern Rockhopper is also listed by some authorities as Endangered depending on the assessment year. Population estimates vary significantly across surveys.

### Key Threats

**Climate change** is the overarching threat. Warming ocean temperatures shift prey distributions and reduce Antarctic sea ice — the breeding and foraging platform on which Emperor and Adélie Penguins depend. Climate projections suggest that if current warming trajectories continue, over 70% of Emperor Penguin colonies could be quasi-extinct by 2100 as sea ice becomes too unstable to support breeding.

**Overfishing** depletes the anchovy, sardine, krill, and squid populations that penguins rely on. The African Penguin's population collapsed from roughly 4 million individuals in the early 20th century to fewer than 50,000 today, largely because commercial fishing fleets have stripped coastal waters of sardine and anchovy within foraging range of colonies.

**Invasive predators** — particularly cats, rats, stoats, and ferrets — devastate ground-nesting species in New Zealand and sub-Antarctic islands. Yellow-eyed Penguin recovery programmes are almost entirely predator management programmes.

**Oil pollution** affects coastal species such as the Magellanic and African Penguins, where chronic low-level oil contamination from shipping lanes degrades waterproofing and causes chick mortality.

**Tourism pressure** and human disturbance can suppress breeding success in sensitive species like the Fiordland and Yellow-eyed Penguins, which require undisturbed, vegetated nest sites.

---

## Running the Static Site Locally

No build tools, frameworks, or server configuration required. The site is pure HTML, CSS, and vanilla JavaScript.

### Option 1 — Open directly in a browser

```
Open index.html in any modern browser.
```

This works for most content. Some browsers may restrict local file AJAX requests; if species profiles do not load, use Option 2.

### Option 2 — Serve with npx

```bash
npx serve .
```

Then navigate to `http://localhost:3000`. This resolves any local file permission issues and accurately reflects how the site behaves when hosted.

---

## Data Sources

All species data, population estimates, and conservation assessments are derived from or cross-referenced against the following authoritative sources:

**IUCN Red List of Threatened Species**
The definitive global standard for species conservation status. Species assessments are updated on a rolling basis; this project targets the most recent published assessment for each species.
[iucnredlist.org](https://www.iucnredlist.org)

**BirdLife International**
The IUCN Red List authority for birds. BirdLife conducts primary research on penguin population trends, range mapping, and threat analysis, and coordinates monitoring programmes across Southern Ocean colonies.
[birdlife.org](https://www.birdlife.org)

**Antarctic Treaty System**
The Antarctic Treaty (1959) and its Protocol on Environmental Protection (1991) govern human activity in Antarctic penguin habitat. Annex II of the Protocol specifically protects native fauna and flora. Data on Antarctic colony locations and protected area designations draws on the Antarctic Treaty Secretariat's records.
[ats.aq](https://www.ats.aq)

**Commission for the Conservation of Antarctic Marine Living Resources (CCAMLR)**
CCAMLR manages krill fisheries in the Southern Ocean and publishes stock assessments relevant to the foraging ecology of Antarctic penguin species.

**Penguin Specialist Group (IUCN SSC)**
Publishes species action plans and coordinates international research. Primary source for population census data across crested penguin species.

Additional peer-reviewed literature is cited inline in `sources/bibliography.md`.

---

## Contributing

Contributions are welcome and encouraged. Penguin research moves quickly — new population surveys, revised IUCN assessments, and range expansions are published regularly.

**To contribute:**

1. Fork this repository
2. Create a branch: `git checkout -b update/species-name-correction`
3. Make your changes with citations to primary sources
4. Open a pull request with a clear description of what changed and why

**Priorities for contribution:**
- Updated population estimates when new surveys are published
- Translation of species pages into additional languages
- Accessibility improvements to the static site
- Additional imagery (CC-licensed only)

**Data accuracy:** All factual claims in `data/` must be traceable to a primary source. Add citations to `sources/bibliography.md` when submitting new data. Unsourced population figures or conservation assessments will not be merged.

Please be respectful in all interactions. This is a collaborative project with contributors across multiple countries.

---

## License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

*Species range data and population estimates reflect the most recent published assessments at time of writing. Conservation statuses are reviewed periodically by the IUCN — check the Red List directly for the current classification of any species.*
