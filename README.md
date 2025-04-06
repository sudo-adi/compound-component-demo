# React Compound Component Pattern Demo

This project demonstrates the React Compound Component pattern - a powerful design pattern for building flexible and composable component APIs.

## What are Compound Components?

Compound components are a pattern where multiple components work together to form a cohesive unit. They share state and logic implicitly while giving you explicit control over their composition.

Think of them like HTML's `<select>` and `<option>` elements - they work together, but you control the structure.

## Benefits

- **Better component composition** - Create more flexible and intuitive APIs
- **Implicit state sharing** - Child components access parent state without prop drilling
- **Separation of concerns** - Each component handles its specific responsibility
- **Cleaner JSX** - More readable component structure that mirrors HTML

## Example in this Project

This project implements a Modal component using the compound component pattern:

```jsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>
    <Modal.Title>Delete Account</Modal.Title>
    <Modal.Subtitle>This action cannot be undone.</Modal.Subtitle>
  </Modal.Header>
  <Modal.Body>
    Are you sure you want to delete your account?
  </Modal.Body>
  <Modal.Footer>
    <button onClick={() => setIsOpen(false)}>Cancel</button>
    <button onClick={() => setIsOpen(false)}>Confirm</button>
  </Modal.Footer>
</Modal>
```

The implementation uses React Context to share state between the parent Modal and its child components.

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo in action.

## Key Implementation Details

1. The parent `Modal` component creates a Context and provides it to children
2. Child components like `Modal.Header`, `Modal.Body`, etc. are defined on the parent
3. Some child components can access the shared context when needed

Check out the implementation in `src/app/components/Modal.js` to see how it works!
