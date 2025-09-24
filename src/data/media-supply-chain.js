import vodAppsIntro from "../assets/vod-apps-intro-bg.jpg";
import vodAppsReady from "../assets/vod-apps-ready-bg.jpg";
import vodAppsCustom from "../assets/vod-apps-custom-bg.jpg";
import businessValue from "../assets/business-value-bg.jpg";
import futureProof from "../assets/future-proof-bg.jpg";

export const heroData = {
    header: "Media Supply Chain & Workflow Services",
    subHeader: "From Ingest to Audience — Every Step Under Control",
    subText: `AION Media Group streamlines the entire video workflow, combining ingest, metadata, encoding, packaging, DRM, scheduling, and analytics into a unified, integrated platform — giving you complete visibility and control.`,
};

export const sections1 = [
    {
        header: "Streamlined Media Workflows, End-to-End",
        text: `Behind every video lies a complex chain of tasks: ingesting files, preparing metadata, encoding and transcoding, packaging for different platforms, applying DRM, scheduling releases, and tracking performance.<br><br>
               If even one step fails, <strong>deadlines slip</strong> and <strong>costs rise</strong>.<br><br>
               <span class="font-semibold">AION Media Group</span> brings these workflows together into a single, efficient platform that keeps your business in control from ingest to delivery.`,
        image: vodAppsIntro,
    },
    {
        header: "The Challenge: Fragmented & Inefficient Workflows",
        text: `Many organizations still rely on a <strong>patchwork of tools and vendors</strong> to manage their media.<br><br>
               Encoding might happen in one system, while packaging, DRM, and analytics live in others. Teams spend hours moving files, reconciling data, and checking compliance.<br><br>
               This slows down delivery, <strong>increases risk</strong>, and limits your ability to scale across devices, territories, and monetization models.`,
        image: vodAppsReady,
        reverse: true,
        bg: true,
    },
    {
        header: "Our Solution: A Unified Media Supply Chain",
        text: `<span class="font-semibold">AION Media Group</span> unifies the entire media supply chain under one roof.<br><br>
               From ingest and preparation to packaging and archiving, every stage is automated and monitored. Our <strong>powerful CMS</strong> sits at the core, enabling you to manage licensing, subscriptions, scheduling, content visibility, and analytics from a single interface.<br><br>
               The result: <strong>full visibility, fewer errors, and faster delivery</strong>.`,
        image: vodAppsCustom,
    },
];

export const features = [
    {
        header: "Ingest & Content Preparation",
        text:
            "Automated workflows normalize formats, enrich metadata, and perform quality checks before content enters distribution.",
        icon: [
            "M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", // rect with rx=2
            "M8 20h8v-2H8z", // bottom bar
        ],
    },
    {
        header: "Encoding & Transcoding",
        text:
            "Optimized pipelines — including Titan Aegis — reduce file sizes while maintaining full quality, ensuring efficient delivery across networks and devices.",
        icon: [
            "M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z", // rect with rx=2
            "M3 6l9 6 9-6", // envelope style
        ],
    },
    {
        header: "Packaging & DRM Integration",
        text:
            "Support for HLS, DASH, and other formats combined with Hollywood-approved DRM ensures secure and compliant playback at scale.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z", // circle
            "M12 16v-4m0-4h.01", // info glyph
        ],
    },
    {
        header: "Comprehensive CMS",
        text:
            "Manage subscriptions, licensing rules, scheduling, content visibility, and revenue models directly from a single dashboard.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z", // circle
            "M8 12h8M12 8v8", // plus sign
        ],
    },
    {
        header: "Analytics & Reporting",
        text:
            "Track user behavior, device usage, churn, ad performance, and revenue across territories with built-in dashboards.",
        icon: [
            "M3 3h18v18H3z", // outer square (approx rx=3 simplified)
            "M7 7h10v10H7z", // inner square
            "M10 10h4v4h-4z", // smaller square
        ],
    },
];


export const useCases = [
    {
        header: "Film Distributors",
        emoji: "🎬",
        text:
            "Prepare content for multi-territory releases with consistent metadata, automated DRM packaging, and controlled scheduling.",
    },
    {
        header: "Airlines & Maritime Operators",
        emoji: "✈",
        text:
            "Sync new libraries across entire fleets in a single update cycle, reducing manual handling and ensuring content availability everywhere.",
    },
    {
        header: "Hospitals & Educational Institutions",
        emoji: "🏥",
        text:
            "Manage secure training content with granular visibility settings and analytics on engagement and completion.",
    },
    {
        header: "Defense Organizations",
        emoji: "🛡",
        text:
            "Gain audit-ready workflows and secure provisioning within restricted or closed networks.",
    },
];


export const sections2 = [
    {
        header: "The Business Value",
        text: `By consolidating technical workflows and business logic into one system, <span class="font-semibold">AION Media Group</span> reduces operational overhead, minimizes errors, and <strong>speeds up delivery</strong>.<br><br>
               The comprehensive CMS turns content management into a <strong>strategic advantage</strong>, giving organizations the ability to adapt quickly to new markets, formats, and revenue opportunities.`,
        image: businessValue,
    },
    {
        header: "Future-Proof by Design",
        text: `As codecs, devices, and business models evolve, <span class="font-semibold">AION Media Group</span> ensures your workflows and CMS <strong>adapt seamlessly</strong>.<br><br>
               From emerging formats to new monetization strategies, our platform keeps the media supply chain efficient, compliant, and <strong>ready for tomorrow</strong>.`,
        image: futureProof,
        reverse: true,
    },
];
