import React from 'react'
import cn from 'clsx'
import { Code } from 'nextra/components' // Nextra's built-in <Code />

type Parameter = {
    name: string
    type: string
    description: string
}

type KeywordArgument = {
    name: string
    type: string
    description: string
    default?: string
}

type Example = {
    code: string
    language?: string
}

type APIDocProps = {
    title: string
    signature: string
    description: string
    parameters: Parameter[]
    keywordArguments: KeywordArgument[]
    returns?: { type: string; description: string }
    raises?: { type: string; description: string }[]
    examples?: Example[]
}

const APIDoc: React.FC<APIDocProps> = ({
    title,
    signature,
    description,
    parameters,
    keywordArguments,
    returns,
    raises,
    examples
}) => {
    return (
        <div className={cn('_flex _flex-col _gap-4 _ml-2 _mb-2')}>
            {/* Title */}
            <h1 className="_text-3xl _font-bold">{title}</h1>

            {/* Signature */}
            <Code
                data-language="python"
                className="_rounded-md _p-4 _overflow-auto _"
            >
                {signature}
            </Code>

            {/* Description */}
            <p className="_text-gray-700">{description}</p>

            {/* Parameters */}
            {parameters.length > 0 && (
                <div className="_flex _flex-col">
                    <h2 className="_text-xl _font-semibold">Parameters</h2>
                    <div className="_ps-4 _space-y-3 _ms-4">
                        {parameters.map((param, index) => (
                            <div key={index}>
                                <span className="_font-medium">{param.name}</span>{' '}
                                <span className="_italic _text-gray-600">({param.type})</span>:{' '}
                                <span>{param.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Keyword Arguments */}
            {keywordArguments.length > 0 && (
                <div className="_flex _flex-col _gap-4">
                    <h2 className="_text-xl _font-semibold">Keyword Arguments</h2>
                    <div className="_ps-4 _space-y-3  _ms-4">
                        {keywordArguments.map((kwarg, index) => (
                            <div key={index}>
                                <span className="_font-medium">{kwarg.name}</span>{' '}
                                <span className="_italic _text-gray-600">
                                    ({kwarg.type}, optional)
                                </span>
                                : <span>{kwarg.description}</span>
                                {kwarg.default && (
                                    <span className="_ml-4 _italic _text-sm _px-3 _py-1 _rounded _bg-gray-200 _text-gray-900">
                                        Default: {kwarg.default}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Returns */}
            {returns && (
                <div className="_flex _flex-col _gap-4">
                    <h2 className="_text-xl _font-semibold">Returns</h2>
                    <div className="_ps-4">
                        <span className="_italic _text-gray-600">({returns.type})</span>:{' '}
                        <span>{returns.description}</span>
                    </div>
                </div>
            )}

            {/* Raises */}
            {raises && raises.length > 0 && (
                <div className="_flex _flex-col _gap-4">
                    <h2 className="_text-xl _font-semibold">Raises</h2>
                    <div className="_ps-4 _space-y-3">
                        {raises.map((raise, index) => (
                            <div key={index}>
                                <span className="_font-medium">{raise.type}</span>:{' '}
                                <span>{raise.description}</span>
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
    )
}

export default APIDoc