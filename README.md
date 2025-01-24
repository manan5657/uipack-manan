<p align="center">
  <img src="https://github.com/manan5657/AssetsManan/blob/549aee142453307171df3443f874dc94958de50f/updateduipacklogo.svg" alt="uipack-manan Logo" width="180">
</p>
<h1 align="center">
UIPack-Manan - A UI Pack for Developers
</h1>


![npm version](https://img.shields.io/npm/v/uipack-manan)
![npm downloads](https://img.shields.io/npm/dm/uipack-manan)

**Tired of writing endless lines of code just to create modern, stylish buttons?** Struggling with how to implement them from scratch without spending hours on design and code? Say goodbye to the frustration! With **uipack-manan**, you can implement beautiful, fully customizable buttons and other UI components in just **a few lines of code**.

I’ve designed this package for developers and designers who want to skip the hassle of manual styling and focus more on what matters. Whether you're a beginner or an experienced coder, **uipack-manan** makes it easy to build professional, eye-catching UI components without the overwhelming complexity. Customize the button’s style, toggle tooltips, select different variants, and even add a magical touch with our unique **magic star button**. All with minimal code!

## 🎯 Live Demo

Check out a working demo of **uipack-manan** in action on CodeSandbox! [Demo](https://codesandbox.io/p/sandbox/hmt47d).

## ✨ What’s Included?

- **Customizable Button Component**
- **Easy-to-use Button Variants**
- **Tooltip Toggle**
- **Magic Star Button (For an extra surprise!)**

And the best part? You can do all of this in **less code** than ever before!

---

## 🚀 Installation

Install `uipack-manan` via npm:

```bash
npm install uipack-manan
```

Then, import the Button component in your project:

```bash
import { Button } from "uipack-manan";
```

---

## API Reference

| Prop          | Type                                                   | Default     | Description                          |
| ------------- | ------------------------------------------------------ | ----------- | ------------------------------------ |
| `style`       | `React.CSSProperties`                                  | `{}`        | Custom styles for the button.        |
| `onClick`     | `() => void`                                           | `undefined` | Custom click handler function.       |
| `tooltipText` | `string`                                               | `""`        | Tooltip text to show on hover.       |
| `tooltip`     | `boolean`                                              | `false`     | Enable tooltip to show on hover.     |
| `variant`     | `"default" \| "uplift" \| "slide" \| "pop" \| "shine"` | `"default"` | Choose a button style variant.       |
| `magic`       | `boolean`                                              | `false`     | Enable the magic star button effect. |

---

## 🔥 Button Component

Our button component is fully customizable and supports various features like:

- Custom styling
- Custom onClick actions
- Tooltip visibility toggle
- Multiple button variants
- Magic button with an animation effect

---

## 🔧 Usage

Here’s how you can use the Button component:

```bash
<Button
variant="uplift"
style={{ backgroundColor: 'blue', color: 'white' }}
tooltip={true}
tooltipText="This is a button"
onClick={() => console.log("Button clicked!")}
magic={false}
> Click Me
</Button>
```

---

## 🎨 Button Variants

My package offer 6 eye-catching button variants that you can easily use with a single prop!

- default
- uplift
- slide
- pop
- shine

---

## ✨ Magic Star Button

Want to add a little `magic` to your buttons? Set the magic prop to `true` and see the transformation into a dazzling magic star button!

```bash
<Button
magic={true}
onClick={() => console.log("Magic Clicked!")}
Hover Me for Magic </Button>
```

---

## 💡 Features

> - Custom Styling: Customize the button’s styles using the style prop.
> - Variants: Choose from 6 different variants to fit the look of your app.
> - Tooltip: Toggle the tooltip visibility using the tooltip prop.
> - Easy Customization: Add any custom onClick function to handle user interactions.
> - Magic Button: Activate a magical star effect with the magic prop.

---

## 🛠️ Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/manan5657/uipack-manan
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## 📜 License

`uipack-manan` is licensed under the [MIT License](./LICENSE).

![license](https://img.shields.io/npm/l/uipack-manan)

---

## 🙌 Support

Have questions or need help? Feel free to open an issue or reach out to [Manan Bhasin](https://github.com/manan5657) directly.

---

Start building with **`uipack-manan`** today and transform your React development experience! 🌟
