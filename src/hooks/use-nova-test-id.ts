export function useNovaTestId(basePath: string) {
  const generateTestId = (
    element: string,
    options?: { index?: number; variant?: string },
  ): string => {
    let id = `${basePath}-${element}`;
    if (options?.index !== undefined) id += `-${options.index}`;
    if (options?.variant) id += `-${options.variant}`;
    return id;
  };

  return { generateTestId, baseTestId: basePath };
}
