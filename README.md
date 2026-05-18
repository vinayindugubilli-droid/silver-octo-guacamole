 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..96284775737a2b97a737be06f3b7c446333309ba
--- /dev/null
+++ b/README.md
@@ -0,0 +1,22 @@
+# M.U.S.I.C Stellar Spectrum
+
+M.U.S.I.C Stellar Spectrum is a lightweight student music-learning web app focused on:
+
+- Music theory basics
+- Rhythm practice
+- Ear training
+- Creative composition
+- Daily practice tracking with motivational feedback
+
+## Run locally
+
+No build tools required.
+
+1. Open `index.html` in your browser.
+2. Or run a local static server (example):
+
+```bash
+python3 -m http.server 8080
+```
+
+Then visit `http://localhost:8080`.
 
EOF
)
