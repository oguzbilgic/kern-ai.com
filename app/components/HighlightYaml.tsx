interface HighlightYamlProps {
  code: string;
}

export function HighlightYaml({ code }: HighlightYamlProps) {
  const lines = code.split("\n");

  return (
    <div className="font-mono text-xs leading-relaxed">
      {lines.map((line, idx) => {
        // Comment
        if (line.trim().startsWith("#")) {
          return (
            <div key={idx} className="text-neutral-500">
              {line}
            </div>
          );
        }

        // Key-value or list item
        // e.g. "  ops:" or "    image: ghcr.io/..." or "    volumes: ["ops-home:/home/agent"]"
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          const indentAndKey = line.slice(0, colonIndex);
          const colonAndRest = line.slice(colonIndex);
          const rest = colonAndRest.slice(1); // after colon

          // Distinguish key vs value
          const isListItem = indentAndKey.trim().startsWith("-");
          
          return (
            <div key={idx}>
              <span className={isListItem ? "text-neutral-300" : "text-sky-400 font-medium"}>
                {indentAndKey}
              </span>
              <span className="text-neutral-400">:</span>
              {renderYamlValue(rest)}
            </div>
          );
        }

        // List item without colon or other line
        if (line.trim().startsWith("-")) {
          const match = line.match(/^(\s*-\s*)(.*)$/);
          if (match) {
            return (
              <div key={idx}>
                <span className="text-neutral-500">{match[1]}</span>
                {renderYamlValue(match[2])}
              </div>
            );
          }
        }

        return (
          <div key={idx} className="text-neutral-300">
            {line}
          </div>
        );
      })}
    </div>
  );
}

function renderYamlValue(rawVal: string) {
  if (!rawVal) return null;

  // Leading space
  const leadingSpaceMatch = rawVal.match(/^(\s+)/);
  const leadingSpace = leadingSpaceMatch ? leadingSpaceMatch[1] : "";
  const trimmed = rawVal.slice(leadingSpace.length);

  if (!trimmed) return <span>{leadingSpace}</span>;

  // Comment at end of value
  const commentIndex = trimmed.indexOf(" #");
  let valPart = trimmed;
  let commentPart = "";
  if (commentIndex !== -1) {
    valPart = trimmed.slice(0, commentIndex);
    commentPart = trimmed.slice(commentIndex);
  }

  // Quoted string
  if ((valPart.startsWith('"') && valPart.endsWith('"')) || (valPart.startsWith("'") && valPart.endsWith("'"))) {
    return (
      <>
        <span>{leadingSpace}</span>
        <span className="text-emerald-400">{valPart}</span>
        {commentPart && <span className="text-neutral-500">{commentPart}</span>}
      </>
    );
  }

  // Array format e.g. ["ops-home:/home/agent"]
  if (valPart.startsWith("[") && valPart.endsWith("]")) {
    return (
      <>
        <span>{leadingSpace}</span>
        <span className="text-neutral-400">[</span>
        <span className="text-emerald-400">{valPart.slice(1, -1)}</span>
        <span className="text-neutral-400">]</span>
        {commentPart && <span className="text-neutral-500">{commentPart}</span>}
      </>
    );
  }

  // Variable interpolation e.g. ${OPENROUTER_API_KEY}
  if (valPart.includes("${")) {
    return (
      <>
        <span>{leadingSpace}</span>
        <span className="text-amber-300 font-mono">{valPart}</span>
        {commentPart && <span className="text-neutral-500">{commentPart}</span>}
      </>
    );
  }

  // Booleans / keywords
  if (["true", "false", "yes", "no", "unless-stopped", "always"].includes(valPart)) {
    return (
      <>
        <span>{leadingSpace}</span>
        <span className="text-purple-400">{valPart}</span>
        {commentPart && <span className="text-neutral-500">{commentPart}</span>}
      </>
    );
  }

  // General text / image tags
  return (
    <>
      <span>{leadingSpace}</span>
      <span className="text-neutral-200">{valPart}</span>
      {commentPart && <span className="text-neutral-500">{commentPart}</span>}
    </>
  );
}
