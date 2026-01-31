export interface Exercise {
    name: string;
    reps_sets?: string;
    duration?: string;
    technical_guide?: string;
}

export interface WorkoutDay {
    day_name: string;
    focus: string;
    activity_type: string;
    duration: string;
    exercises?: Exercise[];
}

export interface MealOption {
    dish_name: string;
    portion: string;
    protein_content: string;
    kcal: number;
}

export interface Meal {
    meal_kcal: number;
    options: MealOption[];
}

export interface PlanData {
    user_analysis?: {
        bmi?: number;
        tdee?: number;
        daily_calorie_target?: number;
        macros?: {
            p: number;
            c: number;
            f: number;
        };
    };
    nutrition_plan?: {
        meal_schedule?: Record<string, Meal>;
    };
    workout_plan?: WorkoutDay[];
    lifestyle_recommendations?: string[];
    error?: string;
}
