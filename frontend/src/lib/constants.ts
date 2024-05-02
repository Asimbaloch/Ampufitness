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
        name: "Asim Khan",
        designation: "Team Leader and AI Engineer",
        image: "https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fimages%2Fusers%2Fundefined_picture_o177xh09vu.jpg&w=96&q=75",
    },
    {
        id: 2,
        name: "Ernest Choi",
        designation: "Product Manager",
        image: "https://media.licdn.com/dms/image/D5635AQEI7rHXO-ciVQ/profile-framedphoto-shrink_200_200/0/1694653432380?e=1715202000&v=beta&t=jfqIEL7gUn8boJSe2YouSu7fWKf9mJBNCUgSbzCum9w",
    },
    {
        id: 3,
        name: "Slavi Karaslavov",
        designation: "Software Developer",
        image: "https://avatars.githubusercontent.com/u/106228555?v=4",
    },
    {
        id: 4,
        name: "Roha Pathan",
        designation: "Software Developer",
        image: "https://media.licdn.com/dms/image/D4D03AQESWZuOVpp-bg/profile-displayphoto-shrink_200_200/0/1713866224017?e=1720051200&v=beta&t=xNn4vUG_IB_ak46kpD4MlYta438VBJSkRWXzgEd7Rsw",
    },
    {
        id: 5,
        name: "Kinh Quốc",
        designation: "Data Scientist",
        image: "https://media.licdn.com/dms/image/D5635AQED1RTDNOnI_Q/profile-framedphoto-shrink_200_200/0/1704037545340?e=1715198400&v=beta&t=8IrjSg9oWIxkZKr9yriHhyMbvd4YZTbOcQu6-297JQk",
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
