"use client";
import Image from 'next/image'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TypographyP } from "@/components/ui/typographyp";
import { TypographyH1 } from "@/components/ui/typographyh1";
import { TypographyH2 } from "@/components/ui/typographyh2";
import { TypographyMuted } from '@/components/ui/typographymuted';
import { TypographyBlockquote } from '@/components/ui/typographyblockquote';
import { TypographyInlineCode } from '@/components/ui/typographyinlinecode';
import { TypographyOrderedList } from "@/components/ui/typographyorderedlist";


export default function RDAIInProductionPage() {
    return (
        <div className="container my-8">
            <Breadcrumb className="mb-8">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Red Dragon AI In Production</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <TypographyH1>
                Red Dragon AI In Production
            </TypographyH1>
            <br />
            <a
                href="https://github.com/jianming93/rdai-ai-in-prod"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sm text-primary dark:text-primary/[60.3%]"
            >
                Click here to go to project page.
            </a>
            <TypographyBlockquote>
                Note: For technical details like configuration and running
                the application, refer to the link above for more information
                in the project page.
            </TypographyBlockquote>
            <br />
            <br />
            <TypographyH2>
                Overview
            </TypographyH2>
            <TypographyP>
                This project intends to demonstrate how to
                serve an LLM onto Nvidia's Triton Inference Server
                with 
                <a
                    href="https://docs.vllm.ai/en/latest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" vLLM "}
                </a>
                backend and interacting with a frontend created using
                <a
                    href="https://www.gradio.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" Gradio"}
                </a>
                .
            </TypographyP>
            <br />
            <TypographyH2>
                Features
            </TypographyH2>
            <TypographyP>
                There are 2 main features for this project which are:
            </TypographyP>
            <TypographyOrderedList name='features'>
                    {
                        [
                            'Chatbot',
                            'Prompt Creator'
                        ]
                    }
            </TypographyOrderedList>
            <TypographyH2>
                Chatbot
            </TypographyH2>
            <TypographyP>
                The landing page of the application will first
                show a very simple chat interface that is done using
                <a
                    href="https://www.gradio.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" Gradio"}
                </a> itself. An add-on to the chat interface was
                to allow prompt templates to be swapped easily
                when chatting with the LLM itself.

                This allows user to use different LLM as well as
                different configuration parameters. More information
                can be found in the later section about this.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/rdai-in-production/chatbot_chatbot.png"
                    alt="chatbot-landing-page"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    The landing page of the chatbot application itself.
                </TypographyMuted>
            </div>
            <TypographyP>
                There is also a prompt viewer to see how the prompt looks
                like as well as the other argument configuration that
                is being passed to the server itself.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/rdai-in-production/chatbot_prompt_viewer.png"
                    alt="chatbot-landing-page"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Prompt viewer tab contents.
                </TypographyMuted>
            </div>
            <TypographyBlockquote>
                Note: There is no chat history done for this project. This is something
                that can be done to improve the application.
            </TypographyBlockquote>
            <br />
            <TypographyH2>
                Prompt Creator
            </TypographyH2>
            <TypographyP>
                The <TypographyInlineCode>Prompt Creator</TypographyInlineCode> allows
                the user to do 2 things which are:
            </TypographyP>
            <TypographyOrderedList name="prompt-creator">
                {
                    [
                        "Create a new prompt template",
                        "Edit an existing prompt template"
                    ]
                }
            </TypographyOrderedList>
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/rdai-in-production/prompt_creator_create_new_prompt.png"
                    alt="chatbot-landing-page"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Create new prompt template tab contents.
                </TypographyMuted>
            </div>
            <TypographyP>
                A prompt template involves the the configuration that is sent
                to the model server as well as the actual template format to be
                used, which typically involves the <TypographyInlineCode>system</TypographyInlineCode> as
                well as the <TypographyInlineCode>user</TypographyInlineCode> prompt.
            </TypographyP>
            <TypographyP>
                After creating the prompt template, a useful feature is to also be able to edit
                the existing prompt templates to allow user to modify any configuration that
                they need.
            </TypographyP>
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/rdai-in-production/prompt_creator_edit_existing_prompt.png"
                    alt="chatbot-landing-page"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Edit existing prompt template tab contents.
                </TypographyMuted>
            </div>
            <TypographyH2>
                Improvements
            </TypographyH2>
            <TypographyOrderedList name="improvements">
                {
                    [
                        "There is no 'conversation flow' currently implemented. The LLM only receives the latest message without the history.",
                        "There is no validation for the template to ensure all keys specified exist in the template before forming the prompt string to send to the LLM.",
                        "Only `vllm` backend is allowed for this version. May be good to explore TensorRT-LLM in future.",
                        "Handling of creation and editing of prompts can be cleaner."
                    ]
                }
            </TypographyOrderedList>
        </div>
    );
}