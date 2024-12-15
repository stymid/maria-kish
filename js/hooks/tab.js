const useNavLink = async () => {
  const data = {};
  const errorMessage = "";
  try {
    const response = await fetch(
      "https://mohammadelia30.ir/marina_kish/api/settings/index/5"
    );
    if (!response.ok) {
      throw new Error("an error is accured");
    }
    data = response.json();
  } catch (error) {
    console.log(error.message);
    errorMessage = error.message;
  }
  return { data, errorMessage };
};
export default useNavLink;
