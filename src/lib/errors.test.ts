import { describe, expect, it } from "vitest";

import { AppError, isAppError } from "@/lib/errors";

describe("AppError", () => {
  it("classifies application errors", () => {
    const error = new AppError("Missing resource", { code: "NOT_FOUND" });

    expect(isAppError(error)).toBe(true);
    expect(error.code).toBe("NOT_FOUND");
    expect(error.message).toBe("Missing resource");
  });
});
