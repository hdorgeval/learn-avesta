import { LetterA } from "../letters";
import { DrawingSurface } from "./DrawingSurface";

export const Drawer: React.FC = () => {

  return (
    <>
      <DrawingSurface >
        <LetterA fill="#f5a425" zoom={5}/>
      </DrawingSurface>
    </>
  );
};

Drawer.displayName = 'Drawer';