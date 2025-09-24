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
        header: "Why DRM Matters",
        text: `Premium content drives modern media platforms — but studios and rights holders demand one thing above all else: <strong>certainty</strong>. Without trusted protection, access to top-tier catalogs is impossible.<br><br>
           <span class="font-semibold">AION DRM</span> provides the security, certification, and compliance required to unlock premium libraries while protecting your content at every stage of the supply chain.`,
        image: tvStream,
    },
    {
        header: "The Challenge: Content at Risk",
        text: `Piracy and unauthorized distribution remain <strong>multi-billion-dollar threats</strong>. Platforms face growing attack surfaces as devices and networks expand.<br><br>
           Legacy DRM often fails certification, lacks offline support, or frustrates users.<br>
           <ul class="list-disc pl-5 space-y-1">
             <li>Lost licensing opportunities</li>
             <li>Frustrated viewers</li>
             <li>Higher operational costs</li>
           </ul>`,
        image: cyberHack,
        reverse: true,
        bg: true,
    },
    {
        header: "Certified. Flexible. Proven.",
        text: `Built on Hollywood-approved standards, <span class="font-semibold">AION DRM</span> combines strong encryption, advanced rights management, and seamless integration.<br><br>
           Whether content is streamed online, distributed via hybrid networks, or played offline, AION ensures every viewing experience is <strong>secure</strong>, <strong>certified</strong>, and <strong>compliant</strong>.`,
        image: secureData,
        cta: "Talk to an Expert",
    },
];

export const features = [
    {
        header: "Studio-Certified Compliance",
        text:
            "Trusted by major studios and distributors, unlocking access to premium catalogs while ensuring full Hollywood-approved compliance.",
        icon: [
            "M12 2L2 7l10 5 10-5-10-5z",
            "M2 17l10 5 10-5",
            "M2 12l10 5 10-5",
        ],
    },
    {
        header: "Forensic Watermarking",
        text:
            "Invisible, tamper-proof watermarking technology that traces leaks back to the source and builds trust with rights holders.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z", // circle r=10
            "M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z",       // circle r=4
            "M2 12h2M20 12h2M12 2v2M12 20v2",
        ],
    },
    {
        header: "Flexible Monetization",
        text:
            "SVOD, AVOD, TVOD, freemium, or hybrid — AION DRM adapts to your business model and enforces rights consistently across all platforms.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z", // circle r=10
            "M12 8v8m4-4H8",
            "M16 4l4 4m-4 12l4-4M8 4L4 8m4 12l-4-4",
        ],
    },
    {
        header: "Offline & Hybrid Support",
        text:
            "Deliver secure playback in restricted environments — ships at sea, planes in the sky, or hospitals with limited connectivity.",
        icon: [
            "M3 6h18v12H3z", // rectangle approximation
            "M3 6l9 6 9-6",
            "M12 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3z", // circle r=1.5
        ],
    },
    {
        header: "Seamless Integration",
        text:
            "Integrate via API or use AION’s built-in workflows. DRM becomes an invisible part of your platform with zero operational disruption.",
        icon: [
            "M3 3h18v18H3z", // rectangle
            "M7 12h10M12 7v10",
        ],
    },
    {
        header: "Secure Video Pipeline",
        text:
            "Transcode, encrypt, embed, and stream — all on autopilot. AION’s SDKs, APIs, and webhooks make scaling effortless.",
        icon: [
            "M4 4h16v16H4V4z",
            "M10 8l6 4-6 4V8z",
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z",
        ],
    },
    {
        header: "Geoblocking & Access Control",
        text:
            "Restrict playback by geography, device, or domain. Apply real-time access rules and concurrent stream limits with ease.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z",
            "M2 12h20M12 2a10 10 0 0 1 0 20",
            "M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z",
        ],
    },
];


export const useCases = [
    {
        header: "Airlines",
        emoji: "✈",
        text:
            "Deliver Hollywood-approved films onboard with secure offline playback.",
        link: "/industries/air-carriers",
    },
    {
        header: "Defense & Government",
        emoji: "🛡",
        text:
            "Distribute sensitive training content in fully controlled environments.",
        link: "/industries/defense-government",
    },
    {
        header: "Hospitals",
        emoji: "🏥",
        text:
            "Enable staff training without risking patient privacy or content leakage.",
        link: "/industries/hospitals-care-facilities",
    },
    {
        header: "Public Transport",
        emoji: "🚌",
        text:
            "Offer secure entertainment on buses, trains, and mobility networks.",
        link: "/industries/public-transport",
    },
    {
        header: "Maritime Operators",
        emoji: "🚢",
        text:
            "Equip ships with media servers that synchronize content in port and deliver seamless playback at sea.",
        link: "/industries/maritime",
    },
];


export const sections2 = [
    {
        header: "The Business Value",
        text: `Choosing <span class="font-semibold">AION DRM</span> means faster licensing deals, reduced legal exposure, and protection against piracy-related revenue loss.<br><br>
               It also builds <strong>credibility</strong> with content partners who demand proof of compliance before signing contracts.`,
        image: businessValue,
    },
    {
        header: "Future-Proof by Design",
        text: `As codecs, platforms, and user expectations evolve, <span class="font-semibold">AION DRM</span> evolves with them.<br><br>
               Our roadmap includes <strong>AI-driven compliance checks</strong>, faster license negotiations, and support for emerging content formats.<br><br>
               With AION, your platform is not only <strong>secure today</strong> but also <strong>ready for tomorrow</strong>.`,
        image: futureProof,
        reverse: true,
    },
];
