// ─── Avatar component ─────────────────────────────────────────────────────────
export function CompanyAvatar({
  name,
  color,
  size = "sm",
}: {
  name: string;
  color: string;
  size?: "sm" | "lg";
}) {
  const dim = size === "lg" ? 64 : 40;
  const fontSize = size === "lg" ? 18 : 13;

  // Removes "Carrick" prefix then takes first letters of the next 2 words
  const initials = name
    .replace(/Carrick\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div
      style={{
        width: dim,
        height: dim,
        minWidth: dim,
        borderRadius: "50%",
        background: `${color}1a`,
        border: `1.5px solid ${color}55`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        fontWeight: 700,
        color: color,
        letterSpacing: "0.06em",
        flexShrink: 0,
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {initials}
    </div>
  );
}