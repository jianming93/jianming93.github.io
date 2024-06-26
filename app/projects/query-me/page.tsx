import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


export default function IncrementalLearnerPage() {
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
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                Query Me
            </h1>
            <a
                href="https://github.com/jianming93/query-me"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sm text-primary dark:text-primary/[60.3%]"
            >
                Click here to go to project page.
            </a>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-4">
                Overview
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">

            </p>
        </div>
    );
}