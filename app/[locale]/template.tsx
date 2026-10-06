import { ViewTransition, type ReactNode } from "react";

/**
 * Templates remount on every top-level navigation, so wrapping the page in a
 * ViewTransition gives each route an exit (blur up) and enter (rise in).
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
