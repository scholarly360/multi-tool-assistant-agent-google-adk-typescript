# Multi-Tool Assistant Agent

This project demonstrates how to create a single agent with multiple tools to perform various tasks including calculations, text transformations, random number generation, and text analysis.
Google ADK (Agent Development Kit) and TypeScript is used.

## About the Project

This project uses Google ADK to create an intelligent agent powered by the Gemini 2.5 Flash model. The agent can understand user requests and automatically select the appropriate tool to complete the task.

## Why TypeScript

TypeScript is gaining rapid adoption for building production-ready, scalable agent applications, especially within the web ecosystem. 

## Agent Architecture

The project exports a `rootAgent` named "multi_tool_assistant" that is equipped with four specialized tools. The agent intelligently chooses which tool to use based on the user's request.

## Available Tools

### 1. Calculator Tool
Performs basic arithmetic operations on two numbers.

**Operations supported:**
- `add`: Adds two numbers
- `subtract`: Subtracts the second number from the first
- `multiply`: Multiplies two numbers
- `divide`: Divides the first number by the second (handles division by zero)

**Parameters:**
- `operation`: The arithmetic operation to perform
- `num1`: The first number
- `num2`: The second number

**Returns:** Status, result, and formatted expression

### 2. Text Transformer Tool
Transforms text in various ways.

**Transformations available:**
- `reverse`: Reverses the text character by character
- `uppercase`: Converts all characters to uppercase
- `lowercase`: Converts all characters to lowercase

**Parameters:**
- `text`: The text to transform
- `transformation`: The type of transformation to apply

**Returns:** Status, original text, and transformed text

### 3. Random Number Generator Tool
Generates a random integer within a specified range.

**Parameters:**
- `min`: The minimum value (inclusive)
- `max`: The maximum value (inclusive)

**Returns:** Status, generated random number, and range information

### 4. Word Counter Tool
Analyzes text and provides statistical information.

**Analysis includes:**
- Word count (excludes extra whitespace)
- Character count (includes spaces and punctuation)
- Sentence count (based on `.`, `!`, `?` delimiters)

**Parameters:**
- `text`: The text to analyze

**Returns:** Status, word count, character count, and sentence count

## Setup and Installation

To install Node.js on Windows or Mac, visit the official nodejs.org website, download the LTS (Long-Term Support) installer for your OS (MSI for Windows, PKG for Mac), and run the installer, accepting defaults and ensuring npm is included; verify installation by opening your command prompt/terminal and running node -v and npm -v to check versions

Install Google ADK:
```bash
npm install @google/adk
```

Install project dependencies:
```bash
npm install
```

## Running the Agent

Run the agent in CLI mode:
```bash
npx @google/adk-devtools run agent.ts
```

Start the web interface:
```bash
npx @google/adk-devtools web
```

## Technology Stack

- **Framework:** Google ADK (Agent Development Kit)
- **Language:** TypeScript
- **AI Model:** Gemini 2.5 Flash
- **Schema Validation:** Zod

## Example Use Cases

- "What is 25 multiplied by 4?"
- "Convert the text 'Hello World' to uppercase"
- "Generate a random number between 1 and 100"
- "Count the words in this sentence: The quick brown fox jumps over the lazy dog"

## YouTube Video
[Multi-Tool Assistant Agent](https://www.youtube.com/watch?v=NCF9dYf4hME)
