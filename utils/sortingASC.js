// Funktion til at sortere moduler efter titel
export const sortModulesByTitle = (modules) => {
    return modules.sort((a, b) => a.title.localeCompare(b.title));
  };
  