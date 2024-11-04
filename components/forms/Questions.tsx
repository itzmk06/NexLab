"use client";
import React, { useRef, useState } from "react";
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
import { Badge } from "../ui/badge";
import Image from "next/image";
import { TagFilters } from "@/constants/filters";
import { createQuestion } from "@/lib/actions/question.action";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  mongoUserId: string;
}

export default function Questions({ mongoUserId }: Props) {
  const editorRef = useRef(null);
  const [isSubmitting, setisSubmitting] = useState(false);
  const type: any = "create";
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    setisSubmitting(true);
    try {
      await createQuestion({
        title: values.title,
        content: values.explaination,
        tags: values.tags,
        author: JSON.parse(mongoUserId),
      });
      router.push("/");
    } catch (error) {
      console.log("not submitting!");
    } finally {
      setisSubmitting(false);
    }
    console.log(values);
  }

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters.",
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: any, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("tags", newTags);
  };

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
                  onInit={(evt, editor) => {
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  init={{
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "codesample",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                    ] as any,
                    toolbar:
                      "undo redo | codesample blockquote | bold italic underline strikethrough | link image media | alignleft aligncenter alignright alignjustify | checklist numlist bullist outdent indent | addcomment showcomments | fontselect fontsizeselect formatselect | preview fullscreen help",
                    menubar: false,
                    branding: false,
                    height: 650,
                    codesample_languages: [
                      { text: "HTML/XML", value: "markup" },
                      { text: "JavaScript", value: "javascript" },
                      { text: "CSS", value: "css" },
                      { text: "Python", value: "python" },
                      { text: "Java", value: "java" },
                      { text: "C++", value: "cpp" },
                      { text: "Ruby", value: "ruby" },
                      { text: "Go", value: "go" },
                      { text: "PHP", value: "php" },
                      { text: "TypeScript", value: "typescript" },
                      { text: "Kotlin", value: "kotlin" },
                      { text: "R", value: "r" },
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
                        {
                          id: "1",
                          name: "Manoj Kumar",
                          avatar: "https://link-to-avatar1.jpg",
                        },
                        {
                          id: "2",
                          name: "Alice Johnson",
                          avatar: "https://link-to-avatar2.jpg",
                        },
                        {
                          id: "3",
                          name: "Bob Smith",
                          avatar: "https://link-to-avatar3.jpg",
                        },
                      ];
                      success(
                        users.filter((user) =>
                          user.name
                            .toLowerCase()
                            .includes(query.term.toLowerCase())
                        )
                      );
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
                    quickbars_selection_toolbar:
                      "bold italic | quicklink h2 h3 blockquote codesample",
                    quickbars_insert_toolbar:
                      "quickimage quicktable codesample",
                    powerpaste_allow_local_images: true,
                    linkchecker_contextmenu: true,
                    linkchecker_domain_list: [
                      "github.com",
                      "nexlab.com",
                      "example.com",
                      "stackoverflow.com",
                      "medium.com",
                    ],
                    mergetags_list: [
                      { value: "ProjectName", title: "Project Name" },
                      { value: "Username", title: "Username" },
                      { value: "CurrentDate", title: "Current Date" },
                    ],
                    file_picker_callback: (callback, value, meta) => {
                      if (meta.filetype === "image") {
                        const input = document.createElement("input");
                        input.setAttribute("type", "file");
                        input.setAttribute("accept", "image/*");
                        input.onchange = function () {
                          // @ts-ignore
                          const file = this.files[0];
                          const reader = new FileReader();
                          reader.onload = function () {
                            callback(reader.result as string, {
                              alt: file.name,
                            });
                          };
                          reader.readAsDataURL(file);
                        };
                        input.click();
                      }
                    },
                    setup: function (editor) {
                      editor.ui.registry.addButton("customInsertDate", {
                        text: "Insert Date",
                        onAction: function () {
                          const currentDate = new Date().toLocaleDateString();
                          editor.insertContent(
                            `&nbsp;<strong>${currentDate}</strong>&nbsp;`
                          );
                        },
                      });
                      editor.on("init", function () {
                        editor.setContent(
                          "<p>Welcome to the enhanced NexLab editor!</p>"
                        );
                      });
                    },
                    a11y_advanced_options: true,
                    browser_spellcheck: true,
                    image_advtab: true,
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
                <>
                  <Input
                    placeholder="Add tags"
                    className="no-focus paragraph-regular text-dark400_light800 background-light700_dark400 light-border-2 min-h-[50px] border"
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag: any) => (
                        <Badge
                          key={tag}
                          className="background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 font-medium capitalize"
                          onClick={() => handleTagRemove(tag, field)}
                        >
                          {tag}
                          <Image
                            src="/assets/icons/close.svg"
                            alt="close icon"
                            width={12}
                            height={12}
                            className="cursor-pointer object-contain invert-0 dark:invert"
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2 text-light-400">
                Please add tags to get better answers and good reach! Press
                Enter key to add a tag.
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-fit bg-blue-500 !text-light-900"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>{type === "edit" ? "Editing..." : "Posting..."}</>
          ) : (
            <>{type === "edit" ? "Edit question" : "Ask a question"}</>
          )}
        </Button>
      </form>
    </Form>
  );
}
