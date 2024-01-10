async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const LearnDataFeatching = async () => {
  const data = await getData();
  console.log(data, "vimal");
  return (
    <>
      vimal
      {data.map((post, id) => (
        <div key={id}>
          {/* <h1>vimal raj</h1> */}
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default LearnDataFeatching;
