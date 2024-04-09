"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const technicalSkills = [
    {
        title: "Programming",
        skills: [
            "Python",
            "JavaScript",
            "TypeScript",
            "jQuery",
            "React",
            "SQL",
            "HTML/CSS",
            "PHP",
            "R",
            "MATLAB"
        ]
    },
    {
        title: "Technologies",
        skills: [
            "TensorFlow",
            "PyTorch",
            "ONNX",
            "Scikit-Learn",
            "Pandas",
            "NumPy",
            "OpenCV",
            "NLTK",
            "FastAPI",
            "Flask",
            "TensorFlow Serving",
            "BentoML",
            "Triton Inference Server",
            "vLLM",
            "Docker",
            "Kubernetes",
            "Open Shift",
            "Prometheus",
            "Grafana",
            "Dash",
            "Streamlit",
            "Gradio",
            "RShiny",
            "ClearML",
            "MLFlow"
        ]
    }
]


interface TechnicalSkillsProps {
    title: string;
    skills: string[];
}

interface TechnicalSkillsArrayProps {
    technicalSkillsArray: TechnicalSkillsProps[]
}

const TechnicalSkillsSection = ({ technicalSkillsArray }: TechnicalSkillsArrayProps) => {
    return (
        <>
            {
                technicalSkillsArray.map((technicalSkills, index) => (
                    <>
                        <div className="text-lg font-bold">
                            {technicalSkills.title}
                        </div>
                        <div>
                            {technicalSkills.skills.map((skill) => (
                                <Badge
                                    key={`${technicalSkills.title}-${skill}`}
                                    className="m-2 rounded text-black bg-primary dark:bg-primary/[30.6%] dark:text-white hover:cursor-default"
                                >
                                    {skill}
                                </Badge>
                                ))
                            }
                        </div>
                        {index !== technicalSkillsArray.length - 1 ? <br/> : null}
                    </>
                ))
            }
        </>
    )
}


export default function ResumePage() {
    return (
        <div className="container mt-16 py-8">
            <Breadcrumb className="mb-8">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Resume</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Resume
            </h1>
            {/* Experience */}
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-8 first:mt-0">
                Experience
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Defence Science and Technology Agency (DSTA) - Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Jun 2023 - Present
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                AI Engineer (Jun 2023 - Present)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Reduced runtime costs through streamlining compute resource allocation and abstracting infrastructure
                    complexities from developers.
                </li>
                <li>
                    Improved company&apos;s product development velocity by developing a ML inference platform on OpenShift
                    with Python, Arrow, Redis as the backend and React with Typescript as the frontend.
                </li>
                <li>
                    Fostered collaboration and innovation efforts within the company by advancing LLM initiatives through
                    deployment of multiple model servers with Triton Inference Server&apos;s TensorRT-LLM and vLLM.
                </li>
                <li>
                    Unlocked potential to tackle low latency business use cases via optimizing deep learning model inference
                    speed by at least 1.5x optimizations in Triton Inference Server.
                </li>
                <li>
                    Led the successful migration of the team&apos;s CI pipelines from GitHub to GitLab, ensuring adherence to the
                    company&apos;s rigorous testing procedures and enhancing overall development efficiency and code quality.
                </li>
            </ul>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    EM2AI (Q&M Dental Group) - Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Jun 2020 - Jan 2023
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                AI Engineer (Jun 2020 - Jan 2023)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Boosted dental clinic profits by enabling dentists to treat more patients by reducing time taken by over 90%
                    to analyze patient&apos;s dental health using TensorFlow and PyTorch for object detection
                    (EfficientDet/CenterNet) and segmentation (Mask-RCNN) on DPT, PA, and Bitewing X-rays.
                </li>
                <li>
                    Led design and development of a knowledge graph system with JanusGraph as a future clinical decision
                    support system, enabling potential future dental diagnostic and analytics products.
                </li>
                <li>
                    Improved engagement with patients by creating and deploying an MVP clinical decision support system for
                    dental health diagnosis and treatment suggestions using PHP and JavaScript.
                </li>
                <li>
                    Spearheaded and led company&apos;s initial scaling capabilities by deploying models on Kubernetes.
                </li>
                <li>
                    Improved development efficiency by 50% with an MLOps pipeline using CVAT for labelling, MLFlow for
                    experimentation, and CI/CD workflows with GitHub Actions.
                </li>
                <li>
                    Deployed and served machine learning models with FastAPI, TensorFlow Serving, Prometheus and BentoML
                    with Docker and Kubernetes on cloud.
                </li>
                <li>
                    Collaborated across cross-functional teams throughout product lifecycle to align machine learning team&apos;s
                    priorities with product goals.
                </li>
            </ul>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    AI Singapore - Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Sep 2019 - Jun 2020
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                AI Engineer Apprentice (Sep 2019 - Jun 2020)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Developed initial AI (Faster R-CNN and YOLOv3) object detection capabilities for dental X-ray
                    detection using Docker, TensorFlow and Flask API.
                </li>
                <li>
                    Improved generalisation of deep learning models for object detection by ensuring consistent data
                    quality and distribution through conducting in-depth data exploration and analytics.
                </li>
            </ul>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Hewlett-Packard - Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Jan 2019 - Aug 2019
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Data Analytics and Digitisation Intern (Jan 2019 - Aug 2019)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Reduced 3 man hours per report weekly by automating 3 weekly reports
                    using Python with smart hourly detection capabilities to inform engineers
                    about out-of-bound product specifications
                </li>
                <li>
                    Reduced 8 man hours weekly by deploying and developing production-grade dashboards
                    from scratch with statistical analysis embedded in them via collaboration with
                    data scientists using Python Dash and RShiny.
                </li>
                <li>
                    Strong Software Development Lifecycle (SDLC) experience for analytics product from
                    ideation phase to pipe-lining and transforming data from database to perform visualisation
                    on complex dashboards along with occasional maintenance.
                </li>
                <li>
                    Improve company&apos;s engineer and non-engineers&apos; technical skillset by conducting a
                    Python Dash lesson for Hewlett Packard employees.
                </li>
            </ul>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Air Liquide - Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Jan 2017 - Jun 2017
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Process Engineer Intern (Jan 2017 - Jun 2017)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Successfully executed projects to improve overall plan safety and functionality.
                </li>
                <li>
                    Solely converted and replicated database functions during database migration of
                    site from Microsoft Access to Google Sheet.
                    Conducted training for all technicians and engineers in usage of new database.
                </li>
                <li>
                    Efficiently resolved ad-hoc issues alongside engineers and technicians.
                </li>
            </ul>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Kheng Leong Company Private Limited - Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Apr 2014 - Jun 2014
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Customer Service Executive (Apr 2014 - Jun 2014)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Preparation for logistics for handover of condominium units (i.e handover keys).
                </li>
                <li>
                    Attended to customer enquiries via phone call or during handover.
                </li>
                <li>
                    Liaised with contractors to resolve unit issues.
                </li>
            </ul>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Aviva - Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Jan 2014 - Mar 2014
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Executive Administrative Assistant (Jan 2014 - Mar 2014)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Retrieved data for car specifications for most models available in Singapore market.
                </li>
                <li>
                    Analysed insurance premium prices from different insurance companies.
                </li>
                <li>
                    Assisted in approval of small insurance claims.
                </li>
            </ul>
            {/* Education */}
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-8 first:mt-0">
                Education
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Singapore Management University
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Aug 2019 - Dec 2021
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Master of IT in Business (Artificial Intelligence)
            </small>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Capstone Project -&nbsp;
                    <Link
                        href="/projects/incremental-learner"
                        className="text-primary dark:text-primary/[60.3%]"
                    >
                        Incremental Learner
                    </Link>
                </li>
            </ul>
            <br/>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-lg font-bold">
                    National University Of Singapore
                </div>
                <div className="text-lg font-bold justify-self-end">
                    Aug 2014 - Jul 2018
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Bachelor of Engineering in Chemical Engineering
            </small>
            {/* Technical Skills */}
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-8 first:mt-0">
                Technical Skills
            </h2>
            <TechnicalSkillsSection technicalSkillsArray={technicalSkills} />
            {/* Achievements */}
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-8 first:mt-0">
                Achievements
            </h2>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Placed top 25% in Shopee National Data Science Competition (Advanced Category)
                </li>
            </ul>
        </div>
    );
}