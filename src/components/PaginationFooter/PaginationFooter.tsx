import { Pagination } from "@mantine/core";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/redux";
import { setActivePage } from "../../redux/reducers/PageSlice/PageSlice";
import style from "./style.module.scss";

interface FooterProps {
  vacanciesLength?: number;
}

export const PaginationFooter = ({ vacanciesLength }: FooterProps) => {
  const dispatch = useTypedDispatch();
  const activePage = useTypedSelector((state) => state.page.activePage);
  return (
    <footer className={style.footer}>
      <Pagination
        value={activePage}
        onChange={(value) => {
          dispatch(setActivePage({ value }));
        }}
        total={vacanciesLength || 1}
        radius="xs"
        withEdges
        color="pre-light.9"
        classNames={{ control: style.items, root: style.active }}
      />
    </footer>
  );
};
