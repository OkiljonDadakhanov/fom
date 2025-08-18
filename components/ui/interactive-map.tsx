"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { AnimatedSection } from "./animated-wrapper";

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom icon for science centers
const scienceCenterIcon = L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: #3b82f6; width: 30px; height: 30px; display: block; border: 2px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

// Custom icon for universities
const universityIcon = L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: #10b981; width: 30px; height: 30px; display: block; border: 2px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

// Custom icon for competition venues
const competitionIcon = L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: #f59e0b; width: 30px; height: 30px; display: block; border: 2px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

interface Location {
    id: number;
    name: string;
    type: "science-center" | "university" | "competition";
    coordinates: [number, number];
    description: string;
    address: string;
    phone?: string;
    email?: string;
    website?: string;
    programs?: string[];
}

const locations: Location[] = [
    {
        id: 1,
        name: "National Science Olympiad Center",
        type: "science-center",
        coordinates: [51.5074, -0.1278], // London
        description: "Main headquarters for national science olympiad programs and training facilities.",
        address: "123 Science Street, London, UK",
        phone: "+44 20 7123 4567",
        email: "info@scienceolympiad.uk",
        website: "https://scienceolympiad.uk",
        programs: ["IBO Training", "IMO Preparation", "Chemistry Labs", "Physics Workshops"]
    },
    {
        id: 2,
        name: "Cambridge University Science Department",
        type: "university",
        coordinates: [52.2053, 0.1218], // Cambridge
        description: "Prestigious university offering advanced science programs and olympiad preparation courses.",
        address: "University of Cambridge, Cambridge, UK",
        phone: "+44 1223 337733",
        email: "science@cam.ac.uk",
        website: "https://www.cam.ac.uk",
        programs: ["Advanced Mathematics", "Physics Research", "Chemistry Studies", "Biology Labs"]
    },
    {
        id: 3,
        name: "Oxford Science Competition Center",
        type: "competition",
        coordinates: [51.7520, -1.2577], // Oxford
        description: "Annual venue for international science competitions and student exhibitions.",
        address: "Oxford Science Park, Oxford, UK",
        phone: "+44 1865 270000",
        email: "competitions@oxfordscience.org",
        website: "https://oxfordscience.org",
        programs: ["International Competitions", "Student Exhibitions", "Science Fairs", "Award Ceremonies"]
    },
    {
        id: 4,
        name: "Manchester Science Academy",
        type: "science-center",
        coordinates: [53.4808, -2.2426], // Manchester
        description: "Specialized academy for young scientists with state-of-the-art laboratories.",
        address: "45 Innovation Drive, Manchester, UK",
        phone: "+44 161 234 5678",
        email: "academy@manchesterscience.org",
        website: "https://manchesterscience.org",
        programs: ["Young Scientists Program", "Laboratory Training", "Research Projects", "Mentorship"]
    },
    {
        id: 5,
        name: "Edinburgh University Science Hub",
        type: "university",
        coordinates: [55.9533, -3.1883], // Edinburgh
        description: "Research hub focusing on cutting-edge scientific discoveries and student development.",
        address: "University of Edinburgh, Edinburgh, UK",
        phone: "+44 131 650 1000",
        email: "sciencehub@ed.ac.uk",
        website: "https://www.ed.ac.uk",
        programs: ["Research Programs", "Student Development", "International Collaboration", "Innovation Labs"]
    },
    {
        id: 6,
        name: "Birmingham Science Festival",
        type: "competition",
        coordinates: [52.4862, -1.8904], // Birmingham
        description: "Annual science festival showcasing student projects and scientific innovations.",
        address: "Birmingham Science Quarter, Birmingham, UK",
        phone: "+44 121 234 5678",
        email: "festival@birminghamscience.org",
        website: "https://birminghamscience.org",
        programs: ["Science Festival", "Student Projects", "Innovation Showcase", "Networking Events"]
    }
];

function MapController() {
    const map = useMap();

    useEffect(() => {
        // Fit bounds to show all markers
        const bounds = L.latLngBounds(locations.map(loc => loc.coordinates));
        map.fitBounds(bounds, { padding: [20, 20] });
    }, [map]);

    return null;
}

export function InteractiveMap() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const getIcon = (type: Location["type"]) => {
        switch (type) {
            case "science-center":
                return scienceCenterIcon;
            case "university":
                return universityIcon;
            case "competition":
                return competitionIcon;
            default:
                return L.Icon.Default;
        }
    };

    const getTypeColor = (type: Location["type"]) => {
        switch (type) {
            case "science-center":
                return "text-blue-600";
            case "university":
                return "text-green-600";
            case "competition":
                return "text-amber-600";
            default:
                return "text-gray-600";
        }
    };

    if (!isClient) {
        return (
            <AnimatedSection className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network</h2>
                        <p className="text-muted-foreground mb-8">Loading interactive map...</p>
                        <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        );
    }

    return (
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover our network of science centers, universities, and competition venues across the country.
                        Each location offers unique programs and opportunities for young scientists.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                        <span className="text-sm font-medium">Science Centers</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                        <span className="text-sm font-medium">Universities</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                        <span className="text-sm font-medium">Competition Venues</span>
                    </div>
                </div>

                <div className="relative">
                    <MapContainer
                        center={[52.3555, -1.1743]}
                        zoom={6}
                        className="h-96 md:h-[500px] w-full rounded-lg shadow-lg"
                        style={{ zIndex: 1 }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {locations.map((location) => (
                            <Marker
                                key={location.id}
                                position={location.coordinates}
                                icon={getIcon(location.type)}
                            >
                                <Popup className="custom-popup">
                                    <div className="p-2">
                                        <h3 className={`font-bold text-lg mb-2 ${getTypeColor(location.type)}`}>
                                            {location.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">{location.description}</p>
                                        <div className="space-y-2 text-sm">
                                            <p><strong>Address:</strong> {location.address}</p>
                                            {location.phone && <p><strong>Phone:</strong> {location.phone}</p>}
                                            {location.email && <p><strong>Email:</strong> {location.email}</p>}
                                            {location.website && (
                                                <p>
                                                    <strong>Website:</strong>{" "}
                                                    <a
                                                        href={location.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        Visit Website
                                                    </a>
                                                </p>
                                            )}
                                        </div>
                                        {location.programs && (
                                            <div className="mt-3">
                                                <p className="font-semibold text-sm mb-1">Programs:</p>
                                                <ul className="text-xs space-y-1">
                                                    {location.programs.map((program, index) => (
                                                        <li key={index} className="text-gray-600">• {program}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        <MapController />
                    </MapContainer>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Click on any marker to learn more about our locations and programs.
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}
