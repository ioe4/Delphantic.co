import { useState, useEffect } from "react";

const palette = {
  deepSea: "#0D2137",
  navy: "#1A3A5C",
  oceanMid: "#1E5F8C",
  turkuaz: "#2AABB5",
  turkuazLight: "#4ECDC4",
  sand: "#F5EDD8",
  beige: "#E8D9B8",
  warmWhite: "#FBF7F0",
  clay: "#C4A882",
  earth: "#8B7355",
  textDark: "#0D2137",
  textMuted: "#5A7A8C",
};

const DelphanticLogo = ({ size = 48, animate = false }) => {
  const [wave, setWave] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => setWave(w => (w + 1) % 360), 50);
    return () => clearInterval(interval);
  }, [animate]);

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="oceanGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={palette.turkuaz} stopOpacity="0.9" />
          <stop offset="60%" stopColor={palette.oceanMid} />
          <stop offset="100%" stopColor={palette.deepSea} />
        </radialGradient>
        <radialGradient id="glowGrad" cx="35%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Hexagon base */}
      <polygon
        points="50,8 88,29 88,71 50,92 12,71 12,29"
        fill="url(#oceanGrad)"
        stroke={palette.turkuazLight}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <polygon
        points="50,8 88,29 88,71 50,92 12,71 12,29"
        fill="url(#glowGrad)"
      />
      {/* Dolphin silhouette */}
      <path
        d="M28,52 Q35,38 50,36 Q65,34 72,44 Q78,52 70,58 Q62,64 52,60 Q44,57 48,50 Q52,44 58,46 Q63,48 60,53"
        stroke={palette.sand}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      {/* Tail */}
      <path
        d="M28,52 Q22,46 20,40 M28,52 Q24,58 22,64"
        stroke={palette.sand}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      {/* Eye */}
      <circle cx="64" cy="45" r="1.5" fill={palette.sand} opacity="0.9" />
      {/* Wave hint */}
      <path
        d="M20,72 Q30,68 40,72 Q50,76 60,72 Q70,68 80,72"
        stroke={palette.turkuazLight}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};

const ColorSwatch = ({ color, name, hex, light = false }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{
      width: "100%",
      height: 64,
      borderRadius: 12,
      background: color,
      border: light ? `1px solid ${palette.beige}` : "none",
      boxShadow: "0 4px 16px rgba(13,33,55,0.12)"
    }} />
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: palette.textDark, fontFamily: "Georgia, serif", letterSpacing: "0.02em" }}>{name}</div>
      <div style={{ fontSize: 11, color: palette.textMuted, fontFamily: "monospace" }}>{hex}</div>
    </div>
  </div>
);

const TypeSample = ({ label, style, text }) => (
  <div style={{ borderBottom: `1px solid ${palette.beige}`, paddingBottom: 20, marginBottom: 20 }}>
    <div style={{ fontSize: 11, color: palette.textMuted, marginBottom: 8, fontFamily: "monospace", letterSpacing: "0.08em" }}>{label}</div>
    <div style={style}>{text}</div>
  </div>
);

const AppIcon = ({ label, bg, icon }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
    <div style={{
      width: 72,
      height: 72,
      borderRadius: 18,
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      boxShadow: "0 8px 24px rgba(13,33,55,0.18), 0 2px 8px rgba(13,33,55,0.12)"
    }}>
      {icon}
    </div>
    <div style={{ fontSize: 11, color: palette.textMuted, fontFamily: "Georgia, serif", textAlign: "center" }}>{label}</div>
  </div>
);

export default function DelphantinBrand() {
  const [activeTab, setActiveTab] = useState("palette");
  const [hovered, setHovered] = useState(null);

  const tabs = ["palette", "typography", "logo", "icons", "mockup"];

  return (
    <div style={{
      minHeight: "100vh",
      background: palette.warmWhite,
      fontFamily: "Georgia, 'Times New Roman', serif",
      color: palette.textDark,
    }}>
      {/* Header */}
      <div style={{
        background: palette.deepSea,
        padding: "32px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `3px solid ${palette.turkuaz}`
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <DelphanticLogo size={52} animate={true} />
          <div>
            <div style={{
              fontSize: 26,
              fontWeight: 400,
              color: palette.sand,
              letterSpacing: "0.12em",
              fontFamily: "Georgia, serif"
            }}>DELPHANTIC</div>
            <div style={{
              fontSize: 11,
              color: palette.turkuazLight,
              letterSpacing: "0.25em",
              fontFamily: "monospace"
            }}>CO. · BRAND IDENTITY</div>
          </div>
        </div>
        <div style={{ fontSize: 12, color: palette.clay, letterSpacing: "0.1em", fontFamily: "monospace" }}>
          v1.0 · 2025
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        background: palette.navy,
        display: "flex",
        gap: 0,
        borderBottom: `1px solid rgba(255,255,255,0.08)`
      }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "14px 24px",
              background: activeTab === tab ? palette.turkuaz : "transparent",
              color: activeTab === tab ? palette.deepSea : palette.clay,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              letterSpacing: "0.12em",
              fontFamily: "monospace",
              textTransform: "uppercase",
              fontWeight: activeTab === tab ? 700 : 400,
              transition: "all 0.2s"
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "40px", maxWidth: 900, margin: "0 auto" }}>

        {/* PALETTE */}
        {activeTab === "palette" && (
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: "0.2em", color: palette.textMuted, fontFamily: "monospace", marginBottom: 32, fontWeight: 400 }}>COLOR SYSTEM</h2>

            <div style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 11, color: palette.textMuted, letterSpacing: "0.15em", fontFamily: "monospace", marginBottom: 16 }}>PRIMARY · DEEP SEA</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                <ColorSwatch color={palette.deepSea} name="Deep Sea" hex="#0D2137" />
                <ColorSwatch color={palette.navy} name="Navy" hex="#1A3A5C" />
                <ColorSwatch color={palette.oceanMid} name="Ocean" hex="#1E5F8C" />
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 11, color: palette.textMuted, letterSpacing: "0.15em", fontFamily: "monospace", marginBottom: 16 }}>ACCENT · TURKUAZ</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                <ColorSwatch color={palette.turkuaz} name="Turkuaz" hex="#2AABB5" />
                <ColorSwatch color={palette.turkuazLight} name="Aqua" hex="#4ECDC4" />
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, color: palette.textMuted, letterSpacing: "0.15em", fontFamily: "monospace", marginBottom: 16 }}>NEUTRAL · KUMSAL</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                <ColorSwatch color={palette.warmWhite} name="Warm White" hex="#FBF7F0" light />
                <ColorSwatch color={palette.sand} name="Kum" hex="#F5EDD8" light />
                <ColorSwatch color={palette.beige} name="Beige" hex="#E8D9B8" light />
                <ColorSwatch color={palette.clay} name="Kil" hex="#C4A882" light />
              </div>
            </div>
          </div>
        )}

        {/* TYPOGRAPHY */}
        {activeTab === "typography" && (
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: "0.2em", color: palette.textMuted, fontFamily: "monospace", marginBottom: 32, fontWeight: 400 }}>TYPE SYSTEM</h2>

            <TypeSample
              label="DISPLAY · Georgia Serif"
              text="Delphantic Co."
              style={{ fontSize: 48, fontWeight: 400, color: palette.deepSea, letterSpacing: "0.06em", lineHeight: 1.1 }}
            />
            <TypeSample
              label="HEADING 1"
              text="İş Yönetim Platformu"
              style={{ fontSize: 32, fontWeight: 400, color: palette.deepSea, letterSpacing: "0.03em" }}
            />
            <TypeSample
              label="HEADING 2"
              text="Her ölçekteki işletme için"
              style={{ fontSize: 22, fontWeight: 400, color: palette.navy, letterSpacing: "0.02em" }}
            />
            <TypeSample
              label="BODY"
              text="Delphantic, orta ve büyük ölçekli işletmelerin tüm operasyonel ihtiyaçlarını tek çatı altında karşılayan entegre bir iş yönetim platformudur."
              style={{ fontSize: 16, color: palette.textDark, lineHeight: 1.7, fontFamily: "Georgia, serif" }}
            />
            <TypeSample
              label="CAPTION · Monospace"
              text="v2.4.1 · DELPHANTIC KERNAL HR · 2025"
              style={{ fontSize: 12, color: palette.textMuted, fontFamily: "monospace", letterSpacing: "0.15em" }}
            />
            <div style={{ background: palette.deepSea, borderRadius: 16, padding: 32, marginTop: 8 }}>
              <div style={{ fontSize: 13, letterSpacing: "0.2em", color: palette.turkuazLight, fontFamily: "monospace", marginBottom: 16 }}>DARK VARIANT</div>
              <div style={{ fontSize: 36, color: palette.sand, letterSpacing: "0.08em", marginBottom: 8 }}>Delphantic</div>
              <div style={{ fontSize: 14, color: palette.clay, letterSpacing: "0.25em", fontFamily: "monospace" }}>INTELLIGENT BUSINESS PLATFORM</div>
            </div>
          </div>
        )}

        {/* LOGO */}
        {activeTab === "logo" && (
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: "0.2em", color: palette.textMuted, fontFamily: "monospace", marginBottom: 32, fontWeight: 400 }}>LOGO VARIANTS</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {/* Dark bg */}
              <div style={{ background: palette.deepSea, borderRadius: 20, padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                <div style={{ fontSize: 11, color: palette.turkuazLight, letterSpacing: "0.2em", fontFamily: "monospace" }}>PRIMARY · DARK</div>
                <DelphanticLogo size={80} animate />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, color: palette.sand, letterSpacing: "0.15em" }}>DELPHANTIC</div>
                  <div style={{ fontSize: 10, color: palette.clay, letterSpacing: "0.3em", fontFamily: "monospace" }}>CO.</div>
                </div>
              </div>

              {/* Light bg */}
              <div style={{ background: palette.sand, borderRadius: 20, padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, border: `1px solid ${palette.beige}` }}>
                <div style={{ fontSize: 11, color: palette.textMuted, letterSpacing: "0.2em", fontFamily: "monospace" }}>SECONDARY · LIGHT</div>
                <DelphanticLogo size={80} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, color: palette.deepSea, letterSpacing: "0.15em" }}>DELPHANTIC</div>
                  <div style={{ fontSize: 10, color: palette.earth, letterSpacing: "0.3em", fontFamily: "monospace" }}>CO.</div>
                </div>
              </div>

              {/* Horizontal */}
              <div style={{ background: palette.navy, borderRadius: 20, padding: 32, display: "flex", alignItems: "center", gap: 20, gridColumn: "span 2" }}>
                <DelphanticLogo size={56} animate />
                <div>
                  <div style={{ fontSize: 28, color: palette.sand, letterSpacing: "0.12em" }}>DELPHANTIC</div>
                  <div style={{ fontSize: 11, color: palette.turkuaz, letterSpacing: "0.3em", fontFamily: "monospace" }}>INTELLIGENT BUSINESS PLATFORM</div>
                </div>
              </div>

              {/* Icon only */}
              <div style={{ background: palette.warmWhite, borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, border: `1px solid ${palette.beige}` }}>
                <div style={{ fontSize: 11, color: palette.textMuted, letterSpacing: "0.2em", fontFamily: "monospace" }}>ICON ONLY</div>
                <DelphanticLogo size={96} animate />
              </div>

              {/* Favicon */}
              <div style={{ background: palette.beige, borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 11, color: palette.textMuted, letterSpacing: "0.2em", fontFamily: "monospace" }}>FAVICON SIZE</div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <DelphanticLogo size={64} />
                  <DelphanticLogo size={32} />
                  <DelphanticLogo size={16} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ICONS */}
        {activeTab === "icons" && (
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: "0.2em", color: palette.textMuted, fontFamily: "monospace", marginBottom: 32, fontWeight: 400 }}>APP ICONS</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24, marginBottom: 40 }}>
              <AppIcon label="Kernal HR" bg={`linear-gradient(135deg, ${palette.deepSea}, ${palette.oceanMid})`} icon="👥" />
              <AppIcon label="Kernal Task" bg={`linear-gradient(135deg, ${palette.navy}, ${palette.turkuaz})`} icon="✓" />
              <AppIcon label="Kernal CRM" bg={`linear-gradient(135deg, ${palette.oceanMid}, ${palette.turkuazLight})`} icon="◈" />
              <AppIcon label="Kernal Finance" bg={`linear-gradient(135deg, ${palette.earth}, ${palette.clay})`} icon="◎" />
              <AppIcon label="Kernal Docs" bg={`linear-gradient(135deg, ${palette.deepSea}, ${palette.turkuaz})`} icon="≡" />
            </div>

            <div style={{ background: palette.deepSea, borderRadius: 20, padding: 32 }}>
              <div style={{ fontSize: 11, color: palette.turkuazLight, letterSpacing: "0.2em", fontFamily: "monospace", marginBottom: 24 }}>MOBILE HOME SCREEN</div>
              <div style={{
                background: `linear-gradient(160deg, ${palette.navy} 0%, ${palette.deepSea} 60%, #0A1A2E 100%)`,
                borderRadius: 16,
                padding: "32px 24px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20
              }}>
                {[
                  { label: "HR", bg: `linear-gradient(135deg, ${palette.deepSea}, ${palette.oceanMid})`, icon: "👥" },
                  { label: "Task", bg: `linear-gradient(135deg, ${palette.navy}, ${palette.turkuaz})`, icon: "✓" },
                  { label: "CRM", bg: `linear-gradient(135deg, ${palette.oceanMid}, ${palette.turkuazLight})`, icon: "◈" },
                  { label: "Finance", bg: `linear-gradient(135deg, ${palette.earth}, ${palette.clay})`, icon: "◎" },
                  { label: "Docs", bg: `linear-gradient(135deg, ${palette.deepSea}, ${palette.turkuaz})`, icon: "≡" },
                  { label: "Analytics", bg: `linear-gradient(135deg, ${palette.navy}, ${palette.oceanMid})`, icon: "⬡" },
                  { label: "Calendar", bg: `linear-gradient(135deg, ${palette.turkuaz}, ${palette.turkuazLight})`, icon: "◷" },
                  { label: "Settings", bg: `linear-gradient(135deg, ${palette.earth}, ${palette.navy})`, icon: "⚙" },
                ].map((app, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: app.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                    }}>{app.icon}</div>
                    <div style={{ fontSize: 10, color: palette.sand, fontFamily: "monospace", letterSpacing: "0.05em" }}>{app.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MOCKUP */}
        {activeTab === "mockup" && (
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: "0.2em", color: palette.textMuted, fontFamily: "monospace", marginBottom: 32, fontWeight: 400 }}>UI MOCKUP</h2>

            {/* Dashboard preview */}
            <div style={{ background: palette.deepSea, borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 64px rgba(13,33,55,0.3)" }}>
              {/* Top bar */}
              <div style={{
                background: palette.navy,
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid rgba(255,255,255,0.06)`
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <DelphanticLogo size={28} />
                  <span style={{ fontSize: 14, color: palette.sand, letterSpacing: "0.1em" }}>DELPHANTIC</span>
                  <span style={{ fontSize: 10, color: palette.turkuaz, letterSpacing: "0.2em", fontFamily: "monospace" }}>KERNAL HR</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {["Dashboard", "Çalışanlar", "İzinler", "Raporlar"].map(item => (
                    <div key={item} style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      fontSize: 12,
                      color: item === "Dashboard" ? palette.deepSea : palette.clay,
                      background: item === "Dashboard" ? palette.turkuaz : "transparent",
                      fontFamily: "monospace",
                      letterSpacing: "0.05em"
                    }}>{item}</div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                {[
                  { label: "Toplam Çalışan", value: "247", delta: "+3", color: palette.turkuaz },
                  { label: "Aktif İzin", value: "18", delta: "+2", color: palette.clay },
                  { label: "Bu Ay Yeni", value: "5", delta: "+5", color: palette.turkuazLight },
                ].map(card => (
                  <div key={card.label} style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 12,
                    padding: "20px 24px",
                    border: `1px solid rgba(255,255,255,0.06)`
                  }}>
                    <div style={{ fontSize: 11, color: palette.clay, letterSpacing: "0.1em", fontFamily: "monospace", marginBottom: 8 }}>{card.label}</div>
                    <div style={{ fontSize: 36, color: palette.sand, fontWeight: 300, letterSpacing: "0.02em" }}>{card.value}</div>
                    <div style={{ fontSize: 12, color: card.color, fontFamily: "monospace", marginTop: 4 }}>{card.delta} bu ay</div>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div style={{ margin: "0 24px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 16 }}>
                  {["Çalışan", "Departman", "Durum", "Başlangıç"].map(h => (
                    <div key={h} style={{ fontSize: 10, color: palette.textMuted, letterSpacing: "0.15em", fontFamily: "monospace" }}>{h}</div>
                  ))}
                </div>
                {[
                  ["Ahmet Yılmaz", "Yazılım", "Aktif", "Mar 2023"],
                  ["Ayşe Kaya", "Pazarlama", "İzinde", "Jan 2022"],
                  ["Mehmet Demir", "Finans", "Aktif", "Jul 2024"],
                ].map((row, i) => (
                  <div key={i} style={{ padding: "12px 20px", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 16, alignItems: "center" }}>
                    <div style={{ fontSize: 13, color: palette.sand, fontFamily: "Georgia, serif" }}>{row[0]}</div>
                    <div style={{ fontSize: 12, color: palette.clay, fontFamily: "monospace" }}>{row[1]}</div>
                    <div style={{
                      fontSize: 11,
                      color: row[2] === "Aktif" ? palette.turkuazLight : palette.clay,
                      fontFamily: "monospace",
                      letterSpacing: "0.05em"
                    }}>{row[2]}</div>
                    <div style={{ fontSize: 11, color: palette.textMuted, fontFamily: "monospace" }}>{row[3]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: `1px solid ${palette.beige}`,
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontSize: 11, color: palette.textMuted, fontFamily: "monospace", letterSpacing: "0.1em" }}>
          DELPHANTIC CO. · BRAND IDENTITY SYSTEM · 2025
        </div>
        <div style={{ fontSize: 11, color: palette.clay, fontFamily: "monospace" }}>
          AuroraNova Digital Agency
        </div>
      </div>
    </div>
  );
}
