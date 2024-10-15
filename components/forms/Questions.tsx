"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { QuestionsSchema } from "@/lib/validations"




export default function Questions(){
    const form = useForm<z.infer<typeof QuestionsSchema>>({
        resolver: zodResolver(QuestionsSchema),
        defaultValues: {
          title: "",
          explaination:"",
          tags:[]
        },
      })
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof QuestionsSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="text-dark500_light700 text-base font-semibold">Question Title</FormLabel>
                <FormControl className="mt-2">
                  <Input 
                    className="no-focus paragraph-regular text-dark400_light800 background-light700_dark400 light-border-2 min-h-[50px] border"
                  {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2 text-light-400">
                  Focus on only one question, be specific and refrain yourself from spamming!
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="explaination"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="text-dark500_light700 text-base font-semibold">Describe your question in detail.</FormLabel>
                <FormControl className="mt-2">
                    {/* TODO: add an editor  */}
                </FormControl>
                <FormDescription className="body-regular mt-2 text-light-400">
                Introduce the question and elaborate what you put in title. Minimum 20 characters.
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="text-dark500_light700 text-base font-semibold">Tags</FormLabel>
                <FormControl className="mt-2">
                  <Input 
                    placeholder="Add tags"
                    className="no-focus paragraph-regular text-dark400_light800 background-light700_dark400 light-border-2 min-h-[50px] border"
                  {...field} />
                </FormControl>
                <FormDescription className="body-regular mt-2 text-light-400">
                    Please add tags to get better answers and good reach! Press Enter key to add a tag.
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
};