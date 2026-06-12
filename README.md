## Tech Stack

The project utilizes the following technologies:

- **Next.js**: A React framework for building server-side rendered and static websites.
- **Sanity**: A headless CMS for managing content.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and customizable user interfaces.

Feel free to ask if you have any further questions!

<!-- TREE STRUCTURE START -->
<!-- TREE STRUCTURE END -->

<!-- TREE STRUCTURE START -->
```bash
.
├── README.md
├── messages
│   ├── en
│   │   └── common.json
│   └── mr
│       └── common.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── CNAME
│   ├── assets
│   │   ├── About
│   │   │   ├── Amadar.jpg
│   │   │   ├── bg.png
│   │   │   ├── bio-header.png
│   │   │   ├── more1.png
│   │   │   ├── more2.png
│   │   │   ├── more3.png
│   │   │   ├── narendra.png
│   │   │   ├── narendra2.png
│   │   │   ├── चरित्र.jpg
│   │   │   ├── राजकीय प्रवास.jpg
│   │   │   ├── विकास कामे.jpg
│   │   │   └── सरकारी योजना.jpg
│   │   ├── Agriculture
│   │   │   ├── agriculture1.png
│   │   │   ├── agriculture2.png
│   │   │   ├── agriculture3.png
│   │   │   └── agroculture-bg.png
│   │   ├── Banner
│   │   │   ├── banner1.jpg
│   │   │   ├── banner2.jpg
│   │   │   ├── banner3.jpg
│   │   │   ├── banner4.jpg
│   │   │   ├── banner5.jpg
│   │   │   ├── banner6.jpg
│   │   │   └── banner7.jpg
│   │   ├── Education
│   │   │   ├── education-bg.png
│   │   │   ├── education1.png
│   │   │   └── education2.png
│   │   ├── Employment
│   │   │   ├── employment-bg.png
│   │   │   ├── employment1.png
│   │   │   └── employment2.png
│   │   ├── Healthcare
│   │   │   ├── healthcare-bg.png
│   │   │   ├── healthcare1.png
│   │   │   ├── healthcare2.png
│   │   │   └── healthcare3.png
│   │   ├── LandingPage
│   │   │   ├── Journey
│   │   │   │   ├── calci.svg
│   │   │   │   ├── calendar.svg
│   │   │   │   ├── checklist.svg
│   │   │   │   └── graph.svg
│   │   │   ├── agriculture.png
│   │   │   ├── dotted-circle.png
│   │   │   ├── education.png
│   │   │   ├── employment.png
│   │   │   ├── environment.png
│   │   │   ├── facts
│   │   │   │   ├── badge.svg
│   │   │   │   ├── daimond.svg
│   │   │   │   ├── office.svg
│   │   │   │   └── officer.svg
│   │   │   ├── healthcare.png
│   │   │   ├── hero-bg.png
│   │   │   ├── hero.png
│   │   │   ├── hero1.png
│   │   │   ├── hero2.png
│   │   │   ├── hero3.png
│   │   │   ├── image1.png
│   │   │   ├── info
│   │   │   │   ├── constituency.svg
│   │   │   │   ├── development.svg
│   │   │   │   ├── shield.svg
│   │   │   │   ├── social.svg
│   │   │   │   └── vision.svg
│   │   │   ├── narendra-profile.png
│   │   │   ├── narendra-standee.png
│   │   │   ├── narendra-vision.png
│   │   │   └── sports.png
│   │   ├── Media
│   │   │   ├── media-bg.png
│   │   │   ├── news1.png
│   │   │   ├── news2.png
│   │   │   ├── news3.png
│   │   │   ├── news4.png
│   │   │   ├── news5.png
│   │   │   └── news6.png
│   │   ├── Political-Journey
│   │   │   ├── 2009.png
│   │   │   ├── 2014.png
│   │   │   ├── 2019.png
│   │   │   ├── 2024.png
│   │   │   └── grp-photo.png
│   │   ├── Sports
│   │   │   ├── sport1.png
│   │   │   ├── sport2.png
│   │   │   ├── sport3.png
│   │   │   └── sports-header.png
│   │   ├── backgrounds
│   │   │   ├── pattern1.png
│   │   │   ├── pattern2.png
│   │   │   └── pattern3.png
│   │   ├── development-works
│   │   │   ├── image1.png
│   │   │   ├── image2.png
│   │   │   ├── image3.png
│   │   │   └── narendra3.png
│   │   ├── gallery
│   │   │   ├── img1.png
│   │   │   ├── img10.png
│   │   │   ├── img11.png
│   │   │   ├── img2.png
│   │   │   ├── img3.png
│   │   │   ├── img4.png
│   │   │   ├── img5.png
│   │   │   ├── img6.png
│   │   │   ├── img7.png
│   │   │   ├── img8.png
│   │   │   └── img9.png
│   │   ├── schemes
│   │   │   ├── image1.png
│   │   │   └── main-image.png
│   │   └── sticker
│   │       ├── sticker1.jpg
│   │       ├── sticker2.jpg
│   │       ├── sticker3.png
│   │       ├── sticker4.png
│   │       ├── sticker5.jpg
│   │       └── sticker6.png
│   ├── logo-english.svg
│   ├── logo-marathi.svg
│   ├── logo.svg
│   ├── next.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── vercel.svg
├── sanity
│   └── sanity.ts
├── src
│   ├── app
│   │   ├── [locale]
│   │   │   ├── biography
│   │   │   │   └── page.tsx
│   │   │   ├── contact
│   │   │   │   └── page.tsx
│   │   │   ├── development-works
│   │   │   │   └── page.tsx
│   │   │   ├── gallery
│   │   │   │   └── page.tsx
│   │   │   ├── globals.css
│   │   │   ├── government-schemes
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── media-and-coverage
│   │   │   │   ├── NewsCard.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── political-journey
│   │   │   │   └── page.tsx
│   │   │   └── services
│   │   │       ├── _Header
│   │   │       │   └── Header.tsx
│   │   │       ├── agriculture
│   │   │       │   └── page.tsx
│   │   │       ├── education
│   │   │       │   └── page.tsx
│   │   │       ├── employment
│   │   │       │   └── page.tsx
│   │   │       ├── healthcare
│   │   │       │   └── page.tsx
│   │   │       └── sports
│   │   │           └── page.tsx
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   ├── components
│   │   ├── About
│   │   │   ├── About.tsx
│   │   │   ├── Biography.tsx
│   │   │   └── More.tsx
│   │   ├── Footer
│   │   │   └── Footer.tsx
│   │   ├── Header
│   │   │   └── Header.tsx
│   │   ├── LandingPage
│   │   │   ├── About.tsx
│   │   │   ├── BannerCarousel.tsx
│   │   │   ├── Facts
│   │   │   │   └── Facts.tsx
│   │   │   ├── FeaturedInfo
│   │   │   │   ├── FeaturedInfo.tsx
│   │   │   │   └── InfoCards.tsx
│   │   │   ├── Hero
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── TextCard.tsx
│   │   │   ├── Journey.tsx
│   │   │   ├── Members
│   │   │   │   └── Members.tsx
│   │   │   ├── SocialFeeds
│   │   │   │   └── Socialfeeds.tsx
│   │   │   ├── Video.tsx
│   │   │   ├── VideoCarousel
│   │   │   │   └── VideoCarousel.tsx
│   │   │   └── Vision
│   │   │       └── Vision.tsx
│   │   ├── Navbar
│   │   │   ├── DropDown.tsx
│   │   │   ├── LangSwitcher.tsx
│   │   │   └── Navbar.tsx
│   │   ├── PoliticalJourney
│   │   │   ├── Hero.tsx
│   │   │   └── Journey.tsx
│   │   ├── Popup.tsx
│   │   ├── RecentPost.tsx
│   │   ├── SubscribeCard
│   │   │   └── SubscribeCard.tsx
│   │   ├── Translate
│   │   │   └── GoogleTranslate.tsx
│   │   └── aos.tsx
│   ├── i18n.ts
│   ├── middleware.ts
│   ├── navigation.ts
│   └── utils
├── studio
│   ├── README.md
│   ├── dist
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── static
│   │       ├── SanityVision-a8ab75c1.js
│   │       ├── apple-touch-icon.png
│   │       ├── browser-887485f3.js
│   │       ├── favicon-192.png
│   │       ├── favicon-512.png
│   │       ├── favicon.ico
│   │       ├── favicon.svg
│   │       ├── index-1748936e.js
│   │       ├── index2-3b1ba3ef.js
│   │       ├── index3-d4eab2fe.js
│   │       ├── manifest.webmanifest
│   │       ├── resources-42e18bdc.js
│   │       ├── resources-dfcee2be.js
│   │       ├── resources2-10cd444c.js
│   │       ├── resources3-90e1faf9.js
│   │       ├── sanity-3a2dc087.js
│   │       └── stegaEncodeSourceMap-b6764145.js
│   ├── package-lock.json
│   ├── package.json
│   ├── sanity.cli.ts
│   ├── sanity.config.ts
│   ├── schemaTypes
│   │   ├── contactForm.ts
│   │   ├── gallery.ts
│   │   ├── index.ts
│   │   └── subscribeForm.ts
│   ├── static
│   └── tsconfig.json
├── tailwind.config.ts
├── tree_output.txt
└── tsconfig.json

63 directories, 204 files
```
<!-- TREE STRUCTURE END -->
