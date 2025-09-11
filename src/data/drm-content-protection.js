import tvStream from "../assets/tv-stream-bg.jpg";
import cyberHack from "../assets/cyber-hack-bg.jpg";
import secureData from "../assets/secure-data-bg.jpg";
import businessValue from "../assets/business-value-bg.jpg";
import futureProof from "../assets/future-proof-bg.jpg";

export const heroData = {
    header: "DRM & Content Protection",
    subHeader: "Secure. Certify. Protect.",
    subText: `Trusted by studios and distributors worldwide. 
              <span class="font-semibold">AION DRM</span> delivers premium content protection 
              for streaming, offline, and hybrid experiences — future-ready from day one.`,
};

export const sections1 = [
    {
        title: "Why DRM Matters",
        body: `Premium content drives modern media platforms — but studios and rights holders demand one thing above all else: <strong>certainty</strong>. Without trusted protection, access to top-tier catalogs is impossible.<br><br>
           <span class="font-semibold">AION DRM</span> provides the security, certification, and compliance required to unlock premium libraries while protecting your content at every stage of the supply chain.`,
        image: tvStream,
    },
    {
        title: "The Challenge: Content at Risk",
        body: `Piracy and unauthorized distribution remain <strong>multi-billion-dollar threats</strong>. Platforms face growing attack surfaces as devices and networks expand.<br><br>
           Legacy DRM often fails certification, lacks offline support, or frustrates users.<br>
           <ul class="list-disc pl-5 space-y-1">
             <li>Lost licensing opportunities</li>
             <li>Frustrated viewers</li>
             <li>Higher operational costs</li>
           </ul>`,
        image: cyberHack,
        reverse: true,
    },
    {
        title: "Certified. Flexible. Proven.",
        body: `Built on Hollywood-approved standards, <span class="font-semibold">AION DRM</span> combines strong encryption, advanced rights management, and seamless integration.<br><br>
           Whether content is streamed online, distributed via hybrid networks, or played offline, AION ensures every viewing experience is <strong>secure</strong>, <strong>certified</strong>, and <strong>compliant</strong>.`,
        image: secureData,
        cta: "Talk to an Expert",
    },
];

export const features = [
    {
        title: "Studio-Certified Compliance",
        description:
            "Trusted by major studios and distributors, unlocking access to premium catalogs while ensuring full Hollywood-approved compliance.",
        icon: `
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        `,
    },
    {
        title: "Forensic Watermarking",
        description:
            "Invisible, tamper-proof watermarking technology that traces leaks back to the source and builds trust with rights holders.",
        icon: `
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M2 12h2M20 12h2M12 2v2M12 20v2" />
        `,
    },
    {
        title: "Flexible Monetization",
        description:
            "SVOD, AVOD, TVOD, freemium, or hybrid — AION DRM adapts to your business model and enforces rights consistently across all platforms.",
        icon: `
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8m4-4H8" />
        <path d="M16 4l4 4m-4 12l4-4M8 4L4 8m4 12l-4-4" />
        `,
    },
    {
        title: "Offline & Hybrid Support",
        description:
            "Deliver secure playback in restricted environments — ships at sea, planes in the sky, or hospitals with limited connectivity.",
        icon: `
        <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
        <path d="M3 6l9 6 9-6" />
        <circle cx="12" cy="12" r="1.5" />
        `,
    },
    {
        title: "Seamless Integration",
        description:
            "Integrate via API or use AION’s built-in workflows. DRM becomes an invisible part of your platform with zero operational disruption.",
        icon: `
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M7 12h10M12 7v10" />
        `,
    },
    {
        title: "Secure Video Pipeline",
        description:
            "Transcode, encrypt, embed, and stream — all on autopilot. AION’s SDKs, APIs, and webhooks make scaling effortless.",
        icon: `
        <path d="M4 4h16v16H4V4z" />
        <path d="M10 8l6 4-6 4V8z" />
        <circle cx="12" cy="12" r="10" stroke-width="1.5" fill="none" />
        `,
    },
    {
        title: "Geoblocking & Access Control",
        description:
            "Restrict playback by geography, device, or domain. Apply real-time access rules and concurrent stream limits with ease.",
        icon: `
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a10 10 0 010 20" />
        <circle cx="12" cy="12" r="3" />
        `,
    },
];

export const useCases = [
    {
        title: "Airlines",
        icon: "✈",
        description:
            "Deliver Hollywood-approved films onboard with secure offline playback.",
    },
    {
        title: "Defense & Government",
        icon: "🛡",
        description:
            "Distribute sensitive training content in fully controlled environments.",
    },
    {
        title: "Hospitals",
        icon: "🏥",
        description:
            "Enable staff training without risking patient privacy or content leakage.",
    },
    {
        title: "Public Transport",
        icon: "🚌",
        description:
            "Offer secure entertainment on buses, trains, and mobility networks.",
    },
];

export const sections2 = [
    {
        title: "The Business Value",
        body: `Choosing <span class="font-semibold">AION DRM</span> means faster licensing deals, reduced legal exposure, and protection against piracy-related revenue loss.<br><br>
               It also builds <strong>credibility</strong> with content partners who demand proof of compliance before signing contracts.`,
        image: businessValue,
    },
    {
        title: "Future-Proof by Design",
        body: `As codecs, platforms, and user expectations evolve, <span class="font-semibold">AION DRM</span> evolves with them.<br><br>
               Our roadmap includes <strong>AI-driven compliance checks</strong>, faster license negotiations, and support for emerging content formats.<br><br>
               With AION, your platform is not only <strong>secure today</strong> but also <strong>ready for tomorrow</strong>.`,
        image: futureProof,
        reverse: true,
    },
];
