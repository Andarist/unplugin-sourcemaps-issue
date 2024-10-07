export function Button({ children, onClick }: { children: string; onClick: () => void }) {
  if (children === "+") {
    debugger
  }
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
