interface HighlightYamlProps {
  code: string;
}

export function HighlightYaml({ code }: HighlightYamlProps) {
  const lines = code.split("\n");

  return (
    <pre className="font-mono text-xs leading-relaxed whitespace-pre">
      {lines.map((line, idx) => {
        // Comment
        if (line.trim().startsWith("#")) {
          return (
            <div key={idx} className="text-neutral-500">
              {line}
            </div>
          );
        }

        // Key-value or list item: match indentation, key/dash, colon, and rest
        const kvMatch = line.match(/^(\s*)(-\s+)?([a-zA-Z0-9_\-."']+)(\s*:)(.*)$/);
        if (kvMatch) {
          const [, indent, dash, key, colon, rest] = kvMatch;
          return (
            <div key={idx}>
              <span>{indent}</span>
              {dash && <span className="text-neutral-500">{dash}</span>}
              <span className="text-sky-400 font-medium">{key}</span>
              <span className="text-neutral-400">{colon}</span>
              {renderYamlValue(rest)}
            </div>
          );
        }

        // Simple list item without colon, e.g. "      - ops-home:/home/agent"
        const listMatch = line.match(/^(\s*-\s+)(.*)$/);
        if (listMatch) {
          const [, dashPart, rest] = listMatch;
          return (
            <div key={idx}>
              <span className="text-neutral-500">{dashPart}</span>
              {renderYamlValue(" " + rest)}
            </div>
          );
        }

        return (
          <div key={idx} className="text-neutral-300">
            {line}
          </div>
        );
      })}
    </pre>
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
    const inner = valPart.slice(1, -1);
    return (
      <>
        <span>{leadingSpace}</span>
        <span className="text-neutral-400">[</span>
        <span className="text-emerald-400">{inner}</span>
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
        <span className="text-amber-300">{valPart}</span>
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
