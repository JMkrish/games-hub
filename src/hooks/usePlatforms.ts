// import useData from "./useData";
import platforms from "../data/platforms";

interface Plaform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Plaform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
