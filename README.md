# Code Typewriter 📝✨

## Overview

Code Typewriter is an interactive React component that brings code demonstrations to life with a smooth, typewriter-like animation. Perfect for creating engaging video tutorials, code walkthroughs, and educational content.

![Code Typewriter Demo](https://code.typewritter.leestan.dev/demo.gif)

## 🌟 Features

- Realistic typewriter effect for code snippets
- Customizable animation speed
- Dynamic file size and styling
- Supports multiple programming languages
- Easy-to-use dialog for configuration
- Responsive design

## 🚀 Live Demo

[code.typewritter.leestan.dev](https://code.typewritter.leestan.dev)

## 📦 Installation

### Prerequisites

- React
- Tailwind CSS
- shadcn/ui components

```bash
npm install react tailwindcss @/components/ui
```

### Install the Package

```bash
npm install code-typewriter
# or
yarn add code-typewriter
```

## 🛠️ Usage

### Basic Example

```jsx
import CodeFile from "code-typewriter";

function Tutorial() {
  return (
    <CodeFile
      initialCode="console.log('Hello, World!');"
      language="javascript"
    />
  );
}
```

### Customization Options

- `initialCode`: Starting code snippet
- `language`: Programming language
- `duration`: Animation speed (ms)
- `height`: Container height
- `width`: Container width

## 💡 Configuration Dialog

Click the file icon or filename to open a dialog where you can:

- Edit code snippet
- Change programming language
- Adjust container dimensions
- Customize animation duration

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 TODO

- [ ] Add more language support
- [ ] Improve accessibility
- [ ] Create more customization options

## 🔧 Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- react-syntax-highlighter

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Stanley Lee - [@leestan306](https://twitter.com/leestan306)

Project Link: [https://github.com/leestan306/code-typewritter](https://github.com/leestan306/code-typewritter)
