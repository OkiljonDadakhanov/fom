"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Variants } from "framer-motion";

interface AnimatedWrapperProps {
    children: React.ReactNode;
    variants?: Variants;
    className?: string;
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    as?: keyof JSX.IntrinsicElements;
}

export function AnimatedWrapper({
    children,
    variants,
    className = "",
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    once = true,
    as = "div",
}: AnimatedWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        threshold,
        once,
    });

    const defaultVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };

    const MotionComponent = motion[as as keyof typeof motion] as any;

    return (
        <MotionComponent
            ref={ref}
            variants={variants || defaultVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </MotionComponent>
    );
}

// Specialized animated components
export function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <AnimatedWrapper
            variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        delay,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
            threshold={0.1}
        >
            {children}
        </AnimatedWrapper>
    );
}

export function AnimatedCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <AnimatedWrapper
            variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
            threshold={0.2}
        >
            {children}
        </AnimatedWrapper>
    );
}

export function AnimatedText({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <AnimatedWrapper
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
            threshold={0.3}
        >
            {children}
        </AnimatedWrapper>
    );
}

export function AnimatedButton({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <AnimatedWrapper
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 0.5,
                        delay,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
            threshold={0.5}
        >
            {children}
        </AnimatedWrapper>
    );
}
