const NAME_REGEX = /^[A-Z]{3,10}$/;

export function sanitizeName(name: string): string {
  return name.replace(/[^a-zA-Z]/g, '').toUpperCase();
}

export function validateName(name: string): boolean {
  return NAME_REGEX.test(name);
}
