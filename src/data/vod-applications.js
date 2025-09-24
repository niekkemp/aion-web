import vodAppsIntro from "../assets/vod-apps-intro-bg.jpg";
import vodAppsReady from "../assets/vod-apps-ready-bg.jpg";
import vodAppsCustom from "../assets/vod-apps-custom-bg.jpg";
import businessValue from "../assets/business-value-bg.jpg";
import futureProof from "../assets/future-proof-bg.jpg";

export const heroData = {
    header: "VOD Applications",
    subHeader: "Branded Video Apps with Offline-First Capabilities",
    subText: `Deliver your content on any device, in any language, anywhere. 
              <span class="font-semibold">AION VOD Applications</span> provide premium user experiences with 
              secure playback, offline functionality, and seamless integration across iOS, Android, Smart TVs, and browsers.`,
};

export const sections1 = [
    {
        header: "Branded Video Apps with Offline-First Capabilities",
        text: `Audiences expect content on their own device, in their own language, and without barriers.<br><br>
               <span class="font-semibold">AION VOD Applications</span> are built for iOS, Android, Smart TVs, and browsers — 
               combining premium user experiences with secure playback.<br><br>
               With built-in <strong>offline functionality</strong>, our apps work everywhere: from planes and ships to hospitals, 
               classrooms, and public transport.`,
        image: vodAppsIntro,
    },
    {
        header: "Ready-to-Launch Applications",
        text: `For organizations that need speed, <span class="font-semibold">AION Media Group</span> delivers 
               <strong>white-label applications</strong> ready to deploy.<br><br>
               These apps are fully branded, include <strong>Hollywood-approved DRM</strong>, and support monetization models like 
               SVOD, AVOD, and TVOD.<br><br>
               Get audiences a polished, secure experience without the delays and costs of long development cycles.`,
        image: vodAppsReady,
        reverse: true,
        bg: true,
    },
    {
        header: "Custom Enterprise Applications",
        text: `Some clients require more than an off-the-shelf solution. For them, <span class="font-semibold">AION Media Group</span> 
               builds <strong>custom applications</strong> tailored to complex workflows, integrations, and user journeys.<br><br>
               These apps go beyond branding to become <strong>core tools</strong> in training, communication, or large-scale media services.<br><br>
               Every detail — from architecture to interface — is designed around the client’s strategy.`,
        image: vodAppsCustom,
        cta: "Talk to an Expert",
    },
];


export const features = [
    {
        header: "Cross-Platform Branded Apps",
        text:
            "Fully branded VOD applications for iOS, Android, Smart TVs, and browsers — providing audiences with a seamless, premium viewing experience across all devices.",
        icon: [
            "M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", // rect with rx=2
            "M8 20h8v-2H8z", // bottom bar
        ],
    },
    {
        header: "Offline-First Functionality",
        text:
            "Deliver uninterrupted entertainment and training content anywhere — from planes and ships to hospitals and classrooms — with built-in offline playback.",
        icon: [
            "M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z", // rect with rx=2
            "M3 6l9 6 9-6", // envelope style
        ],
    },
    {
        header: "Secure Hollywood-Approved Playback",
        text:
            "All applications come with studio-certified DRM and secure license handling, enabling seamless access to premium Hollywood films, TV shows, and training content.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z", // circle
            "M12 16v-4m0-4h.01", // info symbol
        ],
    },
    {
        header: "Monetization & Analytics Built-In",
        text:
            "Support SVOD, AVOD, TVOD, and hybrid monetization models. Gain actionable insights with analytics on usage, engagement, and performance.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z", // circle
            "M8 12h8M12 8v8", // plus sign inside
        ],
    },
    {
        header: "Custom Enterprise Solutions",
        text:
            "Tailored applications designed for complex workflows, integrations, and secure communications — purpose-built to match your organization's strategy.",
        icon: [
            "M3 3h18v18H3z", // square (approx rx=3)
            "M7 7h10v10H7z", // inner square
            "M10 10h4v4h-4z", // smaller square
        ],
    },
];



export const useCases = [
    {
        header: "Air Carriers",
        emoji: "✈",
        text:
            "Deliver inflight entertainment through branded apps that work offline, giving passengers seamless access to Hollywood films on their own devices.",
        link: "/industries/air-carriers",
    },
    {
        header: "Hospitals & Care Facilities",
        emoji: "🏥",
        text:
            "Provide patient entertainment libraries and staff training content through secure, compliant applications with built-in DRM protection.",
        link: "/industries/hospitals-care-facilities",
    },
    {
        header: "Defense & Government",
        emoji: "🛡",
        text:
            "Deploy training and communication apps that function securely on mobile devices, even within restricted or closed networks.",
        link: "/industries/defense-government",
    },
    {
        header: "Education Providers",
        emoji: "🎓",
        text:
            "Offer e-learning and video-based courses through custom apps that include analytics on student progress and engagement.",
        link: "/industries/education",
    },
    {
        header: "Maritime Operators",
        emoji: "🚢",
        text:
            "Enable crew and passengers to access media libraries offline during long voyages with branded apps designed for connectivity-limited environments.",
        link: "/industries/maritime",
    },
];



export const sections2 = [
    {
        header: "The Business Value",
        text: `By choosing <span class="font-semibold">AION VOD Applications</span>, organizations gain <strong>faster time-to-market</strong>, 
               reduced development costs, and fully branded apps that are <strong>secure and compliant</strong> from day one.<br><br>
               Ready-to-launch solutions allow for immediate deployment, while custom enterprise applications deliver long-term strategic value.<br><br>
               Focus on <strong>growing your audience and revenues</strong> — without maintaining complex technology stacks.`,
        image: businessValue,
    },
    {
        header: "Future-Proof by Design",
        text: `As devices, operating systems, and user expectations evolve, <span class="font-semibold">AION</span> ensures your VOD applications stay competitive.<br><br>
               We continuously maintain compatibility with new standards, expand monetization options, and improve analytics tools.<br><br>
               With AION as your technology partner, your applications remain <strong>relevant and powerful</strong> long after launch.`,
        image: futureProof,
        reverse: true,
    },
];


