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
import { TypographyH2 } from "@/components/ui/typographyh2";
import { TypographyUnorderedList } from "@/components/ui/typographyunorderedlist";

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


export default function ExperiencePage() {
    return (
        <div className="container my-8">
            <Breadcrumb className="mb-8">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Experience</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* Experience */}
            <TypographyH2>
                Experience
            </TypographyH2>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Defence Science and Technology Agency (DSTA) - Singapore
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
                    Jun 2023 - Present
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                AI Engineer (Jun 2023 - Present)
            </small>
            <TypographyUnorderedList name='experience-hp'>
                {
                    [
                        "Led development of internal platform tools with AI agent capabilities for automation and retrieval augmented generation (RAG) with large language models (LLM) via Nvidia's TensorRT-LLM and vLLM.",
                        "Reduced runtime costs through streamlining compute resource allocation and abstracting infrastructure complexities from developers, thus saving developers' time by developing a Machine Learning inference platform on OpenShift with Python, Arrow, Redis as the backend and React with Typescript as the frontend.",
                        "Enabled low latency business use cases via optimisations (e.g., combining layers in model architecture and tuning parameters based on memory constraints) for model inference that is specific to different server's hardware with Nvidia's Triton Inference Server, Model Analyzer and Model Navigator.",
                        "Led the successful migration of the team's CI pipelines from GitHub to GitLab, ensuring adherence to the company's rigorous testing procedures and enhancing overall development efficiency and code quality."
                    ]
                }
            </TypographyUnorderedList>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    EM2AI (Q&M Dental Group) - Singapore
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
                    Jun 2020 - Jan 2023
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                AI Engineer (Jun 2020 - Jan 2023)
            </small>
            <TypographyUnorderedList name='experience-hp'>
                {
                    [
                        "Boosted dental clinic profits by enabling dentists to treat more patients by reducing time taken by over 90% to analyze patient's dental health using TensorFlow and PyTorch for object detection (EfficientDet/CenterNet) and segmentation (Mask-RCNN) on DPT, PA, and Bitewing X-rays.",
                        "Led design and development of a knowledge graph system with JanusGraph as a future clinical decision support system, enabling potential future dental diagnostic and analytics products.",
                        "Improved engagement with patients by creating and deploying an MVP clinical decision support system for dental health diagnosis and treatment suggestions using PHP and JavaScript.",
                        "Spearheaded company's initial scaling capabilities by deploying models on Kubernetes.",
                        "Improved development efficiency by 50% with an MLOps pipeline using CVAT for labelling, MLFlow for experimentation, and CI/CD workflows with GitHub Actions.",
                        "Deployed and served machine learning models with FastAPI, TensorFlow Serving, Prometheus and BentoML with Docker and Kubernetes on cloud.",
                        "Collaborated across cross-functional teams throughout product lifecycle to align machine learning team's priorities with product goals."
                    ]
                }
            </TypographyUnorderedList>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    AI Singapore - Singapore
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
                    Sep 2019 - Jun 2020
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                AI Engineer Apprentice (Sep 2019 - Jun 2020)
            </small>
            <TypographyUnorderedList name='experience-hp'>
                {
                    [
                        "Developed initial AI (Faster R-CNN and YOLOv3) object detection capabilities for dental X-ray detection using Docker, TensorFlow and Flask API.",
                        "Improved generalisation of deep learning models for object detection by ensuring consistent data quality and distribution through conducting in-depth data exploration and analytics.",
                    ]
                }
            </TypographyUnorderedList>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Hewlett-Packard - Singapore
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
                    Jan 2019 - Aug 2019
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Data Analytics and Digitisation Intern (Jan 2019 - Aug 2019)
            </small>
            <TypographyUnorderedList name='experience-hp'>
                {
                    [
                        "Reduced 3 man hours per report weekly by automating 3 weekly reports using Python with smart hourly detection capabilities to inform engineers about out-of-bound product specifications",
                        "Reduced 8 man hours weekly by deploying and developing production-grade dashboards from scratch with statistical analysis embedded in them via collaboration with data scientists using Python Dash and RShiny.",
                        "Strong Software Development Lifecycle (SDLC) experience for analytics product from ideation phase to pipe-lining and transforming data from database to perform visualisation on complex dashboards along with occasional maintenance.",
                        "Improve company's engineer and non-engineers' technical skillset by conducting a Python Dash lesson for Hewlett Packard employees."
                    ]
                }
            </TypographyUnorderedList>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Air Liquide - Singapore
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
                    Jan 2017 - Jun 2017
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Process Engineer Intern (Jan 2017 - Jun 2017)
            </small>
            <TypographyUnorderedList name='experience-air-liquide'>
                {
                    [
                        "Successfully executed projects to improve overall plan safety and functionality.",
                        "Solely converted and replicated database functions during database migration of site from Microsoft Access to Google Sheet. Conducted training for all technicians and engineers in usage of new database.",
                        "Efficiently resolved ad-hoc issues alongside engineers and technicians."
                    ]
                }
            </TypographyUnorderedList>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Kheng Leong Company Private Limited - Singapore
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
                    Apr 2014 - Jun 2014
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Customer Service Executive (Apr 2014 - Jun 2014)
            </small>
            <TypographyUnorderedList name='experience-kheng-leong'>
                {
                    [
                        "Preparation for logistics for handover of condominium units (i.e handover keys).",
                        "Attended to customer enquiries via phone call or during handover.",
                        "Liaised with contractors to resolve unit issues."
                    ]
                }
            </TypographyUnorderedList>
            <br/>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Aviva - Singapore
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
                    Jan 2014 - Mar 2014
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Executive Administrative Assistant (Jan 2014 - Mar 2014)
            </small>
            <TypographyUnorderedList name='experience-aviva'>
                {
                    [
                        "Retrieved data for car specifications for most models available in Singapore market.",
                        "Analysed insurance premium prices from different insurance companies.",
                        "Assisted in approval of small insurance claims."
                    ]
                }
            </TypographyUnorderedList>
            <br />
            {/* Education */}
            <TypographyH2>
                Education
            </TypographyH2>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="text-lg font-bold">
                    Singapore Management University
                </div>
                <div className="text-lg text-right font-bold justify-self-end">
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
                <div className="text-lg text-right font-bold justify-self-end">
                    Aug 2014 - Jul 2018
                </div>
            </div>
            <small className="text-sm font-bold leading-none">
                Bachelor of Engineering in Chemical Engineering
            </small>
            <br />
            <br />
            {/* Technical Skills */}
            <TypographyH2>
                Technical Skills
            </TypographyH2>
            <TechnicalSkillsSection technicalSkillsArray={technicalSkills} />
            <br />
            {/* Achievements */}
            <TypographyH2>
                Achievements
            </TypographyH2>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    Placed top 25% in Shopee National Data Science Competition (Advanced Category)
                </li>
            </ul>
        </div>
    );
}