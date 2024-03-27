import getCurrentUser from "./actions/getCurrentUser";

// メインページ
const Home = async () => {
  const currentUser = await getCurrentUser();

  return <div className="text-center">{currentUser ? <div>認証中</div> : <div>未認証</div>}</div>;
};

export default Home;
