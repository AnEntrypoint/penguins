import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const dir = new URL('.', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const read = f => fs.readFileSync(path.join(dir, f), 'utf8')
const exists = f => fs.existsSync(path.join(dir, f))

let passed = 0, failed = 0
function test(name, fn) {
  try { fn(); console.log(`  ✓ ${name}`); passed++ }
  catch (e) { console.error(`  ✗ ${name}: ${e.message}`); failed++ }
}

// species.json
console.log('\nspecies.json')
const species = JSON.parse(read('species.json'))
test('has 18 species', () => assert.equal(species.length, 18))
test('each has required fields', () => {
  const required = ['name', 'scientificName', 'conservationStatus', 'range', 'height', 'weight', 'population', 'habitat', 'diet', 'lifespan', 'funFact', 'threats']
  for (const s of species) for (const f of required) assert.ok(s[f], `${s.name} missing ${f}`)
})
test('all conservation statuses valid', () => {
  const valid = new Set(['Least Concern', 'Near Threatened', 'Vulnerable', 'Endangered', 'Critically Endangered'])
  for (const s of species) assert.ok(valid.has(s.conservationStatus), `${s.name}: invalid status "${s.conservationStatus}"`)
})
test('threats is array with entries', () => {
  for (const s of species) { assert.ok(Array.isArray(s.threats)); assert.ok(s.threats.length >= 1) }
})

// facts.json
console.log('\nfacts.json')
const facts = JSON.parse(read('facts.json'))
test('has >=60 facts', () => assert.ok(facts.length >= 60, `only ${facts.length}`))
test('each fact has id+category+fact+species', () => {
  for (const f of facts) {
    assert.ok(f.id, 'missing id')
    assert.ok(f.category, 'missing category')
    assert.ok(f.fact && f.fact.length > 20, 'fact too short')
    assert.ok(f.species, 'missing species')
  }
})
const validCats = new Set(['biology', 'behavior', 'conservation', 'evolution', 'species', 'habitat', 'diet', 'reproduction'])
test('categories are valid', () => {
  for (const f of facts) assert.ok(validCats.has(f.category), `invalid category "${f.category}"`)
})

// README.md
console.log('\nREADME.md')
const readme = read('README.md')
test('README >500 bytes', () => assert.ok(readme.length > 500, `only ${readme.length} bytes`))
test('README has species section', () => assert.ok(readme.toLowerCase().includes('penguin'), 'no penguin mention'))

// HTML site
console.log('\nstatic site')
test('index.html exists', () => assert.ok(exists('index.html')))
test('facts.html exists', () => assert.ok(exists('facts.html')))
test('site.css exists', () => assert.ok(exists('site.css')))
test('all 18 species pages exist', () => {
  for (const s of species) {
    const slug = s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    assert.ok(exists(`species/${slug}.html`), `missing species/${slug}.html`)
  }
})
test('index.html references all species', () => {
  const idx = read('index.html')
  for (const s of species) assert.ok(idx.includes(s.name), `index.html missing ${s.name}`)
})
test('index.html links to facts.html', () => assert.ok(read('index.html').includes('facts.html')))
test('conservation.html exists', () => assert.ok(exists('conservation.html')))
test('species pages link back to index', () => {
  const slug = species[0].name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  assert.ok(read(`species/${slug}.html`).includes('../index.html'))
})

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
