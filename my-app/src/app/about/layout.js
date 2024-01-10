const layout = ({ children, left, right }) => {
  return (
    <section>
      {children}
      {left}
      {right}
    </section>
  );
};

export default layout;
