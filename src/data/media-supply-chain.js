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
        title: "Streamlined Media Workflows, End-to-End",
        body: `Behind every video lies a complex chain of tasks: ingesting files, preparing metadata, encoding and transcoding, packaging for different platforms, applying DRM, scheduling releases, and tracking performance.<br><br>
               If even one step fails, <strong>deadlines slip</strong> and <strong>costs rise</strong>.<br><br>
               <span class="font-semibold">AION Media Group</span> brings these workflows together into a single, efficient platform that keeps your business in control from ingest to delivery.`,
        image: vodAppsIntro,
    },
    {
        title: "The Challenge: Fragmented & Inefficient Workflows",
        body: `Many organizations still rely on a <strong>patchwork of tools and vendors</strong> to manage their media.<br><br>
               Encoding might happen in one system, while packaging, DRM, and analytics live in others. Teams spend hours moving files, reconciling data, and checking compliance.<br><br>
               This slows down delivery, <strong>increases risk</strong>, and limits your ability to scale across devices, territories, and monetization models.`,
        image: vodAppsReady,
        reverse: true,
    },
    {
        title: "Our Solution: A Unified Media Supply Chain",
        body: `<span class="font-semibold">AION Media Group</span> unifies the entire media supply chain under one roof.<br><br>
               From ingest and preparation to packaging and archiving, every stage is automated and monitored. Our <strong>powerful CMS</strong> sits at the core, enabling you to manage licensing, subscriptions, scheduling, content visibility, and analytics from a single interface.<br><br>
               The result: <strong>full visibility, fewer errors, and faster delivery</strong>.`,
        image: vodAppsCustom,
        cta: "Talk to an Expert",
    },
];

export const features = [
    {
        title: "Ingest & Content Preparation",
        description:
            "Automated workflows normalize formats, enrich metadata, and perform quality checks before content enters distribution.",
        icon: `
        <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
        <path d="M8 20h8v-2H8v2z" />
        `,
    },
    {
        title: "Encoding & Transcoding",
        description:
            "Optimized pipelines — including Titan Aegis — reduce file sizes while maintaining full quality, ensuring efficient delivery across networks and devices.",
        icon: `
        <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
        <path d="M3 6l9 6 9-6" />
        `,
    },
    {
        title: "Packaging & DRM Integration",
        description:
            "Support for HLS, DASH, and other formats combined with Hollywood-approved DRM ensures secure and compliant playback at scale.",
        icon: `
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4m0-4h.01" />
        `,
    },
    {
        title: "Comprehensive CMS",
        description:
            "Manage subscriptions, licensing rules, scheduling, content visibility, and revenue models directly from a single dashboard.",
        icon: `
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
        `,
    },
    {
        title: "Analytics & Reporting",
        description:
            "Track user behavior, device usage, churn, ad performance, and revenue across territories with built-in dashboards.",
        icon: `
        <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
        <path d="M7 7h10v10H7V7z" />
        <path d="M10 10h4v4h-4v-4z" />
        `,
    },
];

export const useCases = [
    {
        title: "Film Distributors",
        icon: "🎬",
        description:
            "Prepare content for multi-territory releases with consistent metadata, automated DRM packaging, and controlled scheduling.",
    },
    {
        title: "Airlines & Maritime Operators",
        icon: "✈",
        description:
            "Sync new libraries across entire fleets in a single update cycle, reducing manual handling and ensuring content availability everywhere.",
    },
    {
        title: "Hospitals & Educational Institutions",
        icon: "🏥",
        description:
            "Manage secure training content with granular visibility settings and analytics on engagement and completion.",
    },
    {
        title: "Defense Organizations",
        icon: "🛡",
        description:
            "Gain audit-ready workflows and secure provisioning within restricted or closed networks.",
    },
];

export const sections2 = [
    {
        title: "The Business Value",
        body: `By consolidating technical workflows and business logic into one system, <span class="font-semibold">AION Media Group</span> reduces operational overhead, minimizes errors, and <strong>speeds up delivery</strong>.<br><br>
               The comprehensive CMS turns content management into a <strong>strategic advantage</strong>, giving organizations the ability to adapt quickly to new markets, formats, and revenue opportunities.`,
        image: businessValue,
    },
    {
        title: "Future-Proof by Design",
        body: `As codecs, devices, and business models evolve, <span class="font-semibold">AION Media Group</span> ensures your workflows and CMS <strong>adapt seamlessly</strong>.<br><br>
               From emerging formats to new monetization strategies, our platform keeps the media supply chain efficient, compliant, and <strong>ready for tomorrow</strong>.`,
        image: futureProof,
        reverse: true,
    },
];
