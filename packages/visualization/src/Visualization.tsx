import task1 from "../__mocks__/task-1.png";
import task2 from "../__mocks__/task-2.png";
import task3 from "../__mocks__/task-3.png";
import { Image, StyledVisualization } from "./styles";

const imageUrls: Record<string, string> = {
  "wf-strm-001": task1.src,
  "wf-prep-001": task2.src,
  "wf-inst-001": task3.src,
};

interface Props {
  currentTaskId?: string;
}

export const Visualization = ({ currentTaskId }: Props) => {
  const imageUrl = currentTaskId ? imageUrls[currentTaskId] : undefined;
  return (
    <StyledVisualization>
      {imageUrl ? (
        <Image src={imageUrl} alt={currentTaskId} />
      ) : currentTaskId ? (
        `Task "${currentTaskId}" was not recognized`
      ) : (
        ""
      )}
    </StyledVisualization>
  );
};
