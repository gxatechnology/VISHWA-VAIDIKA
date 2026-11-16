import { useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";

export type ScreenContext = {
  navigate: ReturnType<typeof useNavigate>;
};

type Handler = (event: unknown) => void;
type HandlerKey = `h${0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29}`;
export type ScreenHandlers = Partial<Record<HandlerKey, Handler>>;
type Setup = (ctx: ScreenContext) => ScreenHandlers;

/**
 * Runs a screen's DOM-driven behaviour once the page has mounted and returns
 * a ref holding its event handlers (h0, h1, ...), wired from the JSX.
 */
export function useScreenScript(setup: Setup) {
  const navigate = useNavigate();
  const handlers = useRef<ScreenHandlers>({});
  useEffect(() => {
    handlers.current = setup({ navigate });
    return () => {
      document.body.style.overflow = "";
    };
  }, [setup, navigate]);
  return handlers;
}
