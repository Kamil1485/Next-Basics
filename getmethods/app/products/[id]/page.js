export const getServerSideProps = async (context) => {
  //SSR
  console.log(context);
  const res = await fetch(
    `https://fakestoreapi.com/products${context.params.id}`
  );
  const detail = await res.json();
  return { props: { detail } };
};

export default function Detail({ detail, params }) {
  console.log(detail, params);
  return <div>Detail</div>;
}
