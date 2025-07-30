import React from "react";

export default function SettingsDiv({ children, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      {children}
    </form>
  );
}
