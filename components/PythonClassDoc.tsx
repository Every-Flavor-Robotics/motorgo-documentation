import React from 'react';
import cn from 'clsx';
import { Code } from 'nextra/components'; // Nextra's built-in <Code />

type Parameter = {
    name: string;
    type: string;
    description: string;
};

type KeywordArgument = {
    name: string;
    type: string;
    description: string;
    default?: string;
};

type Attribute = {
    name: string;
    type: string;
    description: string;
};

type Example = {
    code: string;
    language?: string;
};

type ClassDocProps = {
    title: string;
    description: string;
    attributes: Attribute[];
    examples?: Example[];
};

const ClassDoc: React.FC<ClassDocProps> = ({
    title,
    description,
    attributes,
    examples,
}) => {
    return (
        <div className={cn('_flex _flex-col _gap-6 _ms-4')}>
            {/* Title */}
            <h1 className="_text-3xl _font-bold">{title}</h1>

            {/* Description */}
            <p className="_text-gray-700">{description}</p>

            {/* Attributes */}
            {attributes.length > 0 && (
                <div className="_flex _flex-col _gap-4">
                    <h2 className="_text-xl _font-semibold">Attributes</h2>
                    <div className="_ps-4 _space-y-3">
                        {attributes.map((attr, index) => (
                            <div key={index}>
                                <span className="_font-medium">{attr.name}</span>{' '}
                                <span className="_italic _text-gray-600">({attr.type})</span>:{' '}
                                <span>{attr.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Examples */}
            {examples && examples.length > 0 && (
                <div className="_flex _flex-col _gap-4">
                    <h2 className="_text-xl _font-semibold">Examples</h2>
                    <div className="_ps-4 _space-y-3">
                        {examples.map((example, index) => (
                            <Code
                                key={index}
                                data-language={example.language || 'python'}
                                className="_rounded-md _p-4 _overflow-auto"
                            >
                                {example.code}
                            </Code>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClassDoc;