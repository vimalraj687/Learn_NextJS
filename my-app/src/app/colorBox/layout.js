export default function colorbox({ children, left, right }) {
  const sidebar = true;
  return (
    <section>
      {children}
      {sidebar ? left : right}
      {/* {left}
      {right} */}
    </section>
  );
}
