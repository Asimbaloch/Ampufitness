export const words = [
    {
        text: "Fit",
    },
    {
        text: "yourself",
    },
    {
        text: "with",
    },
    {
        text: "Ampu Fitness.",
        className: "text-primary dark:text-primary",
    },
];

export const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];

export const disabilities = [
    {
        id: "lower-leg-disability",
        label: "Lower Leg Disability",
    },
    {
        id: "upper-leg-disability",
        label: "Upper Leg Disability",
    },
    {
        id: "toe-disability",
        label: "Toe Disability",
    },
    {
        id: "arm-disability",
        label: "Arm Disability",
    },
    {
        id: "finger-disability",
        label: "Finger Disability",
    },
    {
        id: "in-wheelchair",
        label: "In a Wheelchair",
    },
    {
        id: "on-crutches",
        label: "On Crutches",
    },
    {
        id: "spinal-rotation-disability",
        label: "Spinal Rotation Disability",
    },
    {
        id: "other",
        label: "Other",
    },
] as const;

export const limbs = [
    {
        id: "lower-leg",
        label: "Lower Leg",
    },
    {
        id: "upper-leg",
        label: "Upper Leg",
    },
    {
        id: "toes",
        label: "Toes",
    },
    {
        id: "upper-arm",
        label: "Upper Arm",
    },
    {
        id: "lower-arm",
        label: "Lower Arm",
    },
    {
        id: "fingers",
        label: "Fingers",
    },
    {
        id: "spine",
        label: "Spine",
    },
    {
        id: "neck",
        label: "Neck",
    },
] as const;

export const exercises = [
    {
        id: "lower-leg-exercise",
        label: "Lower Leg Exercise",
    },
    {
        id: "upper-leg-exercise",
        label: "Upper Leg Exercise",
    },
    {
        id: "arm-exercise",
        label: "Arm Exercise",
    },
    {
        id: "finger-wrist-exercise",
        label: "Finger/Wrist Exercise",
    },
    {
        id: "chest-exercise",
        label: "Chest Exercise",
    },
    {
        id: "neck-exercise",
        label: "Neck Exercise",
    },
    {
        id: "cardio",
        label: "Cardio",
    },
    {
        id: "weight-lifting",
        label: "Weight Lifting",
    },
    {
        id: "rubber-band-exercise",
        label: "Rubber Band Exercise",
    },
    {
        id: "competitive-sports",
        label: "Competitive Sports",
    },
    {
        id: "other",
        label: "Other",
    },
] as const;

export const eating_restriction = [
    "Vegetarian",
    "Omnivore",
    "Gluten Free",
    "Vegan",
    "Low FODMAP",
    "Ketogenic",
] as const;

export const general_answers: readonly [string, ...string[]] = ["yes", "no"];
