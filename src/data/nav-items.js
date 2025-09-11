export const navItems = [
    {
        label: "Solutions",
        href: "#", // Header itself is a link
        dropdown: [
            { label: "Titan Lighthouse", href: "/solutions/titan-lighthouse" },
            {
                label: "DRM & Content Protection",
                href: "/solutions/drm-content-protection",
            },
            { label: "Hardware Solutions", href: "/solutions/hardware-solutions" },
            { label: "VOD Applications", href: "/solutions/vod-applications" },
            { label: "Media Supply Chain", href: "/solutions/media-supply-chain" },
        ],
    },
    {
        label: "Industries",
        href: "#",
        dropdown: [
            { label: "Defense & Government", href: "#" },
            { label: "Hospitals & Care Facilities", href: "#" },
            { label: "Maritime", href: "#" },
            { label: "Air Carriers", href: "#" },
            { label: "Education", href: "#" },
            { label: "Public Transport", href: "#" },
        ],
    },
    { label: "About us", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Partnerships", href: "#" },
];

export const navButtons = [
    { label: "Partner login", href: "/partner-login", class: "btn-primary" },
    { label: "Contact", href: "/contact", class: "btn-secondary" },
];