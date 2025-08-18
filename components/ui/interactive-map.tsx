"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { AnimatedSection } from "./animated-wrapper";
import { LoadingSpinner } from "./loading-spinner";

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
        name: "Science Olympiads Center - Main Office",
        type: "science-center",
        coordinates: [41.2995, 69.2401], // Tashkent, Uzbekistan
        description: "Main headquarters for science olympiad programs and training facilities in Uzbekistan.",
        address: "123 Science Street, Tashkent, Uzbekistan",
        phone: "+998 71 123 4567",
        email: "info@scienceolympiad.uz",
        website: "https://scienceolympiad.uz",
        programs: ["IBO Training", "IMO Preparation", "Chemistry Labs", "Physics Workshops"]
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
                return scienceCenterIcon;
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                        <p className="text-muted-foreground mb-8">Loading interactive map...</p>
                        <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                            <LoadingSpinner size="lg" />
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
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                     <p className="text-muted-foreground max-w-2xl mx-auto">
                         Visit our main office in Tashkent, Uzbekistan. We're here to help you with all your science olympiad needs.
                     </p>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                     <div className="space-y-6">
                         <div>
                             <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                             <div className="space-y-4">
                                 <div className="flex items-start gap-3">
                                     <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                                     <div>
                                         <p className="font-medium">Address</p>
                                         <p className="text-muted-foreground">123 Science Street, Tashkent, Uzbekistan</p>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-3">
                                     <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                                     <div>
                                         <p className="font-medium">Phone</p>
                                         <p className="text-muted-foreground">+998 71 123 4567</p>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-3">
                                     <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1"></div>
                                     <div>
                                         <p className="font-medium">Email</p>
                                         <p className="text-muted-foreground">info@scienceolympiad.uz</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="space-y-6">
                         <div>
                             <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                             <div className="space-y-2 text-muted-foreground">
                                 <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                                 <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                                 <p><strong>Sunday:</strong> Closed</p>
                             </div>
                         </div>
                         <div>
                             <h3 className="text-xl font-semibold mb-4">Services</h3>
                             <ul className="space-y-2 text-muted-foreground">
                                 <li>• IBO Training Programs</li>
                                 <li>• IMO Preparation Courses</li>
                                 <li>• Chemistry Laboratory Sessions</li>
                                 <li>• Physics Workshops</li>
                                 <li>• Student Consultations</li>
                             </ul>
                         </div>
                     </div>
                 </div>

                <div className="relative">
                                         <MapContainer
                         center={[41.2995, 69.2401]}
                         zoom={13}
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
                         Click on the marker to see our office location and contact information.
                     </p>
                 </div>
            </div>
        </AnimatedSection>
    );
}
