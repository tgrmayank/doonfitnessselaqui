# Doon Fitness website

Gym website (Home, Gallery, Reviews, Contact) for Doon Fitness, Selaqui, Dehradun.

## Put it on GitHub Pages
1. Create a repo on github.com and upload every file from this folder (index.html must be at the root).
2. Repo Settings > Pages > Source: "Deploy from a branch" > main > / (root) > Save.
3. Your site opens at https://USERNAME.github.io/REPO/ (or your own domain, see below).

## Set your real web address (important for SEO)
Run once, then upload the changed files again:

    python set-domain.py https://yourdomain.com

For a github.io address use https://USERNAME.github.io/REPO as the domain.

## Custom domain
Add a file named CNAME containing only your domain (example: yourdomain.com) and set the DNS records in your domain panel.

## After it is live
1. Google Search Console: add the site, then submit https://yourdomain.com/sitemap.xml
2. Create / claim Google Business Profile for Doon Fitness (same name, address and phone as the website). This is what shows the gym on Google Maps and "gym near me".
3. Test the share banner: https://www.opengraph.xyz/ and rich results: https://search.google.com/test/rich-results

## Files
- index.html: home page
- contact.html: contact page (call, WhatsApp auto-typing message, address, map)
- reviews.html: member reviews (edit the cards in the file to add real reviews)
- gallery.html: photo slider (add a photo: copy a <figure class="sd"> block and a thumbnail button)
- assets/css, assets/js: shared styles and WhatsApp popup script
- assets/img: photos, logo and og-banner (share image 1200x630)
- assets/icons, favicon.ico, favicon.svg: browser tab icons, phone home-screen icons
- manifest.webmanifest, browserconfig.xml: app / tile settings
- robots.txt, sitemap.xml, llms.txt: for Google and AI search
- 404.html: not-found page
