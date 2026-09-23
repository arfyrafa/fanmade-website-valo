# UNSCOPED — Valorant Fan Showcase
Proyek Lomba Web Development 2026 (IT FEST) — tema *Immersive Gaming Experience Through Web Technology*.

Fan-made showcase non-resmi bertema **Valorant**, dibuat di bawah kebijakan Riot Games
["Legal Jibber Jabber"](https://www.riotgames.com/en/legal). Bukan situs resmi, tidak berafiliasi dengan Riot Games.

## Struktur Project
```
valorant-showcase/
├── index.html        → Home
├── character.html     → Agent (Character/Hero)
├── gameplay.html       → Gameplay/Features
├── news.html            → News/Event
├── download.html         → Download/Play Now
├── css/style.css     → Design system (jangan dihapus/ditimpa asal-asalan)
├── js/main.js        → AOS init + boot animation + nav toggle
└── assets/
    ├── agents/       → taruh ilustrasi/screenshot orisinal Agent di sini
    └── screenshots/  → taruh screenshot gameplay/peta orisinal di sini
```

## Cara Preview
Buka `index.html` langsung di browser. Atau, kalau punya VS Code, pakai extension
**Live Server** biar auto-reload tiap simpan perubahan.

## Jobdesk
| Halaman | PIC |
|---|---|
| Home (`index.html`) + integrasi & design system | Kamu (lead) |
| Agent (`character.html`) | Maba A |
| Gameplay (`gameplay.html`) | Maba B |
| News (`news.html`) + Download (`download.html`) | Maba C |

Tiap orang cukup edit file HTML masing-masing. **Jangan ubah `css/style.css`**
kecuali udah koordinasi sama lead — biar tampilan tetap konsisten di semua halaman.

## Cara Isi Konten
- Semua teks placeholder ditandai `[Dalam kurung siku]` — tinggal ganti isinya.
- Ada komentar `<!-- MABA: ... -->` di beberapa bagian sebagai petunjuk tambahan.
- Kartu (`<article class="hud-card">`) tinggal di-copy-paste kalau mau nambah item
  (Agent baru, berita baru, dll).

## Wajib Sebelum Submit — Legalitas Aset
Sesuai kebijakan Riot **Legal Jibber Jabber**:
- ❌ **Jangan** pakai logo/wordmark VALORANT atau Riot Games di manapun.
- ❌ **Jangan** download & pakai aset resmi (splash art, ikon resmi) mentah-mentah.
- ✅ Pakai ilustrasi/desain sendiri, atau screenshot hasil main sendiri yang di-crop/desain ulang.
- ✅ Disclaimer di footer **wajib ada di semua halaman** — sudah otomatis terpasang, jangan dihapus.
- ✅ Cek ulang semua angka/klaim (jumlah Agent, spek minimum, dll) ke sumber resmi terbaru sebelum submit — beberapa placeholder di sini ditandai `*cek update`.

## Checklist Sebelum Deadline (2 Oktober, 23:59 WIB)
- [ ] Semua placeholder `[...]` sudah diganti konten asli
- [ ] Semua gambar di `assets/` orisinal (bukan aset resmi Riot)
- [ ] Responsive dicek di HP, tablet, desktop
- [ ] Deploy ke hosting gratis (Vercel/Netlify/GitHub Pages)
- [ ] Source code di-push ke GitHub
- [ ] Dokumentasi proyek (PDF) disusun
- [ ] Screenshot + deskripsi diposting ke Instagram, tag akun panitia
