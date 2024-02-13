import { createContext } from "react";

import type { ContextualSaveBarProps, Logo } from "./type";

export interface FrameContextType {
  logo?: Logo;
  setContextualSaveBar(props: ContextualSaveBarProps): void;
  removeContextualSaveBar(): void;
  startLoading(): void;
  stopLoading(): void;
}

export const FrameContext = createContext<FrameContextType | undefined>(
  undefined,
);
