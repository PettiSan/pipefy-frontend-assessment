import { waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import { PipeCard } from "./PipeCard";

it("renders PipeCard without error", async () => {
  const pipeCard = renderer.create(
    <PipeCard id="1" name="IT Service Desk" color="blue" cards_count={1} />
  );

  const article = await waitFor(() => pipeCard.root.findByType("article"));
  const span = await waitFor(() => pipeCard.root.findByType("span"));
  const div = await waitFor(() => pipeCard.root.findByType("div"));

  expect([article, span, div]).toBeTruthy();
});
