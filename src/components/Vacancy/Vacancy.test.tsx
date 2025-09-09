import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/render";
import { Vacancy } from "./Vacancy";

describe("vacancy card", () => {
  it("card should be correctly rendered", () => {
    render(
      <Vacancy
        name="Frontend React"
        exp_id="between1And3"
        alternate="about:blank"
        employer="Google"
        salary={null}
        place="Москва"
        work_format={[]}
      />
    );
    expect(screen.getAllByText(/Опыт/)[0]).toBeInTheDocument();
  });
});
