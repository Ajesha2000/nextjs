import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";
const Users = ({ users }) => {
  return (
    <MainContainer keywords={'usersPage'}>
      <li>
        {users.map((user) => (
          <ul>
            <Link href={"/users/" + user.id}>{user.name}</Link>
          </ul>
        ))}
      </li>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await resp.json();

  return { props: { users: data } };
}
