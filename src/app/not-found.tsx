import { ShellStatus } from "@/components/ui/shell-status";

function NotFound() {
  return (
    <ShellStatus
      title="This route is not available yet."
      description="The platform shell is ready, but this destination has not been published."
    />
  );
}

export default NotFound;
