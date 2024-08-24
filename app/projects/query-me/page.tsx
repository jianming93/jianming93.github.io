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


export default function QueryMePage() {
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
                        <BreadcrumbPage>Query Me</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <TypographyH1>
                Query Me
            </TypographyH1>
            <br />
            <a
                href="https://github.com/jianming93/query-me"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sm text-primary dark:text-primary/[60.3%]"
            >
                Click here to go to project page.
            </a>
            <br />
            <br />
            <TypographyH2>
                Overview
            </TypographyH2>
            <TypographyP>
                A simple app leveraging
                <TypographyInlineCode>GPT-3</TypographyInlineCode> to
                help non-technical users to query from CSV files with
                free text. This was inspired from a challenge faced by
                someone I know whom is a non-technical user that needed
                to perform certain data extraction from one or more possible
                CSV files but have no knowledge of Microsoft Excel/SQL.
            </TypographyP>
            <TypographyBlockquote>
                Note: To understand more about <TypographyInlineCode>GPT-3</TypographyInlineCode>,
                please read the
                <a
                    href="https://arxiv.org/abs/2005.14165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" paper "}
                </a>
                and also visit
                <a
                    href="https://arxiv.org/abs/2005.14165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" OpenAI "}
                </a>
                website to know more.
            </TypographyBlockquote>
            <TypographyP>
                The app was developed using Plotly&apos;s
                <a
                    href="https://dash.plotly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" Dash "}
                </a>
                and containerize via
                <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" Docker"}
                </a>
                .
            </TypographyP>
            <br />
            <TypographyH2>
                How It Works?
            </TypographyH2>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/query-me/query-me-homepage.png"
                    alt="query-me-homepage"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    The home page of the application.
                </TypographyMuted>
            </div>
            <TypographyP>
                Simply upload one or more CSV files by drag and dropping or clicking the upload area.
                All the uploaded CSVs will be displayed in the table if it is uploaded successfully.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/query-me/query-me-upload-files.png"
                    alt="query-me-input-query"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Uploading files to the app.
                </TypographyMuted>
            </div>
            <TypographyP>
                Navigate between the different CSVs in other tables
                by using the <TypographyInlineCode>Previous</TypographyInlineCode> and
                <TypographyInlineCode>Next</TypographyInlineCode> buttons.
                After which, input the query in the free text area below the table.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/query-me/query-me-input-query.png"
                    alt="query-me-input-query"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Input query in the free text area.
                </TypographyMuted>
            </div>
            <TypographyP>
                Once the query is input, click on
                the <TypographyInlineCode>Submit</TypographyInlineCode> button
                to submit the query along with the CSV files. After some time,
                the result of the query will be displayed in the table below
                the free text area.
            </TypographyP>
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/query-me/query-me-display-and-download-results.png"
                    alt="query-me-display-and-download-results"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Results generated from the query.
                </TypographyMuted>
            </div>
            <TypographyP>
            The output results can also be downloaded by simply clicking on
            the <TypographyInlineCode>Download</TypographyInlineCode> button below.

            </TypographyP>
            <TypographyBlockquote>
                Note: To get a desirable results, please try variations of the same query
                e.g. Who has the largest value, The name with the largest value, etc.
            </TypographyBlockquote>
        </div>
    );
}