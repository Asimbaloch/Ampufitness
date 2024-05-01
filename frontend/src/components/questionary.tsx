"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

import { disabilities, eating_restriction, exercises, general_answers, limbs } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const formSchema = z.object({
    disabilities: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one disability.",
    }),
    long_term: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    pain_cause: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    move_limbs: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one limb.",
    }),
    exercise: z.enum(general_answers, {
        required_error: "You need to specify if you exercise",
    }),
    exercises: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one exercise",
    }),
    like_team_sports: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    want_exercise_lose_fat: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    want_get_healthy: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    over_weight: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    want_lose_weight: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    over_eating: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    has_diet: z.enum(general_answers, {
        required_error: "You need to select an answer.",
    }),
    eating_restriction: z.enum(eating_restriction, {
        required_error: "You need to select a restriction",
    }),
})

const Questionary = ({ setData }: { setData: Function }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            disabilities: [],
            long_term: undefined,
            pain_cause: undefined,
            move_limbs: [],
            exercise: undefined,
            exercises: [],
            like_team_sports: undefined,
            want_exercise_lose_fat: undefined,
            want_get_healthy: undefined,
            over_weight: undefined,
            want_lose_weight: undefined,
            over_eating: undefined,
            has_diet: undefined,
            eating_restriction: undefined
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setData(values);
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="px-8 pb-10 space-y-12">
                <FormField
                    control={form.control}
                    name="disabilities"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-2xl">Disabilities</FormLabel>
                                <FormDescription className="text-lg">
                                    What type of physical disability do you have? <br /> Check everything you have from the list below.
                                </FormDescription>
                            </div>
                            {disabilities.map((item: any) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="disabilities"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={item.id}
                                                className="flex flex-col space-y-2 text-left"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item.id)}
                                                            onCheckedChange={(checked: boolean) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item.id
                                                                        )
                                                                    )
                                                            }}
                                                            className="w-5 h-5"
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-base font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage className="pt-1" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="long_term"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Is your disability long term?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="pain_cause"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Does your disability cause pain with motion of other limbs?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="move_limbs"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-2xl">Limbs</FormLabel>
                                <FormDescription className="text-base">
                                    Which limbs are you able to move with minimal / no pain ?
                                </FormDescription>
                            </div>
                            {limbs.map((item: any) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="move_limbs"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={item.id}
                                                className="flex flex-row items-center space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(item.id)}
                                                        onCheckedChange={(checked: boolean) => {
                                                            return checked
                                                                ? field.onChange([...field.value, item.id])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value) => value !== item.id
                                                                    )
                                                                )
                                                        }}
                                                        className="w-5 h-5"
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-base font-normal">
                                                    {item.label}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage className="pt-1" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="exercise"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Do you exercise?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="exercises"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-xl">Exercises</FormLabel>
                                <FormDescription className="text-base">
                                    What type of exercise do you currently do? [Stretches count!]
                                </FormDescription>
                            </div>
                            {exercises.map((item: any) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="exercises"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={item.id}
                                                className="flex flex-row items-center space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(item.id)}
                                                        onCheckedChange={(checked: boolean) => {
                                                            return checked
                                                                ? field.onChange([...field.value, item.id])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value) => value !== item.id
                                                                    )
                                                                )
                                                        }}
                                                        className="w-5 h-5"
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-base font-normal">
                                                    {item.label}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage className="pt-1" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="like_team_sports"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Do you like team sports?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="want_exercise_lose_fat"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Do you want to exercise to lose fat?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="want_get_healthy"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Do you want to exercise to get/stay healthy?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="over_weight"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-2xl">Are you overweight?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="want_lose_weight"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Do you want to lose weight?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="over_eating"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Would you say you are over eating?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="has_diet"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-2xl">Are you on a strict/medically prescribed diet?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" className="w-5 h-5" />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="eating_restriction"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="text-xl text-foreground/75">Eating restrictions?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    {eating_restriction.map((item: string, index: number) => (
                                        <FormItem key={index} className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value={item} className="w-5 h-5" />
                                            </FormControl>
                                            <FormLabel className="text-base font-normal">
                                                {item}
                                            </FormLabel>
                                        </FormItem>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Continue</Button>
            </form>
        </Form>
    )
}

export default Questionary;