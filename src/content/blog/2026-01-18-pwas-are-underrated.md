---
title: "PWAs Are Cool (Again)"
description: "The case for progressive web apps as the default choice for indie builders and side projects."
date: 2026-01-18
draft: false
---

Traditionally, the default mental model for "I want to build an app" goes like this: if it's serious, build native. If it's not serious, just make a website. PWAs occupy an uncanny middle ground that makes people suspicious. They're weird.

But in the age of AI, they're making more and more sense to me. 

I recently wanted to start tracking our weekly "fun" budget. I searched around for a bit for an existing app that does what I want, but none felt quite right. A lot of them want you to connect your credit cards, have a ton of bells and whistles, and felt like a huge investment when I just wanted something simple.

Instead, I fired up Claude Code and within a few hours had a working prototype that did EXACTLY what I wanted, nothing more, nothing less. The only frustrating thing for my partner and I was that we would potentially need to open up a browser and navigate to the site before being able to log an expense.

---

Enter the PWA.

---

They install on your home screen. They work offline. They can send notifications. No App Store process or 30% cut. For the projects I've liked building lately, a PWA is almost always the right tool.

On capability, the gap has mostly closed. You can access the camera, geolocation, background sync, local storage. You can't do everything, no Bluetooth on iOS, no real background execution, but for most apps, "most" is enough. If you're building Spotify, build native. If you're building a tool for yourself or a few hundred people, you probably don't need Bluetooth.

On distribution, people assume the App Store is how users find apps. But that's only true for consumer apps competing for attention. If you're building something for a specific audience—your coworkers, your customers, your own damn self—you don't need distribution. You need a URL and a "Add to Home Screen" prompt.

---

The real reason PWAs are underrated is simpler: they're boring. There's no new language to learn. No exciting framework drama. No waiting for App Review. You just build a website, add a manifest file and a service worker, and suddenly it's installable.

Boring is underrated too.

---

I'm not saying PWAs are right for everything. If your business model depends on App Store presence, go native. If you need deep OS integration, go native. If your users expect the polish of a top-tier consumer app, maybe go native.

But if you're an indie builder shipping tools for yourself or a niche audience, PWAs let you move fast and stay in control. No gatekeepers. No separate codebases. No waiting for approval.

Just a URL that works like an app.
