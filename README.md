# State Management Fundamentals

A foundational JavaScript project exploring the core ideas behind **state management**, modeled through a modular reducer pipeline system. This repo is part of my ongoing journey to deeply understand how state changes are handled in real applications and frameworks like Redux or VueX.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates how state can be managed using a pattern of **pure functions**, **action dispatching**, and a **reducer pipeline**—all without any framework dependencies. The goal is to simulate the architecture used in complex apps (like those built with React + Redux), but using plain JavaScript to build foundational understanding.

What started as a basic challenge (manually toggling user activity) evolved into a fully modular state engine using:

- A lookup table for action types
- Reducer functions per action
- An action pipeline that processes state in sequence
- ES Modules (`import/export`) for file organization and scalability

This repo also includes a **modular version** with separate folders for data, reducers, and pipeline logic — reflecting real-world app structure.

## Installation

Make sure you have **Node.js** installed.

```bash```

# Clone the repository
git clone https://github.com/MuchaiSr/state-management-fundamentals.git

# Navigate into the project directory
cd state-management-fundamentals/modular-version

# Run the script (after verifying everything is modularized correctly)
node main.js

Your `package.json` should include:

```json```
{
  "type": "module"
}

## Usage

Run the project with Node.js by executing:

```bash```
node main.js

You’ll see console logs showing:

- The action type
- Which user is being affected
- The state before and after each transformation

This structure is designed to be highly scalable — simply add a new reducer and action type to extend the system.

## Contributing

This is a personal learning project, but feel free to fork it or study the architecture. If you’re a fellow learner or JavaScript enthusiast, I’d love to hear what you build using a similar pattern.

## License

MIT License