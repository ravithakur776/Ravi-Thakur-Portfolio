type ClientLogContext = Record<string, string | number | boolean | undefined>;

export function reportClientError(message: string, context?: ClientLogContext) {
  console.error({
    level: "error",
    message,
    context,
    timestamp: new Date().toISOString(),
  });
}
