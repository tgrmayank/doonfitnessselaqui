"""Usage: python set-domain.py https://www.yourdomain.com
Replaces the current domain in all pages, sitemap, robots and llms.txt."""
import sys,pathlib
if len(sys.argv)!=2: sys.exit(__doc__)
new=sys.argv[1].rstrip("/")
olds=["https://YOUR-DOMAIN.com","https://doonfitnessxgym.vercel.app"]
for n in ["index.html","contact.html","reviews.html","gallery.html","robots.txt","sitemap.xml","llms.txt"]:
    p=pathlib.Path(n);t=p.read_text(encoding="utf-8")
    for o in olds:t=t.replace(o,new)
    p.write_text(t,encoding="utf-8");print("updated",n)
