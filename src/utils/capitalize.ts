export default function capitalize(value: string, notComplete?: boolean) {
  if (notComplete) {
    return value[0].toUpperCase() + value.substr(1);
  }

  const parts = value.split(' ');
  const formattedParts = parts.map(
    part => part[0].toUpperCase() + part.substr(1),
  );

  return formattedParts.join(' ');
}
