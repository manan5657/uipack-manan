# UIPack-Manan

![npm version](https://img.shields.io/npm/v/uipack-manan)
![npm downloads](https://img.shields.io/npm/dm/uipack-manan)

**Ready to elevate your React development game?** Introducing `uipack-manan`, the perfect npm package for beginners and seasoned developers alike! With `uipack-manan`, you can start your React journey with simplicity and style. Dive in with a pre-built counter hook and a custom button component to create engaging and dynamic user interfaces with ease.

---

## ✨ Features

- **`useCounter` Hook:** Simplify state management for counters with increment and decrement functionality.
- **Custom `Button` Component:** A sleek and reusable button component to streamline your UI development.
- **Beginner-Friendly:** Perfect starting point for React developers learning state management and reusable components.
- **Plug-and-Play:** Minimal setup to get started right away.

---

## 📦 Installation

```bash
npm install uipack-manan
```

---

## 🔧 Usage

Here’s how you can use the `useCounter` hook and the custom `Button` component in your React app:

```jsx
import "./App.css";
import { Button, useCounter } from "uipack-manan";

function App() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>

      <Button onclick={() => console.log("RockPoison There!")}>
        Manan Bhasin
      </Button>
    </>
  );
}

export default App;
```

---

## 📖 API Documentation

### **`useCounter` Hook**

The `useCounter` hook provides an easy way to manage counter states.

#### Returns:

- **`count`**: The current counter value.
- **`increment`**: Function to increase the counter.
- **`decrement`**: Function to decrease the counter.

### **Custom `Button` Component**

#### Props:

- **`onclick` (Function)**: Function to handle button clicks.
- **`children` (ReactNode)**: Content to display inside the button.

---

## 🛠️ Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/uipack-manan.git
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
