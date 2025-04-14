import React from "react";

const popularEngines = [
  {
    name: "OpenAI API",
    description:
      "Offers powerful language models for text generation, translation, code, and images.",
    link: "https://openai.com/api/",
  },
  {
    name: "Google Cloud AI Platform (Vertex AI)",
    description:
      "Comprehensive platform for building, deploying, and managing machine learning models.",
    link: "https://cloud.google.com/vertex-ai",
  },
  {
    name: "Amazon SageMaker",
    description:
      "Fully managed machine learning service for building, training, and deploying models.",
    link: "https://aws.amazon.com/sagemaker/",
  },
  {
    name: "Microsoft Azure Machine Learning",
    description:
      "Collaborative environment for building, deploying, and managing ML solutions.",
    link: "https://azure.microsoft.com/en-us/services/machine-learning/",
  },
  {
    name: "Hugging Face Transformers",
    description:
      "Open-source library with thousands of pre-trained models for NLP, vision, etc.",
    link: "https://huggingface.co/transformers/",
  },
  {
    name: "TensorFlow",
    description:
      "Widely used open-source machine learning framework for research and production.",
    link: "https://www.tensorflow.org/",
  },
  {
    name: "PyTorch",
    description:
      "Popular open-source ML framework, favored for research and flexibility.",
    link: "https://pytorch.org/",
  },
  {
    name: "IBM Watson AI",
    description:
      "Suite of AI services for businesses, including NLU, visual recognition, and conversational AI.",
    link: "https://www.ibm.com/watson",
  },
  {
    name: "Cohere",
    description:
      "Focuses on providing accessible and powerful large language models for businesses.",
    link: "https://cohere.com/",
  },
  {
    name: "AI21 Labs",
    description: "Develops advanced language models and AI solutions.",
    link: "https://www.ai21.com/",
  },
];

const AIEnginePage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Popular AI Engines
      </h2>
      <p className="text-gray-600 mb-4">
        Explore some of the leading AI engines and platforms available. Click on
        the card to learn more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularEngines.map((engine, index) => (
          <a
            key={index}
            href={engine.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {engine.name}
              </h3>
              <p className="text-gray-600 text-sm">{engine.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  Learn More
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <p className="text-gray-600 mt-6">
        This is a selection of popular AI engines. The best choice depends on
        your specific needs and project goals.
      </p>
    </div>
  );
};

export default AIEnginePage;
