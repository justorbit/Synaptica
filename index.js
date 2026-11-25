console.log("made by M-Yahya (@justorbit)");

// ---- Short helpers ----
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
}[c]));


/* ============================================================
   SVG icon set (inline, colored per icon)
   ============================================================ */
const ICON = (inner, color) =>
    `<svg class="em" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const COLORS = {
    notes:    '#60a5fa',  // blue
    papers:   '#34d399',  // green
    schemes:  '#a78bfa',  // violet
    guess:    '#f59e0b',  // amber
    lectures: '#f43f5e',  // rose
    glance:   '#facc15',  // yellow (light bulb)
    key:      '#fbbf24',  // amber (key)
    work:     '#38bdf8',  // sky (worked example)
    tips:     '#fb923c',  // orange
    check:    '#4ade80'   // green
};

const SVG = {
    notes: ICON(
        '<path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M15 4v5h5"/><path d="M8 13h8M8 17h6"/>',
        COLORS.notes
    ),
    papers: ICON(
        '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 12h6M9 16h6M9 8h3"/>',
        COLORS.papers
    ),
    schemes: ICON(
        '<path d="M9 11l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
        COLORS.schemes
    ),
    guess: ICON(
        '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="' + COLORS.guess + '" stroke="none"/>',
        COLORS.guess
    ),
    lectures: ICON(
        '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="M17 10l4-2v8l-4-2z"/>',
        COLORS.lectures
    ),
    glance: ICON(
        '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/>',
        COLORS.glance
    ),
    key: ICON(
        '<circle cx="8" cy="8" r="4"/><path d="M11 11l9 9"/><path d="M17 17l3-3"/><path d="M14 14l3-3"/>',
        COLORS.key
    ),
    work: ICON(
        '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h2M8 15h2M14 11h2M14 15h2M8 19h8"/>',
        COLORS.work
    ),
    tips: ICON(
        '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
        COLORS.tips
    ),
    check: ICON(
        '<path d="M3 6h4M3 12h4M3 18h4"/><path d="M9 6l1.5 1.5L14 4"/><path d="M9 12l1.5 1.5L14 10"/><path d="M9 18l1.5 1.5L14 16"/>',
        COLORS.check
    )
};


/* ============================================================
   Boards, resource types, external links, languages
   ============================================================ */
const B = {
    olevel: ['O Level', 'Cambridge 5054, 5070, 4024'],
    alevel: ['A Level', 'Cambridge 9702, 9701, 9709'],
    igcse:  ['IGCSE',   'Cambridge 0610, 0625, Edexcel'],
    sat:    ['SAT',     'Digital SAT Math, Reading and Writing']
};

const T = {
    notes:    [SVG.notes,    'Notes & Summaries'],
    papers:   [SVG.papers,   'Past Papers'],
    schemes:  [SVG.schemes,  'Marking Schemes & Reports'],
    guess:    [SVG.guess,    'Guess Papers'],
    lectures: [SVG.lectures, 'Lectures']
};

const camb = [
    ['PapaCambridge',        'https://pastpapers.papacambridge.com'],
    ['ZNotes',               'https://znotes.org'],
    ['Physics & Maths Tutor','https://www.physicsandmathstutor.com'],
    ['MegaLecture',          'https://megalecture.com'],
    ['Save My Exams',        'https://www.savemyexams.com'],
    ['Seneca Learning',      'https://senecalearning.com']
];

const LK = {
    sat: [
        ['Khan Academy SAT',       'https://www.khanacademy.org/test-prep/v2-sat'],
        ['College Board Bluebook', 'https://bluebook.collegeboard.org'],
        ['The Critical Reader',    'https://www.thecriticalreader.com']
    ],
    olevel: camb,
    alevel: camb,
    igcse:  camb
};

const LANGS = (
    'English,Hinglish,Urdu,Hindi,Spanish,Arabic,French,Mandarin Chinese,Bengali,Punjabi,Pashto,Sindhi,Persian,Turkish,Portuguese,Russian,German,Italian,Japanese,Korean,Vietnamese,Indonesian,Malay,Tamil,Telugu,Marathi,Gujarati,Kannada,Malayalam,Nepali,Sinhala,Swahili,Hausa,Yoruba,Igbo,Zulu,Xhosa,Afrikaans,Amharic,Somali,Dutch,Polish,Ukrainian,Czech,Slovak,Hungarian,Romanian,Bulgarian,Serbian,Croatian,Bosnian,Slovenian,Greek,Hebrew,Thai,Khmer,Lao,Burmese,Filipino,Cantonese,Mongolian,Kazakh,Uzbek,Azerbaijani,Armenian,Georgian,Swedish,Norwegian,Danish,Finnish,Icelandic,Estonian,Latvian,Lithuanian,Irish,Welsh,Scottish Gaelic,Catalan,Basque,Galician,Albanian,Macedonian,Belarusian,Maltese,Luxembourgish,Haitian Creole,Quechua,Guarani,Maori,Samoan,Hawaiian,Malagasy,Kinyarwanda,Shona,Tigrinya,Oromo,Kurdish,Tajik,Turkmen,Kyrgyz,Uyghur,Tibetan,Dzongkha,Javanese,Sundanese,Cebuano,Odia,Assamese,Kashmiri,Esperanto,Latin'
).split(',');


/* ============================================================
   Content generators
   ============================================================ */

// Builds the long "notes" content for a resource
const NT = (e, n, q, m, g) => `At a glance
${e}

Key points
${n.split('\n').map((x, k) => `${k + 1}. ${x}`).join('\n')}

Worked example
Question: ${q}
Marking points: ${m.join(' | ')}

Exam tips
- Match the command word: state is short, describe says what, explain gives a reason.
- Aim for about one clear point per mark.
- Show working and units, and link answers to the context.

Self-check
- ${g[0]}
- ${g[1]}`;

// Expands one data.json entry into its 5 resource types
const mk = (b, s, t, e, n, q, m, g, i) => {
    const o = (ty, ti, c) => ({
        id: `d${i}${ty}`,
        board: b,
        type: ty,
        subj: s,
        title: `${t}: ${ti}`,
        easy: e,
        content: c
    });

    return [
        { ...o('notes', 'Study notes', NT(e, n, q, m, g)), sr: 1 },

        o('papers', 'Past paper practice',
            `Question 1\n${q}\n\nQuestion 2\n${g[0]}\n\nQuestion 3\n${g[1]}\n\n` +
            `These are practice questions written for Synaptica, not official past papers. ` +
            `Try them under timed conditions, then open the marking scheme. ` +
            `Use the real papers button for official Cambridge or College Board papers.`
        ),

        o('schemes', 'Model marking scheme and tips',
            'Mark points\n' + m.map(x => '✔ ' + x).join('\n') + '\n\n' +
            'Questions 2 and 3: include these key points, about one mark each:\n' +
            n.split('\n').map(x => '- ' + x).join('\n') + '\n\n' +
            'Examiner report: Cambridge publishes a real examiner report for each exam series. ' +
            'Use the real papers button to find the official one. ' +
            'General advice: show working, state units, answer the command word.'
        ),

        o('guess', 'High-probability predictions',
            'Predicted questions\n' + g.map((x, k) => `${k + 1}. ${x}`).join('\n') + '\n\n' +
            'Practice predictions written by Synaptica from common exam styles. Not official and not guaranteed.'
        ),

        o('lectures', 'Masterclass',
            'LECTURE SCRIPT (read aloud or follow along)\n\n' +
            `Part 1: The big idea\n${e}\n\n` +
            `Part 2: Key points, one at a time\n${n.split('\n').map((x, k) => `${k + 1}. ${x}`).join('\n')}\n\n` +
            `Part 3: Worked example\nQuestion: ${q}\nSolve it like this:\n${m.map(x => '- ' + x).join('\n')}\n\n` +
            `Part 4: Likely exam questions, try them yourself\n${g.map(x => '- ' + x).join('\n')}\n\n` +
            'Part 5: Recap\nSay the big idea in one sentence. Then cover the notes and recall each key point. Check what you missed.'
        )
    ];
};


/* ============================================================
   State
   ============================================================ */
const S = { board: 'olevel', type: 'notes', subj: 'All', q: '', lang: 'English' };
const C = {};        // translation cache
let cur = null;      // currently open resource
let DATA = [];


/* ============================================================
   Toast + chip helpers
   ============================================================ */
const toast = m => {
    const t = $('#ts');
    t.textContent = m;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2600);
};

function chips(el, list, sel, fn, cls) {
    el.innerHTML = '';
    list.forEach(([k, l]) => {
        const b = document.createElement('button');
        b.className = 'tab ' + (cls || '') + (k === sel ? ' on' : '');
        b.innerHTML = l;
        b.onclick = () => fn(k);
        el.append(b);
    });
}

function getCustom() {
    try {
        return JSON.parse(localStorage.getItem('syn_custom') || '[]');
    } catch (e) {
        return [];
    }
}


/* ============================================================
   Render the board / type / subject filters, grid and links
   ============================================================ */
function render() {
    // Board chips
    chips(
        $('#boards'),
        Object.entries(B).map(([k, v]) => [k, v[0]]),
        S.board,
        k => { S.board = k; S.subj = 'All'; render(); }
    );

    // Type chips
    chips(
        $('#types'),
        Object.entries(T).map(([k, v]) => [k, `<span class="ic">${v[0]}</span> ${v[1]}`]),
        S.type,
        k => { S.type = k; render(); },
        't'
    );

    // Subject chips (built from whatever exists in this board+type)
    const pool = DATA.filter(d => d.board === S.board && d.type === S.type);
    const sj = ['All', ...new Set(pool.map(d => d.subj))];
    chips($('#subjs'), sj.map(s => [s, s]), S.subj, k => { S.subj = k; render(); });

    // Grid
    const q = S.q.toLowerCase();
    const L = pool.filter(d =>
        (S.subj === 'All' || d.subj === S.subj) &&
        (d.title + d.subj + d.content).toLowerCase().includes(q)
    );

    $('#grid').innerHTML = L.length
        ? L.map(d =>
            `<button class="card" data-id="${esc(d.id)}">` +
            `<small><span class="ic">${T[d.type][0]}</span> ${esc(d.subj)}</small>` +
            `<h3>${esc(d.title)}</h3>` +
            `<small>${esc(d.easy.slice(0, 90))}…</small>` +
            `</button>`
        ).join('')
        : '<p style="color:var(--mu)">Nothing here yet. Use Add resource to create the first one.</p>';

    // Outside links
    $('#links').innerHTML = LK[S.board].map(l =>
        `<a href="${l[1]}" target="_blank" rel="noopener noreferrer">${l[0]}</a>`
    ).join('');
}

$('#grid').onclick = e => {
    const c = e.target.closest('.card');
    if (c) open(c.dataset.id);
};


/* ============================================================
   Rich rendering of the study-notes content
   ============================================================ */
function rich(t) {
    const h = esc;
    const I = {
        'At a glance':    SVG.glance,
        'Key points':     SVG.key,
        'Worked example': SVG.work,
        'Exam tips':      SVG.tips,
        'Self-check':     SVG.check
    };
    let o = '';

    t.split('\n\n').forEach(s => {
        const L = s.split('\n');
        const H = L.shift();
        let b = '';

        if (H === 'Key points') {
            b = L.map(l => {
                const m = l.match(/^(\d+)\. (.*)$/);
                const x = m ? m[2] : l;
                const i = x.search(/[:=]/);
                return `<div class="kp"><span class="n">${m ? m[1] : ''}</span><div>${
                    i > 0 && x[i] === ':' ? `<b>${h(x.slice(0, i))}</b>${h(x.slice(i))}`
                    : /[=^]/.test(x) ? `<code>${h(x)}</code>`
                    : h(x)
                }</div></div>`;
            }).join('');
        } else if (H === 'Self-check') {
            b = L.map(l =>
                `<label class="ck"><input type="checkbox"><span>${h(l.replace(/^- /, ''))}</span></label>`
            ).join('');
        } else if (H === 'Exam tips') {
            b = '<ul>' + L.map(l => `<li>${h(l.replace(/^- /, ''))}</li>`).join('') + '</ul>';
        } else {
            b = L.map(l => `<p>${h(l)}</p>`).join('');
        }

        o += `<section class="sc ${H.replace(/\W/g, '')}">` +
             `<h3>${I[H] ? `<span class="ih">${I[H]}</span>` : ''} ${h(H)}</h3>${b}</section>`;
    });

    return o;
}


/* ============================================================
   Translation (uses Claude if available)
   ============================================================ */
async function tr(d) {
    if (S.lang === 'English') return d.easy;
    const k = d.id + S.lang;
    if (C[k]) return C[k];

    const sm = window.claude && await claude.use('sample');
    if (!sm) throw 0;

    const r = await sm(
        `Rewrite this student explanation in ${S.lang}` +
        `${S.lang === 'Hinglish' ? ' (Hindi in Roman script mixed with English)' : ''}. ` +
        `Keep technical terms recognisable. Output only the rewritten text.\n\n${d.easy}`,
        { modelTier: 'quick' }
    );
    return C[k] = r.text;
}

async function showEx() {
    if (!cur) return;
    const d = cur;
    const ve = $('#ve');

    const ur = /[\u0600-\u06FF]/.test(d.easy);
    const rt = ['Urdu', 'Arabic', 'Persian', 'Pashto', 'Sindhi', 'Hebrew', 'Kurdish', 'Uyghur'].includes(S.lang)
            || (S.lang === 'English' && ur);
    const nq = S.lang === 'Urdu' || (S.lang === 'English' && ur);

    ve.dir = rt ? 'rtl' : 'ltr';
    ve.style.fontFamily = nq ? "'Noto Nastaliq Urdu',serif" : '';
    ve.style.lineHeight = nq ? '2.2' : '';
    $('#vl').textContent = S.lang === 'English' ? '' : '(' + S.lang + ')';
    ve.textContent = d.easy;

    if (S.lang === 'English') return;
    ve.textContent = 'Translating…';
    try {
        const t = await tr(d);
        if (cur === d) ve.textContent = t;
    } catch (e) {
        if (cur === d) ve.textContent = d.easy + '\n\n(Translation needs Claude access in this view. Showing English.)';
    }
}


/* ============================================================
   Open a resource in the modal
   ============================================================ */
function open(id) {
    cur = DATA.find(d => d.id === id);

    $('#vt').textContent = cur.title;
    $('#vm').textContent = `${B[cur.board][0]}, ${cur.subj}, ${T[cur.type][1]}`;
    $('#vc').textContent = cur.content;
    $('#vc').className = 't' + (cur.sr ? ' rich' : '');
    if (cur.sr) $('#vc').innerHTML = rich(cur.content);

    const ar = /[\u0600-\u06FF]/.test(cur.content);
    $('#vc').dir = ar ? 'rtl' : 'ltr';
    $('#vc').style.fontFamily = ar ? "'Noto Nastaliq Urdu',serif" : '';
    $('#vc').style.lineHeight = ar ? '2.2' : '';

    $('#wm').textContent = 'SYNAPTICA '.repeat(90);

    // "Real papers" link
    const r = $('#rp');
    const cd = (cur.subj.match(/\d{4}/) || [])[0];
    r.style.display = ['papers', 'schemes'].includes(cur.type) ? 'inline-block' : 'none';
    r.href = cd
        ? 'https://www.google.com/search?q=' + encodeURIComponent(cd + ' past papers mark scheme examiner report')
        : 'https://bluebook.collegeboard.org';
    r.textContent = cd ? 'Find real papers, mark schemes, reports' : 'Official SAT practice tests';

    // "Watch video" link
    const y = $('#yt');
    y.style.display = cur.type === 'lectures' ? 'inline-block' : 'none';
    y.href = cur.vid
        ? 'https://www.youtube.com/watch?v=' + cur.vid
        : 'https://www.youtube.com/results?sp=EgIQAQ%3D%3D&search_query=' +
          encodeURIComponent(B[cur.board][0] + ' ' + cur.subj + ' ' + cur.title.split(':')[0] + ' full lesson explained');
    y.textContent = cur.vid ? 'Watch this video' : 'Find video lessons';

    $('#vo').classList.add('on');
    showEx();
}

$('#vx').onclick = () => {
    $('#vo').classList.remove('on');
    cur = null;
};

$('#lang').innerHTML = LANGS.map(l => `<option>${l}</option>`).join('');
$('#lang').onchange = e => {
    S.lang = e.target.value;
    showEx();
};


/* ============================================================
   Search box (with the hidden "sudo" easter egg)
   ============================================================ */
$('#q').oninput = e => {
    const v = e.target.value.trim().toLowerCase();

    if (v === 'sudo' && !e.target.dataset.alerted) {
        alert('made by M-Yahya (@justorbit)');
        e.target.dataset.alerted = '1';
    } else if (v !== 'sudo') {
        delete e.target.dataset.alerted;
    }

    S.q = e.target.value;
    render();
};


/* ============================================================
   Download as PNG
   ============================================================ */
const wrap = (x, t, w) => {
    const o = [];
    t.split('\n').forEach(p => {
        let l = '';
        p.split(' ').forEach(wd => {
            const n = l ? l + ' ' + wd : wd;
            if (x.measureText(n).width > w && l) {
                o.push(l);
                l = wd;
            } else {
                l = n;
            }
        });
        o.push(l);
    });
    return o;
};

$('#dl').onclick = async () => {
    if ($('#ve').textContent === 'Translating…') return toast('Wait for translation to finish');

    const d = cur;
    const W = 1200, P = 60;
    const c = document.createElement('canvas');
    const x = c.getContext('2d');
    x.font = '28px Inter,sans-serif';

    const ex = wrap(x, 'Simplified explanation (' + S.lang + '): ' + $('#ve').textContent, W - 2 * P);
    const ct = wrap(x, d.content, W - 2 * P);
    const lh = 40;
    const H = 260 + (ex.length + ct.length) * lh + 120;

    c.width = W;
    c.height = H;

    // Background + header gradient
    x.fillStyle = '#0f172a';
    x.fillRect(0, 0, W, H);
    const g = x.createLinearGradient(0, 0, W, 0);
    g.addColorStop(0, '#6366f1');
    g.addColorStop(1, '#a855f7');
    x.fillStyle = g;
    x.fillRect(0, 0, W, 90);

    // Header text
    x.fillStyle = '#fff';
    x.font = '800 36px sans-serif';
    x.fillText('SYNAPTICA', P, 57);
    x.font = '22px sans-serif';
    x.textAlign = 'right';
    x.fillText('Study resource', W - P, 55);
    x.textAlign = 'left';

    // Title + subtitle
    let y = 150;
    x.font = '800 40px sans-serif';
    wrap(x, d.title, W - 2 * P).forEach(l => { x.fillText(l, P, y); y += 50; });
    x.fillStyle = '#94a3b8';
    x.font = '24px sans-serif';
    x.fillText(`${B[d.board][0]}, ${d.subj}`, P, y);
    y += 50;

    // Body text (handles RTL automatically)
    x.font = '28px Inter,sans-serif';
    x.fillStyle = '#c7d2fe';
    const dr = l => {
        x.save();
        if (/[\u0600-\u06FF]/.test(l)) {
            x.direction = 'rtl';
            x.textAlign = 'right';
            x.fillText(l, W - P, y);
        } else {
            x.fillText(l, P, y);
        }
        x.restore();
        y += lh;
    };
    ex.forEach(dr);
    y += 30;
    x.fillStyle = '#e2e8f0';
    ct.forEach(dr);

    // Watermark
    x.save();
    x.translate(W / 2, H / 2);
    x.rotate(-0.5);
    x.fillStyle = 'rgba(165,180,252,.12)';
    x.font = '800 110px sans-serif';
    x.textAlign = 'center';
    for (let k = -3; k <= 3; k++) x.fillText('SYNAPTICA', 0, k * 260);
    x.restore();

    // Footer
    x.fillStyle = '#64748b';
    x.font = '20px sans-serif';
    x.fillText('Downloaded from Synaptica. Check facts against your syllabus.', P, H - 36);

    // Save
    try {
        const dm = window.claude && await claude.use('downloads');
        const bl = await new Promise(r => c.toBlob(r, 'image/png'));
        const fn = 'synaptica-' + d.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.png';

        if (!dm) {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(bl);
            a.download = fn;
            a.click();
            toast('Saved with Synaptica watermark');
            return;
        }
        await dm.save({ filename: fn, data: bl });
        toast('Saved with Synaptica watermark');
    } catch (e) {
        toast(e && e.code === 'declined' ? 'Download cancelled' : 'Download is not available in this view');
    }
};


/* ============================================================
   Add-resource form
   ============================================================ */
const af = $('#af');
af.board.innerHTML = Object.entries(B).map(([k, v]) => `<option value="${k}">${v[0]}</option>`).join('');
af.type.innerHTML  = Object.entries(T).map(([k, v]) => `<option value="${k}">${v[1]}</option>`).join('');

$('#add').onclick = () => $('#ao').classList.add('on');
$('#ac').onclick  = () => $('#ao').classList.remove('on');

af.onsubmit = e => {
    e.preventDefault();
    const f = new FormData(af);

    const d = {
        id: 'u' + Date.now(),
        board: f.get('board'),
        type: f.get('type'),
        subj: f.get('subj'),
        title: f.get('title'),
        easy: f.get('easy'),
        content: f.get('content'),
        vid: ((f.get('yt') || '').match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/) || [])[1] || ''
    };
    DATA.push(d);

    try {
        localStorage.setItem('syn_custom', JSON.stringify(DATA.filter(x => x.id[0] === 'u')));
    } catch (x) {}

    af.reset();
    $('#ao').classList.remove('on');
    S.board = d.board;
    S.type = d.type;
    S.subj = 'All';
    render();
    toast('Resource added');
};

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        $('#vx').click();
        $('#ac').click();
    }
});


/* ============================================================
   Boot: load data.json and build all resources
   ============================================================ */
async function boot() {
    let src = [];
    try {
        const res = await fetch('./data.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        src = await res.json();
    } catch (e) {
        console.warn('data.json could not be loaded:', e);
        toast('Could not load data.json — showing saved resources only');
    }

    DATA = src.flatMap((x, i) => mk(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], i));
    DATA = DATA.concat(getCustom());
    render();
}

boot();