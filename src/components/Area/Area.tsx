import { MultiSelect } from "@mantine/core";
import Map from "../../assets/area.svg?react";
import style from "./style.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/redux";
import { setAreas } from "../../redux/reducers/AreaSlice/AreaSlice";

export const Area = () => {
  const dispatch = useTypedDispatch();
  const areasList = useTypedSelector((state) => state.area.areasList);
  return (
    <div className={style.area}>
      <MultiSelect
        clearable
        checkIconPosition="right"
        leftSectionPointerEvents="none"
        leftSection={<Map width={15} height={15} />}
        placeholder={areasList.length > 0 ? "" : "Все города"}
        data={["Все города", "Москва", "Санкт-Петербург"]}
        value={areasList}
        onChange={(e) => {
          dispatch(
            setAreas({
              list: e,
            })
          );
        }}
        classNames={{ input: style.input }}
      />
    </div>
  );
};
