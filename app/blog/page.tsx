import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main
      className="min-h-screen"
      style={{
        background: "#008080",
        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
        fontSize: "11px",
        padding: "16px",
      }}
    >
      {/* Browser Window Chrome */}
      <div
        style={{
          border: "2px solid",
          borderColor: "#dfdfdf #808080 #808080 #dfdfdf",
          background: "#d4d0c8",
          boxShadow: "2px 2px 0 #000",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Title Bar */}
        <div
          style={{
            background: "linear-gradient(to right, #0a246a, #a6caf0)",
            padding: "3px 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "#d4d0c8",
                border: "1px solid #808080",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              k
            </div>
            <span
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "11px",
                fontFamily: "Tahoma, Arial, sans-serif",
              }}
            >
              kern.ai — Blog — Microsoft Internet Explorer
            </span>
          </div>
          {/* Window Controls */}
          <div style={{ display: "flex", gap: "2px" }}>
            {["—", "□", "✕"].map((label, i) => (
              <button
                key={i}
                style={{
                  width: "16px",
                  height: "14px",
                  fontSize: "9px",
                  lineHeight: 1,
                  background: "#d4d0c8",
                  border: "1px solid",
                  borderColor: "#dfdfdf #808080 #808080 #dfdfdf",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Bar */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "1px solid #808080",
            padding: "2px 4px",
            display: "flex",
            gap: "2px",
          }}
        >
          {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
            <span
              key={item}
              style={{
                padding: "2px 6px",
                fontSize: "11px",
                cursor: "default",
                color: "#000",
              }}
              className="win-menu-item"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Toolbar */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "2px solid",
            borderColor: "#808080 #dfdfdf #dfdfdf #808080",
            padding: "3px 6px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {[
            { label: "◄ Back", disabled: false },
            { label: "► Forward", disabled: true },
            { label: "✕ Stop", disabled: true },
            { label: "↺ Refresh", disabled: false },
            { label: "⌂ Home", disabled: false },
          ].map(({ label, disabled }) => (
            <button
              key={label}
              disabled={disabled}
              style={{
                padding: "2px 8px",
                fontSize: "11px",
                background: "#d4d0c8",
                border: "1px solid",
                borderColor: disabled
                  ? "#d4d0c8 #d4d0c8 #d4d0c8 #d4d0c8"
                  : "#dfdfdf #808080 #808080 #dfdfdf",
                cursor: disabled ? "default" : "pointer",
                color: disabled ? "#808080" : "#000",
                fontFamily: "Tahoma, Arial, sans-serif",
              }}
            >
              {label}
            </button>
          ))}
          {/* Separator */}
          <div
            style={{
              width: "1px",
              height: "20px",
              background: "#808080",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          />
          {/* Address Bar */}
          <span style={{ fontSize: "11px", color: "#000", marginRight: "4px" }}>
            Address
          </span>
          <div
            style={{
              flex: 1,
              display: "flex",
              border: "2px solid",
              borderColor: "#808080 #dfdfdf #dfdfdf #808080",
              background: "#fff",
              padding: "1px 4px",
            }}
          >
            <span style={{ fontSize: "11px", color: "#000" }}>
              http://kern.ai/blog
            </span>
          </div>
          <button
            style={{
              padding: "2px 10px",
              fontSize: "11px",
              background: "#d4d0c8",
              border: "1px solid",
              borderColor: "#dfdfdf #808080 #808080 #dfdfdf",
              cursor: "pointer",
              fontFamily: "Tahoma, Arial, sans-serif",
            }}
          >
            Go
          </button>
        </div>

        {/* Page Content Area */}
        <div style={{ background: "#fff", padding: "0" }}>
          {/* Page Header Banner */}
          <table
            style={{
              width: "100%",
              background: "#0a246a",
              borderBottom: "2px solid #000080",
              padding: 0,
              borderSpacing: 0,
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px" }}>
                  <Link
                    href="/"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Tahoma, Arial, sans-serif",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    kern<span style={{ color: "#a6caf0" }}>.</span>
                  </Link>
                  <div
                    style={{
                      color: "#a6caf0",
                      fontSize: "11px",
                      marginTop: "2px",
                    }}
                  >
                    AI agents built for coworking
                  </div>
                </td>
                <td style={{ padding: "10px 16px", textAlign: "right", verticalAlign: "bottom" }}>
                  <div style={{ display: "flex", gap: "0", justifyContent: "flex-end" }}>
                    {[
                      { href: "/blog", label: "Blog", active: true },
                      { href: "/docs", label: "Docs", active: false },
                      {
                        href: "https://github.com/oguzbilgic/kern-ai",
                        label: "GitHub",
                        active: false,
                      },
                    ].map(({ href, label, active }) => (
                      <Link
                        key={label}
                        href={href}
                        style={{
                          display: "inline-block",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: active ? "#000" : "#fff",
                          background: active ? "#d4d0c8" : "transparent",
                          textDecoration: "none",
                          borderTop: active ? "1px solid #dfdfdf" : "none",
                          borderLeft: active ? "1px solid #dfdfdf" : "none",
                          borderRight: active ? "1px solid #808080" : "none",
                          fontFamily: "Tahoma, Arial, sans-serif",
                          fontWeight: active ? "bold" : "normal",
                        }}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Content */}
          <div style={{ padding: "12px 16px", background: "#fff" }}>
            {/* Page Title */}
            <h1
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#0a246a",
                marginBottom: "12px",
                paddingBottom: "4px",
                borderBottom: "2px solid #0a246a",
                fontFamily: "Tahoma, Arial, sans-serif",
              }}
            >
              Blog
            </h1>

            {/* Posts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {posts.map((post, i) => (
                <div
                  key={post.slug}
                  style={{
                    border: "2px solid",
                    borderColor: "#dfdfdf #808080 #808080 #dfdfdf",
                    background: i % 2 === 0 ? "#f0f0f0" : "#e8e8e8",
                    marginBottom: "8px",
                    padding: "0",
                  }}
                >
                  {/* Article Title Bar */}
                  <div
                    style={{
                      background: "#0a246a",
                      padding: "3px 8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: "bold",
                        fontFamily: "Tahoma, Arial, sans-serif",
                      }}
                    >
                      Article
                    </span>
                    <span
                      style={{
                        color: "#a6caf0",
                        fontSize: "10px",
                        fontFamily: "Tahoma, Arial, sans-serif",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>

                  {/* Article Body */}
                  <div style={{ padding: "10px 12px" }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#0000cc",
                          textDecoration: "underline",
                          marginBottom: "4px",
                          fontFamily: "Tahoma, Arial, sans-serif",
                          cursor: "pointer",
                        }}
                      >
                        {post.title}
                      </div>
                      {post.summary && (
                        <p
                          style={{
                            color: "#000",
                            fontSize: "11px",
                            lineHeight: "1.5",
                            margin: 0,
                            fontFamily: "Tahoma, Arial, sans-serif",
                          }}
                        >
                          {post.summary}
                        </p>
                      )}
                    </Link>
                    <div style={{ marginTop: "8px", display: "flex", gap: "4px" }}>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{
                          display: "inline-block",
                          padding: "2px 8px",
                          fontSize: "11px",
                          background: "#d4d0c8",
                          border: "1px solid",
                          borderColor: "#dfdfdf #808080 #808080 #dfdfdf",
                          color: "#000",
                          textDecoration: "none",
                          fontFamily: "Tahoma, Arial, sans-serif",
                          cursor: "pointer",
                        }}
                      >
                        Read More &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Status Links */}
            <div
              style={{
                marginTop: "16px",
                padding: "8px",
                border: "2px solid",
                borderColor: "#808080 #dfdfdf #dfdfdf #808080",
                background: "#d4d0c8",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#000",
                  marginBottom: "4px",
                  fontWeight: "bold",
                  fontFamily: "Tahoma, Arial, sans-serif",
                }}
              >
                Favorite Links
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                {[
                  {
                    href: "https://github.com/oguzbilgic/kern-ai",
                    label: "GitHub Repository",
                  },
                  {
                    href: "https://www.npmjs.com/package/kern-ai",
                    label: "npm Package",
                  },
                  {
                    href: "https://github.com/oguzbilgic/kern-ai/tree/master/docs",
                    label: "Documentation",
                  },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      color: "#0000cc",
                      fontSize: "11px",
                      textDecoration: "underline",
                      fontFamily: "Tahoma, Arial, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div
          style={{
            background: "#d4d0c8",
            borderTop: "1px solid #808080",
            padding: "2px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "11px", color: "#000", fontFamily: "Tahoma, Arial, sans-serif" }}>
            Done
          </span>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div
              style={{
                border: "1px solid #808080",
                padding: "1px 6px",
                fontSize: "10px",
                color: "#000",
                fontFamily: "Tahoma, Arial, sans-serif",
              }}
            >
              🔒 Internet
            </div>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#d4d0c8",
          borderTop: "2px solid #dfdfdf",
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          zIndex: 100,
        }}
      >
        {/* Start Button */}
        <button
          style={{
            padding: "2px 10px",
            fontSize: "11px",
            fontWeight: "bold",
            background: "#d4d0c8",
            border: "1px solid",
            borderColor: "#dfdfdf #808080 #808080 #dfdfdf",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: "Tahoma, Arial, sans-serif",
          }}
        >
          <span style={{ fontSize: "13px" }}>⊞</span> Start
        </button>
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "#808080",
            margin: "0 4px",
          }}
        />
        {/* Active window in taskbar */}
        <button
          style={{
            padding: "2px 10px",
            fontSize: "11px",
            background: "#b8b4ac",
            border: "1px solid",
            borderColor: "#808080 #dfdfdf #dfdfdf #808080",
            cursor: "pointer",
            fontFamily: "Tahoma, Arial, sans-serif",
          }}
        >
          kern.ai - Blog — Microsoft Internet Explorer
        </button>
        {/* Clock */}
        <div
          style={{
            marginLeft: "auto",
            fontSize: "11px",
            padding: "2px 8px",
            border: "1px solid",
            borderColor: "#808080 #dfdfdf #dfdfdf #808080",
            fontFamily: "Tahoma, Arial, sans-serif",
          }}
        >
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Padding for taskbar */}
      <div style={{ height: "32px" }} />
    </main>
  );
}
