/**
 * Comparison table for vs/ pages.
 *
 *  competitor: name shown in second column header
 *  rows: [{ feature, marra, them }]
 *    - boolean values render as ✓ / ✕
 *    - strings render verbatim
 */
export default function CompareTable({ competitor, rows }) {
  const renderCell = (val, isMarra) => {
    if (val === true) {
      return <span style={{ color: isMarra ? "var(--coral)" : "var(--green)", fontSize: 18, fontWeight: 900 }}>✓</span>;
    }
    if (val === false) {
      return <span style={{ color: "var(--stone-2)", fontSize: 18, fontWeight: 900 }}>✕</span>;
    }
    return <span style={{ fontSize: 13, color: isMarra ? "var(--ink)" : "var(--muted)", fontWeight: isMarra ? 700 : 500 }}>{val}</span>;
  };

  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid var(--line)", overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.03), 0 18px 50px rgba(0,0,0,0.05)" }}>
      <div className="compare-table" style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Satoshi',sans-serif" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "16px 22px", fontSize: 11, color: "var(--muted)", fontWeight: 700, borderBottom: "1px solid var(--line)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Feature</th>
              <th style={{ padding: "16px 22px", fontSize: 14, fontWeight: 900, color: "var(--coral)", borderBottom: "1px solid var(--line)", textAlign: "center", background: "var(--coral-light)" }}>marra</th>
              <th style={{ padding: "16px 22px", fontSize: 14, fontWeight: 600, color: "var(--muted)", borderBottom: "1px solid var(--line)", textAlign: "center" }}>{competitor}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ feature, marra, them }, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "var(--stone)" }}>
                <td style={{ padding: "14px 22px", fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{feature}</td>
                <td style={{ padding: "14px 22px", textAlign: "center", background: i % 2 === 0 ? "rgba(255,92,71,0.04)" : "rgba(255,92,71,0.06)" }}>{renderCell(marra, true)}</td>
                <td style={{ padding: "14px 22px", textAlign: "center" }}>{renderCell(them, false)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
