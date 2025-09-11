import hardwareReliable from "../assets/hardware-reliable-bg.jpg";
import hardwareChallenge from "../assets/hardware-challenge-bg.jpg";
import hardwareSolution from "../assets/hardware-solution-bg.jpg";
import businessValue from "../assets/business-value-bg.jpg";
import futureProof from "../assets/future-proof-bg.jpg";

export const heroData = {
    header: "Hardware Solutions",
    subHeader: "Reliable Media Delivery Anywhere",
    subText: `From airplanes in the sky to ships at sea, from hospitals to defense bases — 
              <span class="font-semibold">AION Hardware</span> provides secure, seamless 
              playback and provisioning in even the most demanding conditions.`,
};



export const sections1 = [
    {
        title: "Reliable Media Delivery in Every Environment",
        body: `Content doesn’t stop where connectivity does. From airplanes in the sky to ships at sea, from hospitals to defense bases, 
               audiences expect uninterrupted access to video.<br><br>
               <span class="font-semibold">AION Hardware</span> provides the backbone for secure, reliable playback and provisioning 
               in the most demanding conditions. Our portfolio covers portable servers, gateways, set-top boxes, and ruggedized systems — 
               all designed to make content available <strong>anywhere</strong>.`,
        image: hardwareReliable,
    },
    {
        title: "The Challenge: Media Under Tough Conditions",
        body: `Delivering video outside of high-speed networks introduces unique challenges. Aircraft and vessels operate for long 
               periods without connectivity. Hospitals and government facilities often run on restricted or closed networks. 
               Public transport systems require lightweight, scalable devices that can handle fluctuating demand.<br><br>
               Conventional consumer hardware cannot cope with these requirements, resulting in:<br>
               <ul class="list-disc pl-5 space-y-1">
                 <li>Poor performance and unstable playback</li>
                 <li>Limited storage and scalability</li>
                 <li>High failure rates under demanding conditions</li>
               </ul>`,
        image: hardwareChallenge,
        reverse: true,
    },
    {
        title: "Purpose-Built Hardware for Secure Media",
        body: `<span class="font-semibold">AION</span> develops and delivers hardware designed for 
               <strong>zero-connectivity</strong> and <strong>hybrid environments</strong>. 
               From portable media servers to enterprise gateways, our devices guarantee smooth playback, optimized storage, 
               and airtight content security.<br><br>
               Every system integrates seamlessly with the <span class="font-semibold">AION software stack</span>, 
               ensuring compliance with Hollywood-grade DRM and efficient workflows from ingest to playback.`,
        image: hardwareSolution,
        cta: "Talk to an Expert",
    },
];


export const features = [
    {
        title: "Portable Media Servers",
        description:
            "Compact, high-performance units capable of storing large content libraries and delivering playback to hundreds of passenger devices simultaneously.",
        icon: `
        <rect x="3" y="7" width="18" height="10" rx="2" ry="2" />
        <path d="M3 7l9 5 9-5" />
        <path d="M7 15h10" />
        `,
    },
    {
        title: "Set-Top Boxes & Gateways",
        description:
            "Bring secure VOD, live channels, and offline libraries to any screen. Optimized for aviation, maritime, and hospitality deployments.",
        icon: `
        <rect x="2" y="7" width="20" height="10" rx="2" ry="2" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="M16 16h2M6 16h2" />
        `,
    },
    {
        title: "Ruggedized & Industrial-Grade Systems",
        description:
            "Engineered to withstand extreme environments. Proven reliability in defense, maritime, and other demanding deployments.",
        icon: `
        <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
        <path d="M7 7h10v10H7V7z" />
        <path d="M10 10h4v4h-4v-4z" />
        `,
    },
    {
        title: "Edge Processing & AI-Ready Devices",
        description:
            "Perform on-site encoding, caching, and analytics to reduce latency, optimize performance, and minimize reliance on central infrastructure.",
        icon: `
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        `,
    },
    {
        title: "Custom Hardware Design",
        description:
            "Tailor-made solutions for integrators and resellers, with specifications, form factors, and storage optimized for unique operational needs.",
        icon: `
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M7 7h10v10H7V7z" />
        <path d="M10 10h4v4h-4v-4z" />
        `,
    },
];


export const useCases = [
    {
        title: "Defense & Government",
        icon: "🛡",
        description:
            "Ruggedized servers deliver secure training and communication media in remote or hostile environments.",
    },
    {
        title: "Air Carriers",
        icon: "✈",
        description:
            "Deploy portable onboard servers to deliver Hollywood films and TV shows without relying on inflight connectivity.",
    },
    {
        title: "Hospitals & Care Facilities",
        icon: "🏥",
        description:
            "Use set-top boxes and gateways to provide secure entertainment and training libraries for patients and staff.",
    },
    {
        title: "Maritime Operators",
        icon: "🚢",
        description:
            "Equip ships with media servers that synchronize content in port and deliver seamless playback at sea.",
    },
    {
        title: "Public Transport",
        icon: "🚌",
        description:
            "Deploy lightweight, low-maintenance solutions to offer secure onboard entertainment across buses and trains.",
    },
];

export const sections2 = [
    {
        title: "The Business Value",
        body: `By choosing <span class="font-semibold">AION Hardware</span>, organizations remove the guesswork from media delivery.<br><br>
               Instead of relying on repurposed consumer devices, you gain access to <strong>professional-grade systems</strong> built for scale, reliability, and compliance.<br><br>
               The result: <strong>lower total cost of ownership</strong>, improved user satisfaction, and the ability to expand services without re-engineering infrastructure.`,
        image: businessValue,
    },
    {
        title: "Future-Proof by Design",
        body: `<span class="font-semibold">AION</span> evolves with your needs.<br><br>
               From upgrading storage and performance to integrating new codecs and security standards, our systems are <strong>built to scale over time</strong>.<br><br>
               With our combined expertise in both hardware and software, we ensure your <strong>investment delivers long-term value</strong>.`,
        image: futureProof,
        reverse: true,
    },
];

