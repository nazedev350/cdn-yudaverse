import Head from "next/head";
import { useEffect, useState } from "react";

const CORRECT_USERNAME = "yudadmin3112";
const CORRECT_PASSWORD = "yudapratama56#";

export default function Configuration() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [saved, setSaved] = useState(false);
  const [testResult, setTestResult] = useState(null); // null | {ok, msg}
  const [testing, setTesting] = useState(false);
  const [urlPreview, setUrlPreview] = useState("");

  // Config fields
  const [ghUsername, setGhUsername] = useState("");
  const [ghRepo, setGhRepo] = useState("");
  const [ghBranch, setGhBranch] = useState("main");
  const [ghFolder, setGhFolder] = useState("");
  const [ghToken, setGhToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("yuda_cfg_session") === "1") {
      setLoggedIn(true);
      loadConfig();
    }
  }, []);

  useEffect(() => {
    const folder = ghFolder ? ghFolder.replace(/^\/|\/$/g, "") + "/" : "";
    if (ghUsername && ghRepo)
      setUrlPreview(`https://cdn-yudaverse.vercel.app/${folder}namafile.jpg`);
    else setUrlPreview("");
  }, [ghUsername, ghRepo, ghBranch, ghFolder]);

  function loadConfig() {
    setGhUsername(localStorage.getItem("yuda_gh_username") || "");
    setGhRepo(localStorage.getItem("yuda_gh_repo") || "");
    setGhBranch(localStorage.getItem("yuda_gh_branch") || "main");
    setGhFolder(localStorage.getItem("yuda_gh_folder") || "");
    setGhToken(localStorage.getItem("yuda_gh_token") || "");
  }

  function doLogin() {
    if (loginUser === CORRECT_USERNAME && loginPass === CORRECT_PASSWORD) {
      sessionStorage.setItem("yuda_cfg_session", "1");
      setLoginError(false);
      setLoggedIn(true);
      loadConfig();
    } else {
      setLoginError(true);
      setLoginPass("");
    }
  }

  function doLogout() {
    sessionStorage.removeItem("yuda_cfg_session");
    setLoggedIn(false);
    setLoginUser("");
    setLoginPass("");
  }

  function saveConfig() {
    if (!ghUsername || !ghRepo || !ghToken) { alert("Username, Repo, dan Token wajib diisi!"); return; }
    localStorage.setItem("yuda_gh_username", ghUsername);
    localStorage.setItem("yuda_gh_repo", ghRepo);
    localStorage.setItem("yuda_gh_branch", ghBranch || "main");
    localStorage.setItem("yuda_gh_folder", ghFolder);
    localStorage.setItem("yuda_gh_token", ghToken);
    setSaved(true);
    setTimeout(() => setSaved(false), 3500);
  }

  async function testConnection() {
    if (!ghUsername || !ghRepo || !ghToken) {
      setTestResult({ ok: false, msg: "⚠ Isi username, repo, dan token terlebih dahulu." });
      return;
    }
    setTesting(true);
    setTestResult({ ok: true, msg: "⏳ Menghubungkan ke GitHub..." });
    try {
      const res = await fetch(`https://api.github.com/repos/${ghUsername}/${ghRepo}`, {
        headers: { Authorization: `Bearer ${ghToken}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
      });
      if (res.ok) {
        const data = await res.json();
        setTestResult({ ok: true, msg: `✓ Terhubung! Repo "${data.full_name}" — ${data.private ? "Private" : "Public"}` });
      } else if (res.status === 401) setTestResult({ ok: false, msg: "✕ Token tidak valid atau expired." });
      else if (res.status === 404) setTestResult({ ok: false, msg: "✕ Repository tidak ditemukan." });
      else setTestResult({ ok: false, msg: `✕ HTTP ${res.status}` });
    } catch (e) {
      setTestResult({ ok: false, msg: "✕ Gagal terhubung: " + e.message });
    }
    setTesting(false);
  }

  return (
    <>
      <Head><title>Konfigurasi — CDN Yudaverse</title></Head>
      <style>{`
        :root{--bg-primary:#050d1a;--bg-secondary:#0a1628;--bg-card:#0d1e35;--bg-input:#091422;--accent:#1e90ff;--accent-bright:#3da8ff;--accent-glow:rgba(30,144,255,0.18);--accent-border:rgba(30,144,255,0.35);--text-primary:#e8f4ff;--text-secondary:#7ba8cc;--text-muted:#4a6f91;--border:rgba(30,144,255,0.15);--border-strong:rgba(30,144,255,0.3);--success:#22d3a0;--danger:#ff5f6d;--warning:#f5a623;--radius:10px;--radius-lg:14px;}
        *{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Space Grotesk',sans-serif;background:var(--bg-primary);color:var(--text-primary);min-height:100vh;display:flex;flex-direction:column;}
        nav{display:flex;align-items:center;justify-content:space-between;padding:0 2rem;height:64px;background:var(--bg-secondary);border-bottom:1px solid var(--border);}
        .nav-brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--text-primary);}
        .nav-brand-name span:first-child{font-size:1rem;font-weight:700;display:block;line-height:1.2;}
        .nav-brand-name span:last-child{font-size:10px;color:var(--accent-bright);text-transform:uppercase;letter-spacing:.08em;display:block;}
        .nav-right{display:flex;align-items:center;gap:10px;}
        .nav-link{font-size:12px;color:var(--text-muted);text-decoration:none;padding:6px 14px;border:1px solid var(--border);border-radius:6px;transition:all .2s;}
        .nav-link:hover{color:var(--accent-bright);border-color:var(--accent-border);background:var(--accent-glow);}
        .logout-btn{padding:7px 16px;border:1px solid rgba(255,95,109,.3);background:transparent;color:var(--danger);border-radius:7px;font-size:12px;cursor:pointer;font-family:inherit;transition:all .2s;}
        .logout-btn:hover{background:rgba(255,95,109,.1);}
        .login-screen{flex:1;display:flex;align-items:center;justify-content:center;padding:2rem;}
        .login-card{background:var(--bg-card);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:2.5rem 2rem;width:100%;max-width:400px;box-shadow:0 8px 40px rgba(0,0,0,0.4);}
        .login-logo-wrap{text-align:center;margin-bottom:1.8rem;}
        .login-title{font-size:1.15rem;font-weight:700;margin-top:12px;}
        .login-sub{font-size:12px;color:var(--text-muted);margin-top:4px;}
        .login-error{background:rgba(255,95,109,.1);border:1px solid rgba(255,95,109,.3);color:var(--danger);border-radius:var(--radius);padding:10px 14px;font-size:12px;margin-bottom:1rem;text-align:center;}
        .form-group{margin-bottom:1rem;}
        .form-label{display:block;font-size:12px;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em;font-weight:500;}
        .form-input{width:100%;background:var(--bg-input);border:1px solid var(--border);color:var(--text-primary);border-radius:var(--radius);padding:10px 14px;font-size:13px;font-family:inherit;outline:none;transition:border-color .2s;}
        .form-input:focus{border-color:var(--accent-border);}
        .form-input.mono{font-family:'JetBrains Mono',monospace;}
        .pw-wrap{position:relative;}
        .pw-toggle{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:14px;padding:0;line-height:1;}
        .login-btn,.save-btn{width:100%;padding:11px;background:var(--accent);color:#fff;border:none;border-radius:var(--radius);font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;box-shadow:0 4px 14px rgba(30,144,255,0.3);}
        .login-btn:hover,.save-btn:hover{background:var(--accent-bright);transform:translateY(-1px);}
        .config-container{max-width:640px;margin:0 auto;padding:3rem 2rem;width:100%;}
        .config-title{font-size:1.4rem;font-weight:700;margin-bottom:6px;}
        .config-sub{font-size:13px;color:var(--text-muted);margin-bottom:2rem;}
        .config-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:2rem;margin-bottom:1.5rem;}
        .config-card-title{font-size:13px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.07em;margin-bottom:1.2rem;padding-bottom:.8rem;border-bottom:1px solid var(--border);}
        .hint-text{font-size:11px;color:var(--text-muted);margin-top:5px;line-height:1.5;}
        .hint-text a{color:var(--accent-bright);text-decoration:none;}
        .success-banner{background:rgba(34,211,160,.1);border:1px solid rgba(34,211,160,.3);color:var(--success);border-radius:var(--radius);padding:10px 16px;font-size:13px;margin-bottom:1.5rem;display:flex;align-items:center;gap:8px;}
        .url-preview{background:var(--bg-input);border:1px solid var(--border);border-radius:var(--radius);padding:10px 14px;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--accent-bright);margin-top:8px;word-break:break-all;min-height:38px;}
        .test-btn{padding:8px 18px;background:transparent;border:1px solid var(--border-strong);color:var(--text-secondary);border-radius:var(--radius);font-size:13px;font-weight:500;cursor:pointer;font-family:inherit;transition:all .2s;margin-top:.5rem;}
        .test-btn:hover{border-color:var(--accent-border);color:var(--accent-bright);background:var(--accent-glow);}
        .test-ok{margin-top:10px;font-size:12px;padding:8px 12px;border-radius:8px;background:rgba(34,211,160,.1);border:1px solid rgba(34,211,160,.3);color:var(--success);}
        .test-err{margin-top:10px;font-size:12px;padding:8px 12px;border-radius:8px;background:rgba(255,95,109,.1);border:1px solid rgba(255,95,109,.3);color:var(--danger);}
        .step{display:flex;gap:14px;margin-bottom:1.2rem;align-items:flex-start;}
        .step-num{width:26px;height:26px;border-radius:50%;background:var(--accent);color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}
        .step-title{font-size:13px;font-weight:600;margin-bottom:3px;}
        .step-desc{font-size:12px;color:var(--text-muted);line-height:1.6;}
        .step-desc a{color:var(--accent-bright);text-decoration:none;}
        .step-desc code{background:rgba(30,144,255,.1);border:1px solid var(--border);padding:1px 6px;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--accent-bright);}
        ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--bg-primary);}::-webkit-scrollbar-thumb{background:#1a3557;border-radius:99px;}
      `}</style>

      <nav>
        <a className="nav-brand" href="/"><div className="nav-brand-name"><span>CDN Yudaverse</span><span>Konfigurasi</span></div></a>
        <div className="nav-right">
          {loggedIn && <button className="logout-btn" onClick={doLogout}>↩ Logout</button>}
          <a className="nav-link" href="/">← Kembali</a>
        </div>
      </nav>

      {!loggedIn ? (
        <div className="login-screen">
          <div className="login-card">
            <div className="login-logo-wrap">
              <div style={{ fontSize: "3rem" }}>🔒</div>
              <div className="login-title">Masuk ke Konfigurasi</div>
              <div className="login-sub">cdn-yudaverse — GitHub Storage</div>
            </div>
            {loginError && <div className="login-error">⚠ Username atau password salah.</div>}
            <div className="form-group">
              <label className="form-label">Username</label>
              <input className="form-input" type="text" value={loginUser} onChange={(e) => setLoginUser(e.target.value)} placeholder="Masukkan username..." />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="pw-wrap">
                <input className={`form-input mono`} type={showPass ? "text" : "password"} value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && doLogin()}
                  placeholder="Masukkan password..." />
                <button className="pw-toggle" onClick={() => setShowPass(!showPass)}>{showPass ? "🙈" : "👁"}</button>
              </div>
            </div>
            <button className="login-btn" onClick={doLogin}>🔒 Masuk</button>
          </div>
        </div>
      ) : (
        <div className="config-container">
          <div className="config-title">⚙ Konfigurasi GitHub CDN</div>
          <div className="config-sub">Hubungkan CDN Yudaverse ke GitHub repository kamu</div>

          {saved && <div className="success-banner">✓ Konfigurasi berhasil disimpan!</div>}

          {/* PANDUAN */}
          <div className="config-card">
            <div className="config-card-title">📋 Panduan: Cara Buat GitHub Token (PAT)</div>
            {[
              ["Login ke GitHub", <span>Buka <a href="https://github.com" target="_blank">github.com</a> dan pastikan sudah login.</span>],
              ["Buka Settings → Developer Settings", "Klik foto profil (kanan atas) → Settings → scroll bawah → Developer settings."],
              ["Buat Token Baru", "Pilih Personal access tokens → Tokens (classic) → Generate new token (classic)."],
              ["Isi & Pilih Permission", <span>Beri nama token, atur expiration. Centang permission: <code>repo</code> (full control).</span>],
              ["Salin Token", "Klik Generate token, lalu salin token-nya sekarang — hanya ditampilkan sekali!"],
              ["Buat Repository CDN", <span>Buat repo baru di GitHub (public/private). Pastikan sudah ada 1 commit agar branch <code>main</code> tersedia.</span>],
            ].map(([title, desc], i) => (
              <div className="step" key={i}>
                <div className="step-num">{i + 1}</div>
                <div>
                  <div className="step-title">{title}</div>
                  <div className="step-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="config-card">
            <div className="config-card-title">🐙 GitHub Settings</div>
            {[
              ["GitHub Username", ghUsername, setGhUsername, "contoh: nazedev350", false, "Username GitHub kamu (bukan email)"],
              ["Nama Repository", ghRepo, setGhRepo, "contoh: cdn-yudaverse", false, "Nama repo tempat penyimpanan file"],
              ["Branch", ghBranch, setGhBranch, "main", false, "Default: main"],
              ["Folder (opsional)", ghFolder, setGhFolder, "contoh: uploads (kosongkan jika tidak pakai folder)", false, "Kosongkan untuk menyimpan di root repo"],
            ].map(([label, val, setter, ph, mono, hint]) => (
              <div className="form-group" key={label}>
                <label className="form-label">{label}</label>
                <input className={`form-input${mono ? " mono" : ""}`} type="text" value={val} onChange={(e) => setter(e.target.value)} placeholder={ph} />
                <div className="hint-text">{hint}</div>
              </div>
            ))}

            <div className="form-group">
              <label className="form-label">Personal Access Token (PAT)</label>
              <div className="pw-wrap">
                <input className="form-input mono" type={showToken ? "text" : "password"} value={ghToken}
                  onChange={(e) => setGhToken(e.target.value)} placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                <button className="pw-toggle" onClick={() => setShowToken(!showToken)}>{showToken ? "🙈" : "👁"}</button>
              </div>
              <div className="hint-text">Token hanya disimpan di localStorage browser kamu, tidak dikirim ke server selain GitHub.</div>
            </div>

            <div className="form-group">
              <label className="form-label">Preview URL (via Vercel)</label>
              <div className="url-preview">{urlPreview || <span style={{ color: "var(--text-muted)" }}>Isi username & repo untuk melihat preview URL</span>}</div>
            </div>

            <button className="test-btn" onClick={testConnection} disabled={testing}>🔌 Test Koneksi ke GitHub</button>
            {testResult && <div className={testResult.ok ? "test-ok" : "test-err"}>{testResult.msg}</div>}

            <button className="save-btn" style={{ marginTop: "1rem" }} onClick={saveConfig}>💾 Simpan Konfigurasi</button>
          </div>

          <div className="config-card">
            <div className="config-card-title">ℹ️ Informasi</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Semua konfigurasi disimpan di <code style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--accent-bright)", fontSize: 12 }}>localStorage</code> browser kamu.<br />
              Data tidak dikirim ke server manapun — hanya ke GitHub API saat upload.<br /><br />
              <span style={{ color: "var(--text-muted)", fontSize: 12 }}>
                ⚠ <strong style={{ color: "var(--text-secondary)" }}>Batas ukuran file GitHub:</strong> Maksimal 100MB per file.<br />
                ⚠ <strong style={{ color: "var(--text-secondary)" }}>Next.js rewrites</strong> akan mem-proxy request ke GitHub raw secara otomatis — tidak perlu vercel.json.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
