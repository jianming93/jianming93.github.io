"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HoverEffect } from "@/components/ui/card-hover-effect";


const cards = [
    {
        title: "TritonFlow",
        description:
            "MLOps open-source platform with Triton Inference Server as a core.",
        link: "/projects/tritonflow",
    },
    {
        title: "Red Dragon AI In Production",
        description:
            "LLM project with Triton Inference Server + vLLM",
        link: "/projects/rdai-in-production",
    },
    {
        title: "Incremental Learner",
        description:
            "Capstone project with a combination of research + converting it to an actual application.",
        link: "/projects/incremental-learner",
    },
    {
        title: "Query Me",
        description:
            "A simple app leveraging GPT-3 to help non-technical users to query from CSV files with free text.",
        link: "/projects/query-me",
    },
]

export default function ProjectsPage() {
    return (
        <div className="container my-8">
            <Breadcrumb className="mb-8">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Projects</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Projects
            </h1>
            <HoverEffect items={cards}/>
        </div>
    );
}