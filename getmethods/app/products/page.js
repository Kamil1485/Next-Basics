export const getStaticProps = async (context) => {
  //SSG
  console.log(context);
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { data } };
};
export default function Products() {
  //  console.log(data);
  return;
}
