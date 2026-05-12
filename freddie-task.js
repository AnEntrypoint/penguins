#!/usr/bin/env node
// Driver: invoke freddie agent loop against this penguins workspace
// Usage: node freddie-task.js "<prompt>"  OR  FREDDIE_PROMPT="..." node freddie-task.js
import path from 'node:path'
import url from 'node:url'
import fs from 'node:fs'

const here = path.dirname(url.fileURLToPath(import.meta.url))
process.env.FREDDIE_HOME = path.join(here, '.freddie')
fs.mkdirSync(process.env.FREDDIE_HOME, { recursive: true })

const freddieDir = path.resolve(here, '..', 'freddie')
if (!fs.existsSync(path.join(freddieDir, 'package.json'))) {
    console.error('freddie repo not found at', freddieDir)
    process.exit(2)
}

const prompt = process.argv.slice(2).join(' ') || process.env.FREDDIE_PROMPT
if (!prompt) {
    console.error('Usage: node freddie-task.js "<prompt>"  (or set FREDDIE_PROMPT)')
    process.exit(1)
}

const dotenv = path.join(freddieDir, '.env')
if (fs.existsSync(dotenv)) {
    for (const line of fs.readFileSync(dotenv, 'utf8').split(/\r?\n/)) {
        const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^"(.*)"$/, '$1')
    }
}

const { runTurn } = await import(url.pathToFileURL(path.join(freddieDir, 'src/agent/machine.js')).href)
const { bootHost } = await import(url.pathToFileURL(path.join(freddieDir, 'src/host/index.js')).href)
await bootHost()

const t0 = Date.now()
const out = await runTurn({ prompt, cwd: here, timeoutMs: 180000 })
const dt = Date.now() - t0
console.log('\n=== freddie-task done in ' + dt + 'ms ===')
console.log('iterations:', out.iterations, 'error:', out.error || 'none')
console.log('result:', (out.result || '').slice(0, 2000))
if (out.error) process.exit(1)
