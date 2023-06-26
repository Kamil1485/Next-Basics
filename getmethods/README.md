"use client";
let data;
import { useRouter } from "next/navigation";
export default function Products() {
const router = useRouter();
const getdata = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
data = await res.json();
router.refresh();
};
console.log(data);
return (
<main>
<button onClick={getdata}>Getir</button>
{data?.map((item) => (
<div>{item.title}</div>
))}
</main>
);
}
