import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div class="w-4 h-4 animate-spin">Loading</div>
    </div>
  );
}
