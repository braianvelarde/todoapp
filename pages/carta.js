import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.graphcms.com/v2/cky96ctbt3jga01z5bxnpeq6t/master"
);

export default function carta({ todos }) {
  return (
    <>
      <h1>Todos App</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.description}</h2>
          <p>{todo.completed ? "🟢" : "🔴"}</p>
        </div>
      ))}
    </>
  );
}

const query = gql`
  {
    todos {
      id
      description
      completed
    }
  }
`;

export async function getStaticProps() {
  const { todos } = await graphcms.request(query);
  return {
    props: {
      todos,
    },
  };
}
