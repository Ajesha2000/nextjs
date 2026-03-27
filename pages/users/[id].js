import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const router = useRouter();
  const { query } = router;
  console.log(router);
  console.log(user);

  return (
    <MainContainer keywords={user.name}>
      <h1>Пользователь {query.id}</h1>
      <div>Имя пользователя - {user.name}</div>
    </MainContainer>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const data = await resp.json();
  return { props: { user: data } };
}
