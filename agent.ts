import {FunctionTool, LlmAgent} from '@google/adk';
import {z} from 'zod';

/* ADK : Simple Calculator Tool */
const calculator = new FunctionTool({
  name: 'calculator',
  description: 'Performs basic arithmetic operations (add, subtract, multiply, divide).',
  parameters: z.object({
    operation: z.enum(['add', 'subtract', 'multiply', 'divide']).describe("The arithmetic operation to perform."),
    num1: z.number().describe("The first number."),
    num2: z.number().describe("The second number."),
  }),
  execute: ({operation, num1, num2}) => {
    let result: number;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? num1 / num2 : NaN;
        break;
    }
    return {
      status: 'success',
      result: result,
      expression: `${num1} ${operation} ${num2} = ${result}`
    };
  },
});

/* ADK : Text Transformer Tool */
const textTransformer = new FunctionTool({
  name: 'text_transformer',
  description: 'Transforms text by reversing it, converting to uppercase, or lowercase.',
  parameters: z.object({
    text: z.string().describe("The text to transform."),
    transformation: z.enum(['reverse', 'uppercase', 'lowercase']).describe("The type of transformation to apply."),
  }),
  execute: ({text, transformation}) => {
    let transformed: string;
    switch (transformation) {
      case 'reverse':
        transformed = text.split('').reverse().join('');
        break;
      case 'uppercase':
        transformed = text.toUpperCase();
        break;
      case 'lowercase':
        transformed = text.toLowerCase();
        break;
    }
    return {
      status: 'success',
      original: text,
      transformed: transformed
    };
  },
});

/* ADK : Random Number Generator Tool */
const randomNumberGenerator = new FunctionTool({
  name: 'random_number_generator',
  description: 'Generates a random number within a specified range.',
  parameters: z.object({
    min: z.number().describe("The minimum value (inclusive)."),
    max: z.number().describe("The maximum value (inclusive)."),
  }),
  execute: ({min, max}) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return {
      status: 'success',
      random_number: randomNum,
      range: `[${min}, ${max}]`
    };
  },
});

/* ADK : Word Counter Tool */
const wordCounter = new FunctionTool({
  name: 'word_counter',
  description: 'Counts words, characters, and sentences in a given text.',
  parameters: z.object({
    text: z.string().describe("The text to analyze."),
  }),
  execute: ({text}) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return {
      status: 'success',
      word_count: words,
      character_count: characters,
      sentence_count: sentences
    };
  },
});

/* Single Agent with Multiple Tools */
export const rootAgent = new LlmAgent({
  name: 'multi_tool_assistant',
  model: 'gemini-2.5-flash',
  description: 'A helpful assistant with calculator, text transformation, random number generation, and text analysis capabilities.',
  instruction: `You are a versatile assistant with multiple tools at your disposal:
                - Use 'calculator' for arithmetic operations
                - Use 'text_transformer' to modify text
                - Use 'random_number_generator' to generate random numbers
                - Use 'word_counter' to analyze text statistics
                
                Choose the appropriate tool based on the user's request.`,
  tools: [calculator, textTransformer, randomNumberGenerator, wordCounter],
});