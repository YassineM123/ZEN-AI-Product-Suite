#!/usr/bin/env node

/**
 * ZEN AI Suite — Unified Multi-Agent Applications Launcher
 * ZEN Groupe • Paris | Clermont-Ferrand | Dubai • www.zen-groupe.fr
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';
const pnpmCmd = isWindows ? 'pnpm.cmd' : 'pnpm';

const services = [
  {
    name: 'PORTAL',
    color: '\x1b[36m', // Cyan
    dir: path.join(rootDir, 'zen-suite-portal'),
    cmd: npmCmd,
    args: ['run', 'dev'],
    port: 3003,
    desc: 'Central Suite Portal (http://localhost:3003)',
  },
  {
    name: 'MARKET',
    color: '\x1b[34m', // Blue
    dir: path.join(rootDir, 'TradingAgents-main', 'web'),
    cmd: npmCmd,
    args: ['run', 'dev'],
    port: 3002,
    desc: 'ZEN Market Intelligence (http://localhost:3002)',
  },
  {
    name: 'COMMERCE',
    color: '\x1b[35m', // Magenta
    dir: path.join(rootDir, 'e-commerce-agents-main', 'web'),
    cmd: pnpmCmd,
    args: ['run', 'dev'],
    port: 3000,
    desc: 'ZEN Commerce Intelligence (http://localhost:3000)',
  },
  {
    name: 'SALES',
    color: '\x1b[32m', // Green
    dir: path.join(rootDir, 'sagent-master', 'dashboard'),
    cmd: npmCmd,
    args: ['run', 'dev', '--', '-p', '3001'],
    port: 3001,
    desc: 'ZEN Sales Agent (http://localhost:3001)',
  },
];

const resetColor = '\x1b[0m';
const bold = '\x1b[1m';

console.log(`${bold}==============================================================================${resetColor}`);
console.log(`${bold} ZEN AI Suite — Enterprise Multi-Agent Business Solutions${resetColor}`);
console.log(` ZEN Groupe • Paris | Clermont-Ferrand | Dubai • www.zen-groupe.fr`);
console.log(`${bold}==============================================================================${resetColor}\n`);

console.log(`${bold}🌐 Starting all 4 applications concurrently:${resetColor}`);
services.forEach((s) => {
  console.log(`  ${s.color}[${s.name}]${resetColor} ${s.desc}`);
});
console.log('');

const runningProcesses = [];

services.forEach((service) => {
  const proc = spawn(service.cmd, service.args, {
    cwd: service.dir,
    shell: true,
    env: { ...process.env, PORT: service.port.toString() },
  });

  proc.stdout.on('data', (data) => {
    const lines = data.toString().trim().split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        console.log(`${service.color}[${service.name}]${resetColor} ${line.trim()}`);
      }
    });
  });

  proc.stderr.on('data', (data) => {
    const lines = data.toString().trim().split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        console.error(`${service.color}[${service.name}:ERR]${resetColor} ${line.trim()}`);
      }
    });
  });

  proc.on('close', (code) => {
    console.log(`${service.color}[${service.name}]${resetColor} Exited with code ${code}`);
  });

  runningProcesses.push(proc);
});

process.on('SIGINT', () => {
  console.log('\n\x1b[33mShutting down all ZEN AI Suite applications...\x1b[0m');
  runningProcesses.forEach((p) => p.kill('SIGINT'));
  process.exit(0);
});

process.on('SIGTERM', () => {
  runningProcesses.forEach((p) => p.kill('SIGTERM'));
  process.exit(0);
});
