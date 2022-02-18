import { getMetaverseToken } from "../../database/getMetaverseToken";

export const getStaticPaths = async () => {
  const metaTokens = await getMetaverseToken();
  const paths = metaTokens.map((token) => {
    return {
      params: { id: token.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const metaTokens = await getMetaverseToken();
  let data = {};
  metaTokens.map((token) => {
    if (token.id === id) {
      data = token;
    }
  });

  return {
    props: {
      token: data,
    },
  };
};

const TokenDetails = ({ token }) => {
  return (
    <div>
      TokenDetails <br />
      Name: {token.name}
    </div>
  );
};

export default TokenDetails;
