import useCategories from "../features/Categories/useCategories";
import HomePage from "../features/HomePage/HomePage";
import LoaderIndicator from "./../ui/LoaderIndicator";

const Home = () => {
  const { data, isLoading } = useCategories();
  if (isLoading) return <LoaderIndicator />;

  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
