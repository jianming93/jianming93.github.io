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
import { TypographyH3 } from '@/components/ui/typographyh3';
import { TypographyMuted } from '@/components/ui/typographymuted';
import { TypographyBlockquote } from '@/components/ui/typographyblockquote';
import { TypographyInlineCode } from '@/components/ui/typographyinlinecode';
import { TypographyOrderedList } from "@/components/ui/typographyorderedlist";


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
                        <BreadcrumbPage>Incremental Learner</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <TypographyH1>
                Incremental Learner
            </TypographyH1>
            <br />
            <a
                href="https://github.com/jianming93/incremental_learner"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sm text-primary dark:text-primary/[60.3%]"
            >
                Click here to go to project page.
            </a>
            <TypographyBlockquote>
                Credits and thank you very much to Prof Daniel Lin for the guidance
                throughout this project!
            </TypographyBlockquote>
            <br />
            <TypographyH2>
                Overview
            </TypographyH2>
            <TypographyP>
                A capstone project that was done during my time in SMU for my Master&apos;s programme&apos;s.
                This is a hybrid research and application project revolving around Deep Learning where the
                idea is to have a system that can be quickly updated and also be expanded upon the
                original classes easily.
            </TypographyP>
            <TypographyBlockquote>
                Note: The engineering aspect will not be covered here but in the
                <a
                    href="https://arxiv.org/abs/2005.14165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" Github "}
                </a>
                page. Refer to it for more information.
            </TypographyBlockquote>
            <br />
            <TypographyH2>
                Introduction
            </TypographyH2>
            <TypographyP>
                Deep learning models have become increasingly popular in the recent years,
                especially in tackling data with high dimensionality. Despite deep learning
                models being regarded as a black box in terms of interpretability,
                there is some form of representation that is being learnt during training.
                Given how well it tends to perform at narrow tasks despite not doing well
                in the realm of general tasks, there definitely is a representation existing
                within these models given its performance. Hence, there must be ways in which
                we are able to leverage such representations.
            </TypographyP>
            <br />
            <TypographyH2>
                Aim
            </TypographyH2>
            <TypographyP>
                In organizations that leverage on AI capabilities, there is always a need to
                incorporate some form of pipeline that involves model re-training (or online learning).
                Re-training a model, especially a deep learning model, can not only be very
                computationally expensive but also very time-consuming given the number of
                iterations required to learn a good representation.
            </TypographyP>
            <TypographyP>
                Hence, the project will be exploring on exploiting these feature representations to
                build a system that is able to adapt quickly through the concept of hierarchical modeling.
                This problem area can also be technically referred to the paradigm of few-shot learning.
            </TypographyP>
            <br />
            <TypographyH2>
                Method
            </TypographyH2>
            <TypographyP>
                Most statistical method begins to fail as dimensionality increases due to how they
                mainly focus on probability density in which the sparsity of the volume in such space
                increases with respect to dimensionality. Given that image data have such properties,
                it creates a challenge for tackling such dataset with traditional statistics.
            </TypographyP>
            <TypographyP>
                However, given this vastness of sparsity, it also means that co-incidental similarity
                is a rare occurrence. Hence, by adopting a distance-based approach to statistics rather
                than probability density-based approach, this distance can act as some form of proxy to
                determine statistical dependence. How this can be viewed is via the idea of hierarchical
                generative process, instances of each generative process which can be viewed as the semantic
                label can always be encapsulated by a &apos;distinctive-shell&apos; which is a separability constraint
                to determine a class.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/incremental-learner/shell-theory.png"
                    alt="shell-theory"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Concept of shell in high dimensions
                </TypographyMuted>
            </div>
            <br />
            <TypographyH2>
                Implementation
            </TypographyH2>
            <TypographyP>
                A pseudocode that was done for the shell theory and during
                inference are as follows:
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/incremental-learner/pseudocode-shell-training.png"
                    alt="pseudocode-shell-training"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Pseudocode for shell training
                </TypographyMuted>
            </div>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/incremental-learner/pseudocode-shell-inference.png"
                    alt="pseudocode-shell-infeence"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Pseudocode for shell inference
                </TypographyMuted>
            </div>
            <br />
            <TypographyH2>
                Results & Analysis
            </TypographyH2>
            <TypographyP>
                The dataset being used to determine the effectiveness of
                shell theory was the STL-10 dataset which is a popular dataset
                intending more towards unsupervised learning that was inspired by
                Cifar-10 which is another popular dataset.
                The data has 500 training samples and 800 test samples and the
                results are shown below.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/incremental-learner/results-confusion-matrix.png"
                    alt="results-confusion-matrix"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Confusion Matrix for STL-10 evaluation for shell theory.
                </TypographyMuted>
            </div>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/incremental-learner/results-classification-report.png"
                    alt="results-classification-report"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Classification report for STL-10 evaluation for shell theory.
                </TypographyMuted>
            </div>
            <TypographyP>
                When performing PCA on the shell mean, an interesting observation
                is that clear boundaries be seen with respect to the mean of the shells
                with regards to parent ancestors (vehicles on right vs animals on left)
                Sub-ancestor like 4-wheel vehicles (car and truck) and large vehicle
                (airplane and ship) have clear boundaries too.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/incremental-learner/results-pca.png"
                    alt="results-pca"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    PCA of shell means which function as centroids of the shells.
                </TypographyMuted>
            </div>
            <TypographyP>
                It is known that deeper the model architecture,
                the richer the semantics are in a deep learning model,
                it would be interesting to observe how these semantics affect the results itself.
                Using ResNet-50, same experiment is repeated for every ResNet block as an output
                Linear increase is shown over the different output blocks.
                This coincides with the idea of richer semantics that are present deeper in the
                model which is essential to form more distinctive shell.
            </TypographyP>
            <br />
            <div className="flex justify-center">
                <Image
                    width={0}
                    height={0}
                    src="/projects/incremental-learner/results-layer-as-feature-analysis.png"
                    alt="results-layer-as-feature-analysis"
                    className="flex justify-center"
                    style={{ width: '70%', height: '70%' }}
                />
            </div>
            <div className="flex justify-center mt-2">
                <TypographyMuted>
                    Analysis of result using different layers of CNN as shell features.
                </TypographyMuted>
            </div>
            <br />
            <TypographyH2>
                Conclusion
            </TypographyH2>
            <TypographyP>
                The capstone project has successfully delivered a working system that
                based on the idea of Hierarchical model (Shell Learning) which tackle the
                problem of few-shot learning to a reasonable extent but also allow quick
                adaptation to new classes or updates to a current class.
            </TypographyP>
            <br />
            <TypographyH2>
                References
            </TypographyH2>
            <TypographyP>
                Chen, H., Wu, C., Du, B., & Zhang, L. (10 July, 2020). Change Detection in Multi-temporal VHR Images Based on Deep Siamese Multi-scale Convolutional Neural Networks. Retrieved from
                <a
                    href="https://arxiv.org/abs/2005.14165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" https://arxiv.org/pdf/1906.11479.pdf"}
                </a>
            </TypographyP>
            <TypographyP>
                Coates, A., Lee, H., & Y., A. N. (2011). An Analysis of Single-Layer Networks in Unsupervised Feature Learning. Retrieved from
                <a
                    href="https://cs.stanford.edu/~acoates/papers/coatesleeng_aistats_2011.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" https://cs.stanford.edu/~acoates/papers/coatesleeng_aistats_2011.pdf"}
                </a>
            </TypographyP>
            <TypographyP>
                Finn, C., Abbeel, P., & Levine, S. (18 July, 2017). Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks. Retrieved from
                <a
                    href="https://arxiv.org/pdf/1703.03400.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" https://arxiv.org/pdf/1703.03400.pdf"}
                </a>
            </TypographyP>
            <TypographyP>
                Koch, G., Zemel, R., & Salakhutdinov, R. (2015). Siamese Neural Networks for One-shot Image Recognition. Retrieved from
                <a
                    href="http://www.cs.toronto.edu/~rsalakhu/papers/oneshot1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" http://www.cs.toronto.edu/~rsalakhu/papers/oneshot1.pdf"}
                </a>
            </TypographyP>
            <TypographyP>
                Kornblith, S., Lee, H., Chen, T., & Norouzi, M. (30 October, 2020). WHAT&apos;S IN A LOSS FUNCTION FOR IMAGE CLASSIFICATION? Retrieved from
                <a
                    href="https://arxiv.org/pdf/2010.16402.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" https://arxiv.org/pdf/2010.16402.pdf"}
                </a>
            </TypographyP>
            <TypographyP>
                Lin, W.-Y., Liu, S., Ren, C., Cheung, N.-M., Li, H., & Matsushita, Y. (May, 2021). Shell Theory: A Statistical Model of Reality. Retrieved from
                <a
                    href="http://www.kind-of-works.com/papers/shell_theory_preprint.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" http://www.kind-of-works.com/papers/shell_theory_preprint.pdf"}
                </a>
            </TypographyP>
            <TypographyP>
                Wu, H., Xu, Z., Zhang, J., Yan, W., & Ma, X. (n.d.). Face recognition based on convolution siamese networks. Retrieved from
                <a
                    href="https://ieeexplore.ieee.org/document/8302003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary/[60.3%]"
                >
                    {" https://ieeexplore.ieee.org/document/8302003"}
                </a>
            </TypographyP>
        </div>
    );
}