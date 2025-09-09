import { useEffect, useState } from "react";
import { useTypedSelector } from "../redux/hooks/redux";

export const useUrl = () => {
  const [url, setUrl] = useState<string>("");
  const activePage = useTypedSelector((state) => state.page.activePage);
  const [searchText, setSearchText] = useState<string>("");
  const skillsQuery = useTypedSelector((state) => state.skills.skillsQuery);
  const areasQuery = useTypedSelector((state) => state.area.areasQuery);
  useEffect(() => {
    setUrl(`page=${activePage}&text=${searchText}${skillsQuery}${areasQuery}`);
  }, [activePage, searchText, skillsQuery, areasQuery]);

  return { url, setSearchText };
};
