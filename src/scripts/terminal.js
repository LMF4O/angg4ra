// ============================================================
//  TERMINAL EASTER EGG
//  Trigger: ketik "argy", "sudo", "help", "hack", "whoami"
//  Dark academia theme
// ============================================================

const TRIGGERS = ['argy', 'sudo', 'help', 'hack', 'whoami'];

const BOOT_LINES = [
  '> angg4ra OS v2.5.0 — booting...',
  '> loading modules: [data] [web] [chaos] [vibes]',
  '> checking caffeine levels.................. critical. proceeding anyway.',
  '> mounting /home/argy........................ done.',
  '> scanning for bugs......................... found 3. naming them. moving on.',
  '> all systems (mostly) nominal.',
  '',
  '  ╔══════════════════════════════════════════╗',
  '  ║   hey. you found the easter egg. nice.  ║',
  '  ║   type "help" to see what\'s here.       ║',
  '  ╚══════════════════════════════════════════╝',
  '',
];

const FS = {
  '/': ['about.txt', 'projects/', 'skills.txt', 'hobbies/', 'hire.txt', 'secret/'],
  'projects/': ['jakarta-ispu.md', 'siadak.md', 'memory-museum.md'],
  'hobbies/': ['games.txt', 'books.txt', 'safe-space.txt'],
  'secret/': ['classified.txt', 'confessions.txt'],
};

const FILES = {
  'about.txt': `NAME     : Argy Anggara
ROLE     : Data Enthusiast · Coding Educator · Web Dev
LOCATION : Bekasi, Greater Jakarta, ID
STATUS   : Open to opportunities
GPA      : 3.77
PATENT   : EC00202500538
MBTI     : INTP (we love to suffer in silence and call it "thinking")
HOURS    : Debugging at 2AM is a lifestyle, not a choice.
VIBE     : Dark academia meets terminal green.`,

  'skills.txt': `LANGUAGES  : Python · JavaScript · TypeScript · Java · Lua
DATA       : Pandas · NumPy · Scikit-learn · SHAP · SQL
WEB        : Astro · React · Next.js · Tailwind · FastAPI
TOOLS      : Git · GitHub · Figma · VS Code · SQLite
MISC       : Roblox Studio · Excel · LaTeX
SOFT SKILL : Explaining things until it finally clicks.
             (Coding educator life. the patience is real.)`,

  'jakarta-ispu.md': `# Prediksi ISPU Kualitas Udara Jakarta
STATUS   : Selesai ✓
ACCURACY : 94.2% (Random Forest)
MODELS   : LR · Decision Tree · RF · SVM · KNN
KEY FIND : PM2.5 = most dominant feature (via SHAP)
NOTE     : High accuracy ≠ trustworthy without explainability.
           Built this because Jakarta air deserved better analysis.`,

  'siadak.md': `# Sistem Akademik DigiKidz
STATUS   : Selesai ✓
STACK    : Java Swing · SQLite · JDBC · OOP
SCOPE    : 4 active classes · 40+ students
NOTE     : Built to scratch my own itch as a Coding Educator.
           Nothing like shipping software you actually use every day.`,

  'memory-museum.md': `# Relationship Memory Museum
STATUS   : Selesai ✓
STACK    : HTML · CSS · Vanilla JS · Framer Motion · Vite
NOTE     : A web experience, not just a website.
           Some things deserve more than a photo album.
DEMO     : memory-museum.pages.dev`,

  'hire.txt': `╔═══════════════════════════════════════════╗
║        WANT TO BUILD SOMETHING?         ║
╚═══════════════════════════════════════════╝

Got a project idea? Let's make it real.

I work on:
  · Data analysis & visualization
  · Web apps (Astro, React, Next.js, FastAPI)
  · Coding education & curriculum design
  · Whatever interesting problem you throw at me

HOW TO REACH ME
─────────────────────────────────────────
  CHAT     : kodein. (DM dulu — fast response)
  EMAIL    : rgyanggara@gmail.com
  GITHUB   : github.com/angg4ra
  LINKEDIN : linkedin.com/in/argy-anggara

Gw bales < 24 jam on most days.
(lebih lama kalau lagi deep focus — but I will get back to you.)`,

  'games.txt': `# /hobbies/games.txt
─────────────────────────────────────────
CURRENT ROTATION
  Genre    : Story-driven · Open world · RPG
  Platform : PC
  Mood     : "one more hour" at 1AM — always a lie, never a regret

WHAT GAMES TAUGHT ME (FOR REAL)
  · Patience: grinding is just iteration with better background music
  · Systems thinking: every game mechanic is a data model in disguise
  · I have commitment issues with side quests.
    Started 7. Finished 0. No regrets. (some regrets.)
  · Save often. In games and in life.

HOT TAKE
  Video games are interactive novels.
  I will die on this hill, respectfully and with full HP.

WANT TO RECOMMEND A GAME?
  rgyanggara@gmail.com — genuinely curious what you're playing.`,

  'books.txt': `# /hobbies/books.txt
─────────────────────────────────────────
WHAT GW BACA
  Genre  : Non-fiction · Psychology · Tech
           Fiction that occasionally hits too close to home
  Pace   : Slow reader. I highlight everything.
           My books look like crime scenes.
  Format : Physical > Digital. always. forever.

ON READING
  It's debugging your own worldview.
  Sometimes you find the bug.
  Sometimes you realize you ARE the bug.
  Both outcomes are valid and humbling.

HAVE A RECOMMENDATION?
  Drop it: rgyanggara@gmail.com
  I actually want to know what you're reading.`,

  'safe-space.txt': `# /hobbies/safe-space.txt
─────────────────────────────────────────

hey. you found this file.

this terminal isn't just an easter egg —
it's a small corner of the internet that belongs to me.
no metrics. no impressions. no algorithm.
just text on a screen and a human on the other side.

if you're here, maybe you're:
  · a dev who appreciates a good easter egg       (hi)
  · a recruiter who actually explores portfolios  (respect)
  · someone having a weird 2AM and just typing    (same honestly)
  · an INTP who finally found their people        (welcome home)

all of you are welcome here.

─────────────────────────────────────────

if you ever want to talk — about code, books, games,
data, life, or literally nothing in particular:

  rgyanggara@gmail.com

you're not bothering me. I promise.
I actually like hearing from people who find this.

take care of yourself out there.

[EOF]`,

  'classified.txt': `ACCESS LEVEL: DENIED
...
... reconsidering.
... you seem trustworthy enough. fine.

─────────────────────────────────────────
  TOP SECRET FACTS ABOUT ARGY
─────────────────────────────────────────
  · Has rewritten the same function "one last time" 11 times.
  · Once fixed a bug by explaining it to a rubber duck.
    The duck said nothing. It was exactly right.
  · Believes README.md is a love language.
  · Has a folder called "old_versions/" with 47 files.
    Will never delete it. Can't. Won't.
  · This terminal took longer than expected to build.
    That's fine. It's fine. Everything is fine.

[EOF] — thanks for snooping. you're my kind of person.`,

  'confessions.txt': `# THINGS I'LL ADMIT IN A TEXT FILE
  BUT NOWHERE ELSE
─────────────────────────────────────────

  1. I've pushed directly to main. once. we don't speak of it.

  2. My variable names are sometimes "x", "x2", "x2_fix", "x2_FINAL".
     I know. I know.

  3. I still Google "how to center a div." every time. zero shame.

  4. I've read the docs, understood nothing, watched a 10-min YouTube
     video, and understood everything. this says something about docs.

  5. I have a playlist called "coding music" that is 40% lo-fi,
     60% game OSTs, 100% cope.

  6. I think tabs are better than spaces.
     (you can email me about this: rgyanggara@gmail.com
      let's have a respectful argument about it.)

[END — please forget you read this]`,
};

const COMMANDS = {
  help() {
    return [
      'AVAILABLE COMMANDS',
      '─────────────────────────────────────────',
      '  ls [dir]     list directory contents',
      '  cat <file>   read a file',
      '  cd <dir>     change directory',
      '  pwd          where am i?',
      '  whoami       who are you? who am i?',
      '  vibe         current status',
      '  hire         got a project? let\'s talk',
      '  contact      how to reach me',
      '  neofetch     the important stuff',
      '  coffee       ☕',
      '  secret       ...',
      '  clear        clear screen',
      '  exit         close terminal',
      '',
      'TIP: start with "ls" or jump to "cat hire.txt"',
      'TIP: "cd hobbies/" then "ls" for the good stuff',
    ];
  },

  whoami() {
    return [
      'you  : a curious human who types into random terminals.',
      '       that\'s genuinely one of my favourite kinds of people.',
      '',
      'me   : argy — data nerd, coding educator, gamer,',
      '       slow reader, dark academia enjoyer, 2AM debugger.',
      '',
      'us   : probably going to get along just fine.',
    ];
  },

  vibe() {
    const h = new Date().getHours();
    const mood =
      h < 5  ? 'debugging at an unreasonable hour. send help, or just coffee.' :
      h < 9  ? 'just woke up. give it 30 minutes and some caffeine.' :
      h < 12 ? 'actually productive right now. rare. precious. do not disturb.' :
      h < 15 ? 'post-lunch slowdown. fighting it with lo-fi.' :
      h < 18 ? 'in the zone. this is where the good code lives.' :
      h < 21 ? 'winding down. probably gaming or reading.' :
               '2AM mode activated. creative chaos is peaking.';
    return [
      `TIME   : ${new Date().toLocaleTimeString()}`,
      `MOOD   : ${mood}`,
      '',
      'ALWAYS UP FOR : interesting problems · good convos · collab',
      'NOT RIGHT NOW : meetings without an agenda',
    ];
  },

  pwd() {
    return [`/home/argy${state.cwd === '/' ? '' : '/' + state.cwd.replace(/\//g, '')}`];
  },

  ls(args) {
    const target = args[0] || state.cwd;
    const dir = target.endsWith('/') ? target : target + '/';
    const key = dir === './' ? state.cwd : dir;
    const entries = FS[key] || FS[state.cwd];
    if (!entries) return [`ls: cannot access '${target}': No such directory`];
    return entries.map(e => e.endsWith('/') ? `\x1bdir\x1b${e}` : e);
  },

  cd(args) {
    if (!args[0] || args[0] === '~' || args[0] === '/') {
      state.cwd = '/'; return [''];
    }
    const target = args[0].endsWith('/') ? args[0] : args[0] + '/';
    if (FS[target]) { state.cwd = target; return ['']; }
    return [`cd: ${args[0]}: No such directory`];
  },

  cat(args) {
    if (!args[0]) return ['usage: cat <filename>'];
    const file = FILES[args[0]];
    if (!file) return [`cat: ${args[0]}: No such file — try "ls" to see what's here`];
    return file.split('\n');
  },

  contact() {
    return [
      'HOW TO REACH ME',
      '─────────────────────────────────────────',
      '  CHAT     : kodein. (DM dulu — preferred for project collab)',
      '  EMAIL    : rgyanggara@gmail.com',
      '  GITHUB   : github.com/angg4ra',
      '  LINKEDIN : linkedin.com/in/argy-anggara',
      '  LOCATION : Bekasi, Greater Jakarta, ID',
      '',
      'response time : < 24 jam on most days.',
    ];
  },

  hire() {
    return FILES['hire.txt'].split('\n');
  },

  secret() {
    return [
      'hmm.',
      '.',
      '..',
      '...',
      'okay fine.',
      '',
      '  try : ls secret/',
      '  then: cat secret/classified.txt',
      '',
      '  (there\'s also confessions.txt. read at your own risk.)',
    ];
  },

  neofetch() {
    return [
      '         .\'\'\'`.          argy@portfolio',
      '       .\'  ^ ^  \'.       ──────────────────────',
      '      /  (o   o)  \\      OS     : angg4ra-OS v2.5.0',
      '     |    \\ ─ /    |     ROLE   : Data · Web · Educator',
      '      \\   \'───\'   /      STACK  : Python · JS · Astro',
      '       \'._______.\'       HOBBIES: games · books · terminals',
      '                         MBTI   : INTP',
      '                         UPTIME : running since ~2001',
    ];
  },

  coffee() {
    return [
      'brewing............',
      '',
      '  ☕  done.',
      '',
      'fuel for: debugging, reading, 2AM ideas,',
      'and whatever you\'re working on right now.',
      'you deserve it.',
    ];
  },

  clear() { state.history = []; return null; },
  exit()  { closeTerminal(); return null; },

  sudo(args) {
    if (!args[0]) return ['sudo: no command specified. nice try though.'];
    return [
      `sudo: permission denied for '${args.join(' ')}'`,
      '(this filesystem is read-only. even i can\'t rm -rf my past decisions.)',
    ];
  },

  hack() {
    return [
      'initializing hack sequence............',
      'bypassing firewall....................',
      '████████████████░░░░ 80%',
      '████████████████████ 100%',
      '',
      'access granted to: absolutely nothing.',
      '',
      'but the fact that you typed "hack" means we probably vibe.',
      'actual collabs: rgyanggara@gmail.com',
    ];
  },

  rm(args) {
    if (args.includes('-rf') && (args.includes('/') || args.includes('*'))) {
      return [
        'rm: nice try. filesystem is read-only.',
        'also — you okay? "cat hobbies/safe-space.txt" if you need it.',
      ];
    }
    return [`rm: ${args[0] || 'no target'}: permission denied (as it should be)`];
  },

  git(args) {
    const sub = args[0];
    if (sub === 'log') return [
      'commit a1b2c3d — "feat: it finally works"',
      'commit d4e5f6a — "fix: it stopped working"',
      'commit 7b8c9d0 — "fix: actually fixed this time"',
      'commit 1a2b3c4 — "fix: okay THIS is the real fix"',
      'commit 5d6e7f8 — "chore: please just work"',
      'commit 9e0f1a2 — "initial commit (lies, this is commit 12)"',
    ];
    if (sub === 'blame') return ['it was me. it is always me. i have made peace with this.'];
    if (sub === 'push')  return ['fatal: you don\'t have push access to this portfolio.'];
    if (sub === 'stash') return ['stashed: 47 unfinished ideas, 3 abandoned side projects, 1 dream.'];
    return [`git: '${sub || '?'}' not recognized here. try "git log".`];
  },

  python(args) {
    if (args[0] === '--version' || args[0] === '-V') return ['Python 3.11.4'];
    return [
      'Python 3.11.4 (portfolio edition)',
      '>>> print("hello from argy\'s terminal")',
      'hello from argy\'s terminal',
      '>>> ',
      '(this is a lie. but a charming one.)',
    ];
  },

  echo(args) { return [args.join(' ') || '(silence is also valid.)']; },
  date()      { return [new Date().toString(), '', 'time is a flat circle. ship anyway.']; },
  uname()     { return ['angg4ra-OS v2.5.0 dark-academia-edition x86_64 (Bekasi kernel)']; },
};

// ── STATE ──────────────────────────────────────────────────────
const state = {
  buffer: '', history: [], inputHistory: [],
  inputHistoryIndex: -1, cwd: '/', isOpen: false,
};

// ── DOM ────────────────────────────────────────────────────────
let overlay, output, inputEl, promptEl;

function buildDOM() {
  overlay = document.createElement('div');
  overlay.id = 'terminal-overlay';
  overlay.innerHTML = `
    <div id="terminal-window">
      <div id="terminal-titlebar">
        <div class="t-dots">
          <span class="t-dot t-red" id="t-close" title="close"></span>
          <span class="t-dot t-yellow"></span>
          <span class="t-dot t-green"></span>
        </div>
        <span class="t-title font-mono">argy@portfolio: ~</span>
        <span class="t-hint font-mono">ESC to close</span>
      </div>
      <div id="terminal-output"></div>
      <div id="terminal-input-line">
        <span id="terminal-prompt" class="font-mono">argy@portfolio:~$ </span>
        <input id="terminal-input" class="font-mono" type="text"
          autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  output   = document.getElementById('terminal-output');
  inputEl  = document.getElementById('terminal-input');
  promptEl = document.getElementById('terminal-prompt');
  document.getElementById('t-close').addEventListener('click', closeTerminal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeTerminal(); });
  inputEl.addEventListener('keydown', handleInput);
}

// ── PRINT ──────────────────────────────────────────────────────
function printLines(lines, cls = '') {
  lines.forEach(line => {
    const div = document.createElement('div');
    div.className = 't-line ' + cls;
    if (line.startsWith('\x1bdir\x1b')) {
      div.innerHTML = `<span class="t-dir font-mono">${line.replace('\x1bdir\x1b', '')}</span>`;
    } else if (line.startsWith('>')) {
      div.innerHTML = `<span class="t-boot font-mono">${escHtml(line)}</span>`;
    } else if (line === '') {
      div.innerHTML = '&nbsp;';
    } else {
      div.className += ' font-mono';
      div.textContent = line;
    }
    output.appendChild(div);
  });
  output.scrollTop = output.scrollHeight;
}

function printLinesAnimated(lines, delay = 55) {
  lines.forEach((line, i) => setTimeout(() => printLines([line]), i * delay));
}

function printPromptLine(cmd) {
  const div = document.createElement('div');
  div.className = 't-line t-cmd font-mono';
  div.textContent = `argy@portfolio:${state.cwd === '/' ? '~' : state.cwd.replace(/\//g, '')}$ ${cmd}`;
  output.appendChild(div);
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── OPEN / CLOSE ───────────────────────────────────────────────
function openTerminal() {
  if (state.isOpen) return;
  state.isOpen = true;
  state.buffer = '';
  if (!overlay) buildDOM();
  output.innerHTML = '';
  printLinesAnimated(BOOT_LINES, 55);
  overlay.style.display = 'flex';
  requestAnimationFrame(() => { overlay.classList.add('visible'); inputEl.focus(); });
  updatePrompt();
}

function closeTerminal() {
  if (!overlay) return;
  overlay.classList.remove('visible');
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
  state.isOpen = false;
  state.buffer = '';
  state.cwd = '/';
}

function updatePrompt() {
  const dir = state.cwd === '/' ? '~' : state.cwd.replace(/\//g, '');
  if (promptEl) promptEl.textContent = `argy@portfolio:${dir}$ `;
}

// ── INPUT HANDLER ──────────────────────────────────────────────
function handleInput(e) {
  if (e.key === 'Enter') {
    const raw = inputEl.value.trim();
    inputEl.value = '';
    if (!raw) { printPromptLine(''); return; }
    state.inputHistory.unshift(raw);
    state.inputHistoryIndex = -1;
    printPromptLine(raw);
    const [cmd, ...args] = raw.split(/\s+/);
    const fn = COMMANDS[cmd.toLowerCase()];
    if (!fn) {
      printLines([`command not found: ${cmd}`, 'type "help" to see what\'s available.'], 't-err');
    } else {
      const result = fn(args);
      if (result === null && cmd === 'clear') output.innerHTML = '';
      else if (result) printLines(result);
    }
    updatePrompt();
    output.scrollTop = output.scrollHeight;
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (state.inputHistoryIndex < state.inputHistory.length - 1)
      inputEl.value = state.inputHistory[++state.inputHistoryIndex];
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (state.inputHistoryIndex > 0) inputEl.value = state.inputHistory[--state.inputHistoryIndex];
    else { state.inputHistoryIndex = -1; inputEl.value = ''; }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const partial = inputEl.value;
    const all = [...Object.keys(COMMANDS), ...Object.keys(FILES), ...Object.keys(FS)];
    const match = all.find(c => c.startsWith(partial));
    if (match) inputEl.value = match;
  } else if (e.key === 'Escape') {
    closeTerminal();
  }
}

// ── GLOBAL KEY ─────────────────────────────────────────────────
function handleGlobalKey(e) {
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  const key = e.key.toLowerCase();
  if (key.length === 1 && !e.ctrlKey && !e.metaKey) {
    state.buffer += key;
    if (state.buffer.length > 10) state.buffer = state.buffer.slice(-10);
    for (const trigger of TRIGGERS) {
      if (state.buffer.endsWith(trigger)) { state.buffer = ''; openTerminal(); return; }
    }
  }
  if (e.key === 'Escape' && state.isOpen) closeTerminal();
}

function init() { document.addEventListener('keydown', handleGlobalKey); }
document.addEventListener('astro:page-load', init);
document.addEventListener('DOMContentLoaded', init);