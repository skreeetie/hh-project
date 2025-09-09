import { render as testingLibraryRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme.env";

export const render = (ui: React.ReactNode) => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>
        <MantineProvider env="test" theme={theme}>
          {children}
        </MantineProvider>
      </Provider>
    ),
  });
};
