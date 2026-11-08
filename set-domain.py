"""Usage: python set-domain.py https://www.yourdomain.com
Replaces the placeholder domain in all files."""
import sys,pathlib
if len(sys.argv)!=2: sys.exit(__doc__)
new=sys.argv[1].rstrip("/");old="https://YOUR-DOMAIN.com"
for n in ["index.html","robots.txt","sitemap.xml","llms.txt"]:
    p=pathlib.Path(n);p.write_text(p.read_text(encoding="utf-8").replace(old,new),encoding="utf-8");print("updated",n)
