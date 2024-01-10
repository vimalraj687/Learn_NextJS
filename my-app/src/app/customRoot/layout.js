// import right from "./@right/right";
"use client";
export default function customRoot({ children, right }) {
  return (
    <section>
      {/* {children}
      {right} */}
      <div className="main-content">{children}</div>
      <div className="right-content">{right}</div>
    </section>
  );
}
