// src/constants.ts

// Feminist School Definitions
export const feministDefinitions = {
    liberal: "Liberal feminism advocates for gender equality through political and legal reform.",
    marxist: "Marxist feminism focuses on the intersections of capitalism and patriarchy.",
    radical: "Radical feminism seeks to dismantle patriarchy as a system of power.",
    socialist: "Socialist feminism combines the legal and political activism of liberal feminism with a focus on class struggle.",
    intersectional: "Intersectional feminism emphasizes how various social identities interact and influence oppression.",
    eco: "Eco-feminism links the exploitation of women and nature and advocates for environmental justice."
};

// Questions with Scoring System
export const questions = [
    { question: "What is liberal feminism?", options: ["A", "B", "C"], answer: "A", points: 5 },
    { question: "Explain radical feminism.", options: ["A", "B", "C"], answer: "B", points: 5 },
    // ... (add 18 more questions)
];

// Scoring function
export const calculateScore = (responses: string[]) => {
    let score = 0;
    responses.forEach(response => {
        const question = questions.find(q => q.answer === response);
        if (question) {
            score += question.points;
        }
    });
    return score;
};
