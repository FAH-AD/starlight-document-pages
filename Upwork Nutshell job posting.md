Task: I have a static website built with Astro using the Starlight theme and want to hire someone to integrate a basic Javascript function. The function is provided by a simple open-source script called "Nutshell" that allows you to click on text in a rendered HTML page to fold/unfold it.

Relevant links:

- Astro: https://astro.build/
- Starlight: https://starlight.astro.build/getting-started/
- Nutshell demo: https://ncase.me/nutshell/
- Nutshell repo: https://github.com/ncase/nutshell

Current obstacle: The script is designed to be embedded in any HTML website with a single URL pointing to the script, hosted online, but I cannot figure out how to get the script to work when using Astro to build the site. I was almost able to do this myself using the strategy described at the page linked below, "Edit the HTML head of a Starlight Page", but I ran into problems I cannot properly troubleshoot. I am able to download and host the Nutshell script locally if it helps solve the problem, but I don't think that matters.

Edit the HTML head of a Starlight Page: https://hideoo.dev/notes/starlight-custom-html-head

Scope and timing: I would like this completed within 1-2 weeks. I estimate this to be a 2-4 hour job for a programmer with some experience with Astro, with most of the time just to explain the solution and troubleshoot implementation on my site.

Budget: Your bid response MUST include a fixed-price bid amount. I am hoping for fixed-price bids of USD $50 or less, but I will raise budget if bidders all say it is a bigger job than I realize. I will hire lowest bid that can meet deliverables.

Deliverables:

- provide astro components and/or page templates to enable Nutshell functionality on rendered webpages initially written in Markdown (MDX acceptable)
- live call or document explaining how the code/components/page templates work so I can use them going forward
- follow-up to address any bugs or problems once tested in a site I build locally on my machine

Additional requirements:

The deliverables must work with an Astro site that uses the following plugins (which are currently working on my site):

- Starlight theme
- starlight links validator - [HiDeoo/starlight-links-validator: Starlight plugin to validate internal links](https://github.com/HiDeoo/starlight-links-validator)
- starlight-utils (multi-sidebar functionality) - [Multi-Sidebar | 🧰 Starlight Utils](https://starlight-utils.pages.dev/utilities/multi-sidebar/)

The deliverable MUST allow configuration of Nutshell according to its [Advanced Features](https://github.com/ncase/nutshell?tab=readme-ov-file#advanced-features--options) to properly set the option 'dontEmbedHeadings' to 'true'.

The deliverable MUST allow me to write text for the Nutshell function using its intended Markdown syntax, described on the above pages; e.g. `To embed a section, just make a link with :colon at the front... [:LIKE THIS](#ToWriteASection)!`
