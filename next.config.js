:root {
  --bg-primary: #050d1a;
  --bg-secondary: #0a1628;
  --bg-card: #0d1e35;
  --bg-card-hover: #112340;
  --bg-input: #091422;
  --accent: #1e90ff;
  --accent-bright: #3da8ff;
  --accent-glow: rgba(30,144,255,0.18);
  --accent-border: rgba(30,144,255,0.35);
  --text-primary: #e8f4ff;
  --text-secondary: #7ba8cc;
  --text-muted: #4a6f91;
  --border: rgba(30,144,255,0.15);
  --border-strong: rgba(30,144,255,0.3);
  --success: #22d3a0;
  --danger: #ff5f6d;
  --warning: #f5a623;
  --radius: 10px;
  --radius-lg: 14px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  font-family: 'Space Grotesk', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: #1a3557; border-radius: 99px; }

/* NAV */
nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2rem; height: 64px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 100;
}
.nav-brand {
  display: flex; align-items: center; gap: 12px;
  font-size: 1rem; font-weight: 700; color: var(--text-primary);
  text-decoration: none; letter-spacing: -0.01em;
}
.nav-brand-name { display: flex; flex-direction: column; line-height: 1.2; }
.nav-brand-name .title { font-size: 1rem; font-weight: 700; color: var(--text-primary); }
.nav-brand-name .sub { font-size: 10px; font-weight: 500; color: var(--accent-bright); text-transform: uppercase; letter-spacing: 0.08em; }
.nav-link {
  font-size: 12px; color: var(--text-muted); text-decoration: none;
  padding: 6px 14px; border: 1px solid var(--border); border-radius: 6px; transition: all .2s;
}
.nav-link:hover { color: var(--accent-bright); border-color: var(--accent-border); background: var(--accent-glow); }

/* CONTAINER */
.container { max-width: 860px; margin: 0 auto; padding: 3rem 2rem; }

/* HERO */
.hero { text-align: center; margin-bottom: 2.5rem; }
.hero-title { font-size: 1.8rem; font-weight: 700; margin-bottom: 8px; }
.hero-title span { color: var(--accent-bright); }
.hero-sub { font-size: 14px; color: var(--text-muted); }

/* CONFIG WARN */
.config-warn {
  background: rgba(245,166,35,.08); border: 1px solid rgba(245,166,35,.3);
  border-radius: var(--radius); padding: 12px 16px; font-size: 13px;
  color: var(--warning); margin-bottom: 1.5rem; display: none; align-items: center; gap: 10px;
}
.config-warn.show { display: flex; }
.config-warn a { color: var(--accent-bright); text-decoration: none; }

/* UPLOAD BOX */
.upload-box {
  border: 2px dashed var(--border-strong); border-radius: var(--radius-lg);
  background: var(--bg-card); padding: 3rem 2rem; text-align: center;
  cursor: pointer; transition: all .25s; position: relative; overflow: hidden;
}
.upload-box:hover, .upload-box.drag-over { border-color: var(--accent); background: var(--accent-glow); }
.upload-icon { font-size: 2.8rem; margin-bottom: 14px; opacity: .65; }
.upload-text { font-size: 14px; color: var(--text-secondary); }
.upload-text strong { color: var(--accent-bright); }
.upload-text strong.purple { color: #c084fc; }
.upload-input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
.upload-btn {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 18px; padding: 10px 24px;
  background: var(--accent); color: #fff; border: none;
  border-radius: var(--radius); font-size: 13px; font-weight: 600;
  cursor: pointer; font-family: inherit; transition: all .2s;
  box-shadow: 0 4px 14px rgba(30,144,255,0.3);
}
.upload-btn:hover { background: var(--accent-bright); transform: translateY(-1px); }
.progress-bar-wrap { margin-top: 16px; height: 5px; background: rgba(255,255,255,.08); border-radius: 99px; overflow: hidden; display: none; }
.progress-bar { height: 100%; background: linear-gradient(90deg, #0d4f9e, #1e90ff); border-radius: 99px; width: 0; transition: width .3s; }
.upload-status { margin-top: 10px; font-size: 12px; color: var(--text-secondary); display: none; }
.size-warn { margin-top: 8px; font-size: 11px; color: rgba(245,166,35,.7); display: none; }
.size-warn.show { display: block; }

/* RESULTS */
.result-section { margin-top: 2rem; display: none; }
.result-section.show { display: block; }
.result-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
.section-title { font-size: 13px; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: .07em; }
.clear-btn {
  padding: 5px 12px; border-radius: 6px; border: 1px solid var(--border);
  background: transparent; color: var(--text-muted); font-size: 12px;
  cursor: pointer; font-family: inherit; transition: all .2s;
}
.clear-btn:hover { color: var(--danger); border-color: rgba(255,95,109,.3); background: rgba(255,95,109,.07); }
.result-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 1.2rem 1.5rem;
  margin-bottom: 10px; display: flex; align-items: center; gap: 14px; transition: border-color .2s;
}
.result-card:hover { border-color: var(--accent-border); }
.result-thumb {
  width: 44px; height: 44px; border-radius: 8px; background: var(--bg-secondary);
  border: 1px solid var(--border); display: flex; align-items: center; justify-content: center;
  font-size: 20px; flex-shrink: 0; overflow: hidden;
}
.result-thumb img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
.result-info { flex: 1; min-width: 0; }
.result-name { font-size: 13px; font-weight: 600; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.result-url { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 3px; }
.badge { display: inline-block; padding: 2px 8px; border-radius: 99px; font-size: 10px; font-weight: 600; text-transform: uppercase; margin-top: 4px; }
.badge-image { background: rgba(30,144,255,.15); color: #5bb4ff; }
.badge-video { background: rgba(34,211,160,.12); color: #22d3a0; }
.badge-audio { background: rgba(168,85,247,.15); color: #c084fc; }
.badge-raw { background: rgba(245,166,35,.12); color: #f5a623; }
.result-actions { display: flex; gap: 6px; flex-shrink: 0; }
.icon-btn {
  width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--border);
  background: transparent; color: var(--text-muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center; font-size: 14px; transition: all .2s;
}
.icon-btn:hover { background: var(--accent-glow); color: var(--accent-bright); border-color: var(--accent-border); }
.icon-btn.danger:hover { background: rgba(255,95,109,.12); color: var(--danger); border-color: rgba(255,95,109,.3); }

/* TOAST */
.toast {
  position: fixed; bottom: 28px; right: 24px; z-index: 999;
  background: var(--bg-card); border: 1px solid var(--success); color: var(--success);
  padding: 10px 18px; border-radius: var(--radius); font-size: 13px; font-weight: 500;
  opacity: 0; transition: opacity .25s; pointer-events: none;
}
.toast.show { opacity: 1; }

/* PLAYER BAR */
.player-bar {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
  background: var(--bg-secondary); border-top: 1px solid rgba(168,85,247,.3);
  padding: 10px 2rem; display: none; align-items: center; gap: 20px;
}
.player-bar.active { display: flex; }
.player-thumb { width: 42px; height: 42px; border-radius: 8px; background: rgba(168,85,247,.2); border: 1px solid rgba(168,85,247,.3); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
.player-info { flex: 0 0 200px; overflow: hidden; }
.player-title { font-size: 13px; font-weight: 600; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.player-format { font-size: 11px; color: #a855f7; margin-top: 2px; }
.play-btn-player { width: 38px; height: 38px; background: var(--accent); border: none; border-radius: 50%; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 15px; transition: all .2s; }
.play-btn-player:hover { background: var(--accent-bright); transform: scale(1.05); }
.player-seek-wrap { flex: 1; display: flex; align-items: center; gap: 10px; }
.time-label { font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; min-width: 36px; }
.seek-bar { flex: 1; height: 4px; background: rgba(255,255,255,.1); border-radius: 99px; cursor: pointer; -webkit-appearance: none; outline: none; }
.seek-bar::-webkit-slider-thumb { -webkit-appearance: none; width: 12px; height: 12px; border-radius: 50%; background: var(--accent); cursor: pointer; }
.vol-wrap { display: flex; align-items: center; gap: 8px; flex: 0 0 130px; }
.vol-icon { font-size: 14px; color: var(--text-muted); }
.vol-bar { flex: 1; height: 4px; background: rgba(255,255,255,.1); border-radius: 99px; cursor: pointer; -webkit-appearance: none; outline: none; }
.vol-bar::-webkit-slider-thumb { -webkit-appearance: none; width: 10px; height: 10px; border-radius: 50%; background: var(--text-secondary); cursor: pointer; }
.player-close-btn { width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--border); background: transparent; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px; transition: all .2s; }
.player-close-btn:hover { color: var(--danger); border-color: rgba(255,95,109,.3); }
.pb-space { height: 80px; }

/* CONFIG PAGE */
.config-container { max-width: 640px; margin: 0 auto; padding: 3rem 2rem; }
.config-header { margin-bottom: 2rem; }
.config-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 6px; }
.config-sub { font-size: 13px; color: var(--text-muted); }
.config-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 1.5rem; }
.config-card-title { font-size: 13px; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 1.2rem; padding-bottom: .8rem; border-bottom: 1px solid var(--border); }
.form-group { margin-bottom: 1rem; }
.form-label { display: block; font-size: 12px; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: .05em; font-weight: 500; }
.form-input { width: 100%; background: var(--bg-input); border: 1px solid var(--border); color: var(--text-primary); border-radius: var(--radius); padding: 10px 14px; font-size: 13px; font-family: inherit; outline: none; transition: border-color .2s; }
.form-input:focus { border-color: var(--accent-border); }
.form-input.mono { font-family: 'JetBrains Mono', monospace; }
.hint-text { font-size: 11px; color: var(--text-muted); margin-top: 5px; line-height: 1.5; }
.hint-text a { color: var(--accent-bright); text-decoration: none; }
.save-btn { width: 100%; padding: 11px; background: var(--accent); color: #fff; border: none; border-radius: var(--radius); font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; transition: all .2s; box-shadow: 0 4px 14px rgba(30,144,255,0.25); margin-top: .5rem; }
.save-btn:hover { background: var(--accent-bright); transform: translateY(-1px); }
.test-btn { padding: 8px 18px; background: transparent; border: 1px solid var(--border-strong); color: var(--text-secondary); border-radius: var(--radius); font-size: 13px; font-weight: 500; cursor: pointer; font-family: inherit; transition: all .2s; margin-top: .5rem; }
.test-btn:hover { border-color: var(--accent-border); color: var(--accent-bright); background: var(--accent-glow); }
.test-result { margin-top: 10px; font-size: 12px; display: none; padding: 8px 12px; border-radius: 8px; }
.test-result.ok { background: rgba(34,211,160,.1); border: 1px solid rgba(34,211,160,.3); color: var(--success); display: block; }
.test-result.err { background: rgba(255,95,109,.1); border: 1px solid rgba(255,95,109,.3); color: var(--danger); display: block; }
.success-banner { background: rgba(34,211,160,.1); border: 1px solid rgba(34,211,160,.3); color: var(--success); border-radius: var(--radius); padding: 10px 16px; font-size: 13px; margin-bottom: 1.5rem; display: none; align-items: center; gap: 8px; }
.success-banner.show { display: flex; }
.pw-wrap { position: relative; }
.pw-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 14px; padding: 0; }
.url-preview { background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius); padding: 10px 14px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--accent-bright); margin-top: 8px; word-break: break-all; min-height: 38px; }
.url-preview span { color: var(--text-muted); }
.logout-btn { padding: 7px 16px; border: 1px solid rgba(255,95,109,.3); background: transparent; color: var(--danger); border-radius: 7px; font-size: 12px; cursor: pointer; font-family: inherit; transition: all .2s; }
.logout-btn:hover { background: rgba(255,95,109,.1); }
.step { display: flex; gap: 14px; margin-bottom: 1.2rem; align-items: flex-start; }
.step-num { width: 26px; height: 26px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
.step-body { flex: 1; }
.step-title { font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 3px; }
.step-desc { font-size: 12px; color: var(--text-muted); line-height: 1.6; }
.step-desc a { color: var(--accent-bright); text-decoration: none; }
.step-desc code { background: rgba(30,144,255,.1); border: 1px solid var(--border); padding: 1px 6px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-bright); }

/* LOGIN */
.login-wrap { flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem; min-height: calc(100vh - 64px); }
.login-card { background: var(--bg-card); border: 1px solid var(--border-strong); border-radius: var(--radius-lg); padding: 2.5rem 2rem; width: 100%; max-width: 400px; box-shadow: 0 8px 40px rgba(0,0,0,0.4); }
.login-logo-wrap { text-align: center; margin-bottom: 1.8rem; }
.login-title { font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 12px; }
.login-sub { font-size: 12px; color: var(--text-muted); margin-top: 4px; }
.login-btn { width: 100%; padding: 11px; background: var(--accent); color: #fff; border: none; border-radius: var(--radius); font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; transition: all .2s; margin-top: .5rem; box-shadow: 0 4px 14px rgba(30,144,255,0.3); }
.login-btn:hover { background: var(--accent-bright); }
.login-error { background: rgba(255,95,109,.1); border: 1px solid rgba(255,95,109,.3); color: var(--danger); border-radius: var(--radius); padding: 10px 14px; font-size: 12px; margin-bottom: 1rem; display: none; text-align: center; }
.login-error.show { display: block; }
