// Input.jsx
export function Input({ id, type = "text", placeholder, ...props }) {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded"
        {...props}
      />
    );
  }