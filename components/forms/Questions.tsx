"use client";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionsSchema } from "@/lib/validations";

export default function Questions() {
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="text-dark500_light700 text-base font-semibold">
                Question Title
              </FormLabel>
              <FormControl className="mt-2">
                <Input
                  className="no-focus paragraph-regular text-dark400_light800 background-light700_dark400 light-border-2 min-h-[50px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2 text-light-400">
                Focus on only one question, be specific and refrain yourself
                from spamming!
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
              <FormLabel className="text-dark500_light700 text-base font-semibold">
                Describe your question in detail.
              </FormLabel>
              <FormControl className="mt-2">
                <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                    init={{
                        plugins: [
                            "codesample",
                            "link",
                            "lists",
                            "image",
                            "media",
                            "table",
                            "wordcount",
                            "anchor",
                            "searchreplace",
                            "emoticons",
                            "autolink",
                            "advcode",
                            "visualblocks",
                            "tinycomments",
                            "mentions",
                            "footnotes",
                            "a11ychecker",
                            "autocorrect",
                            "formatpainter",
                            "preview",
                            "help",
                            "fullscreen",
                            "charmap",
                            "hr",
                            "toc",
                            "quickbars",
                            "casechange",
                            "powerpaste",
                            "linkchecker",
                            "pageembed",
                            "insertdatetime",
                            "spellchecker"
                        ] as any, 
                        toolbar: 
                            "undo redo | codesample blockquote | bold italic underline strikethrough | link image media | alignleft aligncenter alignright alignjustify | checklist numlist bullist outdent indent | addcomment showcomments | fontselect fontsizeselect formatselect | preview fullscreen help",
                        menubar: false,
                        branding: false,
                        height: 650,
                        codesample_languages: [
                            { text: 'HTML/XML', value: 'markup' },
                            { text: 'JavaScript', value: 'javascript' },
                            { text: 'CSS', value: 'css' },
                            { text: 'Python', value: 'python' },
                            { text: 'Java', value: 'java' },
                            { text: 'C++', value: 'cpp' },
                            { text: 'Ruby', value: 'ruby' },
                            { text: 'Go', value: 'go' },
                            { text: 'PHP', value: 'php' },
                            { text: 'TypeScript', value: 'typescript' },
                            { text: 'Kotlin', value: 'kotlin' },
                            { text: 'R', value: 'r' },
                        ],
                        content_style: `
                            .mce-content-body {
                                font-family: Arial, sans-serif;
                                font-size: 14px;
                                color: #333;
                                background-color: #f8f9fa;
                                padding: 15px;
                            }
                            .mce-content-body .codesample {
                                background-color: #1e1e1e;
                                color: #dcdcdc;
                                padding: 12px;
                                border-radius: 6px;
                                font-family: Consolas, monospace;
                                font-size: 13px;
                                overflow-x: auto;
                            }
                            .mce-content-body h1, .mce-content-body h2, .mce-content-body h3 {
                                color: #343a40;
                                font-family: 'Roboto', sans-serif;
                            }
                            .mce-content-body blockquote {
                                color: #6c757d;
                                border-left: 4px solid #343a40;
                                padding-left: 10px;
                            }
                        `,
                        mentions_selector: "span",
                        // @ts-ignore
                        mentions_fetch: (query, success) => {
                            const users = [
                                { id: "1", name: "Manoj Kumar", avatar: "https://link-to-avatar1.jpg" },
                                { id: "2", name: "Alice Johnson", avatar: "https://link-to-avatar2.jpg" },
                                { id: "3", name: "Bob Smith", avatar: "https://link-to-avatar3.jpg" },
                            ];
                            success(users.filter(user => user.name.toLowerCase().includes(query.term.toLowerCase())));
                        },
                        mentions_menu_hover: true,
                        // @ts-ignore
                        mentions_menu_item_renderer: (item) => {
                            return `<img src="${item.avatar}" width="20" height="20" style="border-radius: 50%; margin-right: 8px;" />${item.name}`;
                        },
                        tinycomments_mode: "embedded",
                        tinycomments_author: "NexLab User",
                        autocorrect_replacements: {
                            " teh ": " the ",
                            " idk ": " I don't know ",
                            " btw ": " by the way ",
                            " w/ ": " with ",
                            " bc ": " because ",
                        },
                        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote codesample',
                        quickbars_insert_toolbar: 'quickimage quicktable codesample',
                        powerpaste_allow_local_images: true,
                        linkchecker_contextmenu: true,
                        linkchecker_domain_list: [
                            "github.com",
                            "nexlab.com",
                            "example.com",
                            "stackoverflow.com",
                            "medium.com"
                        ],
                        mergetags_list: [
                            { value: "ProjectName", title: "Project Name" },
                            { value: "Username", title: "Username" },
                            { value: "CurrentDate", title: "Current Date" },
                        ],
                        file_picker_callback: (callback, value, meta) => {
                            if (meta.filetype === 'image') {
                                const input = document.createElement('input');
                                input.setAttribute('type', 'file');
                                input.setAttribute('accept', 'image/*');
                                input.onchange = function () {
                                  // @ts-ignore
                                    const file = this.files[0];
                                    const reader = new FileReader();
                                    reader.onload = function () {
                                        callback(reader.result as string, { 
                                            alt: file.name
                                        });
                                    };
                                    reader.readAsDataURL(file);
                                };
                                input.click();
                            }
                        },
                        setup: function (editor) {
                            editor.ui.registry.addButton('customInsertDate', {
                                text: 'Insert Date',
                                onAction: function () {
                                    const currentDate = new Date().toLocaleDateString();
                                    editor.insertContent(`&nbsp;<strong>${currentDate}</strong>&nbsp;`);
                                }
                            });
                            editor.on('init', function () {
                                editor.setContent('<p>Welcome to the enhanced NexLab editor!</p>');
                            });
                        },
                        a11y_advanced_options: true,
                        browser_spellcheck: true,
                        image_advtab: true
                    }}
                    initialValue=""
                />
              </FormControl>
              <FormDescription className="body-regular mt-2 text-light-400">
                Introduce the question and elaborate what you put in title.
                Minimum 20 characters.
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
              <FormLabel className="text-dark500_light700 text-base font-semibold">
                Tags
              </FormLabel>
              <FormControl className="mt-2">
                <Input
                  placeholder="Add tags"
                  className="no-focus paragraph-regular text-dark400_light800 background-light700_dark400 light-border-2 min-h-[50px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2 text-light-400">
                Please add tags to get better answers and good reach! Press
                Enter key to add a tag.
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
