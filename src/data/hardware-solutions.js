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
        header: "Reliable Media Delivery in Every Environment",
        text: `Content doesn’t stop where connectivity does. From airplanes in the sky to ships at sea, from hospitals to defense bases, 
               audiences expect uninterrupted access to video.<br><br>
               <span class="font-semibold">AION Hardware</span> provides the backbone for secure, reliable playback and provisioning 
               in the most demanding conditions. Our portfolio covers portable servers, gateways, set-top boxes, and ruggedized systems — 
               all designed to make content available <strong>anywhere</strong>.`,
        image: hardwareReliable,
    },
    {
        header: "The Challenge: Media Under Tough Conditions",
        text: `Delivering video outside of high-speed networks introduces unique challenges. Aircraft and vessels operate for long 
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
        bg: true,
    },
    {
        header: "Purpose-Built Hardware for Secure Media",
        text: `<span class="font-semibold">AION</span> develops and delivers hardware designed for 
               <strong>zero-connectivity</strong> and <strong>hybrid environments</strong>. 
               From portable media servers to enterprise gateways, our devices guarantee smooth playback, optimized storage, 
               and airtight content security.<br><br>
               Every system integrates seamlessly with the <span class="font-semibold">AION software stack</span>, 
               ensuring compliance with Hollywood-grade DRM and efficient workflows from ingest to playback.`,
        image: hardwareSolution,
    },
];


export const features = [
    {
        header: "Portable Media Servers",
        text:
            "Compact, high-performance units capable of storing large content libraries and delivering playback to hundreds of passenger devices simultaneously.",
        icon: [
            "M3 7h18v10H3z", // rectangle (approx rx=2 not shown)
            "M3 7l9 5 9-5",
            "M7 15h10",
        ],
    },
    {
        header: "Set-Top Boxes & Gateways",
        text:
            "Bring secure VOD, live channels, and offline libraries to any screen. Optimized for aviation, maritime, and hospitality deployments.",
        icon: [
            "M2 7h20v10H2z", // rectangle
            "M12 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3z", // circle r=1.5
            "M16 16h2M6 16h2",
        ],
    },
    {
        header: "Ruggedized & Industrial-Grade Systems",
        text:
            "Engineered to withstand extreme environments. Proven reliability in defense, maritime, and other demanding deployments.",
        icon: [
            "M3 3h18v18H3z", // rectangle
            "M7 7h10v10H7z", // inner square
            "M10 10h4v4h-4z", // smaller square
        ],
    },
    {
        header: "Edge Processing & AI-Ready Devices",
        text:
            "Perform on-site encoding, caching, and analytics to reduce latency, optimize performance, and minimize reliance on central infrastructure.",
        icon: [
            "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z", // circle r=10
            "M12 6v6l4 2",
        ],
    },
    {
        header: "Custom Hardware Design",
        text:
            "Tailor-made solutions for integrators and resellers, with specifications, form factors, and storage optimized for unique operational needs.",
        icon: [
            "M3 3h18v18H3z", // rectangle
            "M7 7h10v10H7z", // inner square
            "M10 10h4v4h-4z", // smaller square
        ],
    },
];



export const useCases = [
    {
        header: "Defense & Government",
        emoji: "🛡",
        text:
            "Ruggedized servers deliver secure training and communication media in remote or hostile environments.",
        link: "/industries/defense-government"
    },
    {
        header: "Air Carriers",
        emoji: "✈",
        text:
            "Deploy portable onboard servers to deliver Hollywood films and TV shows without relying on inflight connectivity.",
        link: "/industries/air-carriers"
    },
    {
        header: "Hospitals & Care Facilities",
        emoji: "🏥",
        text:
            "Use set-top boxes and gateways to provide secure entertainment and training libraries for patients and staff.",
        link: "/industries/hospitals-care-facilities"
    },
    {
        header: "Maritime Operators",
        emoji: "🚢",
        text:
            "Equip ships with media servers that synchronize content in port and deliver seamless playback at sea.",
        link: "/industries/maritime"
    },
    {
        header: "Public Transport",
        emoji: "🚌",
        text:
            "Deploy lightweight, low-maintenance solutions to offer secure onboard entertainment across buses and trains.",
        link: "/industries/public-transport"
    },
];

export const sections2 = [
    {
        header: "The Business Value",
        text: `By choosing <span class="font-semibold">AION Hardware</span>, organizations remove the guesswork from media delivery.<br><br>
               Instead of relying on repurposed consumer devices, you gain access to <strong>professional-grade systems</strong> built for scale, reliability, and compliance.<br><br>
               The result: <strong>lower total cost of ownership</strong>, improved user satisfaction, and the ability to expand services without re-engineering infrastructure.`,
        image: businessValue,
    },
    {
        header: "Future-Proof by Design",
        text: `<span class="font-semibold">AION</span> evolves with your needs.<br><br>
               From upgrading storage and performance to integrating new codecs and security standards, our systems are <strong>built to scale over time</strong>.<br><br>
               With our combined expertise in both hardware and software, we ensure your <strong>investment delivers long-term value</strong>.`,
        image: futureProof,
        reverse: true,
    },
];

